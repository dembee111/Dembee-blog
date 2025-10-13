import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/helperService";

const NewsCard = ({ item }) => {
  return (
    <Link
      href={`/blog/${item?.fields.slug}`}
      className="grid grid-cols-12 pt-12 border-t border-gray-300"
    >
      <div className="col-span-12 xl:col-span-4 mb-8 xl:mb-0">
        <div className="mb-4">
          <span className="text-[#1c1c1ccc]">
            {formatDate(item?.sys?.createdAt)}
          </span>
        </div>
        <div>
          <h2 className="text-2xl xl:text-3xl max-w-md">
            {item?.fields?.title}
          </h2>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-8">
        <div className="w-full h-auto xl:h-[500px] 2xl:h-[600px] overflow-hidden">
          <Image
            src={`https:${item.fields.image?.fields.file?.url}`}
            alt="blog image"
            width={1200}
            height={750}
            className="w-full h-full object-center object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </Link>
  );
};
export default NewsCard;
