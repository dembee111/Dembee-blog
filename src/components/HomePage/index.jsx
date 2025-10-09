import Footer from "../Shared/Footer";
import Sidebar from "../Shared/Sidebar";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
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
            <Link
              href="/blog/1"
              className="grid grid-cols-12 pt-12 border-t border-gray-300"
            >
              <div className="col-span-4">
                <div className="mb-4">
                  <span className="text-[#1c1c1ccc]">August 27, 2025</span>
                </div>
                <div>
                  <h2 className="text-3xl max-w-md">
                    Essential Tools Every Designer Should Know
                  </h2>
                </div>
              </div>
              <div className="col-span-8">
                <div className="w-full h-[600px] overflow-hidden">
                  <Image
                    src="/image/blog-1.avif"
                    alt="blog image"
                    width={1200}
                    height={750}
                    className="w-full h-full object-center object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                  />
                </div>
              </div>
            </Link>

            <div className="grid grid-cols-12 pt-12 border-t border-gray-300">
              <div className="col-span-4">
                <div className="mb-4">
                  <span className="text-[#1c1c1ccc]">August 27, 2025</span>
                </div>
                <div>
                  <h2 className="text-3xl max-w-md">
                    Essential Tools Every Designer Should Know
                  </h2>
                </div>
              </div>
              <div className="col-span-8">
                <div className="w-full h-[600px] overflow-hidden">
                  <Image
                    src="/image/blog-1.avif"
                    alt="blog image"
                    width={1200}
                    height={750}
                    className="w-full h-full object-center object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 pt-12 border-t border-gray-300">
              <div className="col-span-4">
                <div className="mb-4">
                  <span className="text-[#1c1c1ccc]">August 27, 2025</span>
                </div>
                <div>
                  <h2 className="text-3xl max-w-md">
                    Essential Tools Every Designer Should Know
                  </h2>
                </div>
              </div>
              <div className="col-span-8">
                <div className="w-full h-[600px] overflow-hidden">
                  <Image
                    src="/image/blog-1.avif"
                    alt="blog image"
                    width={1200}
                    height={750}
                    className="w-full h-full object-center object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 pt-12 border-t border-gray-300">
              <div className="col-span-4">
                <div className="mb-4">
                  <span className="text-[#1c1c1ccc]">August 27, 2025</span>
                </div>
                <div>
                  <h2 className="text-3xl max-w-md">
                    Essential Tools Every Designer Should Know
                  </h2>
                </div>
              </div>
              <div className="col-span-8">
                <div className="w-full h-[600px] overflow-hidden">
                  <Image
                    src="/image/blog-1.avif"
                    alt="blog image"
                    width={1200}
                    height={750}
                    className="w-full h-full object-center object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default HomePage;
