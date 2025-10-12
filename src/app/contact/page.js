import ContactPage from "@/components/ContactPage";
import Header from "@/components/Shared/Header";
import Sidebar from "@/components/Shared/Sidebar";

const page = () => {
  return (
    <div className="bg-[#f1f4f5]">
      <Sidebar />
      <ContactPage />
    </div>
  );
};

export default page;
