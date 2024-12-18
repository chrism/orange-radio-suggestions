import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        "suggest-radio": resolve(__dirname, "src/suggest-radio.html"),
        "suggest-podcast": resolve(__dirname, "src/suggest-podcast.html"),
        "report-issue": resolve(__dirname, "src/report-issue.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
};
