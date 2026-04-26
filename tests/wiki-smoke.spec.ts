import { test, expect } from "@playwright/test"

// All 42 wiki pages — Quartz slugs: spaces→- &→-and- case preserved
const PAGES = [
  // Home
  { label: "Home", path: "/" },

  // Features
  { label: "Features index", path: "/Features/" },
  { label: "EOD Reports", path: "/Features/EOD-Reports" },
  { label: "Shift Management", path: "/Features/Shift-Management" },
  { label: "Currency Exchange", path: "/Features/Currency-Exchange" },
  { label: "Transaction Log", path: "/Features/Transaction-Log" },
  { label: "Dashboard", path: "/Features/Dashboard" },
  { label: "Stock Summary (feature)", path: "/Features/Stock-Summary" },
  { label: "Replenishment", path: "/Features/Replenishment" },
  { label: "Terminal & Branch Select", path: "/Features/Terminal--and--Branch-Select" },
  { label: "Date Override", path: "/Features/Date-Override" },

  // Business Rules
  { label: "Business Rules index", path: "/Business-Rules/" },
  { label: "THAN Calculation", path: "/Business-Rules/THAN-Calculation" },
  { label: "Carry-In Logic", path: "/Business-Rules/Carry-In-Logic" },
  { label: "Averaging", path: "/Business-Rules/Averaging" },
  { label: "Replenishment Rules", path: "/Business-Rules/Replenishment-Rules" },

  // Roles
  { label: "Roles index", path: "/Roles/" },
  { label: "Admin", path: "/Roles/Admin" },
  { label: "Cashier", path: "/Roles/Cashier" },
  { label: "Rider", path: "/Roles/Rider" },
  { label: "Dev", path: "/Roles/Dev" },

  // Branches
  { label: "Branches index", path: "/Branches/" },
  { label: "Branch List", path: "/Branches/Branch-List" },
  { label: "MAIN branch", path: "/Branches/MAIN" },
  { label: "CTS branch", path: "/Branches/CTS" },
  { label: "BAI branch", path: "/Branches/BAI" },
  { label: "SM branch", path: "/Branches/SM" },
  { label: "GOLD branch", path: "/Branches/GOLD" },
  { label: "JMALL branch", path: "/Branches/JMALL" },
  { label: "ESY2 branch", path: "/Branches/ESY2" },
  { label: "DATAG branch", path: "/Branches/DATAG" },
  { label: "MOBO branch", path: "/Branches/MOBO" },

  // Tech Stack
  { label: "Tech Stack index", path: "/Tech-Stack/" },
  { label: "Frontend", path: "/Tech-Stack/Frontend" },
  { label: "Backend", path: "/Tech-Stack/Backend" },
  { label: "Database", path: "/Tech-Stack/Database" },
  { label: "Testing", path: "/Tech-Stack/Testing" },
  { label: "Deployment", path: "/Tech-Stack/Deployment" },
  { label: "Security", path: "/Tech-Stack/Security" },

  // Data
  { label: "Data index", path: "/Data/" },
  { label: "Daily Positions", path: "/Data/Daily-Positions" },
  { label: "Stock Summary (data)", path: "/Data/Stock-Summary" },
]

for (const { label, path } of PAGES) {
  test(`page loads: ${label}`, async ({ page }) => {
    const response = await page.goto(path)
    // Must not 404
    expect(response?.status(), `${label} returned ${response?.status()}`).not.toBe(404)
    // Main article area must exist
    await expect(page.locator("article")).toBeVisible()
  })
}

test("home page has expected title", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/Kedco FX Wiki/)
})

test("graph view renders on home page", async ({ page }) => {
  await page.goto("/")
  // Quartz renders the graph canvas inside #graph-container
  const graph = page.locator("#graph-container")
  await expect(graph).toBeVisible({ timeout: 8000 })
})

test("internal link on Branch List navigates without 404", async ({ page }) => {
  await page.goto("/Branches/Branch-List")
  // Click the Terminal & Branch Select wikilink
  const link = page.locator('a[href*="Terminal"]').first()
  const [response] = await Promise.all([
    page.waitForResponse((r) => r.url().includes("Terminal")),
    link.click(),
  ])
  expect(response.status()).not.toBe(404)
  await expect(page.locator("article")).toBeVisible()
})
