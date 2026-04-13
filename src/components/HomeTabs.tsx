"use client";

import { useEffect, useState } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

type TabId =
  | "overview"
  | "skills"
  | "projects"
  | "experience"
  | "credentials"
  | "contact";

const validTabs = new Set<TabId>([
  "overview",
  "skills",
  "projects",
  "experience",
  "credentials",
  "contact",
]);

function getTabFromHash(hash: string): TabId {
  const candidate = hash.replace("#", "") as TabId;
  return validTabs.has(candidate) ? candidate : "overview";
}

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  useEffect(() => {
    const syncTabFromHash = () => {
      setActiveTab(getTabFromHash(window.location.hash));
    };

    syncTabFromHash();
    window.addEventListener("hashchange", syncTabFromHash);

    return () => window.removeEventListener("hashchange", syncTabFromHash);
  }, []);

  return (
    <div>
      {activeTab === "overview" && (
        <div id="overview">
          <Hero />
          <About />
        </div>
      )}
      {activeTab === "skills" && <Skills />}
      {activeTab === "projects" && <Project />}
      {activeTab === "experience" && <Experience />}
      {activeTab === "credentials" && <Credentials />}
      {activeTab === "contact" && <Contact />}
    </div>
  );
};

export default HomeTabs;
