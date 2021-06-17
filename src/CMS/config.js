const imagesList = {
  label: "Images",
  name: "images",
  widget: "list",
  summary: `{{fields.image}}`,
  fields: [{ label: "Image", name: "image", widget: "image" }],
  hint: "DO NOT USE. PLEASE USE THE 'IMAGES AND VIDEOS' CONTENT BLOCK.",
};

const linkUrlString = {
  label: "Link URL",
  name: "link",
  widget: "string",
  required: false,
  hint: "This is optional. It must be a FULL link with the http signature such as 'http://www.google.com' (easiest just to copy it from the browser)",
};

const linkTextString = {
  label: "Link Text",
  name: "linkText",
  widget: "string",
  required: false,
};

const linkObject = {
  label: "Link Button",
  name: "linkObject",
  widget: "object",
  fields: [
    {
      label: "Link URL",
      name: "linkLocation",
      widget: "string",
      required: false,
      hint: "This is optional. It must be a FULL link with the http signature such as 'http://www.google.com' (easiest just to copy it from the browser)",
    },
    {
      label: "Link Text",
      name: "linkText",
      widget: "string",
      required: false,
    },
  ],
};

const linksList = {
  label: "Link Buttons",
  name: "links",
  summary: `{{commit_date}}`,
  widget: "list",
  field: linkObject,
};

const downloadObject = {
  label: "Download Button",
  name: "downloadObject",
  widget: "object",
  fields: [
    {
      label: "Downloadable File",
      name: "downloadLink",
      widget: "file",
      required: false,
    },
    {
      label: "Download Text",
      name: "downloadText",
      widget: "string",
      required: false,
    },
  ],
};

const downloadsList = {
  label: "Download Buttons",
  name: "downloads",
  summary: `{{commit_date}}`,
  widget: "list",
  field: downloadObject,
};

const resourceObject = {
  label: "Resource",
  name: "resourceObject",
  widget: "object",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    linkObject,
    downloadObject,
    { label: "Body", name: "body", widget: "markdown" },
    { label: "Image", name: "image", widget: "image" },
  ],
};

const resourceList = {
  label: "Resources",
  name: "resources",
  widget: "list",
  summary: `{{commit_date}}`,
  field: resourceObject,
};

const subTitle = (text) => ({
  label: text || "Sub Title",
  name: "subTitle",
  widget: "string",
  required: false,
  hint: "PLEASE use Sub Titles, they create spacing between content blocks and make the page look much nicer. :)",
});

const imagesVideosObject = {
  label: "Images And Videos",
  name: "imagesVideos",
  widget: "object",
  fields: [
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false,
      hint: "Do not upload TIFFs, they will not function. ALso, to avoid slowing the website, please only upload images of less than 100kb. Ideally make them as small as possible but still retaining image quality. Also, the website is generally setup to accomodate images with square dimensions, so, when possible, please crop images to be squares. If you are only adding one image, then consider adding it to the body area.",
    },
    {
      label: "Video Link",
      name: "videoLink",
      widget: "string",
      required: false,
      hint: "Make sure to copy and paste the full URL. If there is an image, the video will NOT be displayed",
    },
  ],
};

const imagesVideos = {
  label: "Images and Videos List",
  name: "imagesVideosList",
  widget: "list",
  fields: [imagesVideosObject],
};

const aboveSideBodyMedia = {
  label: "Subtitle for right-hand side",
  name: "aboveMedia",
  widget: "string",
  required: false,
  hint: "A subtitle for the righthand side of this block",
};

const belowSideBodyMedia = {
  label: "Body Below Media",
  name: "belowMedia",
  widget: "markdown",
  required: false,
};

const sideContent = [
  aboveSideBodyMedia,
  imagesVideosObject,
  belowSideBodyMedia,
];

const sideBySideBody = {
  label: "Side By Side Body",
  name: "sideBySideBody",
  required: false,
  widget: "object",
  collapsed: true,
  fields: [
    {
      label: "Main Body",
      name: "mainBody",
      widget: "markdown",
      required: false,
    },
    ...sideContent,
  ],
};

const singularContentBlock = {
  label: "Content Block",
  name: "contentBlock",
  widget: "object",
  fields: [
    subTitle(),
    { label: "Body", name: "body", widget: "markdown", required: false },
    sideBySideBody,
    linksList,
    downloadsList,
    imagesList,
    imagesVideos,
    resourceList,
  ],
};

// const contentsBlock = {
//   label: "Content Blocks",
//   name: "contentBlocks",
//   widget: "list",
//   summary: `{{commit_date}}`,
//   fields: [singularContentBlock],
// };

const contentsBlock = {
  label: "Content Blocks",
  name: "contentBlocks",
  widget: "list",
  summary: `{{commit_date}}`,
  collapsed: true,
  field: {
    label: "Content Block",
    name: "contentBlock",
    widget: "object",
    collapsed: true,
    fields: [
      subTitle(),
      { label: "Body", name: "body", widget: "markdown", required: false },
      sideBySideBody,
      linksList,
      downloadsList,
      imagesVideos,
      imagesList,
      resourceList,
    ],
  },
};

// const currentURL = "https://amazing-almeida-cc9291.netlify.app/";
const currentURL = "http://yukonliteracy.com/";
// const currentURL = "http://thelonious.life/"

module.exports = {
  // BACKEND for PROD
  // backend: {
  //   name: "git-gateway",
  //   repo: "Yukon-Literacy-Coalition/ylc_website_v2",
  // },
  // BACKEND for DEV
  // run "npx netlify-cms-proxy-server" in root dir
  backend: {
    name: "proxy",
    proxy_url: "http://localhost:8081/api/v1",
    branch: "master" /* optional, defaults to master */,
  },
  logo_url: `${currentURL}static/dark_flake.5fd7ece1.png`,
  site_url: currentURL,
  media_folder: "public/uploads",
  public_folder: "/uploads",
  collections: [
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
          label: "Event Date and Title",
          name: "date",
          widget: "datetime",
          dateFormat: "DD MMMM YYYY",
          timeFormat: "h:mm a",
          hint: "NOTE: Events will disappear from the website once 24 hours have passed from their start date/time. They will still exist here in the backend and can be made visible again by making their start date/time somewhere in the future.",
        },
        {
          label: "Event Name",
          name: "eventTitle",
          widget: "string",
          hint: "this is required in order to title the event in the list of events",
        },
        contentsBlock,
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
        { label: "Body", name: "body", widget: "markdown" },
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
        { label: "Sub Title", name: "subTitle", widget: "string" },
        linkUrlString,
        linkTextString,
        imagesList,
        { label: "Body", name: "body", widget: "markdown" },
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
      label: "Community Garden",
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
  ],
};
