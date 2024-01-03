import { test, expect } from "@playwright/test";
const WEB_URL = "http://localhost:3000/";

test("should dashbord page visible", async ({ page }) => {
  await page.goto(`${WEB_URL}dashbord`);

  await expect(page.getByText("-Filter,Sort")).toBeVisible();
  await expect(page.getByRole("link", { name: "All" })).toBeVisible();
  await expect(page.getByRole("link", { name: "HIGH" })).toBeVisible();
  await expect(page.getByRole("link", { name: "NORMAL" })).toBeVisible();
  await expect(page.getByRole("link", { name: "MEDIUM" })).toBeVisible();

  await expect(page.getByText("Create new APi Endoint Tax")).toBeVisible();
  await expect(page.getByText("Products in Carousel #1204")).toBeVisible();
});
