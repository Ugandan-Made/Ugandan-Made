import { Octokit } from "@octokit/rest";
import fs from "fs";
import path from "path";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function getGithubProjectsFromLocalReadme() {
  try {
    // Read local README.md file
    const readmePath = path.join(process.cwd(), "README.md");
    const readmeContent = fs.readFileSync(readmePath, "utf-8");

    // Use regex to extract GitHub links
    const githubRegex =
      /https:\/\/github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-_.]+/g;
    const links = readmeContent.match(githubRegex) || [];

    console.log("Found links:", links); // Debug log

    // Fetch details for each GitHub repository
    const projects = await Promise.all(
      links.map(async (link) => {
        try {
          const [repoOwner, repoName] = link
            .replace("https://github.com/", "")
            .split("/")
            .filter(Boolean);

          // console.log("Processing:", repoOwner, repoName); // Debug log

          if (!repoOwner || !repoName) {
            return null;
          }

          const repoResponse = await octokit.repos.get({
            owner: repoOwner,
            repo: repoName,
          });

          // console.log("Repo details:", repoResponse.data); // Debug log

          // Get repository's social card image
          // const socialPreviewUrl = `https://opengraph.githubassets.com/1/${repoOwner}/${repoName}`;

          // Alternative image URLs in case social preview isn't available
          const fallbackImage = repoResponse.data.owner.avatar_url;

          return {
            id: repoResponse.data.id.toString(),
            name: repoResponse.data.name,
            description: repoResponse.data.description,
            stars: repoResponse.data.stargazers_count,
            url: repoResponse.data.html_url,
            image: fallbackImage,
          };
        } catch (error) {
          console.error(`Error fetching repo details for ${link}:`, error);
          return null;
        }
      })
    );

    // Filter out null results and duplicates
    const filteredProjects = projects
      .filter(
        (project): project is NonNullable<typeof project> => project !== null
      )
      .filter(
        (project, index, self) =>
          index === self.findIndex((p) => p.id === project.id)
      );

    // console.log("Final projects:", filteredProjects); // Debug log

    return filteredProjects;
  } catch (error) {
    console.error("Error processing README:", error);
    throw error;
  }
}
