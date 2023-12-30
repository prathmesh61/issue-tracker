import { test, expect } from "@playwright/test";

test("authenticate as user", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.goto(
    "http://localhost:3000/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F"
  );
  await page.getByText("Email address").click();
  await page.getByLabel("Email address").click();
  await page.getByLabel("Email address").fill("admin@gmail.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("Admin@123");
  await page.getByRole("button", { name: "Continue" }).click();
  page.getByRole("link", { name: "+Bug-Manager" });
  page.getByText("HIGH");
  page.getByText("NORMAL");
  page.getByText("MEDIUM");
  page.getByRole("heading", { name: "Latest Issue" });
  page.getByText("Create new APi Endoint Tax");
  page.getByRole("heading", { name: "A simple, fast and scalable" });

  page.getByRole("main").getByRole("link", { name: "Dashbord" });
  page.getByText("© 2023, +Bug Manager");
});
