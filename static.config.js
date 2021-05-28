import React from "react";
import path from "path";
import { getPosts, addSlug } from "./utils";
import moment from "moment";

// const githubBasePath = "ylc_website_v2";
const currentURL = "http://yukonliteracy.com/";
// const currentURL = "https://amazing-almeida-cc9291.netlify.app/"
// currentURL: "http://thelonious.life/",

const filterUpcoming = ({ events }) =>
  events.filter((event) => {
    return moment(event.date).isAfter(moment().subtract(24, "hours"));
  });

const getCommunityLinks = async () => {
  const _communityInitiatives = await getPosts("./src/_community-initiatives");
  const communityInitiatives = _communityInitiatives.map(addSlug);

  return communityInitiatives.map((init) => {
    return { slug: init.slug, title: init.title };
  });
};

export default {
  siteRoot: currentURL,
  // basePath: githubBasePath,
  // devBasePath: githubBasePath,
  paths: {
    // dist: "dist/" + githubBasePath,
  },
  getSiteData: async () => ({
    communityLinks: await getCommunityLinks(),
  }),
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Head>
      <link
        rel="icon"
        type="image/png"
        href="./src/assets/dark_flake.png"
      ></link>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async () => {
    //NEWS
    //posts
    const _posts = await getPosts("./src/_blog-posts");
    const sortedPosts = _posts.sort((a, b) => b.date - a.date);
    const posts = sortedPosts.map(addSlug);

    //events
    const _events = await getPosts("./src/_events");
    const filteredEvents = filterUpcoming({ events: _events });
    const sortedEvents = filteredEvents.sort((a, b) => a.date - b.date);
    const events = sortedEvents.map(addSlug);

    // HOMEPAGE
    //words
    const words = await getPosts("./src/_rotating-words");

    //announcements
    const announcements = await getPosts("./src/_announcements");

    //highlighted projects
    const highlightedProjects = await getPosts("./src/_highlighted-projects");

    // COMMUNITY
    //outreach
    const _outreachProjects = await getPosts("./src/_outreach-projects");
    const outreachProjects = _outreachProjects.map(addSlug);

    // community initiatives
    const _initiatives = await getPosts("./src/_community-initiatives");
    const initiatives = _initiatives.map(addSlug);

    // about community initiatives
    const aboutCommunityArray = await getPosts("./src/_about-community");
    const aboutCommunity = aboutCommunityArray?.[0];

    // OPPORTUNITIES
    //job opportunities
    const jobOpportunities = await getPosts("./src/_job-opportunities");

    // FINANCIAL
    // finacial statements
    const statements = await getPosts("./src/_statements");

    // ABOUT
    // staff
    const staff = await getPosts("./src/_staff");

    // board
    const board = await getPosts("./src/_board");

    // online tools
    // const onlineTools = await getPosts("./src/_online-tools");

    // FLC
    // family literacy center
    const flcArray = await getPosts("./src/_flc");
    const flc = flcArray?.[0];

    // imagination library
    const imaginationLibraryArray = await getPosts(
      "./src/_imagination-library"
    );
    const imaginationLibrary = imaginationLibraryArray?.[0];

    // financial literacy info
    const financialLiteracyArray = await getPosts("./src/_financial-literacy");
    const financialLiteracy = financialLiteracyArray?.[0];

    // supporters
    const supporters = await getPosts("./src/_supporters");

    // flc resources
    const familyResources = await getPosts("./src/_family-resources");

    // donate
    const donateArray = await getPosts("./src/_donate");
    const donate = donateArray?.[0];

    // AboutFoodSecurity
    // CommunityGarden
    // FoodSecurityPrograms
    // AboutFoodResources
    // Planting
    // Maintaining
    // Troubleshooting
    // Harvesting

    // FOOD
    const _aboutFoodArray = await getPosts("./src/_about-food-security");
    const aboutFoodSecurity = _aboutFoodArray?.[0];

    const _foodProgramsArray = await getPosts("./src/_food-security-programs");
    const foodSecurityPrograms = _foodProgramsArray?.[0];

    const _foodGardenArray = await getPosts("./src/_community-garden");
    const communityGarden = _foodGardenArray?.[0];

    const _aboutFoodResourcesArray = await getPosts(
      "./src/_food-resources-about"
    );
    const aboutFoodResources = _aboutFoodResourcesArray?.[0];

    const _planting = await getPosts("./src/_planting");
    const planting = _planting?.[0];

    const _maintaining = await getPosts("./src/_maintaining");
    const maintaining = _maintaining?.[0];

    const _troubleshooting = await getPosts("./src/_troubleshooting");
    const troubleshooting = _troubleshooting?.[0];

    const _harvesting = await getPosts("./src/_harvesting");
    const harvesting = _harvesting?.[0];

    // FOOD RESOURCES

    return [
      // HOME SECTION
      {
        path: "/",
        template: "src/Home",
        getData: async () => ({
          words,
          posts,
          events,
          announcements,
          highlightedProjects,
        }),
      },
      // DONATE SECTION
      {
        path: "/donate",
        template: "src/Donate",
        getData: async () => ({
          donate,
        }),
      },
      // CONTACT SECTION
      {
        path: "/contact",
        template: "src/Contact",
      },
      // ABOUT SECTIONS
      {
        path: "/about",
        template: "src/About",
      },
      {
        path: "/about/approach",
        template: "src/About/Approach",
      },
      {
        path: "/about/team",
        template: "src/About/Team",
        getData: async () => ({
          staff,
          board,
        }),
      },
      {
        path: "/about/supporters",
        template: "src/About/Supporters",
        getData: async () => ({
          supporters,
        }),
      },
      {
        path: "/about/opportunities",
        template: "src/About/Opportunities",
        getData: async () => ({
          jobOpportunities,
        }),
      },
      {
        path: "/about/statements",
        template: "src/About/Statements",
        getData: async () => ({
          statements,
        }),
      },
      // FAMILY SECTIONS
      {
        path: "/family",
        template: "src/Family",
      },
      {
        path: "/family/outreach",
        template: "src/Family/Outreach",
        getData: async () => ({
          outreachProjects,
        }),
      },
      {
        path: "/family/flc",
        template: "src/Family/FLC",
        getData: async () => ({
          flc,
        }),
      },
      {
        path: "/family/resources",
        template: "src/Family/Resources",
        getData: async () => ({
          familyResources,
        }),
      },
      {
        path: "/family/imagination",
        template: "src/Family/Imagine",
        getData: async () => ({
          imaginationLibrary,
        }),
      },
      // COMMUNITY SECTIONS
      {
        path: "/community",
        template: "src/Community",
        getData: async () => ({
          initiatives,
          aboutCommunity,
        }),
        children: initiatives.map((initiative) => {
          return {
            path: `/initiative/${initiative.slug}`,
            template: `src/Community/Initiative`,
            getData: async () => ({ initiative }),
          };
        }),
      },
      {
        path: "/community/financial_literacy",
        template: "src/Community/FinLit",
        getData: async () => ({
          financialLiteracy,
        }),
      },
      // FOOD SECTIONS
      {
        path: "/food",
        template: "src/Food",
        getData: async () => ({
          aboutFoodSecurity,
        }),
      },
      {
        path: "/food/programs",
        template: "src/Food/Programs",
        getData: async () => ({
          foodSecurityPrograms,
        }),
      },
      {
        path: "/food/garden",
        template: "src/Food/Garden",
        getData: async () => ({
          communityGarden,
        }),
      },
      {
        path: "/food/resources",
        template: "src/Food/Resources",
        getData: async () => ({
          aboutFoodResources,
        }),
      },
      // resources
      {
        path: "/food/resources/planting",
        template: "src/Food/Planting",
        getData: async () => ({
          planting,
        }),
      },
      {
        path: "/food/resources/maintaining",
        template: "src/Food/Maintaining",
        getData: async () => ({
          maintaining,
        }),
      },
      {
        path: "/food/resources/harvesting",
        template: "src/Food/Harvesting",
        getData: async () => ({
          harvesting,
        }),
      },
      {
        path: "/food/resources/troubleshooting",
        template: "src/Food/Troubleshooting",
        getData: async () => ({
          troubleshooting,
        }),
      },
      // NEWS SECTIONS
      {
        path: "/news",
        template: "src/Blog",
        getData: async () => ({
          posts,
        }),
        children: posts.map((post) => ({
          path: `/post/${post.slug}`,
          template: `src/Blog/Post`,
          getData: async () => ({ post }),
        })),
      },
      // EVENT SECTIONS
      {
        path: "/events",
        template: "src/Events",
        getData: async () => ({
          events,
        }),
        children: events.map((event) => ({
          path: `/event/${event.slug}`,
          template: `src/Events/Event`,
          getData: async () => ({ event }),
        })),
      },
      // STATEMENTS
      {
        path: "/annual_statements",
        template: "src/About/Statements",
      },
      // 404
      {
        path: "404",
        template: "src/pages/404",
      },
    ];
  },
  plugins: [
    // [
    //   require.resolve("react-static-plugin-source-filesystem"),
    //   {
    //     location: path.resolve("./src/pages"),
    //   },
    // ],
    // [
    //   "react-static-plugin-favicons",
    //   { inputFile: path.resolve(__dirname, "flake_favicon.png") },
    // ],
    "react-static-plugin-sitemap",
    "react-static-plugin-reach-router",
    "react-static-plugin-emotion",
    "react-static-plugin-styled-components",
  ],
};
