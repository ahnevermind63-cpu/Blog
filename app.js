// Tiny hash-based router. No frameworks, no build step.
// "#/" -> list of all posts. "#/post/<slug>" -> single post.

const app = document.getElementById("app");
document.getElementById("year").textContent = new Date().getFullYear();

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function readingTime(html) {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function renderList() {
  const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  const rows = sorted.map((post, i) => `
    <a class="post-row" href="#/post/${post.slug}">
      <span class="post-row-index">${String(sorted.length - i).padStart(2, "0")}</span>
      <span class="post-row-main">
        <span class="post-row-title">${post.title}</span>
        <span class="post-row-excerpt">${post.excerpt}</span>
        <span class="post-row-meta">
          <time>${formatDate(post.date)}</time>
          ${post.tags?.length ? `<span class="tags">${post.tags.map(t => `<span class="tag">${t}</span>`).join("")}</span>` : ""}
        </span>
      </span>
    </a>
  `).join("");

  app.innerHTML = `
    <section class="intro">
      <p>Every entry, newest first. Click a title to read.</p>
    </section>
    <section class="post-list">
      ${rows || `<p class="empty">No posts yet — add one in <code>posts.js</code>.</p>`}
    </section>
  `;
}

function renderPost(slug) {
  const post = POSTS.find(p => p.slug === slug);

  if (!post) {
    app.innerHTML = `
      <section class="not-found">
        <p>That post doesn't exist.</p>
        <a class="back-link" href="#/">&larr; Back to all posts</a>
      </section>
    `;
    return;
  }

  app.innerHTML = `
    <article class="post">
      <a class="back-link" href="#/">&larr; All posts</a>
      <h1 class="post-title">${post.title}</h1>
      <p class="post-meta">
        <time>${formatDate(post.date)}</time>
        <span class="dot">·</span>
        <span>${readingTime(post.content)} min read</span>
      </p>
      <div class="post-body">${post.content}</div>
      <a class="back-link back-link-bottom" href="#/">&larr; All posts</a>
    </article>
  `;
  window.scrollTo(0, 0);
}

function route() {
  const hash = location.hash || "#/";
  const postMatch = hash.match(/^#\/post\/(.+)$/);
  if (postMatch) {
    renderPost(decodeURIComponent(postMatch[1]));
  } else {
    renderList();
  }
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
