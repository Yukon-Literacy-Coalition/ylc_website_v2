const fs = require("fs");
const klaw = require("klaw");
const path = require("path");
const matter = require("gray-matter");

export const getPosts = (mdPath) => {
  const items = [];
  const getFiles = () =>
    new Promise((resolve) => {
      if (fs.existsSync(mdPath)) {
        klaw(mdPath)
          .on("data", (item) => {
            if (path.extname(item.path) === ".md") {
              const data = fs.readFileSync(item.path, "utf8");
              const parsedData = matter(data);
              const body = parsedData.content
                ? { body: parsedData.content }
                : {};
              const mdData = {
                ...body,
                ...parsedData.data,
              };
              if (mdData) {
                items.push(mdData);
              }
            }
          })
          .on("error", (e) => {
            console.log(e);
          })
          .on("end", () => {
            resolve(items);
          });
      } else {
        resolve(items);
      }
    });
  return getFiles();
};

// export const convertFrontMatter = (item) => {
//   const data = fs.readFileSync(item.path, "utf8");
//   const dataObj = matter(data);
//   dataObj.data.slug = dataObj.data.title
//     .toLowerCase()
//     .replace(/ /g, "-")
//     .replace(/[^\w-]+/g, "");
//   delete dataObj.orig;
//   return dataObj;
// };

export const createSlug = (string) => {
  const slug = string
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
  return slug;
};

export const addSlug = (x) => {
  x.slug = createSlug(x.title || x.subTitle || x.eventTitle || x.articleTitle);
  return x;
};
