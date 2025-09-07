import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactExperience from "@/components/models/contact/ContactExperience";
import { PopupButton } from "react-calendly";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <Badge variant="secondary" className="mb-4 sm:mb-6 bg-primary/10 text-primary border-primary/20 text-sm sm:text-base px-4 py-1.5 font-medium">
            {t("contact.section_badge", { defaultValue: "📞 Get In Touch" })}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 sm:mb-8">
            {t("contact.section_title", { defaultValue: "Ready to Start Your Journey?" })}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("contact.section_description", { defaultValue: "Join our champion community today. Book a free trial lesson and experience the tennis academy difference for yourself." })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          <Card className="bg-card border-border hover:border-primary/20 transition-colors duration-300">
            <CardHeader className="p-6 sm:p-8 lg:p-10">
              <CardTitle className="text-2xl sm:text-3xl font-bold">{t("contact.info_title", { defaultValue: "Contact Information" })}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 sm:space-y-8 p-6 sm:p-8 lg:p-10">
              <div className="flex items-start space-x-4 sm:space-x-5 group">
                <div className="mt-1 p-3 sm:p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg mb-1 sm:mb-2">{t("contact.location_title", { defaultValue: "Location" })}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{t("contact.location_address", { defaultValue: "123 Tennis Court Blvd, Sports City, SC 12345" })}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 sm:space-x-5 group">
                <div className="mt-1 p-3 sm:p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg mb-1 sm:mb-2">{t("contact.phone_title", { defaultValue: "Phone" })}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{t("contact.phone_number", { defaultValue: "+234 9079007363" })}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 sm:space-x-5 group">
                <div className="mt-1 p-3 sm:p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg mb-1 sm:mb-2">{t("contact.email_title", { defaultValue: "Email" })}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{t("contact.email_address", { defaultValue: "info@kuzotennis.com" })}</p>
                </div>
              </div>
              <div className="pt-6 sm:pt-8 mt-4 border-t border-border">
                <PopupButton
                  url="https://calendly.com/kuzotennis/30min"
                  rootElement={document.getElementById("root")}
                  text={t("contact.book_trial", { defaultValue: "Book Free Trial Lesson" })}
                  className="w-full bg-accent hover:bg-accent-bright text-white font-bold py-4 sm:py-5 text-lg sm:text-xl kuzo-glow-accent transition-all duration-300 hover:scale-[1.02] px-6 sm:px-8 rounded-xl shadow-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* 3D Experience - re-enabled */}
          <div className="bg-[#cd7c2e] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <div className="aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-full w-full">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;