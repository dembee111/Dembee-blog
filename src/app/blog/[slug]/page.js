import BlogPage from "@/components/BlogPage";
import Sidebar from "@/components/Shared/Sidebar";
import { createClient } from "contentful";
import { unstable_cache } from "next/cache";

const fetchData = async (slug) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const rest = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });
  return rest.items[0];
};

const revalidateBlogBySlug = unstable_cache(
  async (slug) => {
    return await fetchData(slug);
  },
  ["blog-single"],
  {
    revalidate: 3600 * 24,
  }
);

// Dynamic Metadata (SEO) үүсгэх функц
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogDetail = await revalidateBlogBySlug(slug);

  if (!blogDetail) {
    return {
      title: "Алтан зоос мэдээ мэдээлэл",
      description: "Алтан зоос ББСБ ийн талаар мэдээлэл.",
    };
  }

  const { title, image } = blogDetail.fields;

  return {
    title: `${title} | Алтан зоос ББСБ ийн тухай`,
    description:
      title ||
      "Алтан зоос ББСБ талаар санхүүгийн зөвлөгөө үйлчилгээний талаар мэдээлэл",
    keywords: `${title}, ББСБ, Банк бус санхүүгийн мэдээлэл, Зээл`,
    openGraph: {
      title: `${title} | Алтан зоос ББСБ`,
      description:
        title ||
        "Алтан зоос ББСБ талаар санхүүгийн зөвлөгөө үйлчилгээний талаар мэдээлэл",
      url: `https://altanzoos.mn/blogs/${slug}`,
      type: "article",
      images: [
        {
          url:
            image?.fields?.file?.url ||
            "https://images.ctfassets.net/fsfl940z9gt0/5bySjZo9QAMMFAyW48HhWc/bb675060b6356b7d97e5dffcb5aa9702/526855426_1322235473235856_3235514157622961277_n.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const blog = await revalidateBlogBySlug(slug);
  return (
    <div className="bg-[#f1f4f5]">
      <Sidebar />
      <BlogPage blog={blog} />
    </div>
  );
};

export default page;
