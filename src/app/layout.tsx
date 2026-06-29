
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Rahul Kumar | AI Engineer",
    description:
        "AI Engineer, LLM Developer, Full Stack Developer specializing in AI applications, intelligent automation, machine learning and modern web experiences.",

    keywords: [
        "Rahul Kumar",
        "AI Engineer",
        "LLM Developer",
        "Machine Learning",
        "Next.js Developer",
        "Full Stack Developer",
        "MERN Stack",
        "AI Agent Developer",
        "Portfolio",
    ],

    authors: [
        {
            name: "Rahul Kumar",
        },
    ],

    creator: "Rahul Kumar",

    openGraph: {
        title: "Rahul Kumar | AI Engineer",
        description:
            "AI Engineer, LLM Developer, Full Stack Developer",

        url: "https://rahul-portfolio-sll1.vercel.app",

        siteName: "Rahul Kumar Portfolio",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Rahul Kumar Portfolio",
            },
        ],

        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Rahul Kumar | AI Engineer",
        description:
            "AI Engineer, LLM Developer, Full Stack Developer",

        images: ["/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Rahul Kumar",
        url: "https://rahul-portfolio-sll1.vercel.app",
        image: "https://rahul-portfolio-sll1.vercel.app/og-image.png",
        jobTitle: "AI Engineer",
        description:
            "AI Engineer, LLM Developer, Full Stack Developer",

        sameAs: [
            "https://github.com/Rahul-codehub",
            "https://www.linkedin.com/in/rahul-kumar75",
        ],

        knowsAbout: [
            "Artificial Intelligence",
            "Machine Learning",
            "LLM Development",
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "TypeScript",
            "Python",
        ],
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <body>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            structuredData
                        ),
                    }}
                />

                {children}

            </body>
        </html>
    );
}

