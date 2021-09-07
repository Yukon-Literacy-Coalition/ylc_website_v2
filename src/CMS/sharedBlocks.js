export const imagesList = {
  label: "Images",
  name: "images",
  widget: "list",
  summary: `{{fields.image}}`,
  fields: [{ label: "Image", name: "image", widget: "image" }],
  hint: "DO NOT USE. PLEASE USE THE 'IMAGES AND VIDEOS' CONTENT BLOCK.",
};

export const linkUrlString = {
  label: "Link URL",
  name: "link",
  widget: "string",
  required: false,
  hint: "This is optional. It must be a FULL link with the http signature such as 'http://www.google.com' (easiest just to copy it from the browser)",
};

export const linkTextString = {
  label: "Link Text",
  name: "linkText",
  widget: "string",
  required: false,
};

export const forKidsInformation = [
  {
    label: "Archived Status",
    name: "isArchived",
    widget: "boolean",
    default: false,
  },
  {
    label: "Description",
    name: "description",
    widget: "markdown",
    pattern: ["^.{0,400}$", "400 maximum characters"],
    hint: "This is a description for the listing of all projects of this type. I've limited it to 400 characters so the descriptions are all somewhat uniform.",
  },
  {
    label: "Thumbnail Image",
    name: "thumbnail",
    widget: "image",
    hint: "This is a thumbnail for when this project is listed with other projects of this type.",
  },
];

export const idGenerator = (prefix = "post") => ({
  label: "ID",
  name: "id",
  widget: "ncw-id",
  prefix: prefix,
  hint: "This creates a unique, read-only id",
});

// CONTENT BLOCKS THINGS

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
  label: "Images and Videos",
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

// const singularContentBlock = {
//   label: "Content Block",
//   name: "contentBlock",
//   widget: "object",
//   fields: [
//     subTitle(),
//     { label: "Body", name: "body", widget: "markdown", required: false },
//     sideBySideBody,
//     linksList,
//     downloadsList,
//     imagesList,
//     imagesVideos,
//     resourceList,
//   ],
// };

// const contentsBlock = {
//   label: "Content Blocks",
//   name: "contentBlocks",
//   widget: "list",
//   summary: `{{commit_date}}`,
//   fields: [singularContentBlock],
// };

export const contentsBlock = {
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
