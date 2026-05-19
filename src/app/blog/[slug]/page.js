import BlogPage from "@/components/BlogPage";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
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
    revalidate: 60 * 5,
  },
);

// Dynamic Metadata (SEO) үүсгэх функц
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogDetail = await revalidateBlogBySlug(slug);

  if (!blogDetail) {
    return {
      title: "Сэтгэгдэл, Мэдрэмж, Дурсамж, Санаа шийдэл, Аялгуу",
      description: `Буддийн шашин, Философи, Улс төр, Технологи зэргээр өөрийн оюунд
                дурсамж болгон хадгалах зорилготой нийтлэл бичвэр юм.`,
    };
  }

  const { title, image } = blogDetail.fields;

  return {
    title: `${title} | Samsara буддийн нийтлэл`,
    description:
      title ||
      `Буддийн шашин, Философи, Улс төр, Технологи зэргээр өөрийн оюунд
                дурсамж болгон хадгалах зорилготой нийтлэл бичвэр юм.`,
    keywords: `${title}, Samsara буддийн нийтлэл`,
    openGraph: {
      title: `${title} | Samsara`,
      description: title || "Samsara буддийн нийтлэл",
      url: `https://samsara.mn/blog/${slug}`,
      type: "article",
      images: [
        {
          url: image?.fields?.file?.url || "https://samsara.mn/og-image.jpg",
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
      <Header />
      <BlogPage blog={blog} />
      <Footer />
    </div>
  );
};

export default page;
