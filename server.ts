import express from "express";
import path from "path";
import fs from "fs";
import AdmZip from "adm-zip";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Serve API Route for downloading the entire project source code as a ZIP
  app.get("/api/download-zip", (req, res) => {
    try {
      console.log("Generating project ZIP file for download...");
      const zip = new AdmZip();
      const rootDir = process.cwd();

      // Recursive directory walker
      const addFilesRecursively = (dir: string, relativePath = "") => {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const relItemPath = relativePath ? `${relativePath}/${item}` : item;

          // Exclude bulky or sensitive files/folders
          if (
            item === "node_modules" ||
            item === "dist" ||
            item === ".git" ||
            item === ".env" ||
            item === ".dev.pid" ||
            item === "tmp" ||
            item === "package-lock.json" // omit package-lock to keep zip smaller, npm i will recreate it
          ) {
            continue;
          }

          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            addFilesRecursively(fullPath, relItemPath);
          } else {
            // addLocalFile puts the file in the relative path within the zip archive
            zip.addLocalFile(fullPath, relativePath);
          }
        }
      };

      addFilesRecursively(rootDir);

      const zipBuffer = zip.toBuffer();

      res.setHeader("Content-Disposition", "attachment; filename=portfolio-website.zip");
      res.setHeader("Content-Type", "application/zip");
      res.setHeader("Content-Length", zipBuffer.length);
      res.send(zipBuffer);
      console.log("ZIP file delivered successfully!");
    } catch (error: any) {
      console.error("Failed to package ZIP:", error);
      res.status(500).json({ error: "Could not package the source code into a ZIP.", details: error.message });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
