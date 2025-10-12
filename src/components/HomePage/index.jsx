import Footer from "../Shared/Footer";
import Sidebar from "../Shared/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";
import { unstable_cache } from "next/cache";
import NewsCard from "../Shared/NewsCard";

const fetchBlogPage = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const rest = await client.getEntries({
    content_type: "blog",
    "fields.tag[in]": "Бүгд",
  });
  return rest.items;
};

const revalidateBlogs = unstable_cache(
  async () => {
    return await fetchBlogPage();
  },
  ["blog-home"],
  {
    revalidate: 60,
  }
);

const HomePage = async () => {
  const blogs = await revalidateBlogs();

  return (
    <>
      <Sidebar />
      <section className="relative ml-[110px] bg-[#f1f4f5]">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col py-32 px-16 ">
            <div className="flex justify-start items-center mb-12">
              <h1 className="text-7xl max-w-4xl">
                The Art of Design: Exploring Visual Thinking and Graphics
              </h1>
            </div>
            <div className="flex justify-start items-center">
              <p className="text-lg text-[#1c1c1ccc] max-w-xl">
                Delving into design principles, graphic inspiration, and
                practical advice for creators at every level.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-16 py-8 px-16">
            {blogs &&
              blogs.map((blog, index) => <NewsCard key={index} item={blog} />)}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default HomePage;
