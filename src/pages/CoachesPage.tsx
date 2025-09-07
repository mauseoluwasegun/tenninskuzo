import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Calendar, 
  Star, 
  Users, 
  Award, 
  Filter,
  Video,
  MessageCircle,
  BookOpen,
  Zap,
  Globe,
  Clock,
  Trophy,
  Mail
} from "lucide-react";
import tennisCoach from "@/assets/tennis-coach.jpg";
import coach1Image from "@/assets/coaches/1.jpg";
import coach32Image from "@/assets/coaches/32.jpg";
import coach33Image from "@/assets/coaches/33.jpg";
import mohammedBashiruImage from "@/assets/coaches/Mohammed Bashiru.png";
import coachImage from "@/assets/coaches/coach-1.jpg";
import singleCoach5Image from "@/assets/coaches/single coaches 5.jpg";
import { PopupButton } from "react-calendly";
import { useTranslation } from "react-i18next";
import NewsletterSection from "@/components/newsletter/NewsletterSection";

const CoachesPage = () => {
  const { t } = useTranslation();
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const coaches = [
    {
      id: 1,
      name: t("coaches.coach_maria_name", { defaultValue: "Mohammed Bashiru" }),
      title: t("coaches.coach_maria_title", { defaultValue: "Head Coach & Former ATP Pro" }),
      image: mohammedBashiruImage,
      specialties: [
        t("coaches.coach_maria_specialty_1", { defaultValue: "Advanced Technique" }),
        t("coaches.coach_maria_specialty_2", { defaultValue: "Mental Training" }),
        t("coaches.coach_maria_specialty_3", { defaultValue: "Tournament Prep" }),
        t("coaches.specialty_video_analysis", { defaultValue: "Video Analysis" })
      ],
      experience: t("coaches.coach_maria_experience", { defaultValue: "15+ Years" }),
      achievements: [
        t("coaches.coach_maria_achievement_1", { defaultValue: "Former WTA Top 50" }),
        t("coaches.coach_maria_achievement_2", { defaultValue: "Davis Cup Coach" }),
        t("coaches.coach_maria_achievement_3", { defaultValue: "USPTA Certified" })
      ],
      bio: t("coaches.coach_maria_bio_detailed", { defaultValue: "Maria brings world-class expertise from her professional playing career and has coached over 30 junior champions to national rankings. She specializes in advanced technique development and mental conditioning for high-performance players." }),
      availability: t("coaches.coach_maria_availability", { defaultValue: "Mon-Fri" }),
      rating: 4.9,
      students: 45,
      onlineAvailable: true,
      videoSessions: 250,
      languages: [t("languages.english", { defaultValue: "English" }), t("languages.spanish", { defaultValue: "Spanish" })]
    },
    {
      id: 2,
      name: t("coaches.coach_david_name", { defaultValue: "David Chen" }),
      title: t("coaches.coach_david_title", { defaultValue: "Youth Development Specialist" }),
      image: coach1Image,
      specialties: [
        t("coaches.coach_david_specialty_1", { defaultValue: "Youth Programs" }),
        t("coaches.coach_david_specialty_2", { defaultValue: "Fundamentals" }),
        t("coaches.coach_david_specialty_3", { defaultValue: "Character Building" }),
        t("coaches.specialty_online_coaching", { defaultValue: "Online Coaching" })
      ],
      experience: t("coaches.coach_david_experience", { defaultValue: "12+ Years" }),
      achievements: [
        t("coaches.coach_david_achievement_1", { defaultValue: "Junior Coach of the Year" }),
        t("coaches.coach_david_achievement_2", { defaultValue: "USTA Certified" }),
        t("coaches.coach_david_achievement_3", { defaultValue: "Child Psychology Certified" })
      ],
      bio: t("coaches.coach_david_bio_detailed", { defaultValue: "David specializes in nurturing young talent and building strong foundations for lifelong tennis success. His patient approach and innovative teaching methods make learning enjoyable for children of all skill levels." }),
      availability: t("coaches.coach_david_availability", { defaultValue: "Tue-Sat" }),
      rating: 4.8,
      students: 60,
      onlineAvailable: true,
      videoSessions: 320,
      languages: [t("languages.english", { defaultValue: "English" }), t("languages.mandarin", { defaultValue: "Mandarin" })]
    },
    {
      id: 3,
      name: t("coaches.coach_sarah_name", { defaultValue: "Sarah Williams" }),
      title: t("coaches.coach_sarah_title", { defaultValue: "Adult & Beginner Coach" }),
      image: coachImage,
      specialties: [
        t("coaches.coach_sarah_specialty_1", { defaultValue: "Adult Lessons" }),
        t("coaches.coach_sarah_specialty_2", { defaultValue: "Beginner Friendly" }),
        t("coaches.coach_sarah_specialty_3", { defaultValue: "Fitness Integration" }),
        t("coaches.specialty_virtual_training", { defaultValue: "Virtual Training" })
      ],
      experience: t("coaches.coach_sarah_experience", { defaultValue: "10+ Years" }),
      achievements: [
        t("coaches.coach_sarah_achievement_1", { defaultValue: "Adult Program Director" }),
        t("coaches.coach_sarah_achievement_2", { defaultValue: "Fitness Certified" }),
        t("coaches.coach_sarah_achievement_3", { defaultValue: "PTR Professional" })
      ],
      bio: t("coaches.coach_sarah_bio_detailed", { defaultValue: "Sarah excels at making tennis accessible and enjoyable for adult learners and beginners of all ages. Her fitness-focused approach helps adults improve both their tennis skills and overall health." }),
      availability: t("coaches.coach_sarah_availability", { defaultValue: "Wed-Sun" }),
      rating: 4.7,
      students: 38,
      onlineAvailable: true,
      videoSessions: 180,
      languages: [t("languages.english", { defaultValue: "English" }), t("languages.french", { defaultValue: "French" })]
    },
    {
      id: 4,
      name: t("coaches.coach_marcus_name", { defaultValue: "Marcus Johnson" }),
      title: t("coaches.coach_marcus_title", { defaultValue: "High Performance Coach" }),
      image: coach32Image,
      specialties: [
        t("coaches.coach_marcus_specialty_1", { defaultValue: "KUZO Training" }),
        t("coaches.coach_marcus_specialty_2", { defaultValue: "Strength & Conditioning" }),
        t("coaches.coach_marcus_specialty_3", { defaultValue: "Competition Strategy" }),
        t("coaches.specialty_biomechanics", { defaultValue: "Biomechanics" })
      ],
      experience: t("coaches.coach_marcus_experience", { defaultValue: "18+ Years" }),
      achievements: [
        t("coaches.coach_marcus_achievement_1", { defaultValue: "Former College Coach" }),
        t("coaches.coach_marcus_achievement_2", { defaultValue: "Olympic Training Center" }),
        t("coaches.coach_marcus_achievement_3", { defaultValue: "Sports Science PhD" })
      ],
      bio: t("coaches.coach_marcus_bio_detailed", { defaultValue: "Marcus pushes KUZO players to their highest potential with cutting-edge training methodologies. His scientific approach combines biomechanics analysis with personalized training programs." }),
      availability: t("coaches.coach_marcus_availability", { defaultValue: "Mon-Thu" }),
      rating: 5.0,
      students: 25,
      onlineAvailable: false,
      videoSessions: 0,
      languages: [t("languages.english", { defaultValue: "English" })]
    },
    {
      id: 5,
      name: t("coaches.coach_elena_name", { defaultValue: "Elena Petrova" }),
      title: t("coaches.coach_elena_title", { defaultValue: "Technique Specialist" }),
      image: coach33Image,
      specialties: [
        t("coaches.specialty_stroke_development", { defaultValue: "Stroke Development" }),
        t("coaches.specialty_video_analysis", { defaultValue: "Video Analysis" }),
        t("coaches.specialty_online_coaching", { defaultValue: "Online Coaching" }),
        t("coaches.specialty_tennis_biomechanics", { defaultValue: "Tennis Biomechanics" })
      ],
      experience: t("coaches.coach_elena_experience", { defaultValue: "14+ Years" }),
      achievements: [
        t("coaches.coach_elena_achievement_1", { defaultValue: "Former WTA Coach" }),
        t("coaches.coach_elena_achievement_2", { defaultValue: "Biomechanics Specialist" }),
        t("coaches.coach_elena_achievement_3", { defaultValue: "Video Analysis Expert" })
      ],
      bio: t("coaches.coach_elena_bio", { defaultValue: "Elena focuses on perfecting technique through detailed video analysis and biomechanics. Her online coaching sessions have helped players worldwide improve their strokes and movement patterns." }),
      availability: t("coaches.coach_elena_availability", { defaultValue: "Mon-Wed-Fri" }),
      rating: 4.9,
      students: 52,
      onlineAvailable: true,
      videoSessions: 410,
      languages: [t("languages.english", { defaultValue: "English" }), t("languages.russian", { defaultValue: "Russian" })]
    },
    {
      id: 6,
      name: t("coaches.coach_james_name", { defaultValue: "James Wilson" }),
      title: t("coaches.coach_james_title", { defaultValue: "Mental Game Coach" }),
      image: singleCoach5Image,
      specialties: [
        t("coaches.specialty_sports_psychology", { defaultValue: "Sports Psychology" }),
        t("coaches.specialty_performance_coaching", { defaultValue: "Performance Coaching" }),
        t("coaches.specialty_virtual_sessions", { defaultValue: "Virtual Sessions" }),
        t("coaches.specialty_mental_toughness", { defaultValue: "Mental Toughness" })
      ],
      experience: t("coaches.coach_james_experience", { defaultValue: "11+ Years" }),
      achievements: [
        t("coaches.coach_james_achievement_1", { defaultValue: "Sports Psychology PhD" }),
        t("coaches.coach_james_achievement_2", { defaultValue: "Olympic Consultant" }),
        t("coaches.coach_james_achievement_3", { defaultValue: "Mental Game Specialist" })
      ],
      bio: t("coaches.coach_james_bio", { defaultValue: "James helps players develop mental toughness and peak performance mindset. His virtual sessions are designed to build confidence, focus, and resilience under pressure." }),
      availability: t("coaches.coach_james_availability", { defaultValue: "Tue-Thu-Sat" }),
      rating: 4.8,
      students: 35,
      onlineAvailable: true,
      videoSessions: 280,
      languages: [t("languages.english", { defaultValue: "English" })]
    }
  ];

  // Get all unique specialties for filter
  const allSpecialties = [...new Set(coaches.flatMap(coach => coach.specialties))];

  // Filter coaches based on search and specialty
  const filteredCoaches = coaches.filter(coach => {
    const matchesSearch = searchQuery === "" || 
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.specialties.some(specialty => 
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    const matchesSpecialty = selectedSpecialty === "all" || 
      coach.specialties.includes(selectedSpecialty);
    
    return matchesSearch && matchesSpecialty;
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20 text-lg py-2 px-4">
              {t("coaches.section_badge", { defaultValue: "👥 Meet Our Champions" })}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="block">{t("coaches.section_title_line1", { defaultValue: "World-Class" })}</span>
              <span className="block text-green-400 mt-2">{t("coaches.section_title_line2", { defaultValue: "Coaching Team" })}</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t("coaches.section_description_detailed", { defaultValue: "Learn from former professionals, certified experts, and passionate educators who are dedicated to unlocking your tennis potential. Book online sessions with coaches available for virtual training." })}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder={t("coaches.search_placeholder", { defaultValue: "Search coaches, specialties, or programs..." })}
                className="w-full pl-12 pr-4 py-4 text-lg rounded-full bg-white/90 backdrop-blur-sm border-none shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Stats Bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-black text-white">50+</div>
                  <div className="text-sm text-white/80">{t("coaches.stats_certified_coaches", { defaultValue: "Certified Coaches" })}</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-black text-white">98%</div>
                  <div className="text-sm text-white/80">{t("coaches.stats_satisfaction_rate", { defaultValue: "Satisfaction Rate" })}</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-black text-white">15+</div>
                  <div className="text-sm text-white/80">{t("coaches.stats_years_experience", { defaultValue: "Years Experience" })}</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-black text-white">5000+</div>
                  <div className="text-sm text-white/80">{t("coaches.stats_video_sessions", { defaultValue: "Video Sessions" })}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">{t("coaches.filter_by", { defaultValue: "Filter by:" })}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedSpecialty === "all" ? "default" : "outline"}
                className={selectedSpecialty === "all" ? "bg-primary text-white" : ""}
                onClick={() => setSelectedSpecialty("all")}
              >
                {t("coaches.filter_all", { defaultValue: "All Specialties" })}
              </Button>
              
              {allSpecialties.slice(0, 5).map((specialty, index) => (
                <Button
                  key={index}
                  variant={selectedSpecialty === specialty ? "default" : "outline"}
                  className={selectedSpecialty === specialty ? "bg-primary text-white" : ""}
                  onClick={() => setSelectedSpecialty(specialty)}
                >
                  {specialty}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">{t("coaches.loading_coaches", { defaultValue: "Loading our champion coaches..." })}</p>
            </div>
          ) : filteredCoaches.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🎾</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t("coaches.no_coaches_found", { defaultValue: "No coaches found" })}</h3>
              <p className="text-muted-foreground">{t("coaches.no_coaches_found_description", { defaultValue: "Try adjusting your search or filter criteria" })}</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  {t("coaches.found_coaches", { defaultValue: "Found {{count}} coaches", count: filteredCoaches.length })}
                </h2>
              </div>
              
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCoaches.map((coach) => (
                  <motion.div
                    key={coach.id}
                    variants={item}
                    className="h-full"
                  >
                    <Card className="h-full group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0 h-full flex flex-col">
                        {/* Coach Image */}
                        <div className="relative">
                          <img
                            src={coach.image}
                            alt={coach.name}
                            className="w-full h-64 object-cover"
                          />
                          
                          {/* Availability Badge */}
                          <Badge className="absolute top-4 right-4 bg-white text-foreground">
                            {coach.availability}
                          </Badge>
                          
                          {/* Online Availability */}
                          {coach.onlineAvailable && (
                            <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                              <Video className="w-3 h-3 mr-1 inline" />
                              {t("coaches.online_available", { defaultValue: "Online" })}
                            </Badge>
                          )}
                        </div>
                        
                        {/* Coach Info */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-foreground mb-1">{coach.name}</h3>
                          <p className="text-primary font-medium mb-3">{coach.title}</p>
                          
                          {/* Rating */}
                          <div className="flex items-center mb-3">
                            <div className="flex text-yellow-500">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(coach.rating) ? 'fill-current' : ''}`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm font-medium">{coach.rating}</span>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">
                              {coach.students} {t("coaches.students", { defaultValue: "students" })}
                            </span>
                          </div>
                          
                          {/* Experience */}
                          <div className="mb-4">
                            <Badge variant="secondary">{coach.experience}</Badge>
                          </div>
                          
                          {/* Specialties */}
                          <div className="mb-4 flex-1">
                            <h4 className="text-sm font-semibold text-foreground mb-2">
                              {t("coaches.specialties", { defaultValue: "Specialties:" })}
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {coach.specialties.slice(0, 3).map((specialty, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                              {coach.specialties.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{coach.specialties.length - 3} {t("coaches.more", { defaultValue: "more" })}
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          {/* Languages */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-foreground mb-2">
                              {t("coaches.languages", { defaultValue: "Languages:" })}
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {coach.languages.map((language, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  <Globe className="w-3 h-3 mr-1 inline" />
                                  {language}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex gap-2 mt-auto">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              onClick={() => setSelectedCoach(coach)}
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              {t("coaches.view_profile", { defaultValue: "View Profile" })}
                            </Button>
                            <PopupButton
                              url="https://calendly.com/kuzotennis/30min"
                              rootElement={document.getElementById("root")}
                              text={t("coaches.book_session", { defaultValue: "Book" })}
                              className="flex-1 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm"
                              prefill={{
                                name: "",
                                email: "",
                                customAnswers: {
                                  a1: `Booking session with ${coach.name}`
                                }
                              }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* Coach Profile Modal */}
      <AnimatePresence>
        {selectedCoach && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCoach(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="relative">
                  <img
                    src={selectedCoach.image}
                    alt={selectedCoach.name}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedCoach(null)}
                  >
                    ✕
                  </Button>
                </div>
                
                <div className="p-8">
                  {/* Coach Info */}
                  <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="md:w-1/3">
                      <h2 className="text-3xl font-bold text-foreground mb-2">{selectedCoach.name}</h2>
                      <p className="text-primary font-medium text-lg mb-4">{selectedCoach.title}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < Math.floor(selectedCoach.rating) ? 'fill-current' : ''}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-lg font-medium">{selectedCoach.rating}</span>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-muted-foreground">
                          {selectedCoach.students} {t("coaches.students", { defaultValue: "students" })}
                        </span>
                      </div>
                      
                      {/* Experience & Availability */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-muted-foreground mr-3" />
                          <span>{selectedCoach.experience}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-muted-foreground mr-3" />
                          <span>{selectedCoach.availability}</span>
                        </div>
                        {selectedCoach.onlineAvailable && (
                          <div className="flex items-center">
                            <Video className="w-5 h-5 text-muted-foreground mr-3" />
                            <span className="text-green-600 font-medium">{t("coaches.online_available", { defaultValue: "Online Sessions Available" })}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Languages */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-2">{t("coaches.languages", { defaultValue: "Languages:" })}</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCoach.languages.map((language, i) => (
                            <Badge key={i} variant="secondary">
                              <Globe className="w-4 h-4 mr-1 inline" />
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Booking Buttons */}
                      <div className="space-y-3">
                        <PopupButton
                          url="https://calendly.com/kuzotennis/30min"
                          rootElement={document.getElementById("root")}
                          text={t("coaches.book_in_person", { defaultValue: "Book In-Person Session" })}
                          className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md"
                          prefill={{
                            name: "",
                            email: "",
                            customAnswers: {
                              a1: `Booking in-person session with ${selectedCoach.name}`
                            }
                          }}
                        />
                        {selectedCoach.onlineAvailable && (
                          <PopupButton
                            url="https://calendly.com/kuzotennis/30min"
                            rootElement={document.getElementById("root")}
                            text={t("coaches.book_online", { defaultValue: "Book Online Session" })}
                            className="w-full bg-secondary hover:bg-secondary/90 text-foreground px-4 py-3 rounded-md"
                            prefill={{
                              name: "",
                              email: "",
                              customAnswers: {
                                a1: `Booking online session with ${selectedCoach.name}`
                              }
                            }}
                          />
                        )}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-foreground mb-4">{t("coaches.biography", { defaultValue: "Biography" })}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {selectedCoach.bio}
                      </p>
                      
                      <h3 className="text-xl font-bold text-foreground mb-4">{t("coaches.achievements", { defaultValue: "Achievements" })}</h3>
                      <ul className="space-y-2 mb-6">
                        {selectedCoach.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <Award className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="text-xl font-bold text-foreground mb-4">{t("coaches.all_specialties", { defaultValue: "All Specialties" })}</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedCoach.specialties.map((specialty, i) => (
                          <Badge key={i} variant="secondary" className="text-sm py-2 px-3">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      {selectedCoach.videoSessions > 0 && (
                        <div className="bg-secondary/20 rounded-lg p-4">
                          <div className="flex items-center">
                            <Video className="w-5 h-5 text-primary mr-2" />
                            <span className="font-medium">
                              {t("coaches.video_sessions_count", { defaultValue: "{{count}}+ Video Sessions Conducted", count: selectedCoach.videoSessions })}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <NewsletterSection />
    </div>
  );
};

export default CoachesPage;