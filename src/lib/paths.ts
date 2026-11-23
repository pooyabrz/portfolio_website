export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://pooyabrz.github.io/portfolio_website").replace(/\/$/, "");
export const asset = (path: string) => `${basePath}/${path.replace(/^\//, "")}`;
export const canonical = (path: string) => `${siteUrl}${path === "/" ? "/" : path.replace(/\/$/, "") + "/"}`;
