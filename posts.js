/*
  ============================================
  HOW TO ADD A NEW POST
  ============================================
  Copy one of the objects below, paste it into the array,
  give it a unique "slug" (used in the URL, no spaces),
  and fill in the fields. Newest post should go at the TOP
  of the array so it shows up first.

  content: write it as normal HTML. Wrap paragraphs in <p>...</p>,
  use <h2> for subheadings, <strong> for bold, <em> for italics,
  <a href="...">link</a> for links, <img src="..."> for images.
*/

const POSTS = [
  {
    slug: "hello-world",
    title: "Hello, world",
    date: "2026-08-25",
    tags: ["meta"],
    excerpt: "The first post. Why I'm starting this, and what to expect here.",
    content: `
      <p>I've wanted a place to write for a while — not a social feed, not a newsletter,
      just a small page I own that anyone can read with a link. So here it is.</p>

      <p>This blog is a static site: a handful of HTML, CSS and JavaScript files with no
      database and no server. That means it's <strong>free to host</strong> and loads
      fast, and I can edit it by opening one file and adding a new entry to a list.</p>

      <h2>What I'll write about</h2>
      <p>Mostly things I'm learning, small projects, and notes to my future self.
      Expect it to be a little messy — that's the point.</p>

      <p>If you found this through a link someone sent you: welcome. More soon.</p>
    `
  },
  {
    slug: "second-post",
    title: "A second post, to prove the list works",
    date: "2026-08-20",
    tags: ["meta", "test"],
    excerpt: "A short example post so you can see how multiple entries look in the list.",
    content: `
      <p>This is just a placeholder so the homepage has more than one entry to show.
      Feel free to delete this object from <code>posts.js</code> once you have real
      posts of your own.</p>

      <p>Notice the date, tags, and excerpt above are all pulled from the same object
      in <code>posts.js</code> — you only write your post once.</p>
    `
  }
];
