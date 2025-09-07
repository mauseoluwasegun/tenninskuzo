// import { useState, useEffect } from "react";
// import logoImage from "@/assets/images/download.png";
// import { Link, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import LanguageSelector from "@/components/LanguageSelector";
// import { PopupButton } from "react-calendly";
// import {
//   Menu,
//   Home,
//   Info,
//   List,
//   GalleryHorizontal,
//   Users,
//   Building,
//   Trophy,
//   Calendar,
//   Mail,
// } from "lucide-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetDescription,
//   SheetFooter,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { t } = useTranslation();
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const menuItems = [
//     { name: t("navigation.home"), path: "/", icon: <Home className="h-5 w-5" />, showOn: 'all' },
//     { name: t("navigation.about"), path: "/about", icon: <Info className="h-5 w-5" />, showOn: 'all' },
//     { name: t("navigation.programs"), path: "/programs", icon: <List className="h-5 w-5" />, showOn: 'all' },
//     { name: t("navigation.gallery"), path: "/gallery", icon: <GalleryHorizontal className="h-5 w-5" />, showOn: 'xl' },
//     { name: t("navigation.coaches"), path: "/coaches", icon: <Users className="h-5 w-5" />, showOn: 'xl' },
//     { name: t("navigation.facilities"), path: "/facilities", icon: <Building className="h-5 w-5" />, showOn: 'xl' },
//     { name: t("navigation.success_stories"), path: "/success-stories", icon: <Trophy className="h-5 w-5" />, showOn: 'xl' },
//     { name: t("navigation.events"), path: "/events", icon: <Calendar className="h-5 w-5" />, showOn: 'xl' },
//     { name: t("navigation.contact"), path: "/contact", icon: <Mail className="h-5 w-5" />, showOn: 'all' },
//   ];

//   const visibleMenuItems = menuItems.filter(item => {
//     if (item.showOn === 'all') return true;
//     if (item.showOn === 'xl' && width >= 1280) return true;
//     return false;
//   });

//   const location = useLocation();

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-auto ${
//         isScrolled
//           ? "kuzo-glass backdrop-blur-xl border-b border-white/20 bg-background/95 shadow-lg"
//           : "bg-background/95"
//       }`}
//       role="navigation"
//       aria-label="Main navigation"
//     >
//       <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-4">
//         <div className="flex items-center justify-between min-h-[60px] md:min-h-[64px] lg:min-h-[68px]">
//           <div className="flex items-center space-x-5 px-5 flex-shrink-0">
//             <Link to="/" className="flex items-center space-x-2 group">
//               <img
//                 src={logoImage}
//                 alt="KUZO Tennis Academy Logo"
//                 className="h-8 sm:h-10 w-auto transition-transform duration-200 group-hover:scale-105"
//               />
//             </Link>
//           </div>

//           <div className="hidden md:flex flex-1 justify-center items-center space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5 px-2 md:px-3 lg:px-4">
//             {visibleMenuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`relative text-xs md:text-sm lg:text-sm xl:text-base font-medium transition-all duration-300 group px-2 md:px-3 py-2 rounded-md hover:scale-105 whitespace-nowrap ${
//                   location.pathname === item.path
//                     ? "text-accent font-bold bg-accent/10 shadow-sm"
//                     : "text-foreground font-medium hover:text-accent hover:bg-accent/5"
//                 }`}
//               >
//                 {item.name}
//                 <span
//                   className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
//                     location.pathname === item.path
//                       ? "w-full bg-accent shadow-sm"
//                       : "w-0 bg-accent group-hover:w-full"
//                   }`}
//                 />
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center space-x-2 sm:space-x-4">
//             <div className="hidden md:block">
//               <LanguageSelector />
//             </div>

//             <PopupButton
//               url="https://calendly.com/kuzotennis/30min"
//               rootElement={document.getElementById("root")!}
//               text={t("common.book_now")}
//               className="hidden md:flex items-center justify-center h-12 rounded-md px-8 py-3 bg-accent hover:bg-accent-bright text-white font-bold kuzo-glow-accent transition-all duration-300 hover:scale-105 text-lg"
//             />

//             <div className="md:hidden">
//               <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
//                 <SheetTrigger asChild>
//                   <button
//                     className="inline-flex md:hidden text-foreground p-2 hover:text-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-md hover:bg-accent/10 min-h-[44px] min-w-[44px] items-center justify-center"
//                     aria-label="Toggle menu"
//                   >
//                     <Menu className="w-6 h-6" />
//                   </button>
//                 </SheetTrigger>
//                 <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background/95 kuzo-glass flex flex-col">
//                   <SheetHeader className="p-1 border-b border-white/20">
//                     <SheetTitle>
//                         <img
//                             src={logoImage}
//                             alt="KUZO Tennis Academy Logo"
//                             className="h-10 w-auto"
//                         />
//                     </SheetTitle>
//                     <SheetDescription>
//                     </SheetDescription>
//                   </SheetHeader>
//                   <div className="flex-1 flex flex-col space-y-2 -mt-5 -p-1">
//                     <div className="sm:hidden mb-3 pb-3 border-b border-white/20">
//                       <LanguageSelector />
//                     </div>
//                     {menuItems.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.path}
//                         className={`py-3 px-4 rounded-lg transition-all duration-300 min-h-[44px] flex items-center font-medium text-base gap-4 ${
//                           location.pathname === item.path
//                             ? "text-accent font-bold bg-accent/15 shadow-sm"
//                             : "text-foreground hover:text-accent hover:bg-accent/10 hover:scale-[1.02]"
//                         }`}
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         {item.icon}
//                         <span>{item.name}</span>
//                       </Link>
//                     ))}
//                   </div>
//                   <SheetFooter className="p-2 flex disp mt-auto border-t border-white/20">
//                     <div className="pt-2">
//                       <PopupButton
//                         url="https://calendly.com/kuzotennis/30min"
//                         rootElement={document.getElementById("root")!}
//                         text={t("common.book_now")}
//                         className="bg-accent hover:bg-accent-bright text-white font-bold kuzo-glow-accent w-full py-3 text-base transition-all duration-300 hover:scale-[1.02] rounded-lg"
//                         onClick={() => setIsMenuOpen(false)}
//                       />
//                     </div>
//                   </SheetFooter>
//                 </SheetContent>
//               </Sheet>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navigation;
import { useState, useEffect } from "react";
import logoImage from "@/assets/images/download.png";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/LanguageSelector";
import { PopupButton } from "react-calendly";
import {
  Menu,
  Home,
  Info,
  List,
  GalleryHorizontal,
  Users,
  Building,
  Trophy,
  Calendar,
  Mail,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: t("navigation.home"), path: "/", icon: <Home className="w-4 h-4" /> },
    { name: t("navigation.about"), path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: t("navigation.programs"), path: "/programs", icon: <List className="w-4 h-4" /> },
    { name: t("navigation.gallery"), path: "/gallery", icon: <GalleryHorizontal className="w-4 h-4" /> },
    { name: t("navigation.coaches"), path: "/coaches", icon: <Users className="w-4 h-4" /> },
    { name: t("navigation.facilities"), path: "/facilities", icon: <Building className="w-4 h-4" /> },
    { name: t("navigation.success_stories"), path: "/success-stories", icon: <Trophy className="w-4 h-4" /> },
    { name: t("navigation.events"), path: "/events", icon: <Calendar className="w-4 h-4" /> },
    { name: t("navigation.contact"), path: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "kuzo-glass backdrop-blur-xl border-b border-white/20 bg-background/95 shadow-lg"
          : "bg-background/95"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 min-w-0">
            <Link 
              to="/" 
              className="flex items-center group"
              aria-label="KUZO Tennis Academy Home"
            >
              <img
                src={logoImage}
                alt="KUZO Tennis Academy"
                className="h-8 lg:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex flex-1 justify-center max-w-4xl mx-8">
            <div className="flex items-center justify-center space-x-1 xl:space-x-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:scale-105 whitespace-nowrap ${
                    location.pathname === item.path
                      ? "text-accent bg-accent/10 font-semibold"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Desktop Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            
            {/* Language Selector - Hidden on small screens */}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>

            {/* Book Now Button - Desktop */}
            <div className="hidden lg:block">
              <PopupButton
                url="https://calendly.com/kuzotennis/30min"
                rootElement={document.getElementById("root")}
                text={t("common.book_now")}
                className="inline-flex items-center justify-center px-4 xl:px-6 py-2 bg-accent hover:bg-accent-bright text-white font-semibold kuzo-glow-accent transition-all duration-300 hover:scale-105 text-sm rounded-md whitespace-nowrap"
              />
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors duration-200"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              
              {/* Mobile Menu */}
              <SheetContent 
                side="right" 
                className="w-full sm:w-80 bg-background/95 kuzo-glass border-l border-white/20"
              >
                <SheetHeader className="text-left border-b border-white/10 pb-4 mb-4">
                  <SheetTitle className="flex items-center gap-2">
                    <img
                      src={logoImage}
                      alt="KUZO Tennis Academy"
                      className="h-8 w-auto object-contain"
                    />
                  </SheetTitle>
                  <SheetDescription className="text-sm text-muted-foreground">
                    Navigate through our tennis academy
                  </SheetDescription>
                </SheetHeader>
                
                {/* Mobile Language Selector */}
                <div className="md:hidden mb-4 pb-4 border-b border-white/10">
                  <LanguageSelector />
                </div>
                
                {/* Mobile Menu Items */}
                <div className="flex flex-col space-y-1 mb-6">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        location.pathname === item.path
                          ? "text-accent bg-accent/15 font-semibold"
                          : "text-foreground hover:text-accent hover:bg-accent/10"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
                
                {/* Mobile Book Now Button */}
                <SheetFooter className="border-t border-white/10 pt-4">
                  <PopupButton
                    url="https://calendly.com/kuzotennis/30min"
                    rootElement={document.getElementById("root")}
                    text={t("common.book_now")}
                    className="w-full bg-accent hover:bg-accent-bright text-white font-semibold kuzo-glow-accent py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] text-base"
                    onClick={() => setIsMenuOpen(false)}
                  />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
