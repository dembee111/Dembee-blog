import Link from "next/link";
import Sidebar from "@/components/Shared/Sidebar";
import Header from "@/components/Shared/Header";

const NotFound = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <section className="bg-white mt-36">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Таны хайсан хуудас олдсонгүй
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Уучлаарай, Таны хайсан хуудас олдсонгүй. Хэрэв та Нүүр хуудас руу
              буцах бол.{" "}
            </p>
            <Link
              href="/"
              className="inline-flex text-white bg-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Нүүр хуудас
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default NotFound;
