const imagesList = {
  label: "Images",
  name: "images",
  widget: "list",
  summary: `{{fields.image}}`,
  fields: [{ label: "Image", name: "image", widget: "image" }],
  hint:
    "To avoid slowing the website, please only upload images of less than 500kb. Ideally make them as small as possible but still retaining image quality. Also, the website is generally setup to accomodate images with square dimensions, so, when possible, please crop images to be squares.",
};

const linkObject = {
  label: "Link",
  name: "link",
  widget: "string",
  required: false,
  hint:
    "This is optional. It must be a FULL link with the http signature such as 'http://www.google.com' (easiest just to copy it from the browser)",
};

const subTitle = (text) => ({
  label: text || "Sub Title",
  name: "subTitle",
  widget: "string",
  required: false,
});

// const requiredLinkObject = {
//   label: "Link",
//   name: "link",
//   widget: "string",
//   hint:
//     "It must be a FULL link with the http signature such as 'http://www.google.com' (easiest just to copy it from the browser)",
// };

const currentURL = "https://amazing-almeida-cc9291.netlify.app/";
// const currentURL = "http://thelonious.life/"

module.exports = {
  // backend: {
  //   name: "git-gateway",
  //   repo: "Yukon-Literacy-Coalition/ylc_website_v2",
  // },
  // BACKEND for development
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
      label: "Blog Post",
      folder: "src/_blog-posts",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Layout", name: "layout", widget: "hidden", default: "blog" },
        { label: "Publish Date And Title", name: "date", widget: "datetime" },
        { label: "Article Name", name: "subTitle", widget: "string" },
        { label: "Author", name: "author", widget: "string", required: false },
        linkObject,
        {
          label: "Link Text",
          name: "linkText",
          widget: "string",
          required: false,
        },
        {
          label: "Featured Image",
          name: "thumbnail",
          widget: "image",
          hint: "This is for the thumbnail",
        },
        imagesList,
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
    {
      name: "events",
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
        },
        { label: "Event Name", name: "subTitle", widget: "string" },
        imagesList,
        { label: "Body", name: "body", widget: "markdown" },
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
      name: "rotating-words",
      label: "Rotating Words",
      create: false,
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
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        linkObject,
        { label: "Body", name: "body", widget: "markdown" },
        {
          label: "Display Announcement",
          name: "displayAnnouncement",
          widget: "boolean",
          default: false,
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
        subTitle(),
        linkObject,
        {
          label: "Link Text",
          name: "linkText",
          widget: "string",
          required: false,
        },
        { label: "Body", name: "body", widget: "markdown" },
        imagesList,
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
        linkObject,
        {
          label: "Link Text",
          name: "linkText",
          widget: "string",
          required: false,
        },
        { label: "Body", name: "body", widget: "markdown" },
        { label: "Image", name: "image", widget: "image" },
      ],
    },
    {
      name: "onlineTools",
      label: "Online Tools",
      folder: "src/_online-tools",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        linkObject,
        { label: "Body", name: "body", widget: "markdown" },
        { label: "Image", name: "image", widget: "image" },
      ],
    },
    {
      name: "flc",
      label: "FLC",
      folder: "src/_flc",
      create: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Sub Title", name: "subTitle", widget: "string" },
        linkObject,
        {
          label: "Link Text",
          name: "linkText",
          widget: "string",
          required: false,
        },
        imagesList,
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
    {
      name: "imaginationLibrary",
      label: "Imagination Library",
      folder: "src/_imagination-library",
      create: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Sub Title", name: "subTitle", widget: "string" },
        linkObject,
        {
          label: "Link Text",
          name: "linkText",
          widget: "string",
          required: false,
        },
        imagesList,
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
    {
      name: "aboutCommunity",
      label: "About Community Initiatives",
      folder: "src/_about-community",
      create: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Sub Title", name: "subTitle", widget: "string" },
        linkObject,
        {
          label: "Link Text",
          name: "linkText",
          widget: "string",
          required: false,
        },
        imagesList,
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
    {
      name: "financialLiteracy",
      label: "Financial Literacy",
      folder: "src/_financial-literacy",
      create: false,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Sub Title", name: "subTitle", widget: "string" },
        linkObject,
        {
          label: "Link Text",
          name: "linkText",
          widget: "string",
          required: false,
        },
        imagesList,
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
    {
      name: "supporters",
      label: "Supporters",
      folder: "src/_supporters",
      create: false,
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
  ],
};
