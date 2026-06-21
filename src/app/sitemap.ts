import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://rahul-portfolio-sll1.vercel.app",
            lastModified: new Date(),
            priority: 1,
        },
    ];
}