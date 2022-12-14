import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Astro | Learner blog",
    description: "My Journey learning Astro",
    site: "https://www.example.com",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
