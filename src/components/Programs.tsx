import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PopupButton } from "react-calendly";

const Programs = () => {
  const programs = [
    {
      title: "Kids Academy",
      age: "Ages 4-12",
      description: "Fun-focused introduction to tennis fundamentals with age-appropriate equipment and engaging activities.",
      features: ["Modified courts & equipment", "Game-based learning", "Character development", "Flexible scheduling"],
      price: "$120/month",
      popular: false,
      gradient: "from-accent to-accent-bright"
    },
    {
      title: "Junior Development",
      age: "Ages 13-17", 
      description: "Competitive training program designed to develop tournament-ready players with advanced techniques.",
      features: ["Tournament preparation", "Video analysis", "Mental coaching", "College prep guidance"],
      price: "$180/month",
      popular: true,
      gradient: "from-primary to-primary-deep"
    },
    {
      title: "Adult Programs",
      age: "18+ Years",
      description: "Flexible training options for adults of all skill levels, from beginner to advanced competitive play.",
      features: ["Flexible scheduling", "Fitness integration", "Social leagues", "Private lessons available"],
      price: "$150/month",
      popular: false,
      gradient: "from-primary-deep to-accent"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <Badge variant="outline" className="mb-3 sm:mb-4 lg:mb-6 border-primary text-primary text-xs sm:text-sm lg:text-base px-3 py-1.5 sm:px-4 sm:py-2 font-medium">
            Training Programs
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-4 sm:mb-6 lg:mb-8">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-1 sm:mt-2 lg:mt-3">
              Training Program
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Whether you're just starting your tennis journey or looking to compete at the highest levels, 
            we have a program designed specifically for your goals and skill level.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {programs.map((program, index) => (
            <Card 
              key={program.title}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group ${
                program.popular ? 'border-primary shadow-lg kuzo-glow' : 'border-border hover:border-primary/50'
              }`}
            >
              {program.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-accent text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base font-bold rounded-bl-2xl shadow-md">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-3 sm:pb-4 lg:pb-6 pt-4 sm:pt-6 lg:pt-8">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${program.gradient} flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 animate-hero-float shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-lg sm:text-2xl lg:text-3xl text-white">🎾</span>
                </div>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-foreground mb-2 sm:mb-3">
                  {program.title}
                </CardTitle>
                <Badge variant="secondary" className="mx-auto w-fit text-xs sm:text-sm lg:text-base px-2 py-1 sm:px-3 sm:py-1">
                  {program.age}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4 sm:space-y-6 lg:space-y-8 px-4 sm:px-6">
                <p className="text-muted-foreground text-center leading-relaxed text-sm sm:text-base lg:text-lg px-1 sm:px-2">
                  {program.description}
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg">Program Features:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm sm:text-base text-muted-foreground group">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 mt-1.5 sm:mt-2 group-hover:scale-125 transition-transform" />
                        <span className="group-hover:text-foreground transition-colors leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 sm:pt-6 lg:pt-8 mt-3 sm:mt-4 border-t border-border">
                  <div className="text-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground">{program.price}</span>
                    <span className="text-muted-foreground ml-1 sm:ml-2 text-sm sm:text-base lg:text-lg">per month</span>
                  </div>
                  
                  <PopupButton
                    url="https://calendly.com/kuzotennis/30min"
                    rootElement={document.getElementById("root")}
                    text="Enroll Now"
                    className={`w-full ${
                      program.popular 
                        ? 'bg-primary hover:bg-primary-deep text-white' 
                        : 'bg-accent hover:bg-accent-bright text-white'
                    } font-bold py-3 sm:py-4 transition-all duration-300 px-4 sm:px-6 rounded-lg text-sm sm:text-base lg:text-lg hover:shadow-lg hover:scale-[1.02] min-h-[44px]`}
                    prefill={{
                      name: "",
                      email: "",
                      customAnswers: {
                        a1: `Enrolling in ${program.title} program`
                      }
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Options */}
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="kuzo-glass rounded-2xl p-4 sm:p-6 lg:p-8 border border-primary/20">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4">
              Private Lessons & Custom Training
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-5 lg:mb-6 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base px-2">
              Need personalized attention? Our expert coaches offer private lessons and customized 
              training programs tailored to your specific goals and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center max-w-lg sm:max-w-none mx-auto">
              <PopupButton
                url="https://calendly.com/kuzotennis/30min"
                rootElement={document.getElementById("root")}
                text="Schedule Consultation"
                className="border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md border text-xs sm:text-sm lg:text-base min-h-[44px] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                prefill={{
                  name: "",
                  email: "",
                  customAnswers: {
                    a1: "Scheduling private lesson consultation"
                  }
                }}
              />
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm lg:text-base min-h-[44px] transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                View All Options
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;