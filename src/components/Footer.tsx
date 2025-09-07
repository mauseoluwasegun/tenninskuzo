import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import logoImage from "@/assets/images/download.png";
import tennisBallImage from "@/assets/images/tennis-ball-sk-removebg-preview.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  const quickLinks = [
    { name: t("footer.programs_overview"), href: "/programs" },
    { name: t("footer.booking_system"), href: "/contact" },
    { name: t("footer.coach_profiles"), href: "/coaches" },
    { name: t("footer.facility_tour"), href: "/gallery" },
    { name: t("footer.success_stories"), href: "/success-stories" },
    { name: t("footer.tournament_schedule"), href: "/events" },
    { name: t("footer.student_portal"), href: "#login" },
    { name: t("footer.parent_resources"), href: "#resources" },
    { name: t("footer.contact_information"), href: "/contact" }
  ];

  const legalLinks = [
    { name: t("footer.privacy_policy"), href: "#privacy" },
    { name: t("footer.terms_of_service"), href: "#terms" },
    { name: t("footer.cookie_preferences"), href: "#cookies" },
    { name: t("footer.data_protection"), href: "#gdpr" },
    { name: t("footer.accessibility_statement"), href: "#accessibility" },
    { name: t("footer.refund_policy"), href: "#refunds" }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", handle: "@coachkuzo_tennis", href: "https://www.instagram.com/coachkuzo_tennis/" },
    { name: "Facebook", icon: "📘", handle: "coachkuzo_tennis", href: "#" },
    { name: "TikTok", icon: "🎵", handle: "@coachkuzo_tennis", href: "#" },
    { name: "YouTube", icon: "📺", handle: "coachkuzo_tennis", href: "#" },
    { name: "LinkedIn", icon: "💼", handle: "coachkuzo_tennis", href: "#" }
  ];

  return (
    <footer className="kuzo-gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={tennisBallImage}
          alt="Tennis Ball" 
          className="absolute top-20 left-10 w-16 h-16 sm:w-32 sm:h-32 animate-geometric-float" 
        />
        <div className="absolute bottom-32 right-20 w-16 h-16 sm:w-24 sm:h-24 bg-accent/10 rotate-12 animate-hero-float" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section - Enhanced Following Original Design */}
        <div className="border-b border-white/10 py-6 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
          {/* Subtle background enhancement */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-white/3 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="kuzo-glass border-white/20 backdrop-blur-xl relative overflow-hidden group hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10">
              {/* Subtle animated background elements */}
              <div className="absolute top-4 right-6 w-2 h-2 bg-accent/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
              
              <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8 text-center relative z-10">
                {/* Enhanced Badge */}
                <Badge variant="secondary" className="mb-2 sm:mb-3 lg:mb-4 kuzo-glass text-accent-bright border-accent-bright/30 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 relative overflow-hidden transition-all duration-300 hover:border-accent/40">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent transition-opacity duration-500"></div>
                  <span className="relative">🏆 Champion Network Hub</span>
                </Badge>

                {/* Enhanced Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-accent-bright mb-2 sm:mb-3 lg:mb-4 transition-all duration-700">
                  {t("footer.join_tennis_family")}
                </h3>

                {/* Enhanced Description */}
                <p className="text-accent-bright/80 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base px-2 transition-colors duration-500">
                  {t("footer.newsletter_description")}
                </p>

                {/* Enhanced Form Container */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 max-w-md mx-auto p-1 rounded-xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 transition-all duration-500">
                  {/* Enhanced Input */}
                  <div className="flex-1 relative">
                    <Input
                      type="email"
                      placeholder={t("footer.email_placeholder")}
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-accent-bright/70 focus:border-accent text-xs sm:text-sm lg:text-base min-h-[44px] rounded-lg hover:bg-white/15 hover:border-white/30 focus:bg-white/15 focus:shadow-lg focus:shadow-accent/20 transition-all duration-300 backdrop-blur-sm"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  {/* Enhanced Button */}
                  <Button className="bg-accent hover:bg-accent-bright text-white font-bold kuzo-glow-accent text-xs sm:text-sm lg:text-base px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 min-h-[44px] w-full sm:w-auto transition-all duration-300 hover:scale-105 relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-1.5">
                      {t("footer.subscribe")}
                      <svg className="w-3 h-3 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Button>
                </div>

                {/* Trust indicators - subtle enhancement */}
                <div className="flex items-center justify-center gap-3 mt-3 sm:mt-4 text-xs text-accent-bright/70">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Secure
                  </span>
                  <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                  <span>No Spam</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                  <span>Unsubscribe Anytime</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-6 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              
              {/* Academy Info */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <img 
                    src={logoImage} 
                    alt="Company Logo" 
                    className="h-8 w-auto sm:h-10 lg:h-12" 
                  />
                  <span className="text-white font-bold text-lg sm:text-xl">KUZO</span>
                </div>
                <p className="text-white/90 leading-relaxed text-xs sm:text-sm lg:text-base">
                  {t("footer.academy_description")}
                </p>
                <div className="space-y-2 sm:space-y-3 text-white/90 text-xs sm:text-sm">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <span>📍</span>
                    <span>{t("footer.address")}</span>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <span>📞</span>
                    <span>{t("footer.phone")}</span>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <span>✉️</span>
                    <span>{t("footer.email")}</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3 sm:mb-4 lg:mb-6">{t("footer.quick_links")}</h4>
                <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-300 text-xs sm:text-sm lg:text-base hover:underline block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal & Compliance */}
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3 sm:mb-4 lg:mb-6">{t("footer.legal_compliance")}</h4>
                <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-300 text-xs sm:text-sm lg:text-base hover:underline block py-1"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* Certifications */}
                <div className="mt-4 sm:mt-6 lg:mt-8">
                  <h5 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 lg:mb-4">{t("footer.certifications")}</h5>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <Badge variant="outline" className="text-xs text-white border-white/30 px-2 py-1">
                      USPTA
                    </Badge>
                    <Badge variant="outline" className="text-xs text-white border-white/30 px-2 py-1">
                      PTR
                    </Badge>
                    <Badge variant="outline" className="text-xs text-white border-white/30 px-2 py-1">
                      USTA
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Social & Contact */}
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3 sm:mb-4 lg:mb-6">{t("footer.connect_with_us")}</h4>
                
                {/* Social Media */}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 sm:space-x-3 text-white/80 hover:text-white transition-colors duration-300 group py-1"
                    >
                      <span className="text-sm sm:text-base lg:text-lg group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-medium">{social.name}</div>
                        <div className="text-xs text-white/60">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Operating Hours */}
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 lg:mb-4">{t("footer.academy_hours")}</h5>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
                    <div className="flex justify-between">
                      <span>{t("footer.mon_fri")}</span>
                      <span className="text-right">{t("footer.mon_fri_hours")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("footer.sat_sun")}</span>
                      <span className="text-right">{t("footer.sat_sun_hours")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("footer.holidays")}</span>
                      <span className="text-right">{t("footer.holidays_hours")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-3 sm:py-4 lg:py-6 px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-white/60 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;