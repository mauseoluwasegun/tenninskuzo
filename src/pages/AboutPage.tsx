import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import tennisCoach from "@/assets/tennis-coach.jpg";
import mohammedBashiruImage from "@/assets/images/Mohammed Bashiru.png";
import { Link } from 'react-router-dom';
import TennisScene3D from "@/components/models/about/TennisScene3D"; // Re-enabled
import { PopupButton } from "react-calendly";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const [stats, setStats] = useState([
    { number: 10, label: t("about.stats_years", { defaultValue: "Years of Excellence" }), suffix: "+" },
    { number: 500, label: t("about.stats_students", { defaultValue: "Students Trained" }), suffix: "+" },
    { number: 50, label: t("about.stats_champions", { defaultValue: "Champions Created" }), suffix: "+" },
    { number: 95, label: t("about.stats_success_rate", { defaultValue: "Success Rate" }), suffix: "%" }
  ]);

  const milestones = [
    {
      year: "2014",
      title: t("about.milestone_2014_title", { defaultValue: "First Court, First Dream" }),
      description: t("about.milestones.founded", { defaultValue: "Academy founding with single court and a vision to create champions" }),
      achievement: t("about.milestone_2014_achievement", { defaultValue: "First 10 students enrolled" })
    },
    {
      year: "2016",
      title: t("about.milestone_2016_title", { defaultValue: "Growing Champions" }),
      description: t("about.milestone_2016_description", { defaultValue: "Second court added and first tournament wins" }),
      achievement: t("about.milestone_2016_achievement", { defaultValue: "5 tournament victories" })
    },
    {
      year: "2018",
      title: t("about.milestone_2018_title", { defaultValue: "Professional Recognition" }),
      description: t("about.milestone_2018_description", { defaultValue: "Certification and coach expansion" }),
      achievement: t("about.milestone_2018_achievement", { defaultValue: "100+ active students" })
    },
    {
      year: "2020",
      title: t("about.milestone_2020_title", { defaultValue: "Digital Innovation" }),
      description: t("about.milestone_2020_description", { defaultValue: "Online coaching and virtual training" }),
      achievement: t("about.milestone_2020_achievement", { defaultValue: "Reached 200+ students globally" })
    },
    {
      year: "2023",
      title: t("about.milestone_2023_title", { defaultValue: "Championship Facility" }),
      description: t("about.milestone_2023_description", { defaultValue: "State-of-the-art facility completion" }),
      achievement: t("about.milestone_2023_achievement", { defaultValue: "15+ ranked junior players" })
    },
    {
      year: "2024",
      title: t("about.milestone_2024_title", { defaultValue: "Future Vision" }),
      description: t("about.milestone_2024_description", { defaultValue: "Expansion plans and community programs" }),
      achievement: t("about.milestone_2024_achievement", { defaultValue: "Award-winning excellence" })
    }
  ];

  // Animation controls
  const heroRef = useRef(null);
  const isInView = useInView(heroRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMilestone((prev) => (prev + 1) % milestones.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Tennis ball animation for scroll indicator
  const bounceAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Tennis Court Lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border-4 border-white/20 rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 border-2 border-white/20 rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/5 h-1/5 border border-white/20 rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20 text-lg py-2 px-4">
                {t("about.section_badge", { defaultValue: "🏆 Our Champion Story" })}
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-black text-white mb-6"
            >
              <span className="block">{t("about.story_title", { defaultValue: "Our Champion Story" })}</span>
              <span className="block text-green-400 mt-2">{t("about.section_title", { defaultValue: "Where Champions Are Made" })}</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {t("about.story_description_1", { defaultValue: "From humble beginnings to championship excellence, discover the passionate story behind KUZO Tennis Academy and our mission to develop tennis champions." })}
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full">
                {t("about.learn_more", { defaultValue: "Discover Our Story" })}
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                {t("navigation.coaches", { defaultValue: "Meet Our Coaches" })}
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator with Tennis Ball Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div 
            animate={bounceAnimation}
            className="w-8 h-8 bg-green-500 rounded-full mb-2 flex items-center justify-center"
          >
            <span className="text-white font-bold text-xs">🎾</span>
          </motion.div>
          <span className="text-white/80 text-sm">{t("common.scroll_explore", { defaultValue: "Scroll to explore" })}</span>
        </div>
      </section>

      {/* 3D Tennis Scene Section - re-enabled */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              {t("three_d_scene.title_badge", { defaultValue: "🎾 Interactive Experience" })}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              {t("three_d_scene.title", { defaultValue: "Explore Our Tennis World" })}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("three_d_scene.description", { defaultValue: "Experience our academy through this interactive 3D tennis court visualization" })}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TennisScene3D />
            <div className="text-center mt-4">
              <Button variant="outline" size="sm" className="bg-background">
                {t("three_d_scene.got_it", { defaultValue: "Got It!" })}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                {t("about.our_story_badge", { defaultValue: "📖 Our Journey" })}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                {t("about.story_title", { defaultValue: "Our Story" })}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t("about.story_description_1", { defaultValue: "Founded by former professional tennis player Mohammed Bashiru, Tennis Academy has been developing champions for over a decade. Our innovative approach combines traditional coaching techniques with modern technology and sports science." })}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("about.story_description_2", { defaultValue: "With state-of-the-art facilities and a team of certified coaches, we provide personalized training programs for players of all ages and skill levels." })}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  {t("about.learn_more", { defaultValue: "Learn More About Us" })}
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
                  {t("common.book_now", { defaultValue: "Book Now" })}
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={mohammedBashiruImage} 
                  alt={t("about.tennis_coach_alt", { defaultValue: "Tennis Coach" })} 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              {/* Founder Profile Card */}
              <Card className="absolute -bottom-8 -right-8 w-64 bg-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                      MR
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{t("about.founder_name", { defaultValue: "Mohammed Bashiru" })}</h3>
                      <p className="text-sm text-muted-foreground">{t("about.founder_title", { defaultValue: "Founder & Head Coach" })}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{t("about.founder_quote", { defaultValue: "My dream was simple: create a place where passion meets excellence, where every student can discover their champion within." })}"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Milestones and Academy Founded - Two Column Grid Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              {t("about.milestones_title", { defaultValue: "Academy Milestones" })}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
              {t("about.milestones_journey", { defaultValue: "Our Journey Through Time" })}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("about.milestones_description", { defaultValue: "Witness the evolution of our academy from a single court to a championship facility." })}
            </p>
          </div>
          
          {/* Two Column Grid: Milestones on Left, Academy Founded on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Academy Milestones Grid */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">{t("about.milestones_title", { defaultValue: "Academy Milestones" })}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Timeline Dot as decorative element */}
                    <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
                    
                    <div className="flex flex-col h-full">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-3 self-start">
                        {milestone.year}
                      </span>
                      <h4 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground mb-3 flex-grow text-sm">{milestone.description}</p>
                      <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 self-start text-xs">
                        {milestone.achievement}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column: Academy Founded Information */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">{t("about.milestone_2014_title", { defaultValue: "Academy Founded" })}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <span className="text-2xl font-black text-primary">2014</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">{t("about.milestone_2014_title", { defaultValue: "First Court, First Dream" })}</h4>
                    <p className="text-muted-foreground">
                      {t("about.milestones.founded", { defaultValue: "Academy founding with single court and a vision to create champions" })}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                      MR
                    </div>
                    <div>
                      <h5 className="font-bold text-foreground">{t("about.founder_name", { defaultValue: "Mohammed Bashiru" })}</h5>
                      <p className="text-sm text-muted-foreground">{t("about.founder_title", { defaultValue: "Founder & Head Coach" })}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{t("about.founder_quote", { defaultValue: "My dream was simple: create a place where passion meets excellence, where every student can discover their champion within." })}"
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="text-2xl font-black text-primary mb-1">1</div>
                    <div className="text-sm text-muted-foreground">{t("about.founded_courts", { defaultValue: "Initial Court" })}</div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="text-2xl font-black text-primary mb-1">10</div>
                    <div className="text-sm text-muted-foreground">{t("about.founded_students", { defaultValue: "First Students" })}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              {t("about.values_badge", { defaultValue: "🎯 Our Philosophy" })}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              {t("about.values_title", { defaultValue: "Our Core Values" })}
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              {t("about.values_description", { defaultValue: "The principles that guide everything we do at KUZO Tennis Academy." })}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Excellence */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl mb-4 mx-auto">
                  ⭐
                </div>
                <h3 className="text-xl font-bold mb-3">{t("about.value_excellence_title", { defaultValue: "Excellence" })}</h3>
                <p className="text-white/90">
                  {t("about.value_excellence_description", { defaultValue: "Striving for the highest standards in everything we do, from coaching techniques to student care." })}
                </p>
              </CardContent>
            </Card>
            
            {/* Passion */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl mb-4 mx-auto">
                  ❤️
                </div>
                <h3 className="text-xl font-bold mb-3">{t("about.value_passion_title", { defaultValue: "Passion" })}</h3>
                <p className="text-white/90">
                  {t("about.value_passion_description", { defaultValue: "Fostering a genuine love for tennis that goes beyond winning and creates lifelong enthusiasts." })}
                </p>
              </CardContent>
            </Card>
            
            {/* Community */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl mb-4 mx-auto">
                  🤝
                </div>
                <h3 className="text-xl font-bold mb-3">{t("about.value_community_title", { defaultValue: "Community" })}</h3>
                <p className="text-white/90">
                  {t("about.value_community_description", { defaultValue: "Building strong relationships between students, families, and coaches that extend beyond the court." })}
                </p>
              </CardContent>
            </Card>
            
            {/* Growth */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl mb-4 mx-auto">
                  📈
                </div>
                <h3 className="text-xl font-bold mb-3">{t("about.value_growth_title", { defaultValue: "Growth" })}</h3>
                <p className="text-white/90">
                  {t("about.value_growth_description", { defaultValue: "Continuous improvement for both our students and academy, always reaching for new heights." })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-lg font-medium text-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;