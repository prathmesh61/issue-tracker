import { test, expect } from "@playwright/test";
const WEB_URL = "http://localhost:3000";
test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await page.goto(WEB_URL);
  await page.goto(
    "http://localhost:3000/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F"
  );
  await page.getByLabel("Email address").click();
  await page.getByLabel("Email address").fill("admin@gmail.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("Admin@123");
  await page.getByRole("button", { name: "Continue" }).click();
});
test("test", async ({ page }) => {
  await page.goto(WEB_URL);
  page.getByRole("link", { name: "+Bug-Manager" });
  await page.getByRole("link", { name: "Dashbord" }).click();

  page.getByRole("link", { name: "+Bug-Manager" });
  page.getByText("-Filter,Sort Issue Solve Them.");
  page.getByRole("link", { name: "All" });
  page.getByRole("link", { name: "HIGH" });
  page.getByRole("link", { name: "NORMAL" });
  page.getByRole("link", { name: "MEDIUM" });
  page.getByText("Create new APi Endoint Tax");
  page.locator("h3").filter({ hasText: "Create new APi Endoint Tax" });
});
