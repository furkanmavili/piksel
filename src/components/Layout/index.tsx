import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-800 text-gray-200 h-full">
      <div className="w-full max-w-7xl h-auto md:h-screen  md:overflow-hidden flex flex-col py-4  mx-auto">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
