import { getGithubProjectsFromLocalReadme } from "../utils/github";
import ProjectComp from "@/components/ProjectComp";

export default async function ProjectsPage() {
  const projects = await getGithubProjectsFromLocalReadme();

  return <ProjectComp projects={projects} />;
}
