import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
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
  Sun,
  Cloud,
  Wind,
  Thermometer,
  Dumbbell,
  Utensils,
  Wifi,
  Car,
  Coffee,
  Shield
} from "lucide-react";
import CameraExample from "@/components/models/facilities/CameraExample";
import { useTranslation } from "react-i18next";

// Import local images
import facilityImage1 from "@/assets/facilities-pages/facility_1.jpeg";
import facilityImage2 from "@/assets/facilities-pages/facility_2.jpeg";
import facilityImage3 from "@/assets/facilities-pages/facility_3.jpeg";
import facilityImage4 from "@/assets/facilities-pages/facility_4.jpeg";
import facilityImage5 from "@/assets/facilities-pages/facility_5.jpeg";
import facilityImage6 from "@/assets/facilities-pages/facility_6.jpeg";
import facilityImage7 from "@/assets/facilities-pages/facility_7.jpeg";
import facilityImage8 from "@/assets/facilities-pages/facility_8.jpeg";
import facilityImage9 from "@/assets/facilities-pages/facility_9.jpeg";
import facilityImage10 from "@/assets/facilities-pages/facility_10.jpeg";
import facilityImage11 from "@/assets/facilities-pages/facility_11.jpeg";
import facilityImage12 from "@/assets/facilities-pages/facility_12.jpeg";

const FacilitiesPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedFacility, setSelectedFacility] = useState(null);

  const facilityCategories = [
    { id: "all", name: t("facilities.category_all", { defaultValue: "All Facilities" }), icon: "🎾" },
    { id: "courts", name: t("facilities.category_courts", { defaultValue: "Tennis Courts" }), icon: "🏆" },
    { id: "training", name: t("facilities.category_training", { defaultValue: "Training Areas" }), icon: "💪" },
    { id: "amenities", name: t("facilities.category_amenities", { defaultValue: "Amenities" }), icon: "🏪" },
    { id: "support", name: t("facilities.category_support", { defaultValue: "Support Services" }), icon: "🛠️" }
  ];

  const facilities = [
    {
      id: 1,
      name: t("facilities.clay_courts_name", { defaultValue: "Championship Clay Courts" }),
      category: "courts",
      image: facilityImage1,
      description: t("facilities.clay_courts_description", { defaultValue: "Our premium clay courts are maintained to professional tournament standards with daily rolling and watering." }),
      features: [
        t("facilities.feature_professional_grade", { defaultValue: "Professional Grade" }),
        t("facilities.feature_daily_maintenance", { defaultValue: "Daily Maintenance" }),
        t("facilities.feature_night_lighting", { defaultValue: "Night Lighting" }),
        t("facilities.feature_court_heating", { defaultValue: "Court Heating" })
      ],
      capacity: t("facilities.capacity_4_courts", { defaultValue: "4 courts" }),
      surface: t("facilities.surface_clay", { defaultValue: "Red Clay" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 2,
      name: t("facilities.hard_courts_name", { defaultValue: "Hard Court Complex" }),
      category: "courts",
      image: facilityImage2,
      description: t("facilities.hard_courts_description", { defaultValue: "Our hard courts feature premium acrylic surfaces with excellent ball bounce and player safety." }),
      features: [
        t("facilities.feature_acrylic_surface", { defaultValue: "Acrylic Surface" }),
        t("facilities.feature_cushioned_base", { defaultValue: "Cushioned Base" }),
        t("facilities.feature_night_lighting", { defaultValue: "Night Lighting" }),
        t("facilities.feature_spectator_seating", { defaultValue: "Spectator Seating" })
      ],
      capacity: t("facilities.capacity_6_courts", { defaultValue: "6 courts" }),
      surface: t("facilities.surface_acrylic", { defaultValue: "Acrylic" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 3,
      name: t("facilities.indoor_courts_name", { defaultValue: "Indoor Court Facility" }),
      category: "courts",
      image: facilityImage3,
      description: t("facilities.indoor_courts_description", { defaultValue: "Climate-controlled indoor courts with premium surfaces, perfect for year-round training." }),
      features: [
        t("facilities.feature_climate_control", { defaultValue: "Climate Control" }),
        t("facilities.feature_heating_cooling", { defaultValue: "Heating/Cooling" }),
        t("facilities.feature_night_lighting", { defaultValue: "Night Lighting" }),
        t("facilities.feature_sound_system", { defaultValue: "Sound System" })
      ],
      capacity: t("facilities.capacity_2_courts", { defaultValue: "2 courts" }),
      surface: t("facilities.surface_hard_court", { defaultValue: "Hard Court" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 4,
      name: t("facilities.biomechanics_lab_name", { defaultValue: "Biomechanics Analysis Lab" }),
      category: "training",
      image: facilityImage4,
      description: t("facilities.biomechanics_lab_description", { defaultValue: "State-of-the-art motion capture technology to analyze and improve your technique." }),
      features: [
        t("facilities.feature_3d_motion_capture", { defaultValue: "3D Motion Capture" }),
        t("facilities.feature_video_analysis", { defaultValue: "Video Analysis" }),
        t("facilities.feature_performance_metrics", { defaultValue: "Performance Metrics" }),
        t("facilities.feature_coach_feedback", { defaultValue: "Coach Feedback" })
      ],
      capacity: t("facilities.capacity_private_sessions", { defaultValue: "Private Sessions" }),
      surface: t("facilities.surface_technology", { defaultValue: "Technology" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 5,
      name: t("facilities.fitness_center_name", { defaultValue: "Fitness & Conditioning Center" }),
      category: "training",
      image: facilityImage5,
      description: t("facilities.fitness_center_description", { defaultValue: "Fully equipped gym with tennis-specific training equipment and professional trainers." }),
      features: [
        t("facilities.feature_strength_training", { defaultValue: "Strength Training" }),
        t("facilities.feature_cardio_equipment", { defaultValue: "Cardio Equipment" }),
        t("facilities.feature_tennis_machines", { defaultValue: "Tennis Machines" }),
        t("facilities.feature_personal_trainers", { defaultValue: "Personal Trainers" })
      ],
      capacity: t("facilities.capacity_20_stations", { defaultValue: "20+ Stations" }),
      surface: t("facilities.surface_gym_floor", { defaultValue: "Gym Floor" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 6,
      name: t("facilities.video_analysis_name", { defaultValue: "Video Analysis Suite" }),
      category: "training",
      image: facilityImage6,
      description: t("facilities.video_analysis_description", { defaultValue: "Professional video analysis tools to review and improve your match play and technique." }),
      features: [
        t("facilities.feature_high_speed_cameras", { defaultValue: "High-Speed Cameras" }),
        t("facilities.feature_playback_software", { defaultValue: "Playback Software" }),
        t("facilities.feature_coach_analysis", { defaultValue: "Coach Analysis" }),
        t("facilities.feature_performance_reports", { defaultValue: "Performance Reports" })
      ],
      capacity: t("facilities.capacity_individual_sessions", { defaultValue: "Individual Sessions" }),
      surface: t("facilities.surface_technology", { defaultValue: "Technology" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 7,
      name: t("facilities.player_lounge_name", { defaultValue: "Player Lounge" }),
      category: "amenities",
      image: facilityImage7,
      description: t("facilities.player_lounge_description", { defaultValue: "Comfortable relaxation area with premium amenities for players and families." }),
      features: [
        t("facilities.feature_comfort_seating", { defaultValue: "Comfort Seating" }),
        t("facilities.feature_wifi", { defaultValue: "Wi-Fi" }),
        t("facilities.feature_refreshments", { defaultValue: "Refreshments" }),
        t("facilities.feature_tv_entertainment", { defaultValue: "TV/Entertainment" })
      ],
      capacity: t("facilities.capacity_50_seating", { defaultValue: "50+ Seating" }),
      surface: t("facilities.surface_furnished", { defaultValue: "Furnished" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 8,
      name: t("facilities.pro_shop_name", { defaultValue: "Pro Shop & Equipment" }),
      category: "amenities",
      image: facilityImage8,
      description: t("facilities.pro_shop_description", { defaultValue: "Full-service pro shop with premium equipment, apparel, and accessories." }),
      features: [
        t("facilities.feature_racket_demo", { defaultValue: "Racket Demo" }),
        t("facilities.feature_stringing_service", { defaultValue: "Stringing Service" }),
        t("facilities.feature_apparel", { defaultValue: "Apparel" }),
        t("facilities.feature_equipment_sales", { defaultValue: "Equipment Sales" })
      ],
      capacity: t("facilities.capacity_full_service", { defaultValue: "Full Service" }),
      surface: t("facilities.surface_retail", { defaultValue: "Retail" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 9,
      name: t("facilities.nutrition_bar_name", { defaultValue: "Nutrition Bar & Cafe" }),
      category: "amenities",
      image: facilityImage9,
      description: t("facilities.nutrition_bar_description", { defaultValue: "Healthy meal options and performance nutrition for athletes and families." }),
      features: [
        t("facilities.feature_healthy_options", { defaultValue: "Healthy Options" }),
        t("facilities.feature_performance_nutrition", { defaultValue: "Performance Nutrition" }),
        t("facilities.feature_smoothies", { defaultValue: "Smoothies" }),
        t("facilities.feature_grab_go", { defaultValue: "Grab & Go" })
      ],
      capacity: t("facilities.capacity_30_seating", { defaultValue: "30+ Seating" }),
      surface: t("facilities.surface_dining", { defaultValue: "Dining" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 10,
      name: t("facilities.locker_rooms_name", { defaultValue: "Locker Rooms & Showers" }),
      category: "support",
      image: facilityImage10,
      description: t("facilities.locker_rooms_description", { defaultValue: "Modern locker facilities with premium amenities for all academy members." }),
      features: [
        t("facilities.feature_private_lockers", { defaultValue: "Private Lockers" }),
        t("facilities.feature_showers", { defaultValue: "Showers" }),
        t("facilities.feature_towels", { defaultValue: "Towels" }),
        t("facilities.feature_toiletries", { defaultValue: "Toiletries" })
      ],
      capacity: t("facilities.capacity_100_lockers", { defaultValue: "100+ Lockers" }),
      surface: t("facilities.surface_tile", { defaultValue: "Tile" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 11,
      name: t("facilities.medical_center_name", { defaultValue: "Medical & Wellness Center" }),
      category: "support",
      image: facilityImage11,
      description: t("facilities.medical_center_description", { defaultValue: "On-site medical professionals for injury prevention and treatment." }),
      features: [
        t("facilities.feature_physical_therapy", { defaultValue: "Physical Therapy" }),
        t("facilities.feature_injury_assessment", { defaultValue: "Injury Assessment" }),
        t("facilities.feature_first_aid", { defaultValue: "First Aid" }),
        t("facilities.feature_wellness_programs", { defaultValue: "Wellness Programs" })
      ],
      capacity: t("facilities.capacity_private_appointments", { defaultValue: "Private Appointments" }),
      surface: t("facilities.surface_medical", { defaultValue: "Medical" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    },
    {
      id: 12,
      name: t("facilities.event_spaces_name", { defaultValue: "Event & Meeting Spaces" }),
      category: "support",
      image: facilityImage12,
      description: t("facilities.event_spaces_description", { defaultValue: "Premium spaces for tournaments, meetings, and special events." }),
      features: [
        t("facilities.feature_conference_rooms", { defaultValue: "Conference Rooms" }),
        t("facilities.feature_event_space", { defaultValue: "Event Space" }),
        t("facilities.feature_catering", { defaultValue: "Catering" }),
        t("facilities.feature_audio_visual", { defaultValue: "Audio/Visual" })
      ],
      capacity: t("facilities.capacity_200_capacity", { defaultValue: "200+ Capacity" }),
      surface: t("facilities.surface_event_floor", { defaultValue: "Event Floor" }),
      status: t("facilities.status_available", { defaultValue: "Available" })
    }
  ];

  // Filter facilities based on category
  const filteredFacilities = activeCategory === "all" 
    ? facilities 
    : facilities.filter(facility => facility.category === activeCategory);

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
            <div className="inline-block bg-white/10 text-white border-white/20 text-lg py-2 px-4 rounded-full mb-4">
              {t("facilities.section_badge", { defaultValue: "🏆 World-Class Facilities" })}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="block">{t("facilities.hero_title_line1", { defaultValue: "Experience Our" })}</span>
              <span className="block text-green-400 mt-2">{t("facilities.hero_title_line2", { defaultValue: "Premium Facilities" })}</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t("facilities.hero_description", { defaultValue: "Discover our state-of-the-art tennis facilities designed to provide the perfect environment for training, competition, and relaxation." })}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Camera Example */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary border-primary/20 text-lg py-2 px-4 rounded-full mb-4">
              {t("facilities.interactive_badge", { defaultValue: "📷 Interactive Experience" })}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              {t("facilities.interactive_title", { defaultValue: "Virtual Facility Tour" })}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("facilities.interactive_description", { defaultValue: "Explore our facilities through this interactive 3D camera example" })}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-100 rounded-2xl overflow-hidden">
            <CameraExample />
          </div>
        </div>
      </section>

      {/* Facilities Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              {t("facilities.explore_title", { defaultValue: "Explore Our Facilities" })}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("facilities.explore_description", { defaultValue: "Discover our world-class amenities designed to enhance your tennis experience" })}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {facilityCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
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

          {/* Facilities Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredFacilities.map((facility) => (
              <motion.div
                key={facility.id}
                variants={item}
                className="h-full"
              >
                <Card className="h-full overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedFacility(facility)}>
                  <div className="relative">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-white text-foreground">
                      {facility.status}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{facility.name}</h3>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">
                        {t("facilities.features_title", { defaultValue: "Key Features:" })}
                      </h4>
                      <ul className="space-y-1">
                        {facility.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{facility.capacity}</span>
                      <span>{facility.surface}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facility Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">12</div>
              <div className="text-lg font-medium text-foreground">
                {t("facilities.stats_facilities", { defaultValue: "Facilities" })}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">6</div>
              <div className="text-lg font-medium text-foreground">
                {t("facilities.stats_courts", { defaultValue: "Tennis Courts" })}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">200+</div>
              <div className="text-lg font-medium text-foreground">
                {t("facilities.stats_capacity", { defaultValue: "Person Capacity" })}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">24/7</div>
              <div className="text-lg font-medium text-foreground">
                {t("facilities.stats_access", { defaultValue: "Access" })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
             onClick={() => setSelectedFacility(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
               onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-foreground">{selectedFacility.name}</h2>
                <Button variant="secondary" size="sm" onClick={() => setSelectedFacility(null)}>
                  ✕
                </Button>
              </div>
              
              <img
                src={selectedFacility.image}
                alt={selectedFacility.name}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <p className="text-lg text-muted-foreground mb-6">
                {selectedFacility.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {t("facilities.features_title", { defaultValue: "Key Features" })}
                  </h3>
                  <ul className="space-y-3">
                    {selectedFacility.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {t("facilities.details_title", { defaultValue: "Facility Details" })}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-5 h-5 mr-3 text-primary" />
                      <span>{selectedFacility.capacity}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3 text-primary" />
                      <span>{selectedFacility.surface}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-5 h-5 mr-3 text-primary" />
                      <span>{selectedFacility.status}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                  {t("facilities.book_tour", { defaultValue: "Book Facility Tour" })}
                </Button>
                <Button variant="outline" className="flex-1">
                  {t("facilities.contact_staff", { defaultValue: "Contact Staff" })}
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilitiesPage;