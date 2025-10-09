import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="py-32">
      <div className="max-w-6xl mx-auto  justify-center  ">
        <div className="text-center">
          <div className="max-w-[865px]  mx-auto ">
            <div className="mb-4">
              <span className="text-[#1c1c1ccc]">August 27, 2025</span>
            </div>
            <h1 className="text-[#1c1c1c] text-[61px] font-normal leading-16 mb-12">
              Essential Tools Every Designer Should Know
            </h1>
          </div>

          <Image
            src="/image/blog-1.avif"
            alt="blog image"
            width={1200}
            height={750}
            className="w-full h-full object-center object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out mb-9"
          />
        </div>
        <div className="max-w-[865px]  mx-auto my-9 md:my-16 text-[#1c1c1ccc] text-[18px] font-normal leading-[1.6em] space-y-6">
          <p className="">
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
            eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing.
          </p>
          <p className="">
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
            eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing.
          </p>
          <p className="">
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
            eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing.
          </p>
          <p className="">
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
            eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
