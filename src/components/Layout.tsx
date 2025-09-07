import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow w-full pt-16 sm:pt-16 md:pt-20 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;