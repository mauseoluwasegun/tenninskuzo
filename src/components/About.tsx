import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TennisScene3D from "@/components/models/about/TennisScene3D";
import mohammedBashiruImage from "@/assets/images/Mohammed Bashiru.png";
import tennisCoachVideo from '../assets/video/6.mp4';
import { useState } from "react";
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();
  const [currentMilestone, setCurrentMilestone] = useState(0);

  const milestones = [
    {
      year: "2014",
      title: t("about.milestone_2014_title", { defaultValue: "Academy Founded" }),
      description: t("about.milestones.founded", { defaultValue: "Mohammed Bashiru opened the first KUZO Tennis Academy with a vision to create champions" }),
      achievement: "First 10 students enrolled"
    },
    {
      year: "2016",
      title: t("about.milestone_2016_title", { defaultValue: "First Tournament Wins" }),
      description: "Our students began competing and winning local tournaments",
      achievement: "5 tournament victories"
    },
    {
      year: "2018",
      title: t("about.milestone_2018_title", { defaultValue: "Professional Recognition" }),
      description: "Academy received certification and expanded coaching team",
      achievement: "100+ active students"
    },
    {
      year: "2020",
      title: t("about.milestone_2020_title", { defaultValue: "Digital Innovation" }),
      description: "Introduced online coaching and virtual training programs",
      achievement: "Reached 200+ students globally"
    },
    {
      year: "2023",
      title: t("about.milestone_2023_title", { defaultValue: "Championship Facility" }),
      description: "Completed state-of-the-art facility with 6 premium courts",
      achievement: "15+ ranked junior players"
    },
    {
      year: "2024",
      title: t("about.milestone_2024_title", { defaultValue: "Future Vision" }),
      description: "Expanding community programs and advanced training methods",
      achievement: "Award-winning excellence"
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50 relative overflow-hidden">
      <div className="responsive-container max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm md:text-base px-3 py-1 sm:px-4 sm:py-1.5 lg:px-5 lg:py-2">
            {t("about.section_badge", { defaultValue: "🎾 About Our Academy" })}
          </Badge>
          <h2 className="responsive-heading text-foreground mb-4 sm:mb-6">
            {t("about.section_title", { defaultValue: "Where Champions Are Made" })}
          </h2>
          <p className="responsive-text text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto">
            {t("about.section_description", { defaultValue: "Discover our world-class facilities, expert coaching staff, and proven training programs designed to develop tennis champions at every level." })}
          </p>
        </div>

        <div className="responsive-grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="responsive-subheading text-foreground mb-3 sm:mb-4 lg:mb-6">{t("about.story_title", { defaultValue: "Our Story" })}</h3>
            <p className="responsive-text text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              {t("about.story_description_1", { defaultValue: "Founded by former professional tennis player Mohammed Bashiru, Tennis Academy has been developing champions for over a decade. Our innovative approach combines traditional coaching techniques with modern technology and sports science." })}
            </p>
            <p className="responsive-text text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              {t("about.story_description_2", { defaultValue: "With state-of-the-art facilities and a team of certified coaches, we provide personalized training programs for players of all ages and skill levels." })}
            </p>
            <Button asChild size="lg" className="touch-friendly w-full sm:w-auto font-medium hover:scale-105 transition-transform duration-200">
              <Link to="/about" className="bg-primary hover:bg-primary/90 text-white">
                {t("about.learn_more", { defaultValue: "Learn More About Us" })}
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute top-1/2 left-1/3 w-32 h-32 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-primary/5 rounded-full blur-sm transform -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-accent/5 rounded-full blur-sm animate-pulse-glow transform -translate-y-1/2 z-0"></div>
            <video
              src={tennisCoachVideo}
              className="relative rounded-2xl shadow-2xl w-full h-full object-cover z-10"
              autoPlay
              muted
              loop
              playsInline
              onError={(e) => console.log('Video error:', e)}
              onLoadedData={() => console.log('Video loaded successfully')}
            />
          </div>
        </div>

        {/* 3D Tennis Scene - re-enabled */}
        <div className="my-8 sm:my-12 md:my-16 lg:my-20">
          <TennisScene3D />
        </div>

        {/* Interactive Timeline */}
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <Card className="responsive-card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="mobile-first lg:p-8 xl:p-10">
              <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-10 xl:gap-16">
                {/* Timeline Navigation */}
                <div className="w-full lg:w-1/3">
                  <h3 className="responsive-subheading text-foreground mb-4 sm:mb-6">{t("about.milestones_title", { defaultValue: "Academy Milestones" })}</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {milestones.map((milestone, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrentMilestone(index)}
                        className={`touch-friendly cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02] ${
                          currentMilestone === index 
                            ? 'bg-accent/20 border-l-4 border-accent shadow-lg' 
                            : 'bg-muted/50 hover:bg-muted/80'
                        }`}
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0 ${
                            currentMilestone === index ? 'bg-accent animate-pulse' : 'bg-muted-foreground/50'
                          }`} />
                          <div>
                            <div className="font-bold text-foreground text-base sm:text-lg">{milestone.year}</div>
                            <div className="text-sm sm:text-base text-muted-foreground mt-1">{milestone.title}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current Milestone Display */}
                <div className="w-full lg:w-2/3">
                  <div className="text-center lg:text-left bg-white/50 rounded-xl mobile-first lg:p-8 xl:p-10">
                    <Badge className="mb-4 sm:mb-5 bg-accent text-white responsive-text px-4 py-1.5">{milestones[currentMilestone].year}</Badge>
                    <h4 className="responsive-subheading text-foreground mb-4 sm:mb-6">
                      {milestones[currentMilestone].title}
                    </h4>
                    <p className="responsive-text text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                      {milestones[currentMilestone].description}
                    </p>
                    <div className="inline-flex items-center space-x-3 touch-friendly bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <span className="text-xl sm:text-2xl">{t("emojis.trophy", { defaultValue: "🏆" })}</span>
                      <span className="font-medium text-primary responsive-text">{milestones[currentMilestone].achievement}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Founder Story & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {/* Founder Story */}
          <Card className="border-border/50 hover:border-accent/30 transition-colors">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="text-center mb-8 sm:mb-10">
                <div className="relative inline-block">
                  <img 
                    src={mohammedBashiruImage} 
                    alt={`${t("about.founder_name", { defaultValue: "Mohammed Bashiru" })} - ${t("about.founder_title", { defaultValue: "Founder" })}`} 
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover mx-auto mb-4 sm:mb-6 border-4 border-accent/30 shadow-xl" 
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                    <span className="text-white text-sm sm:text-base lg:text-lg font-bold">{t("emojis.star", { defaultValue: "★" })}</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3">{t("about.founder_name", { defaultValue: "Mohammed Bashiru" })}</h3>
                <p className="text-accent font-medium text-base sm:text-lg">{t("about.founder_title", { defaultValue: "Founder & Head Coach" })}</p>
              </div>
              
              <blockquote className="text-muted-foreground italic mb-6 sm:mb-8 text-center leading-relaxed text-base sm:text-lg lg:text-xl">
                {t("about.founder_quote", { defaultValue: "\"My dream was simple: create a place where passion meets excellence, where every student can discover their champion within.\"" })}
              </blockquote>
              
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg">
                <div className="flex items-center space-x-4 p-3 sm:p-4 rounded-lg hover:bg-accent/5 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center text-base sm:text-lg shadow-sm">
                    {t("emojis.tennis", { defaultValue: "🎾" })}
                  </div>
                  <span className="font-medium">{t("about.founder_achievement_1", { defaultValue: "Former WTA Top 50 Professional Player" })}</span>
                </div>
                <div className="flex items-center space-x-4 p-3 sm:p-4 rounded-lg hover:bg-accent/5 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center text-base sm:text-lg shadow-sm">
                    {t("emojis.trophy", { defaultValue: "🏆" })}
                  </div>
                  <span className="font-medium">{t("about.founder_achievement_2", { defaultValue: "15+ Years of Coaching Excellence" })}</span>
                </div>
                <div className="flex items-center space-x-4 p-3 sm:p-4 rounded-lg hover:bg-accent/5 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center text-base sm:text-lg shadow-sm">
                    {t("emojis.graduate", { defaultValue: "👨‍🎓" })}
                  </div>
                  <span className="font-medium">{t("about.founder_achievement_3", { defaultValue: "500+ Students Mentored to Success" })}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academy Values */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8">{t("about.values_title", { defaultValue: "Our Core Values" })}</h3>
            
            {[
              {
                icon: t("emojis.strength", { defaultValue: "💪" }),
                title: t("about.value_excellence_title", { defaultValue: "Excellence" }),
                description: t("about.value_excellence_description", { defaultValue: "Striving for the highest standards in everything we do, from coaching techniques to student care." })
              },
              {
                icon: t("emojis.heart", { defaultValue: "❤️" }),
                title: t("about.value_passion_title", { defaultValue: "Passion" }),
                description: t("about.value_passion_description", { defaultValue: "Fostering a genuine love for tennis that goes beyond winning and creates lifelong enthusiasts." })
              },
              {
                icon: t("emojis.handshake", { defaultValue: "🤝" }),
                title: t("about.value_community_title", { defaultValue: "Community" }),
                description: t("about.value_community_description", { defaultValue: "Building strong relationships between students, families, and coaches that extend beyond the court." })
              },
              {
                icon: t("emojis.star2", { defaultValue: "🌟" }),
                title: t("about.value_growth_title", { defaultValue: "Growth" }),
                description: t("about.value_growth_description", { defaultValue: "Continuous improvement for both our students and academy, always reaching for new heights." })
              }
            ].map((value, index) => (
              <Card key={index} className="border-border/50 group hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">{value.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academy Statistics */}
        <div className="responsive-grid sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {[
            { number: "500+", label: t("about.stats_students", { defaultValue: "Students Trained" }), icon: t("emojis.graduate", { defaultValue: "👨‍🎓" }) },
            { number: "15+", label: t("about.stats_coaches", { defaultValue: "Expert Coaches" }), icon: t("emojis.target", { defaultValue: "🎯" }) },
            { number: "10", label: t("about.stats_years", { defaultValue: "Years Excellence" }), icon: t("emojis.calendar", { defaultValue: "📅" }) },
            { number: "30+", label: t("about.stats_champions", { defaultValue: "Champions Created" }), icon: t("emojis.trophy", { defaultValue: "🏆" }) }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-4 sm:p-6 border-border/50 hover:border-accent/30 transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-accent-bright mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;