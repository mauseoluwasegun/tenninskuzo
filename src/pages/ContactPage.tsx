import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "@/components/TitleHeader";
import ContactExperience from "@/components/models/contact/ContactExperience"; // Re-enabled
import Testimonials from "@/components/Testimonials";
import { PopupButton } from "react-calendly";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      // Note: You'll need to set up your EmailJS account and add these environment variables
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current!,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      alert(t("contact.message_sent_success", { defaultValue: "Message sent successfully!" }));
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(t("contact.message_sent_error", { defaultValue: "Failed to send message. Please try again." }));
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white/10 text-white border-white/20 text-lg py-2 px-4 rounded-full mb-4">
              {t("contact.section_badge", { defaultValue: "🎾 Get In Touch" })}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="block">{t("contact.hero_title_line1", { defaultValue: "Start Your Tennis" })}</span>
              <span className="block text-green-400 mt-2">{t("contact.hero_title_line2", { defaultValue: "Journey Today" })}</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t("contact.hero_description", { defaultValue: "Ready to join the KUZO Tennis Academy family? We're excited to hear from you and help you take the next step in your tennis journey." })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="contact" className="flex-center section-padding py-20">
        <div className="w-full h-full md:px-10 px-5">
          <TitleHeader
            title={t("contact.get_in_touch_title", { defaultValue: "Get in Touch – Let's Connect" })}
            sub={t("contact.get_in_touch_subtitle", { defaultValue: "💬 Have questions or ideas? Let's talk! 🚀" })}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16">
            <div className="lg:col-span-5">
              <div className="flex-center card-border rounded-xl p-10 bg-card border border-border">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-7"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form_name_label", { defaultValue: "Your name" })}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("contact.form_name_placeholder", { defaultValue: "What's your good name?" })}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form_email_label", { defaultValue: "Your Email" })}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t("contact.form_email_placeholder", { defaultValue: "What's your email address?" })}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form_message_label", { defaultValue: "Your Message" })}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t("contact.form_message_placeholder", { defaultValue: "How can I help you?" })}
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="relative overflow-hidden group bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      <span>{loading ? t("contact.sending", { defaultValue: "Sending..." }) : t("contact.send_message", { defaultValue: "Send Message" })}</span>
                      <div className="ml-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-7 min-h-96">
              <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                <ContactExperience /> {/* Re-enabled */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-16 h-16 text-yellow-400 mx-auto mb-6" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("contact.cta_title", { defaultValue: "Ready to Join Our Champion Community?" })}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {t("contact.cta_description", { defaultValue: "Book your free trial lesson today and experience the KUZO difference for yourself." })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PopupButton
              url="https://calendly.com/kuzotennis/30min"
              rootElement={document.getElementById("root")}
              text={t("contact.book_trial", { defaultValue: "Book Free Trial Lesson" })}
              className="relative overflow-hidden group bg-gradient-to-r from-primary to-accent text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            />
            <button 
              className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-primary"
            >
              {t("contact.call_us", { defaultValue: "Call Us Now" })}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;