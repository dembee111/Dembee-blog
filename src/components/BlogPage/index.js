import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { formatDate } from "@/lib/helperService";
import BlogImage from "./BlogImage";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong className="bold-text text-gray-700 tracking-wide leading-relaxed mb-3 my-2">
        {text}
      </strong>
    ),
    [MARKS.ITALIC]: (text) => (
      <em className="italic-text text-gray-700  tracking-wide leading-relaxed mb-4">
        {text}
      </em>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-base text-b/90 tracking-wide leading-relaxed mb-4">
        {children}
      </p>
    ),

    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc ml-4">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal ml-4">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-1">{children}</li>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-xl md:text-2xl font-bold text-black my-4">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-lg md:text-xl font-bold text-black my-4">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl md:text-2xl font-bold text-black my-4">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-lg md:text-2xl font-bold text-black my-4">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-base md:text-xl font-bold text-black my-4">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-base md:text-lg font-bold text-black my-4">
        {children}
      </h6>
    ),
  },
  renderText: (text) => <span className="text-style my-4">{text}</span>,
};

const BlogPage = ({ blog }) => {
  return (
    <div className="py-32 px-3 xl:px-0">
      <div className="max-w-6xl mx-auto  justify-center  ">
        <div className="text-center">
          <div className="max-w-[865px]  mx-auto ">
            <div className="mb-4">
              <span className="text-[#1c1c1ccc]">
                {formatDate(blog?.sys?.createdAt)}
              </span>
            </div>
            <h1 className="text-[#1c1c1c] text-3xl xl:text-[61px] font-normal leading-10 xl:leading-16 mb-12">
              {blog?.fields?.title}
            </h1>
          </div>

          <BlogImage blog={blog} />
        </div>
        <div className="max-w-3xl mx-auto my-9 md:my-16 space-y-4 xl:space-y-6">
          <div className="text-noto leading-relaxed text-[#1c1c1ccc] text-[18px] font-normal">
            {documentToReactComponents(blog?.fields?.description, options)}
          </div>
          <div className="flex justify-end items-center mt-12">
            <div className="flex justify-end items-center gap-4">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image
                  src="/image/avatar.jpg"
                  alt="Нийтлэлч Батдэмбэрэл"
                  width={461}
                  height={409}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h1 className="text-noto text-lg">{blog?.fields?.creator}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
