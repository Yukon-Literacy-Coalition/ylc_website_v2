import React from "react";
import { withRouteData } from "react-static";
import Hero from "./Hero";
import Upcoming from "./Upcoming";
import Statement from "./Statement";
import Announcement from "./Announcement";
import RecentPosts from "./RecentPosts";
import Projects from "./Projects";

const Home = ({ words, events, posts, announcements, highlightedProjects }) => {
  const wordsString = words?.[0]?.words;
  const wordsArr = wordsString.split(",").map((i) => i.trim());
  const displayAnnc = announcements.some((annc) => annc?.displayAnnouncement);
  const currentAnnc = announcements.find((annc) => annc?.displayAnnouncement);
  return (
    <div>
      <Hero words={wordsArr} />
      <Statement />
      {displayAnnc && <Announcement announcement={currentAnnc} />}
      {!!events?.length && <Upcoming events={events} />}
      <RecentPosts posts={posts} />
      <Projects projects={highlightedProjects} />
    </div>
  );
};

// const ExportedHome = document !== "undefined" && window !== "undefined" ? Home : <div />

export default withRouteData(Home);
