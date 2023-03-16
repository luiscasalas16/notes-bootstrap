import glob from "glob";
import { resolve } from 'path'
import path from 'node:path';
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

let pages = (Object.fromEntries(
  glob.sync('pages/**/*.html').map(file => [
    // This remove `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative(
      'pages',
      file.slice(0, file.length - path.extname(file).length)
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, import.meta.url))
  ])
))

export default defineConfig({
  //establece la base que utiliza github pages, para que la aplicación funcione correctamente.
  base: "/notes-bootstrap/",
  build: {
    //cambia el directorio de build a docs, para que github pages funcione correctamente.
    outDir: "docs",
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('index.html', import.meta.url)),
        ...pages
      },
    },
  }
});