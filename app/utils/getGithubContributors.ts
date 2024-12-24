/* eslint-disable @typescript-eslint/no-explicit-any */

async function getGithubContributors() {
  const repoOwner = "isiagi"; // Replace with the repository owner
  const repoName = "made-in-uganda"; // Replace with the repository name
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;

  try {
    const response = await fetch(url, {
      //   headers: {
      //     // Include a GitHub token here if you face rate limits
      //     // Authorization: `Bearer YOUR_GITHUB_TOKEN`,
      //   },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch contributors: ${response.statusText}`);
    }

    const contributors = await response.json();
    return contributors.map((contributor: any) => ({
      id: contributor.id,
      login: contributor.login,
      avatar_url: contributor.avatar_url,
      contributions: contributor.contributions,
      html_url: contributor.html_url,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default getGithubContributors;
