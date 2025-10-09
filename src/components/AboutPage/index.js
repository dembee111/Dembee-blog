import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto my-24">
      <div className="relative">
        <Image
          src="/image/hero.avif"
          alt="bg-hero"
          width={1450}
          height={725}
          priority
          className="w-[1360px] h-[650px] object-cover object-center rounded-xl"
        />
        <div className="absolute left-1/2 top-1/2 -translate-0.5 z-10 ">
          <h1 className="text-[#f1f4f5]  text-[129px] ">Mиний тухай</h1>
        </div>
      </div>
      <div className="max-w-[865px] mx-auto my-12 text-[#1c1c1ccc] text-[18px] font-normal leading-[1.6em]">
        <p className="">
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing.
        </p>
        <h2>Curabitur ullamcorper.</h2>
        <p>
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet.
        </p>
        <p>
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        </p>
        <div className="border-t border-[#1c1c1c33]">
          <h2 className="text-[#1c1c1c80] mt-[2px] text-[16px] font-semibold leading-[1.3em]">
            Info
          </h2>
          <div>
            <h1>info@yoursite.com</h1>
            <h1>800-123-4567</h1>
          </div>
        </div>
        <div className="border-t border-[#1c1c1c33]">
          <h2 className="text-[#1c1c1c80] mt-[2px] text-[16px] font-semibold leading-[1.3em]">
            Social
          </h2>
          <div>
            <h1>Twitter</h1>
            <h1>Facebook</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
