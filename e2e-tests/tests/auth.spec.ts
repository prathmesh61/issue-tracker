import { test, expect } from "@playwright/test";

const WEB_URL = "http://localhost:3000/";
test("authenticate as user", async ({ page }) => {
  await page.goto(WEB_URL);
  await page.goto(
    "http://localhost:3000/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F"
  );
  page.getByText("Sign in");
  await page.getByText("Email address").click();
  await page.getByLabel("Email address").click();

  await page.getByLabel("Email address").fill("admin@gmail.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();

  await page.getByLabel("Password", { exact: true }).fill("Admin@123");
  // this button navigate to the home page with valid user
  await page.getByRole("button", { name: "Continue" }).click();
  // after page is signed in.
  page.getByRole("link", { name: "+Bug-Manager" });
});
