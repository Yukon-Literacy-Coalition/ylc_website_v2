import React, { useEffect } from "react";
import CMS from "netlify-cms-app";
import config from "./config";
import cloudinary from "netlify-cms-media-library-cloudinary";

import { Widget as IdWidget } from "@ncwidgets/id";

import { withRouteData } from "react-static";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme, Global } from "../theme";
import { StyleSheetManager } from "styled-components";
import { MarginedContainer } from "../shared/Layout";
import styled from "@emotion/styled";

// IMPORTANT NOTE
// Be sure to NOT import componenent with ROUTE data (i.e. the HOC).
import { Post } from "../Blog/Post";
import { Event } from "../Events/Event";
import { OutreachProject } from "../Family/Outreach";
import Announcement from "../Home/Announcement";
import { Initiative } from "../Community/Initiative";
import { StaffMember } from "../About/Team";
import ProjectHighlight from "../shared/ProjectHighlight";
import FLC from "../Family/FLC";
import { AboutFamily } from "../Family";
import { Imagine } from "../Family/Imagine";
import { AboutCommunity } from "../Community";
import { Donate } from "../Donate";
import { FinLit } from "../Community/FinLit";
import { SupportersLogos } from "../About/Supporters";
// Food
import { AboutFoodSecurity } from "../Food";
import { CommunityGarden } from "../Food/Garden";
import { FoodSecurityPrograms } from "../Food/Programs";
import { AboutFoodResources } from "../Food/Resources";
import { Planting } from "../Food/Planting";
import { Maintaining } from "../Food/Maintaining";
import { Troubleshooting } from "../Food/Troubleshooting";
import { Harvesting } from "../Food/Harvesting";
// Kids
import { AboutForKids } from "../Kids";
import { KidsProjectList } from "../Kids/KidsProjectList";
import { KidsProject } from "../Kids/KidsProject";

const ComponentContainer = styled.div`
  padding-top: 20px;
`;

if (typeof window !== "undefined") {
  window.CMS_MANUAL_INIT = true;
}

const DataAndStyleInjection = (
  previewProps,
  Component,
  dataName,
  isContained
) => {
  useEffect(() => {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      const { document } = previewProps;
      const script = document.createElement("script");
      script.src = "https://unpkg.com/alpinejs@2.5.0/dist/alpine.js";
      document.head.appendChild(script);
      const link1 = document.createElement("link");
      link1.href =
        "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap";
      link1.rel = "stylesheet";
      document.head.appendChild(link1);
      const link2 = document.createElement("link");
      link2.href =
        "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap";
      link2.rel = "stylesheet";
      document.head.appendChild(link2);
    }
  }, [previewProps]);

  if (typeof document !== "undefined" && typeof window !== "undefined") {
    const iframe =
      typeof document !== "undefined"
        ? document.getElementsByTagName("iframe")[0]
        : {};

    const iframeHead = iframe?.contentDocument?.head || "noIframeHead";
    const cache = createCache({ container: iframeHead });
    const { entry } = previewProps;

    const data = { [dataName]: entry.get("data").toJS() };
    const ContainedComponent = ({ data }) => {
      if (isContained) {
        return (
          <MarginedContainer>
            <Component {...data} isCMS={true} />
          </MarginedContainer>
        );
      } else {
        return <Component {...data} isCMS={true} />;
      }
    };

    return (
      <StyleSheetManager target={iframeHead}>
        <CacheProvider value={cache}>
          <Global />
          <ThemeProvider theme={theme}>
            <ComponentContainer>
              <ContainedComponent data={data} />
            </ComponentContainer>
          </ThemeProvider>
        </CacheProvider>
      </StyleSheetManager>
    );
  }
};

const NetlifyCMS = (props) => {
  useEffect(() => {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      CMS.registerMediaLibrary(cloudinary);
      CMS.registerPreviewTemplate("events", (previewProps) =>
        DataAndStyleInjection(previewProps, Event, "event")
      );
      CMS.registerPreviewTemplate("blog", (previewProps) =>
        DataAndStyleInjection(previewProps, Post, "post")
      );
      CMS.registerPreviewTemplate("outreach-projects", (previewProps) =>
        DataAndStyleInjection(previewProps, OutreachProject, "project")
      );
      CMS.registerPreviewTemplate("announcements", (previewProps) =>
        DataAndStyleInjection(previewProps, Announcement, "announcement")
      );
      CMS.registerPreviewTemplate("communityInitiatives", (previewProps) =>
        DataAndStyleInjection(previewProps, Initiative, "initiative")
      );
      CMS.registerPreviewTemplate("staff", (previewProps) =>
        DataAndStyleInjection(previewProps, StaffMember, "staff")
      );
      CMS.registerPreviewTemplate("highlightedProjects", (previewProps) =>
        DataAndStyleInjection(previewProps, ProjectHighlight, "project", true)
      );
      CMS.registerPreviewTemplate("onlineTools", (previewProps) =>
        DataAndStyleInjection(previewProps, ProjectHighlight, "project", true)
      );
      CMS.registerPreviewTemplate("flc", (previewProps) =>
        DataAndStyleInjection(previewProps, FLC, "flc")
      );
      CMS.registerPreviewTemplate("imaginationLibrary", (previewProps) =>
        DataAndStyleInjection(previewProps, Imagine, "imaginationLibrary")
      );
      CMS.registerPreviewTemplate("aboutCommunity", (previewProps) =>
        DataAndStyleInjection(previewProps, AboutCommunity, "aboutCommunity")
      );
      CMS.registerPreviewTemplate("donate", (previewProps) =>
        DataAndStyleInjection(previewProps, Donate, "donate")
      );
      CMS.registerPreviewTemplate("financialLiteracy", (previewProps) =>
        DataAndStyleInjection(previewProps, FinLit, "financialLiteracy")
      );
      CMS.registerPreviewTemplate("supporters", (previewProps) =>
        DataAndStyleInjection(previewProps, SupportersLogos, "supObj")
      );
      CMS.registerPreviewTemplate("familyResources", (previewProps) =>
        DataAndStyleInjection(previewProps, ProjectHighlight, "project", true)
      );
      // FOOD THINGS
      CMS.registerPreviewTemplate("aboutFoodSecurity", (previewProps) =>
        DataAndStyleInjection(
          previewProps,
          AboutFoodSecurity,
          "aboutFoodSecurity"
        )
      );
      CMS.registerPreviewTemplate("communityGarden", (previewProps) =>
        DataAndStyleInjection(previewProps, CommunityGarden, "communityGarden")
      );
      CMS.registerPreviewTemplate("foodSecurityPrograms", (previewProps) =>
        DataAndStyleInjection(
          previewProps,
          FoodSecurityPrograms,
          "foodSecurityPrograms"
        )
      );
      CMS.registerPreviewTemplate("aboutFoodResources", (previewProps) =>
        DataAndStyleInjection(
          previewProps,
          AboutFoodResources,
          "aboutFoodResources"
        )
      );
      CMS.registerPreviewTemplate("planting", (previewProps) =>
        DataAndStyleInjection(previewProps, Planting, "planting")
      );
      CMS.registerPreviewTemplate("maintaining", (previewProps) =>
        DataAndStyleInjection(previewProps, Maintaining, "maintaining")
      );
      CMS.registerPreviewTemplate("troubleshooting", (previewProps) =>
        DataAndStyleInjection(previewProps, Troubleshooting, "troubleshooting")
      );
      CMS.registerPreviewTemplate("harvesting", (previewProps) =>
        DataAndStyleInjection(previewProps, Harvesting, "harvesting")
      );
      CMS.registerPreviewTemplate("aboutFamily", (previewProps) =>
        DataAndStyleInjection(previewProps, AboutFamily, "aboutFamily")
      );
      // KIDS THINGS
      CMS.registerPreviewTemplate("aboutForKids", (previewProps) =>
        DataAndStyleInjection(previewProps, AboutForKids, "aboutForKids")
      );
      // ABOUT PROJECTS
      CMS.registerPreviewTemplate("aboutStorytime", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProjectList, "about")
      );
      CMS.registerPreviewTemplate("aboutSongs", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProjectList, "about")
      );
      CMS.registerPreviewTemplate("aboutScience", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProjectList, "about")
      );
      CMS.registerPreviewTemplate("aboutKidsFood", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProjectList, "about")
      );
      CMS.registerPreviewTemplate("aboutCraft", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProjectList, "about")
      );
      CMS.registerPreviewTemplate("aboutCaregiver", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProjectList, "about")
      );
      // INDIVIDUAL KIDS PROJECT
      CMS.registerPreviewTemplate("storytime", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProject, "data")
      );
      CMS.registerPreviewTemplate("songs", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProject, "data")
      );
      CMS.registerPreviewTemplate("science", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProject, "data")
      );
      CMS.registerPreviewTemplate("kidsFood", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProject, "data")
      );
      CMS.registerPreviewTemplate("craft", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProject, "data")
      );
      CMS.registerPreviewTemplate("caregiver", (previewProps) =>
        DataAndStyleInjection(previewProps, KidsProject, "data")
      );

      CMS.registerWidget(IdWidget);
      CMS.init({ config });
    }
  }, []);

  return <div id="nc-root" />;
};

export default withRouteData(NetlifyCMS);

// ReactDOM.render(<NetlifyApp />, document.getElementById("nc-root"));
