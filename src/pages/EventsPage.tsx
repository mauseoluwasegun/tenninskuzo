import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Trophy, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PopupButton } from "react-calendly";
import { useTranslation } from "react-i18next";

const EventsPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: t("events.junior_championship_title", { defaultValue: "Junior Championship Tournament" }),
      date: "2024-06-15",
      time: t("events.time_format", { defaultValue: "09:00 AM - 5:00 PM" }),
      location: t("events.kuzo_courts", { defaultValue: "KUZO Tennis Courts" }),
      category: "tournament",
      description: t("events.junior_championship_description", { defaultValue: "Annual championship tournament for junior players. Open to all skill levels." }),
      participants: t("events.ages_8_18", { defaultValue: "Ages 8-18" }),
      registrationDeadline: "2024-06-10",
      image: "tournament"
    },
    {
      id: 2,
      title: t("events.adult_open_play_title", { defaultValue: "Adult Open Play Session" }),
      date: "2024-06-18",
      time: t("events.evening_time", { defaultValue: "7:00 PM - 9:00 PM" }),
      location: t("events.kuzo_courts", { defaultValue: "KUZO Tennis Courts" }),
      category: "session",
      description: t("events.adult_open_play_description", { defaultValue: "Open play session for adult players. Bring your friends and enjoy some friendly matches." }),
      participants: t("events.ages_18_plus", { defaultValue: "Ages 18+" }),
      registrationDeadline: "2024-06-17",
      image: "adults"
    },
    {
      id: 3,
      title: t("events.summer_camp_title", { defaultValue: "Summer Tennis Camp" }),
      date: "2024-07-01",
      time: t("events.full_day_time", { defaultValue: "9:00 AM - 4:00 PM" }),
      location: t("events.kuzo_academy", { defaultValue: "KUZO Tennis Academy" }),
      category: "camp",
      description: t("events.summer_camp_description", { defaultValue: "Intensive week-long camp for beginners to intermediate players. Includes lunch and all equipment." }),
      participants: t("events.ages_6_16", { defaultValue: "Ages 6-16" }),
      registrationDeadline: "2024-06-25",
      image: "camp"
    },
    {
      id: 4,
      title: t("events.coaches_workshop_title", { defaultValue: "Coaches Training Workshop" }),
      date: "2024-06-22",
      time: t("events.workshop_time", { defaultValue: "10:00 AM - 3:00 PM" }),
      location: t("events.training_center", { defaultValue: "KUZO Training Center" }),
      category: "workshop",
      description: t("events.coaches_workshop_description", { defaultValue: "Professional development workshop for tennis coaches. Certification provided." }),
      participants: t("events.coaches_instructors", { defaultValue: "Coaches & Instructors" }),
      registrationDeadline: "2024-06-20",
      image: "workshop"
    },
    {
      id: 5,
      title: t("events.family_fun_day_title", { defaultValue: "Family Fun Day" }),
      date: "2024-06-29",
      time: t("events.afternoon_time", { defaultValue: "11:00 AM - 4:00 PM" }),
      location: t("events.kuzo_courts", { defaultValue: "KUZO Tennis Courts" }),
      category: "event",
      description: t("events.family_fun_day_description", { defaultValue: "A day of fun activities for the whole family. Includes mini tournaments, clinics, and food trucks." }),
      participants: t("events.all_ages", { defaultValue: "All Ages" }),
      registrationDeadline: "2024-06-27",
      image: "family"
    },
    {
      id: 6,
      title: t("events.senior_players_title", { defaultValue: "Senior Players Mixer" }),
      date: "2024-06-30",
      time: t("events.afternoon_time", { defaultValue: "2:00 PM - 5:00 PM" }),
      location: t("events.kuzo_courts", { defaultValue: "KUZO Tennis Courts" }),
      category: "session",
      description: t("events.senior_players_description", { defaultValue: "Social play session for senior players. Focus on fun and fitness." }),
      participants: t("events.ages_50_plus", { defaultValue: "Ages 50+" }),
      registrationDeadline: "2024-06-28",
      image: "seniors"
    }
  ];

  const categories = [
    { id: 'all', name: t("events.category_all", { defaultValue: "All Events" }) },
    { id: 'tournament', name: t("events.category_tournaments", { defaultValue: "Tournaments" }) },
    { id: 'camp', name: t("events.category_camps", { defaultValue: "Camps" }) },
    { id: 'session', name: t("events.category_sessions", { defaultValue: "Sessions" }) },
    { id: 'workshop', name: t("events.category_workshops", { defaultValue: "Workshops" }) },
    { id: 'event', name: t("events.category_special_events", { defaultValue: "Special Events" }) }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
              {t("events.section_badge", { defaultValue: "🎾 Upcoming Events" })}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="block">{t("events.hero_title_line1", { defaultValue: "Join Our" })}</span>
              <span className="block text-green-400 mt-2">{t("events.hero_title_line2", { defaultValue: "Exciting Events" })}</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t("events.hero_description", { defaultValue: "Discover tournaments, camps, workshops, and social events at KUZO Tennis Academy. There's something for every tennis enthusiast!" })}
            </p>
          </div>
        </div>
      </section>

      {/* Events Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-accent text-white hover:bg-accent-bright"
                    : "bg-white text-foreground hover:bg-gray-100"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                    <div className="text-white text-5xl">
                      {event.image === 'tournament' && '🏆 tournament'}
                      {event.image === 'adults' && '👥 adults'}
                      {event.image === 'camp' && '🏕️ camp'}
                      {event.image === 'workshop' && '🎓 workshop'}
                      {event.image === 'family' && '👨‍👩‍👧‍👦 family'}
                      {event.image === 'seniors' && '👵seniors'}
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white text-foreground">
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-2 text-accent" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-2 text-accent" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-2 text-accent" />
                    <span>{event.participants}</span>
                  </div>
                  
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="pt-4">
                    <PopupButton
                      url="https://calendly.com/kuzotennis/30min"
                      rootElement={document.getElementById("root")}
                      text={t("events.register_now", { defaultValue: "Register Now" })}
                      className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md"
                      prefill={{
                        name: "",
                        email: "",
                        customAnswers: {
                          a1: `Registering for ${event.title}`
                        }
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;