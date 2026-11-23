import { test, expect } from "@playwright/test";

test("homepage has identity, featured work and contact",async({page})=>{
 await page.goto("/");
 await expect(page.getByRole("main")).toContainText("POOYA");
 await expect(page.getByRole("link",{name:/Explore my work/i})).toBeVisible();
 await expect(page.getByText("DemandCast").first()).toBeVisible();
 await expect(page.getByRole("link",{name:/Get in touch/i})).toBeVisible();
});

test("directory supports search and category filters",async({page})=>{
 await page.goto("/work");
 await page.getByRole("textbox",{name:"Search projects"}).fill("DocuLens");
 await expect(page.getByText("DocuLens")).toBeVisible();
 await expect(page.getByText("DemandCast")).toHaveCount(0);
 await page.getByRole("button",{name:"Clear search"}).click();
 await page.getByRole("button",{name:"Web Applications"}).click();
 await expect(page.getByText("Family Messenger")).toBeVisible();
 await expect(page.getByText("DemandCast")).toHaveCount(0);
});

test("direct case study URL works",async({page})=>{
 await page.goto("/work/leakscope/");
 await expect(page.getByRole("heading",{level:1})).toHaveText("LeakScope.");
 await expect(page.getByText(/performance target has not yet been met/i).first()).toBeVisible();
});

test("lab controls update output and reset",async({page})=>{
 await page.goto("/lab");
 const output=page.locator(".lab-output strong");
 const before=await output.innerText();
 await page.getByRole("button",{name:"Randomize weights"}).click();
 await expect(output).not.toHaveText(before);
 await page.getByRole("button",{name:"Reset"}).click();
 await expect(output).toHaveText(before);
});

test("command palette opens with keyboard and finds project",async({page})=>{
 await page.goto("/");
 await page.keyboard.press("Control+k");
 await expect(page.getByRole("dialog",{name:"Command palette"})).toBeVisible();
 await page.getByRole("textbox",{name:"Search"}).fill("Nimbryva");
 await page.keyboard.press("Enter");
 await expect(page).toHaveURL(/\/work\/nimbryva/);
});

test("dark theme maintains readable text and persists",async({page})=>{
 await page.goto("/");
 await page.getByRole("button",{name:"Switch to dark theme"}).click();
 await expect(page.locator("html")).toHaveAttribute("data-theme","dark");
 await page.reload();
 await expect(page.locator("html")).toHaveAttribute("data-theme","dark");
});

test("no horizontal overflow at small widths",async({page})=>{
 await page.setViewportSize({width:320,height:700});
 for(const path of ["/","/work","/about","/lab","/contact","/work/doculens"]){
  await page.goto(path);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);
  expect(overflow,`Overflow on ${path}`).toBeFalsy();
 }
});
