import { test } from "@playwright/test";
const WEB_URL = "http://localhost:3000/";

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
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
});

test("home screen after sign in", async ({ page }) => {
  // after page is signed in.
  await page.goto(WEB_URL);
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
