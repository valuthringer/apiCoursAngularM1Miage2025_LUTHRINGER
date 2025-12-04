import fs from "fs"
import path from "path"

const out = ".vercel/output"

// crée le dossier
fs.mkdirSync(out, { recursive: true })

// config.json
fs.writeFileSync(
  path.join(out, "config.json"),
  JSON.stringify({
    version: 3,
    routes: [
      { "src": "/(.*)", "dest": "/server.js" }
    ]
  })
)
