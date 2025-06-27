# Gallant Archive
We're keeping track of the things Paul has been up to.

To write content, you can add `MDX` files into the `content` directory. The `build` task generates JSON files for the projects and updates so that we can show render the listings. At the moment, that means that `dev` won't refresh them.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Posts, Projects, and Pages
You should be able to just add posts and pages in `src/content` as an `.mdx` file. There is a step as part of the `build` task which generates a JSON file from the MDX so that it can read the frontmatter data without having to load the Markdown files every time. 
Currently, the content build only happens on `build` or when you manually run `content`. I think the best way to dev is if you have `dev` running, then in a different terminal window run `content` it should then update.