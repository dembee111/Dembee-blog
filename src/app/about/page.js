import AboutPage from "@/components/AboutPage";
import Header from "@/components/Shared/Header";
import Sidebar from "@/components/Shared/Sidebar";

const page = () => {
  return (
    <div className="bg-[#f1f4f5]">
      <Sidebar />
      <AboutPage />
    </div>
  );
};

export default page;
