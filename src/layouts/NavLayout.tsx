import Navbar from "../components/Navbar";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
