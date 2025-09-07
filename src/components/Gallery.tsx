import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import tennisBallImage from "@/assets/images/tennis-ball-sk-removebg-preview.png";
import JuniorChampionshipWinner from "@/assets/images/JuniorChampionshipWinner.jpeg";
import stateOfTheArtClay from "@/assets/images/state-of-the-art clay.jpeg";
import thumb1  from "@/assets/images/thumb1.png"; 
import thumb2  from "@/assets/images/thumb2.png"; 
import thumb3  from "@/assets/images/thumb3.png"; 
import thumb4  from "@/assets/images/thumb4.png"; 
import thumb5  from "@/assets/images/thumb5.png";







import video1 from '../assets/video/1.mp4';
import video2 from '../assets/video/2.mp4';
import video3 from '../assets/video/3.mp4';
import video4 from '../assets/video/4.mp4';
import video5 from '../assets/video/5.mp4';

const Gallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: "all", name: t("gallery.category_all", { defaultValue: "All Media" }), icon: t("emojis.tennis", { defaultValue: "🎾" }), color: "bg-primary" },
    { id: "students", name: t("gallery.category_students", { defaultValue: "Students" }), icon: t("emojis.graduate", { defaultValue: "👨‍🎓" }), color: "bg-accent" },
    { id: "courts", name: t("gallery.category_courts", { defaultValue: "Courts" }), icon: t("emojis.stadium", { defaultValue: "🏟️" }), color: "bg-primary-deep" },
    { id: "tournaments", name: t("gallery.category_tournaments", { defaultValue: "Tournaments" }), icon: t("emojis.trophy", { defaultValue: "🏆" }), color: "bg-accent-bright" },
    { id: "training", name: t("gallery.category_training", { defaultValue: "Training" }), icon: t("emojis.strength", { defaultValue: "💪" }), color: "bg-primary" },
    { id: "facilities", name: t("gallery.category_facilities", { defaultValue: "Facilities" }), icon: t("emojis.building", { defaultValue: "🏢" }), color: "bg-accent" }
  ];

 const galleryItems = [
  {
    id: 1,
    type: "photo",
    category: "students",
    title: t("gallery.item_1_title", { defaultValue: "Junior Championship Winner" }),
    description: t("gallery.item_1_description", { defaultValue: "Sarah Johnson wins her first tournament" }),
    thumbnail: JuniorChampionshipWinner, // Fixed: use imported variable, not string
    fullsize: JuniorChampionshipWinner   // Fixed: use imported variable, not string
  },
  {
    id: 2,
    type: "video",
    category: "training",
    title: t("gallery.video_1_title", { defaultValue: "Intense Drill Session" }),
    description: t("gallery.video_1_description", { defaultValue: "Watch our KUZO players during a high-intensity drill session." }),
    thumbnail: thumb1, // Fixed: use imported variable, not string
    videoUrl: video1,
    duration: "0.25"
  },
  {
    id: 3,
    type: "photo",
    category: "courts",
    title: t("gallery.item_3_title", { defaultValue: "State-of-the-Art Clay Court" }),
    description: t("gallery.item_3_description", { defaultValue: "Professional-grade playing surface" }),
    thumbnail: stateOfTheArtClay, // Fixed: use imported variable
    fullsize: stateOfTheArtClay   // Fixed: use imported variable
  },
  {
    id: 4,
    type: "video",
    category: "students",
    title: t("gallery.video_2_title", { defaultValue: "Success Story: The Comeback" }),
    description: t("gallery.video_2_description", { defaultValue: "An inspiring story of a player's comeback from injury." }),
    thumbnail: thumb2, // Fixed: use imported variable, not string
    videoUrl: video2,
    duration: "1:12"
  },
  {
    id: 5,
    type: "video",
    category: "training",
    title: t("gallery.video_3_title", { defaultValue: "Serve Masterclass" }),
    description: t("gallery.video_3_description", { defaultValue: "Head Coach breaks down the perfect serve technique." }),
    thumbnail: thumb3, // Fixed: use imported variable, not string
    videoUrl: video3,
    duration: "2:05"
  },
  {
    id: 6,
    type: "video",
    category: "tournaments",
    title: t("gallery.video_4_title", { defaultValue: "Tournament Highlights" }),
    description: t("gallery.video_4_description", { defaultValue: "Exciting moments from our latest academy tournament." }),
    thumbnail: thumb4, // Fixed: use imported variable, not string
    videoUrl: video4,
    duration: "3:30"
  },
  {
    id: 7,
    type: "video",
    category: "facilities",
    title: t("gallery.video_5_title", { defaultValue: "A Day at KUZO" }),
    description: t("gallery.video_5_description", { defaultValue: "Experience a full day of training and activities at our academy." }),
    thumbnail: thumb5, // Fixed: use imported variable, not string
    videoUrl: video5,
    duration: "4:15"
  }
];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.play().catch(error => {
        console.error("Video autoplay was prevented:", error);
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 kuzo-gradient-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={tennisBallImage}
          alt="Tennis Ball" 
          className="absolute top-[10%] left-[5%] w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 animate-geometric-float max-w-full h-auto" 
        />
        <div className="absolute bottom-[10%] right-[5%] w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-accent/10 rotate-12 animate-hero-float" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary/10 rounded-full blur-2xl animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <Badge variant="secondary" className="mb-4 sm:mb-6 kuzo-glass text-white border-white/20 text-sm sm:text-base px-4 py-1.5 font-medium">
            {t("gallery.section_badge", { defaultValue: "🎬 Immersive Media Experience" })}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
            {t("gallery.section_title_line1", { defaultValue: "Gallery of" })}
            <span className="block text-accent-bright mt-2 sm:mt-3">
              {t("gallery.section_title_line2", { defaultValue: "Champions" })}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t("gallery.section_description", { defaultValue: "Explore our world through stunning photography, inspiring videos, and immersive virtual tours. Witness the journey of champions and the excellence of our facilities." })}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id 
                  ? 'bg-accent text-white kuzo-glow-accent'
                  : 'kuzo-glass text-white border-white/30 hover:bg-white/10'
              } font-bold transition-all duration-300 hover:scale-105 px-3 py-2 sm:px-4 sm:py-2.5`}
            >
              <span className="mr-1 sm:mr-2 text-sm">{category.icon}</span>
              <span className="hidden xs:inline">{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="kuzo-glass border-white/20 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:border-white/40"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedItem(item)}
              onMouseEnter={item.type === 'video' ? handleMouseEnter : undefined}
              onMouseLeave={item.type === 'video' ? handleMouseLeave : undefined}
            >
              <CardContent className="p-0 relative">
                {/* Image/Video Thumbnail */}
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${item.type === 'video' ? 'group-hover:opacity-0' : ''}`}
                    loading="lazy"
                  />
                  
                  {item.type === 'video' && (
                    <video
                      src={item.videoUrl}
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                  {/* Media Type Indicator */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                    <Badge 
                      variant="secondary" 
                      className="bg-black/60 text-white border-none backdrop-blur-md text-sm sm:text-base px-3 py-1 font-medium"
                    >
                      {item.type === "video" && t("gallery.media_video", { defaultValue: "▶️ Video" })}
                      {item.type === "photo" && t("gallery.media_photo", { defaultValue: "📷 Photo" })}
                      {item.type === "360" && t("gallery.media_360", { defaultValue: "🔄 360° Tour" })}
                    </Badge>
                  </div>

                  {/* Video Duration */}
                  {item.duration && (
                    <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
                      <Badge className="bg-black/80 text-white border-none text-sm px-2.5 py-1 font-medium">
                        {item.duration}
                      </Badge>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                      <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Button 
            size="lg"
            variant="outline"
            className="kuzo-glass text-white border-white/30 hover:bg-white/10 font-bold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t("gallery.load_more", { defaultValue: "Load More Content" })}
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <Card className="kuzo-glass border-white/20 text-center p-6 sm:p-8 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent-bright mb-2 sm:mb-3">{t("gallery.stats_photos", { defaultValue: "500+" })}</div>
            <div className="text-sm sm:text-base text-white/80 font-medium">{t("gallery.stats_photos", { defaultValue: "Photos Captured" })}</div>
          </Card>
          <Card className="kuzo-glass border-white/20 text-center p-6 sm:p-8 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent-bright mb-2 sm:mb-3">{t("gallery.stats_videos", { defaultValue: "150+" })}</div>
            <div className="text-sm sm:text-base text-white/80 font-medium">{t("gallery.stats_videos", { defaultValue: "Video Stories" })}</div>
          </Card>
          <Card className="kuzo-glass border-white/20 text-center p-6 sm:p-8 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent-bright mb-2 sm:mb-3">{t("gallery.stats_tours", { defaultValue: "25+" })}</div>
            <div className="text-sm sm:text-base text-white/80 font-medium">{t("gallery.stats_tours", { defaultValue: "Virtual Tours" })}</div>
          </Card>
          <Card className="kuzo-glass border-white/20 text-center p-6 sm:p-8 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent-bright mb-2 sm:mb-3">{t("gallery.stats_views", { defaultValue: "1M+" })}</div>
            <div className="text-sm sm:text-base text-white/80 font-medium">{t("gallery.stats_views", { defaultValue: "Views & Shares" })}</div>
          </Card>
        </div>
      </div>

      {/* Lightbox Modal (Basic - would be enhanced with proper modal library) */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 sm:p-8 md:p-10"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl w-full animate-fade-in">
            {selectedItem.type === 'video' ? (
              <video
                src={selectedItem.videoUrl}
                controls
                autoPlay
                className="w-full h-auto rounded-xl max-h-[85vh] object-contain shadow-2xl"
              />
            ) : (
              <img
                src={selectedItem.fullsize || selectedItem.thumbnail}
                alt={selectedItem.title}
                className="w-full h-auto rounded-xl max-h-[85vh] object-contain shadow-2xl"
              />
            )}
            <Button
              variant="outline"
              size="lg"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/70 border-white/40 text-white hover:bg-black/90 hover:border-white/60 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(null);
              }}
            >
              <span className="text-lg">✕</span>
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;