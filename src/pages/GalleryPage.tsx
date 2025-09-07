import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
// Dynamically import all images from the gallery folder
const imageModules = import.meta.glob('@/assets/Gallery/*.jpeg', { eager: true });
const galleryImages = Object.values(imageModules).map((module: any) => module.default);

// Define types for our gallery items
interface GalleryItem {
  id: number;
  category: string;
  src: string;
  thumbnail: string;
  caption: string;
  alt: string;
  date?: string;
  tags?: string[];
}

const GalleryPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Generate high-resolution placeholder images with different categories
  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay
    const timer = setTimeout(() => {
      const generatedImages: GalleryItem[] = [];
      const captions = [
        t("gallery.coach_aisha_caption", { defaultValue: "Coach Aisha – Ball Control Clinic" }),
        t("gallery.junior_player_caption", { defaultValue: "Junior Player – Forehand Mastery" }),
        t("gallery.professional_training_caption", { defaultValue: "Professional Training – Serve Technique" }),
        t("gallery.tournament_champions_caption", { defaultValue: "Tournament Champions – Doubles Victory" }),
        t("gallery.youth_academy_caption", { defaultValue: "Youth Academy – Group Session" }),
        t("gallery.equipment_review_caption", { defaultValue: "Equipment Review – New Rackets" }),
        t("gallery.court_maintenance_caption", { defaultValue: "Court Maintenance – Clay Surface Prep" }),
        t("gallery.evening_practice_caption", { defaultValue: "Evening Practice – Sunset Session" }),
        t("gallery.coaching_staff_caption", { defaultValue: "Coaching Staff – Strategy Meeting" }),
        t("gallery.student_progress_caption", { defaultValue: "Student Progress – Month 3 Review" }),
        t("gallery.gear_spotlight_caption", { defaultValue: "Gear Spotlight – Tennis Shoes" }),
        t("gallery.match_analysis_caption", { defaultValue: "Match Analysis – Video Review" }),
        t("gallery.fitness_training_caption", { defaultValue: "Fitness Training – Core Strength" }),
        t("gallery.tournament_prep_caption", { defaultValue: "Tournament Prep – Mental Focus" }),
        t("gallery.facility_tour_caption", { defaultValue: "Facility Tour – Pro Shop" }),
        t("gallery.community_event_caption", { defaultValue: "Community Event – Kids Clinic" }),
        t("gallery.advanced_players_caption", { defaultValue: "Advanced Players – Match Play" }),
        t("gallery.beginner_lessons_caption", { defaultValue: "Beginner Lessons – First Serve" }),
        t("gallery.equipment_testing_caption", { defaultValue: "Equipment Testing – String Tension" }),
        t("gallery.team_photo_caption", { defaultValue: "Team Photo – Championship Season" }),
        t("gallery.special_guest_caption", { defaultValue: "Special Guest – Pro Visit" }),
        t("gallery.winter_training_caption", { defaultValue: "Winter Training – Indoor Courts" }),
        t("gallery.nutrition_workshop_caption", { defaultValue: "Nutrition Workshop – Performance Fuel" }),
        t("gallery.parent_meeting_caption", { defaultValue: "Parent Meeting – Program Updates" })
      ];

      const tags = [
        [t("gallery.tag_training", { defaultValue: "training" }), t("gallery.tag_technique", { defaultValue: "technique" }), t("gallery.tag_forehand", { defaultValue: "forehand" })],
        [t("gallery.tag_junior", { defaultValue: "junior" }), t("gallery.tag_player", { defaultValue: "player" }), t("gallery.tag_progress", { defaultValue: "progress" })],
        [t("gallery.tag_professional", { defaultValue: "professional" }), t("gallery.tag_serve", { defaultValue: "serve" }), t("gallery.tag_technique", { defaultValue: "technique" })],
        [t("gallery.tag_tournament", { defaultValue: "tournament" }), t("gallery.tag_champions", { defaultValue: "champions" }), t("gallery.tag_doubles", { defaultValue: "doubles" })],
        [t("gallery.tag_youth", { defaultValue: "youth" }), t("gallery.tag_academy", { defaultValue: "academy" }), t("gallery.tag_group", { defaultValue: "group" })],
        [t("gallery.tag_equipment", { defaultValue: "equipment" }), t("gallery.tag_rackets", { defaultValue: "rackets" }), t("gallery.tag_review", { defaultValue: "review" })],
        [t("gallery.tag_maintenance", { defaultValue: "maintenance" }), t("gallery.tag_court", { defaultValue: "court" }), t("gallery.tag_clay", { defaultValue: "clay" })],
        [t("gallery.tag_evening", { defaultValue: "evening" }), t("gallery.tag_practice", { defaultValue: "practice" }), t("gallery.tag_sunset", { defaultValue: "sunset" })],
        [t("gallery.tag_coaching", { defaultValue: "coaching" }), t("gallery.tag_staff", { defaultValue: "staff" }), t("gallery.tag_strategy", { defaultValue: "strategy" })],
        [t("gallery.tag_student", { defaultValue: "student" }), t("gallery.tag_progress", { defaultValue: "progress" }), t("gallery.tag_review", { defaultValue: "review" })],
        [t("gallery.tag_gear", { defaultValue: "gear" }), t("gallery.tag_shoes", { defaultValue: "shoes" }), t("gallery.tag_spotlight", { defaultValue: "spotlight" })],
        [t("gallery.tag_match", { defaultValue: "match" }), t("gallery.tag_analysis", { defaultValue: "analysis" }), t("gallery.tag_video", { defaultValue: "video" })],
        [t("gallery.tag_fitness", { defaultValue: "fitness" }), t("gallery.tag_core", { defaultValue: "core" }), t("gallery.tag_strength", { defaultValue: "strength" })],
        [t("gallery.tag_tournament", { defaultValue: "tournament" }), t("gallery.tag_prep", { defaultValue: "prep" }), t("gallery.tag_mental", { defaultValue: "mental" })],
        [t("gallery.tag_facility", { defaultValue: "facility" }), t("gallery.tag_proshop", { defaultValue: "proshop" }), t("gallery.tag_tour", { defaultValue: "tour" })],
        [t("gallery.tag_community", { defaultValue: "community" }), t("gallery.tag_kids", { defaultValue: "kids" }), t("gallery.tag_clinic", { defaultValue: "clinic" })],
        [t("gallery.tag_advanced", { defaultValue: "advanced" }), t("gallery.tag_match", { defaultValue: "match" }), t("gallery.tag_play", { defaultValue: "play" })],
        [t("gallery.tag_beginner", { defaultValue: "beginner" }), t("gallery.tag_lessons", { defaultValue: "lessons" }), t("gallery.tag_serve", { defaultValue: "serve" })],
        [t("gallery.tag_equipment", { defaultValue: "equipment" }), t("gallery.tag_testing", { defaultValue: "testing" }), t("gallery.tag_strings", { defaultValue: "strings" })],
        [t("gallery.tag_team", { defaultValue: "team" }), t("gallery.tag_photo", { defaultValue: "photo" }), t("gallery.tag_champions", { defaultValue: "champions" })],
        [t("gallery.tag_guest", { defaultValue: "guest" }), t("gallery.tag_pro", { defaultValue: "pro" }), t("gallery.tag_visit", { defaultValue: "visit" })],
        [t("gallery.tag_winter", { defaultValue: "winter" }), t("gallery.tag_indoor", { defaultValue: "indoor" }), t("gallery.tag_training", { defaultValue: "training" })],
        [t("gallery.tag_nutrition", { defaultValue: "nutrition" }), t("gallery.tag_workshop", { defaultValue: "workshop" }), t("gallery.tag_fuel", { defaultValue: "fuel" })],
        [t("gallery.tag_parent", { defaultValue: "parent" }), t("gallery.tag_meeting", { defaultValue: "meeting" }), t("gallery.tag_updates", { defaultValue: "updates" })]
      ];

      for (let i = 0; i < galleryImages.length; i++) {
        const categories = [
          t("gallery.category_players", { defaultValue: "players" }),
          t("gallery.category_coaching", { defaultValue: "coaching" }),
          t("gallery.category_gear", { defaultValue: "gear" }),
          t("gallery.category_events", { defaultValue: "events" }),
          t("gallery.category_facilities", { defaultValue: "facilities" })
        ];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        
        generatedImages.push({
          id: i,
          category: randomCategory,
          src: galleryImages[i],
          thumbnail: galleryImages[i],
          caption: captions[i] || t("gallery.default_caption", { defaultValue: "Image {{id}} – Tennis Academy", id: i }),
          alt: t("gallery.image_alt", { defaultValue: "Tennis image {{id}}", id: i }),
          date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
          tags: tags[i] || []
        });
      }
      
      setImages(generatedImages);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "all", name: t("gallery.category_all_photos", { defaultValue: "All Photos" }), icon: "🎾" },
    { id: "players", name: t("gallery.category_player_action", { defaultValue: "Player Action" }), icon: "🏃" },
    { id: "coaching", name: t("gallery.category_coaching_moments", { defaultValue: "Coaching Moments" }), icon: "👨‍🏫" },
    { id: "gear", name: t("gallery.category_gear_details", { defaultValue: "Gear Details" }), icon: "👟" },
    { id: "events", name: t("gallery.category_events", { defaultValue: "Events" }), icon: "🎉" },
    { id: "facilities", name: t("gallery.category_facilities", { defaultValue: "Facilities" }), icon: "🏟️" }
  ];

  // Filter images based on category and search query
  const filteredImages = images.filter(image => {
    const matchesCategory = activeCategory === "all" || image.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      image.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle ESC key press to close modal
  const handleEscKey = useCallback((e) => {
    if (e.key === 'Escape' && selectedImage) {
      setSelectedImage(null);
    }
  }, [selectedImage]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleEscKey]);

  // Handle click outside to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  // SVG Tennis Racket Component
  const TennisRacket = () => (
    <svg width="64" height="96" viewBox="0 0 64 96" className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
      {/* Racket Handle */}
      <rect x="30" y="0" width="4" height="60" rx="2" fill="url(#handleGradient)" />
      
      {/* Racket Head */}
      <ellipse cx="32" cy="70" rx="28" ry="20" fill="white" stroke="#9CA3AF" strokeWidth="2" />
      
      {/* Racket Strings */}
      {/* Vertical Strings */}
      {[...Array(7)].map((_, i) => (
        <line 
          key={`v-${i}`} 
          x1={20 + i * 4} 
          y1="60" 
          x2={20 + i * 4} 
          y2="80" 
          stroke="#9CA3AF" 
          strokeWidth="1" 
        />
      ))}
      
      {/* Horizontal Strings */}
      {[...Array(5)].map((_, i) => (
        <line 
          key={`h-${i}`} 
          x1="12" 
          y1={65 + i * 4} 
          x2="52" 
          y2={65 + i * 4} 
          stroke="#9CA3AF" 
          strokeWidth="1" 
        />
      ))}
      
      {/* Gradients */}
      <defs>
        <linearGradient id="handleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
      </defs>
    </svg>
  );

  // SVG Tennis Ball Component
  const TennisBall = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" className="absolute top-10 left-0 w-8 h-8 z-20">
      <circle cx="16" cy="16" r="14" fill="#10B981" stroke="#047857" strokeWidth="1" />
      {/* Ball highlight */}
      <ellipse cx="12" cy="12" rx="4" ry="2" fill="rgba(255,255,255,0.7)" />
      <path d="M8 24 Q16 28 24 24" stroke="#047857" strokeWidth="1" fill="none" />
    </svg>
  );

  // SVG Tennis Net Component
  const TennisNet = () => (
    <svg width="200" height="16" viewBox="0 0 200 16" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
      {/* Net posts */}
      <rect x="0" y="0" width="4" height="16" fill="#4B5563" />
      <rect x="196" y="0" width="4" height="16" fill="#4B5563" />
      
      {/* Net top */}
      <line x1="2" y1="2" x2="198" y2="2" stroke="#9CA3AF" strokeWidth="1" />
      
      {/* Net squares */}
      {[...Array(20)].map((_, i) => (
        <rect 
          key={i} 
          x={4 + i * 10} 
          y="2" 
          width="10" 
          height="12" 
          fill="none" 
          stroke="#9CA3AF" 
          strokeWidth="0.5" 
        />
      ))}
    </svg>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Decorative Tennis Elements */}
          <div className="absolute top-20 left-10 opacity-20">
            <TennisBall />
          </div>
          <div className="absolute top-40 right-20 opacity-20">
            <TennisRacket />
          </div>
          <div className="absolute bottom-20 left-1/3 opacity-20">
            <TennisNet />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white/10 text-white border-white/20 text-lg py-2 px-4 rounded-full mb-4">
              {t("gallery.section_badge", { defaultValue: "📸 Gallery of Champions" })}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="block">{t("gallery.hero_title_line1", { defaultValue: "Capture the" })}</span>
              <span className="block text-green-400 mt-2">{t("gallery.hero_title_line2", { defaultValue: "Spirit of Tennis" })}</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t("gallery.hero_description", { defaultValue: "Explore moments of excellence, dedication, and triumph from our tennis academy community." })}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder={t("gallery.search_placeholder", { defaultValue: "Search photos, tags, or captions..." })}
                  className="w-full pl-12 pr-4 py-4 text-lg rounded-full bg-gray-50 border-none shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-accent text-white hover:bg-accent-bright"
                      : "bg-white text-foreground hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">{t("gallery.loading", { defaultValue: "Loading gallery..." })}</p>
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🎾</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t("gallery.no_results_title", { defaultValue: "No photos found" })}</h3>
              <p className="text-muted-foreground">{t("gallery.no_results_description", { defaultValue: "Try adjusting your search or filter criteria" })}</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {t("gallery.results_count", { defaultValue: "Showing {{count}} photos", count: filteredImages.length })}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence>
                  {filteredImages.map((image) => (
                    <motion.div
                      key={image.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Card className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <div className="relative overflow-hidden">
                          <img
                            src={image.thumbnail}
                            alt={image.alt}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white font-bold text-lg">{image.caption}</h3>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium text-foreground line-clamp-2 mb-2">{image.caption}</h3>
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span>{image.date}</span>
                            <Badge variant="secondary" className="text-xs">
                              {image.category}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </Button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h2 className="text-white text-2xl font-bold mb-2">{selectedImage.caption}</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {selectedImage.category}
                  </Badge>
                  {selectedImage.tags?.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10 text-white border-white/20">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;