import Link from "next/link";

const Footer = () => {
  return (
    <footer className="ml-[110px] relative bg-[#f1f4f5] ">
      <div className="flex justify-between items-center mx-16 py-6 border-t border-gray-300">
        <div className="flex justify-start items-center">
          <Link
            href="https://gegeensoft.com"
            target="__blank"
            className="text-[#1c1c1ccc] underline"
          >
            Developed by Gegeensoft
          </Link>
        </div>

        <div className="flex justify-start items-center">
          <h1 className="text-[#1c1c1ccc]">Үйлчилгээний нөхцөл</h1>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
