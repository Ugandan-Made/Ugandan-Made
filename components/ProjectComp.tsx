/* eslint-disable @typescript-eslint/no-explicit-any */
// app/projects/Projects.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectComp({ projects }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedProjects, setDisplayedProjects] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const PROJECTS_PER_PAGE = 9;

  // Filter projects based on search term and stars
  const filteredProjects = projects.filter(
    (project: any) =>
      (project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      project.stars >= 15
  );

  // Load initial projects
  useEffect(() => {
    setDisplayedProjects(filteredProjects.slice(0, PROJECTS_PER_PAGE));
    setCurrentPage(1);
    setHasMore(filteredProjects.length > PROJECTS_PER_PAGE);
  }, [searchTerm, projects]);

  // Intersection Observer setup
  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading && hasMore) {
          loadMoreProjects();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [displayedProjects, isLoading, hasMore]);

  const loadMoreProjects = () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const startIndex = currentPage * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;

    setTimeout(() => {
      const newProjects = filteredProjects.slice(startIndex, endIndex);
      setDisplayedProjects((prev: any) => [...prev, ...newProjects]);
      setCurrentPage((prev) => prev + 1);
      setHasMore(endIndex < filteredProjects.length);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Ugandan Tech Projects
      </h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {displayedProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No projects found matching your search or meeting the minimum
          requirements.
        </p>
      )}
      {hasMore && (
        <div
          ref={loaderRef}
          className="flex justify-center items-center p-4 mt-8"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
          ) : (
            <span className="text-gray-500">Scroll for more projects...</span>
          )}
        </div>
      )}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Project Requirements</h2>
        <ul className="list-disc list-inside">
          <li>Created by Ugandan developers</li>
          <li>Minimum 15 stars on GitHub</li>
          <li>Open-source with a clear license</li>
          <li>Actively maintained</li>
          <li>Clear documentation and README</li>
          <li>Solves a real problem or provides value</li>
        </ul>
      </div>
    </div>
  );
}
