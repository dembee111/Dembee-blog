import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import Sidebar from "@/components/Shared/Sidebar";

const page = () => {
  return (
    <div className="bg-[#f1f4f5]">
      <Sidebar />
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default page;
