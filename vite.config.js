import path from "path";
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
  //establece la base que utiliza github pages, para que la aplicación funcione correctamente.
  base: "/notes-bootstrap/",
  //resolve: {
    //alias: {
    //  '/pages': path.resolve(__dirname, '/pages'),
    //},
    //alias: [
    //  {
    //      find: '/pages',
    //      replacement: fileURLToPath(new URL('pages', import.meta.url)),
    //  },
  //],
  //},
  build: {
    //cambia el directorio de build a docs, para que github pages funcione correctamente.
    outDir: "docs",
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('index.html', import.meta.url)),
        pages: fileURLToPath(
          new URL('pages/grid/columnas1.html', import.meta.url)
        ),
      },
    },
  }
});