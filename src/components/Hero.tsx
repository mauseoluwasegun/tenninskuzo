import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroTennisCourt from "@/assets/hero-tennis-court.jpg";
import tennisBallIcon from "@/assets/tennis-ball-icon.jpg";
import tennisBallImage from "@/assets/images/tennis-ball-sk-removebg-preview.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden kuzo-gradient-bg w-full px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-15 sm:opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTennisCourt})` }}
      />
      
      {/* Geometric Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={tennisBallImage}
          alt="Tennis Ball" 
          className="absolute top-[8%] left-[2%] sm:left-[5%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 max-w-full h-auto animate-geometric-float opacity-80" 
        />
        <div className="absolute top-[25%] right-[5%] sm:right-[8%] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-accent/20 rotate-12 animate-hero-float" />
        <img 
          src={tennisBallImage}
          alt="Tennis Ball" 
          className="absolute bottom-[20%] left-[25%] sm:left-[30%] w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 max-w-full h-auto animate-geometric-float opacity-70" 
        />
        <div className="absolute top-[40%] right-[30%] sm:right-[33%] w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-accent-bright/30 rotate-12 animate-hero-float" />
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/6 sm:left-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/6 sm:right-1/4 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-accent/15 rounded-full blur-2xl animate-pulse-glow" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto w-full py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Tennis Ball Icon */}
        <div className="mb-4 sm:mb-6 lg:mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={tennisBallIcon} 
              alt={t("hero.tennis_ball_alt", { defaultValue: "KUZO Tennis" })} 
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 max-w-full h-auto rounded-full animate-tennis-bounce kuzo-glow shadow-2xl" 
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 animate-pulse" />
          </div>
        </div>
        
        {/* Badge */}
        <div className="mb-3 sm:mb-4 lg:mb-6 flex justify-center stagger-fade">
          <Badge variant="secondary" className="kuzo-glass text-white border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2 text-xs sm:text-sm lg:text-base font-medium">
            🏆 {t("hero.award_winning", { defaultValue: "Award-Winning Tennis Academy" })}
          </Badge>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 lg:mb-6 stagger-fade">
          <span className="block text-white drop-shadow-lg">{t("hero.kuzo", { defaultValue: "KUZO" })}</span>
          <span className="block bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent drop-shadow-lg mt-1 sm:mt-2">
            {t("hero.tennis", { defaultValue: "TENNIS" })}
          </span>
          <span className="block text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mt-1 sm:mt-2">
            {t("hero.academy", { defaultValue: "ACADEMY" })}
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed stagger-fade px-2">
          {t("hero.subtitle", { defaultValue: "Where champions are made. Experience world-class coaching, state-of-the-art facilities, and a community that drives excellence." })}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center stagger-fade max-w-md sm:max-w-lg md:max-w-xl mx-auto">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-bright text-white font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg kuzo-glow-accent transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
          >
            {t("hero.start_journey", { defaultValue: "Start Your Journey 🎾" })}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="kuzo-glass text-white border-white/30 hover:bg-white/10 font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
          >
            {t("hero.watch_tour", { defaultValue: "Watch Academy Tour" })}
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-6 stagger-fade max-w-4xl mx-auto">
          <div className="kuzo-glass rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-white">500+</div>
            <div className="text-xs sm:text-sm lg:text-base text-white/90 leading-tight">Students Trained</div>
          </div>
          <div className="kuzo-glass rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-white">15+</div>
            <div className="text-xs sm:text-sm lg:text-base text-white/90 leading-tight">Expert Coaches</div>
          </div>
          <div className="kuzo-glass rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-white">10</div>
            <div className="text-xs sm:text-sm lg:text-base text-white/90 leading-tight">Years Excellence</div>
          </div>
          <div className="kuzo-glass rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-white">6</div>
            <div className="text-xs sm:text-sm lg:text-base text-white/90 leading-tight">Premium Courts</div>
          </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 h-6 sm:w-5 sm:h-8 lg:w-6 lg:h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/80 transition-colors cursor-pointer">
          <div className="w-1 h-2 sm:h-3 lg:h-3 bg-white/70 rounded-full mt-1 sm:mt-1.5 lg:mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;