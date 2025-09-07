import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import mohammedBashiruImage from "@/assets/images/Mohammed Bashiru.png";
import Image1 from "@/assets/coaches/1.jpg";
import Image2 from "@/assets/coaches/32.jpg";
import Image3 from "@/assets/coaches/33.jpg";
import { PopupButton } from "react-calendly";
import { useTranslation } from "react-i18next";
import tennisBallImage from "@/assets/images/tennis-ball-sk-removebg-preview.png";

const Coaches = () => {
  const { t } = useTranslation();
  const [selectedCoach, setSelectedCoach] = useState(null);

  const coaches = [
    {
      id: 1,
      name: t("coaches.coach_maria_name", { defaultValue: "Mohammed Bashiru" }),
      title: t("coaches.coach_maria_title", { defaultValue: "Head Coach & Former ATP Pro" }),
      image: mohammedBashiruImage,
      specialties: [
        t("coaches.coach_maria_specialty_1", { defaultValue: "Advanced Technique" }),
        t("coaches.coach_maria_specialty_2", { defaultValue: "Mental Training" }),
        t("coaches.coach_maria_specialty_3", { defaultValue: "Tournament Prep" })
      ],
      experience: t("coaches.coach_maria_experience", { defaultValue: "15+ Years" }),
      achievements: [
        t("coaches.coach_maria_achievement_1", { defaultValue: "Former WTA Top 50" }),
        t("coaches.coach_maria_achievement_2", { defaultValue: "Davis Cup Coach" }),
        t("coaches.coach_maria_achievement_3", { defaultValue: "USPTA Certified" })
      ],
      bio: t("coaches.coach_bio", { defaultValue: "Maria brings world-class expertise from her professional playing career and has coached over 30 junior champions to national rankings." }),
      availability: t("coaches.coach_maria_availability", { defaultValue: "Mon-Fri" }),
      rating: 4.9,
      students: 45
    },
    {
      id: 2,
      name: t("coaches.coach_david_name", { defaultValue: "David Chen" }),
      title: t("coaches.coach_david_title", { defaultValue: "Youth Development Specialist" }),
      image: Image3,
      specialties: [
        t("coaches.coach_david_specialty_1", { defaultValue: "Youth Programs" }),
        t("coaches.coach_david_specialty_2", { defaultValue: "Fundamentals" }),
        t("coaches.coach_david_specialty_3", { defaultValue: "Character Building" })
      ],
      experience: t("coaches.coach_david_experience", { defaultValue: "12+ Years" }),
      achievements: [
        t("coaches.coach_david_achievement_1", { defaultValue: "Junior Coach of the Year" }),
        t("coaches.coach_david_achievement_2", { defaultValue: "USTA Certified" }),
        t("coaches.coach_david_achievement_3", { defaultValue: "Child Psychology Certified" })
      ],
      bio: t("coaches.coach_david_bio", { defaultValue: "David specializes in nurturing young talent and building strong foundations for lifelong tennis success." }),
      availability: t("coaches.coach_david_availability", { defaultValue: "Tue-Sat" }),
      rating: 4.8,
      students: 60
    },
    {
      id: 3,
      name: t("coaches.coach_sarah_name", { defaultValue: "Sarah Williams" }),
      title: t("coaches.coach_sarah_title", { defaultValue: "Adult & Beginner Coach" }),
      image: Image1,
      specialties: [
        t("coaches.coach_sarah_specialty_1", { defaultValue: "Adult Lessons" }),
        t("coaches.coach_sarah_specialty_2", { defaultValue: "Beginner Friendly" }),
        t("coaches.coach_sarah_specialty_3", { defaultValue: "Fitness Integration" })
      ],
      experience: t("coaches.coach_sarah_experience", { defaultValue: "10+ Years" }),
      achievements: [
        t("coaches.coach_sarah_achievement_1", { defaultValue: "Adult Program Director" }),
        t("coaches.coach_sarah_achievement_2", { defaultValue: "Fitness Certified" }),
        t("coaches.coach_sarah_achievement_3", { defaultValue: "PTR Professional" })
      ],
      bio: t("coaches.coach_sarah_bio", { defaultValue: "Sarah excels at making tennis accessible and enjoyable for adult learners and beginners of all ages." }),
      availability: t("coaches.coach_sarah_availability", { defaultValue: "Wed-Sun" }),
      rating: 4.7,
      students: 38
    },
    {
      id: 4,
      name: t("coaches.coach_marcus_name", { defaultValue: "Marcus Johnson" }),
      title: t("coaches.coach_marcus_title", { defaultValue: "High Performance Coach" }),
      image: Image2,
      specialties: [
        t("coaches.coach_marcus_specialty_1", { defaultValue: "KUZO Training" }),
        t("coaches.coach_marcus_specialty_2", { defaultValue: "Strength & Conditioning" }),
        t("coaches.coach_marcus_specialty_3", { defaultValue: "Competition Strategy" })
      ],
      experience: t("coaches.coach_marcus_experience", { defaultValue: "18+ Years" }),
      achievements: [
        t("coaches.coach_marcus_achievement_1", { defaultValue: "Former College Coach" }),
        t("coaches.coach_marcus_achievement_2", { defaultValue: "Olympic Training Center" }),
        t("coaches.coach_marcus_achievement_3", { defaultValue: "Sports Science PhD" })
      ],
      bio: t("coaches.coach_marcus_bio", { defaultValue: "Marcus pushes KUZO players to their highest potential with cutting-edge training methodologies." }),
      availability: t("coaches.coach_marcus_availability", { defaultValue: "Mon-Thu" }),
      rating: 5.0,
      students: 25
    }
  ];

  return (
    <section id="coaches" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={tennisBallImage}
          alt="Tennis Ball" 
          className="absolute top-16 right-5 w-16 h-16 sm:w-28 sm:h-28 animate-geometric-float" 
        />
        <div className="absolute bottom-20 left-10 w-12 h-12 sm:w-20 sm:h-20 bg-accent/15 rotate-12 animate-hero-float" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <Badge variant="secondary" className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
            {t("coaches.section_badge", { defaultValue: "👥 Meet Our Champions" })}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6">
            {t("coaches.section_title_line1", { defaultValue: "World-Class" })}
            <span className="block text-accent-bright">
              {t("coaches.section_title_line2", { defaultValue: "Coaching Team" })}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("coaches.section_description", { defaultValue: "Learn from former professionals, certified experts, and passionate educators who are dedicated to unlocking your tennis potential." })}
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {coaches.map((coach, index) => (
            <Card 
              key={coach.id}
              className="group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedCoach(coach)}
            >
              <CardContent className="p-0">
                {/* Coach Photo */}
                <div className="relative overflow-hidden aspect-[3/4] rounded-t-lg">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                      <Button 
                        size="sm" 
                        className="w-full bg-accent hover:bg-accent-bright text-white font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-xs sm:text-sm"
                      >
                        {t("coaches.coach_profile_button", { defaultValue: "View Full Profile" })}
                      </Button>
                    </div>
                  </div>

                  {/* Availability Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <Badge className="bg-primary text-white border-none text-xs">
                      {coach.availability}
                    </Badge>
                  </div>
                </div>

                {/* Coach Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{coach.name}</h3>
                  <p className="text-accent font-medium mb-2 sm:mb-3 text-sm sm:text-base">{coach.title}</p>
                  
                  {/* Rating & Students */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500 text-sm">⭐</span>
                      <span className="text-xs sm:text-sm font-medium">{coach.rating}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {coach.students} {t("coaches.coach_rating", { defaultValue: "students" })}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-3 sm:mb-4">
                    <Badge variant="outline" className="text-xs">
                      {coach.experience}
                    </Badge>
                  </div>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-foreground">{t("coaches.coach_specialties", { defaultValue: "Specialties:" })}</h4>
                    <div className="flex flex-wrap gap-1">
                      {coach.specialties.slice(0, 2).map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {coach.specialties.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{coach.specialties.length - 2} {t("coaches.more_specialties", { defaultValue: "more" })}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coach Matching CTA */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                {t("coaches.match_title", { defaultValue: "Find Your Perfect Coach" })}
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                {t("coaches.match_description", { defaultValue: "Take our quick assessment to match with the ideal coach for your goals, playing style, and schedule preferences." })}
              </p>
              <Button 
                size="sm"
                className="bg-accent hover:bg-accent-bright text-white font-bold px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg transition-all duration-300 hover:scale-105"
              >
                {t("coaches.match_quiz", { defaultValue: "Start Coach Matching Quiz" })}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Coach Profile Modal (Basic - would use proper modal library) */}
      {selectedCoach && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCoach(null)}
        >
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardContent className="p-0">
              <div className="relative h-48 sm:h-64">
                <img
                  src={selectedCoach.image}
                  alt={selectedCoach.name}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 border-white/30 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCoach(null);
                  }}
                >
                  ✕
                </Button>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{selectedCoach.name}</h2>
                <p className="text-accent font-medium text-base sm:text-lg mb-3 sm:mb-4">{selectedCoach.title}</p>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{selectedCoach.bio}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">{t("coaches.achievements", { defaultValue: "Achievements" })}</h4>
                    <ul className="space-y-1">
                      {selectedCoach.achievements.map((achievement, i) => (
                        <li key={i} className="text-xs sm:text-sm text-muted-foreground">• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">{t("coaches.all_specialties", { defaultValue: "All Specialties" })}</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {selectedCoach.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{specialty}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <PopupButton
                    url="https://calendly.com/kuzotennis/30min"
                    rootElement={document.getElementById("root")}
                    text={t("coaches.book_consultation", { defaultValue: "Book Consultation" })}
                    className="flex-1 bg-accent hover:bg-accent-bright text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-md text-sm sm:text-base"
                    prefill={{
                      name: "",
                      email: "",
                      customAnswers: {
                        a1: `Booking consultation with ${selectedCoach.name}`
                      }
                    }}
                  />
                  <Button variant="outline" className="flex-1 text-sm sm:text-base">
                    {t("coaches.send_message", { defaultValue: "Send Message" })}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default Coaches;