import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import Sidebar from "@/components/Shared/Sidebar";

const page = () => {
  return (
    <div className="bg-[#f1f4f5]">
      <Sidebar />
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default page;
