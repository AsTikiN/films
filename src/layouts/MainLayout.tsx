import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
