import { createClient } from "contentful";

const fetchData = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const rest = await client.getEntries({
    content_type: "blog",
  });
  return rest.items || [];
};

export default async function sitemap() {
  const blogs = await fetchData();

  // Ensure blogs and services are defined before mapping
  const blogData = blogs?.map((blog) => ({
    url: `https://samsara.mn/blog/${blog?.fields?.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  return [
    {
      url: "https://samsara.mn",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://samsara.mn/about",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://samsara.mn/contact",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...(blogData || []),
  ];
}
