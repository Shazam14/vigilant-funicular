import { defineConfig } from "@playwright/test"

const BASE_URL = process.env.BASE_URL ?? "https://wiki.kedcoforex.com"

export default defineConfig({
  testDir: "./tests",
  timeout: 15000,
  use: {
    baseURL: BASE_URL,
    // don't load images — faster checks
    extraHTTPHeaders: { Accept: "text/html" },
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium", headless: true },
    },
  ],
})
