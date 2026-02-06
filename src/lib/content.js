const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { log } = require("console");

const getAll = (dir) => {
    // Read files at _posts/{directory}
  const directory = path.join(process.cwd(), `src/content/${dir}`);
  const fileNames = fs.readdirSync(directory);
  // Get the content of the files as JSON
  let content = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...matterResult
    };
  });
  // Sort the content by date.
  if (content.length > 0 && content[0].data.date) {
    // JS doesn't like UK date format.. so we need to parse it manually.
    content = content.sort((a, b) => {
      let aDate = a.data.date.split('/');
      let bDate = b.data.date.split('/');
      aDate = new Date(aDate[2], aDate[1], aDate[0]);
      bDate = new Date(bDate[2], bDate[1], bDate[0]);
      return bDate - aDate;
    });
  }

  // Return a big array of JSON
  return JSON.stringify(content);
}

const projects = getAll('projects');
const posts = getAll('posts');

const projectFileContent = `${projects}`;
const postFileContents = `${posts}`;

// Create the cache folder if it doesn't exist
try {
  fs.readdirSync("public/cache");
} catch (e) {
  fs.mkdirSync("public/cache");
}

// Create our cached posts JSON
fs.writeFile("public/cache/projects.json", projectFileContent, (err) => {
  if (err) return console.log(err);
  console.log("Projects cached.");
});

// Create our cached posts JSON
fs.writeFile("public/cache/posts.json", postFileContents, (err) => {
  if (err) return console.log(err);
  console.log("Posts cached.");
});