import { NextResponse } from "next/server";

export async function GET() {

    try {

        const res = await fetch(
            "https://api.github.com/users/rahul-codehub/repos?sort=updated&per_page=20",
            {
                headers: {
                    Accept: "application/vnd.github+json",

                    ...(process.env.GITHUB_TOKEN && {
                        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    }),
                },

                next: {
                    revalidate: 3600,
                },
            }
        );

        if (!res.ok) {

            throw new Error(
                `GitHub API Error: ${res.status}`
            );

        }

        const repos = await res.json();

        const filteredRepos = repos
            .filter(
                (repo: any) =>
                    !repo.fork &&
                    !repo.private
            )
            .map((repo: any) => ({
                id: repo.id,
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                homepage: repo.homepage,
                language: repo.language,
                stargazers_count:
                    repo.stargazers_count,
                topics: repo.topics || [],
                updated_at: repo.updated_at,
            }));

        return NextResponse.json(
            filteredRepos
        );

    } catch (error) {

        console.error(
            "GitHub API Error:",
            error
        );

        return NextResponse.json(
            {
                error:
                    "Failed to fetch repositories",
            },
            {
                status: 500,
            }
        );

    }

}