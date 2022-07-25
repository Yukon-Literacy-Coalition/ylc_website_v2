import React from "react";
import path from "path";
import { getPosts, addSlug } from "./utils";
import moment from "moment";
require("dotenv").config();
// const githubBasePath = "ylc_website_v2";
const currentURL = "https://yukonliteracy.com/";
// const currentURL = "https://amazing-almeida-cc9291.netlify.app/"
// currentURL: "http://thelonious.life/",

const filterUpcoming = ({ events }) =>
  events.filter((event) => {
    // check for endDate, but take startDate otherwise
    let relevantDate = event.endDate || event.startDate;
    return moment(relevantDate).isAfter(moment().subtract(24, "hours"));
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
    const sortedEvents = filteredEvents.sort(
      (a, b) => a.startDate - b.startDate
    );
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

    // FAMILY
    // AboutFamily
    const aboutFamilyArray = await getPosts("./src/_about-family-literacy");
    const aboutFamily = aboutFamilyArray?.[0];

    // FLC
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

    // FOOD RESOURCES

    const aboutFoodResources = _aboutFoodResourcesArray?.[0];

    const _planting = await getPosts("./src/_planting");
    const planting = _planting?.[0];

    const _maintaining = await getPosts("./src/_maintaining");
    const maintaining = _maintaining?.[0];

    const _troubleshooting = await getPosts("./src/_troubleshooting");
    const troubleshooting = _troubleshooting?.[0];

    const _harvesting = await getPosts("./src/_harvesting");
    const harvesting = _harvesting?.[0];

    // FOR KIDS

    const addLocalLink = (x, prelude) => {
      x.localLink = prelude + x?.slug;
      return x;
    };

    const _aboutForKids = await getPosts("./src/_about-for-kids");
    const aboutForKids = _aboutForKids?.[0];

    const _aboutStorytime = await getPosts("./src/_about-storytime");
    const aboutStorytime = _aboutStorytime?.[0];
    const _storytime = await getPosts("./src/_storytime");
    const storytime = _storytime
      .map(addSlug)
      .map((x) => addLocalLink(x, "/kids/storytime/content/"));

    const _aboutSongs = await getPosts("./src/_about-songs");
    const aboutSongs = _aboutSongs?.[0];
    const _songs = await getPosts("./src/_songs");
    const songs = _songs
      .map(addSlug)
      .map((x) => addLocalLink(x, "/kids/songs/content/"));

    const _aboutScience = await getPosts("./src/_about-science");
    const aboutScience = _aboutScience?.[0];
    const _science = await getPosts("./src/_science");
    const science = _science
      .map(addSlug)
      .map((x) => addLocalLink(x, "/kids/science/content/"));

    const _aboutKidsFood = await getPosts("./src/_about-kids-food");
    const aboutKidsFood = _aboutKidsFood?.[0];
    const _kidsFood = await getPosts("./src/_kids-food");
    const kidsFood = _kidsFood
      .map(addSlug)
      .map((x) => addLocalLink(x, "/kids/kids_food/content/"));

    const _aboutCraft = await getPosts("./src/_about-craft");
    const aboutCraft = _aboutCraft?.[0];
    const _craft = await getPosts("./src/_craft");
    const craft = _craft
      .map(addSlug)
      .map((x) => addLocalLink(x, "/kids/craft/content/"));

    const _aboutCaregiver = await getPosts("./src/_about-caregiver");
    const aboutCaregiver = _aboutCaregiver?.[0];
    const _caregiver = await getPosts("./src/_caregiver");
    const caregiver = _caregiver
      .map(addSlug)
      .map((x) => addLocalLink(x, "/kids/caregiver/content/"));

    // LITTLE LIBRARIES
    const libraries = await getPosts("./src/_little-libraries");

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
        getData: async () => ({
          aboutFamily,
        }),
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
      // FOOD RESOURCES
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
      // FOR KIDS
      {
        path: "/kids",
        template: "src/Kids",
        getData: async () => ({
          aboutForKids,
        }),
      },
      {
        path: "/kids/storytime",
        template: "src/Kids/KidsProjectList",
        getData: async () => ({
          about: aboutStorytime,
          projects: storytime,
        }),
        children: storytime.map((element) => {
          return {
            path: `/content/${element.slug}`,
            template: `src/Kids/KidsProject`,
            getData: async () => ({
              data: { ...element, localTitle: "Storytime" },
            }),
          };
        }),
      },
      {
        path: "/kids/songs",
        template: "src/Kids/KidsProjectList",
        getData: async () => ({
          about: aboutSongs,
          projects: songs,
        }),
        children: songs.map((element) => {
          return {
            path: `/content/${element.slug}`,
            template: `src/Kids/KidsProject`,
            getData: async () => ({
              data: { ...element, localTitle: "Songs and Rhymes" },
            }),
          };
        }),
      },
      {
        path: "/kids/science",
        template: "src/Kids/KidsProjectList",
        getData: async () => ({
          about: aboutScience,
          projects: science,
        }),
        children: science.map((element) => {
          return {
            path: `/content/${element.slug}`,
            template: `src/Kids/KidsProject`,
            getData: async () => ({
              data: { ...element, localTitle: "Science Magic" },
            }),
          };
        }),
      },
      {
        path: "/kids/kids_food",
        template: "src/Kids/KidsProjectList",
        getData: async () => ({
          about: aboutKidsFood,
          projects: kidsFood,
        }),
        children: kidsFood.map((element) => {
          return {
            path: `/content/${element.slug}`,
            template: `src/Kids/KidsProject`,
            getData: async () => ({
              data: { ...element, localTitle: "Fun With Food" },
            }),
          };
        }),
      },
      {
        path: "/kids/craft",
        template: "src/Kids/KidsProjectList",
        getData: async () => ({
          about: aboutCraft,
          projects: craft,
        }),
        children: craft.map((element) => {
          return {
            path: `/content/${element.slug}`,
            template: `src/Kids/KidsProject`,
            getData: async () => ({
              data: { ...element, localTitle: "1,2,3 Craft with Me" },
            }),
          };
        }),
      },
      {
        path: "/kids/caregiver",
        template: "src/Kids/KidsProjectList",
        getData: async () => ({
          about: aboutCaregiver,
          projects: caregiver,
        }),
        children: caregiver.map((element) => {
          return {
            path: `/content/${element.slug}`,
            template: `src/Kids/KidsProject`,
            getData: async () => ({
              data: { ...element, localTitle: "Caregiver Resources" },
            }),
          };
        }),
      },
      // NEWS SECTIONS
      {
        path: "/news",
        template: "src/Blog",
        getData: async () => ({
          posts,
        }),
        children: posts.map((post) => {
          return {
            path: `/post/${post.slug}`,
            template: `src/Blog/Post`,
            getData: async () => ({ post }),
          };
        }),
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
      // LITTLE LIBRARIES
      {
        path: "/little-libraries",
        template: "src/LittleLibraries",
        getData: async () => ({
          libraries,
          apiKey: process.env.REACT_APP_GMAPS_KEY,
        }),
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
