import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap:
            "https://rahul-portfolio-sll1.vercel.app/sitemap.xml",
    };
}