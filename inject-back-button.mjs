import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs"
import { join } from "node:path"

const MARKER = "btn-regresar"
const TARGET = '<div class="left sidebar">'
const BTN =
  '<a href="/" class="btn-regresar" data-router-ignore="true">&larr; Volver a DroneOps</a>'

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else if (p.endsWith(".html")) {
      const html = readFileSync(p, "utf8")
      if (html.includes(TARGET) && !html.includes(BTN)) {
        writeFileSync(p, html.replace(TARGET, TARGET + BTN))
      }
    }
  }
}

walk(process.argv[2] ?? "public")