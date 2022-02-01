import {
  imagesList,
  linkUrlString,
  linkTextString,
  forKidsInformation,
  contentsBlock,
  idGenerator,
} from "./sharedBlocks";

// const currentURL = "https://amazing-almeida-cc9291.netlify.app/";
const currentURL = "http://yukonliteracy.com/";
// const currentURL = "http://thelonious.life/"

const config = {
  // BACKEND for PROD
  backend: {
    name: "git-gateway",
    repo: "Yukon-Literacy-Coalition/ylc_website_v2",
  },
  // BACKEND for DEV
  // backend: {
  //   name: "proxy",
  //   proxy_url: "http://localhost:8081/api/v1",
  //   branch: "master" /* optional, defaults to master */,
  // },
  logo_url: `${currentURL}static/dark_flake.5fd7ece1.png`,
  site_url: currentURL,
  media_folder: "public/uploads",
  public_folder: "/uploads",
  collections: [
    // fields:
    //   - label: ID
    //     name: id
    //     widget: ncw-id
    //     prefix: post        # will generate post-124hfkjas
    //     timestamp: true     # will generate 1245119112-post-124hfkjas
    //     hint: This widget generate an unique read-only id
    {
      name: "blog",
      identifier_field: "articleTitle",
      label: "Blog Post",
      folder: "src/_blog-posts",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Layout", name: "layout", widget: "hidden", default: "blog" },
        {
          label: "Publish Date And Title",
          name: "date",
          widget: "datetime",
          hint: "If this is a new article remember to press NOW to ensure that you are using today's date!",
        },
        {
          label: "Article Name",
          name: "articleTitle",
          widget: "string",
          hint: "this is required in order to title the blog post in the list of blog posts",
        },
        { label: "Author", name: "author", widget: "string", required: false },
        {
          label: "Featured Image",
          name: "thumbnail",
          widget: "image",
          hint: "This is for the thumbnail",
        },
        contentsBlock,
        idGenerator(),
      ],
    },
    {
      name: "events",
      identifier_field: "eventTitle",
      label: "Events",
      folder: "src/_events",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Layout", name: "layout", widget: "hidden", default: "event" },
        {
          label: "Event Start Date",
          name: "startDate",
          widget: "datetime",
          dateFormat: "DD MMMM YYYY",
          default: "",
          timeFormat: "h:mm a",
          hint: "NOTE: Events will disappear from the website once 24 hours have passed from their start (or end) date. They will still exist here in the backend and can be made visible again by making their start (or end) date somewhere in the future.",
        },
        {
          label: "Event End Date",
          name: "endDate",
          widget: "datetime",
          dateFormat: "DD MMMM YYYY",
          default: "",
          timeFormat: "h:mm a",
          required: false,
          hint: "NOTE: An end date is not required if it is a very short event.",
        },
        {
          label: "Show Event Times",
          name: "showEventTime",
          widget: "boolean",
          default: true,
          hint: "NOTE: This will default to true, but showing the start/end time of a long term event might not be relevant",
        },

        {
          label: "Event Name",
          name: "eventTitle",
          widget: "string",
          hint: "this is required in order to title the event in the list of events",
        },
        contentsBlock,
        idGenerator("event"),
      ],
    },
    {
      name: "outreach-projects",
      label: "Outreach Projects",
      folder: "src/_outreach-projects",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Body", name: "body", widget: "markdown" },
        imagesList,
      ],
    },
    {
      name: "donate",
      label: "Donate",
      folder: "src/_donate",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "rotating-words",
      label: "Rotating Words",
      create: false,
      delete: false,
      folder: "src/_rotating-words",
      fields: [
        {
          label: "Words",
          hint: "Must be comma separated",
          name: "words",
          widget: "string",
        },
      ],
    },
    {
      name: "job-opportunities",
      label: "Job Opportunities",
      folder: "src/_job-opportunities",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        {
          label: "PDF",
          name: "pdf",
          widget: "file",
        },
      ],
    },
    {
      name: "statements",
      label: "Statements",
      folder: "src/_statements",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
          hint: "keep the title in the '2011-2012' format.",
        },
        {
          label: "PDF",
          name: "pdf",
          widget: "file",
        },
        {
          label: "Statement year",
          name: "statementYear",
          widget: "datetime",
          dateFormat: "YYYY",
        },
      ],
    },
    {
      name: "announcements",
      label: "Announcements",
      folder: "src/_announcements",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        linkUrlString,
        { label: "Body", name: "body", widget: "markdown" },
        {
          label: "Display Announcement",
          name: "displayAnnouncement",
          widget: "boolean",
          default: false,
          hint: "The homepage will only show the most recently created announcement that has this toggled 'on'. If many announcements have this toggled 'on', then it will only show the announcement that is most recently created (NOT the announcement that was most recently edited).",
        },
      ],
    },
    {
      name: "communityInitiatives",
      label: "Community Initiatives",
      folder: "src/_community-initiatives",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "staff",
      label: "Staff",
      folder: "src/_staff",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Name", name: "name", widget: "string" },
        { label: "Image", name: "image", widget: "image", required: false },
        { label: "Role", name: "role", widget: "string" },
        { label: "Bio", name: "bio", widget: "markdown" },
      ],
    },
    {
      name: "board",
      label: "Board",
      folder: "src/_board",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Name", name: "name", widget: "string" },
        { label: "Location", name: "location", widget: "string" },
        { label: "Role", name: "role", widget: "string" },
      ],
    },
    {
      name: "highlightedProjects",
      label: "Highlighted Projects",
      folder: "src/_highlighted-projects",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        linkUrlString,
        linkTextString,

        {
          label: "Body",
          name: "body",
          widget: "markdown",
          pattern: ["^.{0,400}$", "400 maximum characters. You are "],
          hint: "I've limited it to 400 characters so the descriptions are all somewhat uniform.",
        },
        { label: "Image", name: "image", widget: "image" },
      ],
    },
    {
      name: "flc",
      label: "FLC",
      folder: "src/_flc",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "imaginationLibrary",
      label: "Imagination Library",
      folder: "src/_imagination-library",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "aboutCommunity",
      label: "About Community Initiatives",
      folder: "src/_about-community",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },

    {
      name: "financialLiteracy",
      label: "Financial Literacy",
      folder: "src/_financial-literacy",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "supporters",
      label: "Supporters",
      folder: "src/_supporters",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [{ label: "Title", name: "title", widget: "string" }, imagesList],
    },
    {
      name: "familyResources",
      label: "Family Literacy Resources",
      folder: "src/_family-resources",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        {
          label: "File",
          name: "file",
          widget: "file",
        },
        { label: "Body", name: "body", widget: "markdown" },
        { label: "Image", name: "image", widget: "image" },
      ],
    },
    {
      name: "aboutFoodSecurity",
      label: "About Food Security",
      folder: "src/_about-food-security",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "aboutFamily",
      label: "About Family Literacy",
      folder: "src/_about-family-literacy",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "foodSecurityPrograms",
      label: "Food Security Programs",
      folder: "src/_food-security-programs",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "communityGarden",
      label: "Learning Garden",
      folder: "src/_community-garden",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "aboutFoodResources",
      label: "Food Resources - About",
      folder: "src/_food-resources-about",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "planting",
      label: "Food Resources - Planting",
      folder: "src/_planting",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "maintaining",
      label: "Food Resources - Maintaining",
      folder: "src/_maintaining",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "troubleshooting",
      label: "Food Resources - Troubleshooting",
      folder: "src/_troubleshooting",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "harvesting",
      label: "Food Resources - Harvesting",
      folder: "src/_harvesting",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    // KIDS SECTIONS
    {
      name: "aboutForKids",
      label: "Kids - About For Kids",
      folder: "src/_about-for-kids",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "aboutStorytime",
      label: "Kids - About Storytime",
      folder: "src/_about-storytime",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "storytime",
      label: "Kids - Storytime Content",
      folder: "src/_storytime",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        ...forKidsInformation,
        contentsBlock,
        idGenerator("story"),
      ],
    },
    {
      name: "aboutSongs",
      label: "Kids - About Songs",
      folder: "src/_about-songs",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "songs",
      label: "Kids - Songs Content",
      folder: "src/_songs",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        ...forKidsInformation,
        contentsBlock,
        idGenerator("song"),
      ],
    },
    {
      name: "aboutScience",
      label: "Kids - About Science",
      folder: "src/_about-science",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "science",
      label: "Kids - Science Content",
      folder: "src/_science",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        ...forKidsInformation,
        contentsBlock,
        idGenerator("science"),
      ],
    },
    {
      name: "aboutKidsFood",
      label: "Kids - About Kids Food",
      folder: "src/_about-kids-food",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "kidsFood",
      label: "Kids - Food Content",
      folder: "src/_kids-food",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        ...forKidsInformation,
        contentsBlock,
        idGenerator("kidsfood"),
      ],
    },
    {
      name: "aboutCraft",
      label: "Kids - About Craft",
      folder: "src/_about-craft",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "craft",
      label: "Kids - Craft Content",
      folder: "src/_craft",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        ...forKidsInformation,
        contentsBlock,
        idGenerator("craft"),
      ],
    },
    {
      name: "aboutCaregiver",
      label: "Kids - About Caregiver",
      folder: "src/_about-caregiver",
      create: false,
      delete: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        contentsBlock,
      ],
    },
    {
      name: "caregiver",
      label: "Kids - Caregiver Content",
      folder: "src/_caregiver",
      create: true,
      delete: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        ...forKidsInformation,
        contentsBlock,
        idGenerator("care"),
      ],
    },
  ],
};

export default config;
