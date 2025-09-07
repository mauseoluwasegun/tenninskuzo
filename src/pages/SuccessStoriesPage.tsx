import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Quote, 
  Trophy, 
  TrendingUp, 
  Users, 
  Star, 
  Calendar,
  MapPin,
  Award,
  Target,
  Heart,
  User,
  Video,
  BookOpen,
  Zap,
  Medal,
  Crown,
  RotateCcw,
  Filter,
  Search,
  Share2
} from "lucide-react";
import tennisBallImage from "@/assets/images/tennis-ball-sk-removebg-preview.png";
// Import local images
import storyImage1 from "@/assets/success-stories-pages/story_1.jpeg";
import storyImage2 from "@/assets/success-stories-pages/story_2.jpeg";
import storyImage3 from "@/assets/success-stories-pages/story_3.jpeg";
import storyImage4 from "@/assets/success-stories-pages/story_4.jpeg";
import storyImage5 from "@/assets/success-stories-pages/story_5.jpeg";
import storyImage6 from "@/assets/success-stories-pages/story_6.jpeg";
import storyImage7 from "@/assets/success-stories-pages/story_7.jpeg";
import { useTranslation } from "react-i18next";

const SuccessStoriesPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedStory, setSelectedStory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [likedStories, setLikedStories] = useState(new Set());

  const storyCategories = [
    { id: "all", name: t("success_stories.categories_all", { defaultValue: "All Stories" }), icon: "🏆" },
    { id: "students", name: t("success_stories.categories_students", { defaultValue: "Student Journeys" }), icon: "👨‍🎓" },
    { id: "tournaments", name: t("success_stories.categories_tournaments", { defaultValue: "Tournament Wins" }), icon: "🎾" },
    { id: "parents", name: t("success_stories.categories_parents", { defaultValue: "Parent Stories" }), icon: "👨‍👩‍👧‍👦" },
    { id: "coaches", name: t("success_stories.categories_coaches", { defaultValue: "Coach Insights" }), icon: "👨‍🏫" }
  ];

  const successStories = [
    {
      id: 1,
      name: t("success_stories.sarah_title", { defaultValue: "Sarah Johnson's Championship Journey" }),
      category: "students",
      type: "student",
      date: "2024-03-15",
      image: storyImage1,
      thumbnail: storyImage1,
      video: "https://example.com/sarah-video",
      quote: t("success_stories.sarah_quote", { defaultValue: "KUZO transformed my game completely. I went from struggling with basics to winning regional championships!" }),
      story: t("success_stories.sarah_story", { defaultValue: "Sarah joined KUZO at age 12 with basic skills and a passion for tennis. Through dedicated coaching and consistent practice, she progressed to become a regional champion within two years. Her journey showcases the transformative power of our coaching methodology." }),
      metrics: [
        { label: t("success_stories.metrics_ranking", { defaultValue: "Ranking Improvement" }), value: "50 → 5", icon: <TrendingUp className="w-4 h-4" /> },
        { label: t("success_stories.metrics_tournaments", { defaultValue: "Tournaments Won" }), value: "8", icon: <Trophy className="w-4 h-4" /> },
        { label: t("success_stories.metrics_training", { defaultValue: "Training Hours" }), value: "300+", icon: <Target className="w-4 h-4" /> }
      ],
      achievements: [
        t("success_stories.sarah_achievement1", { defaultValue: "Regional Champion 2023" }),
        t("success_stories.sarah_achievement2", { defaultValue: "State Runner-up 2022" }),
        t("success_stories.sarah_achievement3", { defaultValue: "USTA Level 3 Certified" })
      ],
      coach: "Mohammed Bashiru",
      program: t("success_stories.junior_elite_program", { defaultValue: "Junior KUZO Program" }),
      age: "14",
      location: t("success_stories.champions_city", { defaultValue: "Champions City" }),
      likes: 124
    },
    {
      id: 2,
      name: t("success_stories.martinez_title", { defaultValue: "The Martinez Family Tennis Adventure" }),
      category: "parents",
      type: "parent",
      date: "2024-02-28",
      image: storyImage2,
      thumbnail: storyImage2,
      video: "https://example.com/martinez-video",
      quote: t("success_stories.martinez_quote", { defaultValue: "Our kids have grown not just as tennis players, but as confident individuals. KUZO is like a second family!" }),
      story: t("success_stories.martinez_story", { defaultValue: "The Martinez family joined KUZO with their twin children, aged 8. Over three years, both children have developed not only their tennis skills but also confidence, discipline, and teamwork. Their story reflects how our academy impacts entire families." }),
      metrics: [
        { label: t("success_stories.metrics_children", { defaultValue: "Children Enrolled" }), value: "2", icon: <Users className="w-4 h-4" /> },
        { label: t("success_stories.metrics_years", { defaultValue: "Years Active" }), value: "3", icon: <Calendar className="w-4 h-4" /> },
        { label: t("success_stories.metrics_programs", { defaultValue: "Programs Completed" }), value: "6", icon: <BookOpen className="w-4 h-4" /> }
      ],
      achievements: [
        t("success_stories.martinez_achievement1", { defaultValue: "Kids' Tournament Champions 2022" }),
        t("success_stories.martinez_achievement2", { defaultValue: "Family Tennis Program Graduates" }),
        t("success_stories.martinez_achievement3", { defaultValue: "Community Volunteers" })
      ],
      coach: "David Chen",
      program: t("success_stories.family_tennis_program", { defaultValue: "Family Tennis Program" }),
      age: t("success_stories.family", { defaultValue: "Family" }),
      location: t("success_stories.champions_city", { defaultValue: "Champions City" }),
      likes: 89
    },
    {
      id: 3,
      name: t("success_stories.championship_title", { defaultValue: "National Championship Victory" }),
      category: "tournaments",
      type: "tournament",
      date: "2024-01-10",
      image: storyImage3,
      thumbnail: storyImage3,
      video: "https://example.com/championship-video",
      quote: t("success_stories.championship_quote", { defaultValue: "Our team's dedication and the academy's training prepared us perfectly for this moment. We're national champions!" }),
      story: t("success_stories.championship_story", { defaultValue: "After months of intensive preparation, our junior team secured the National Championship title. This victory represents the culmination of years of hard work, exceptional coaching, and unwavering determination from both players and coaches." }),
      metrics: [
        { label: t("success_stories.metrics_team_members", { defaultValue: "Team Members" }), value: "4", icon: <Users className="w-4 h-4" /> },
        { label: t("success_stories.metrics_matches", { defaultValue: "Matches Won" }), value: "7/7", icon: <Trophy className="w-4 h-4" /> },
        { label: t("success_stories.metrics_training", { defaultValue: "Training Hours" }), value: "500+", icon: <Target className="w-4 h-4" /> }
      ],
      achievements: [
        t("success_stories.championship_achievement1", { defaultValue: "National Champions 2024" }),
        t("success_stories.championship_achievement2", { defaultValue: "Undefeated Season" }),
        t("success_stories.championship_achievement3", { defaultValue: "Best Team Performance" })
      ],
      coach: "Marcus Johnson",
      program: t("success_stories.high_performance_program", { defaultValue: "High Performance Program" }),
      age: t("success_stories.team", { defaultValue: "Team" }),
      location: t("success_stories.national_stadium", { defaultValue: "National Stadium" }),
      likes: 256
    },
    {
      id: 4,
      name: t("success_stories.adult_title", { defaultValue: "Adult Beginner to Tournament Player" }),
      category: "students",
      type: "student",
      date: "2024-04-05",
      image: storyImage4,
      thumbnail: storyImage4,
      video: "https://example.com/adult-player-video",
      quote: t("success_stories.adult_quote", { defaultValue: "Starting at 35 with no experience, I never imagined I'd compete in tournaments. KUZO made it possible!" }),
      story: t("success_stories.adult_story", { defaultValue: "After joining KUZO's adult program at age 35 with zero tennis experience, this student progressed to compete in local tournaments within just 18 months. The structured approach and patient coaching made all the difference in achieving what seemed impossible." }),
      metrics: [
        { label: t("success_stories.metrics_months", { defaultValue: "Months Training" }), value: "18", icon: <Calendar className="w-4 h-4" /> },
        { label: t("success_stories.metrics_tournaments_entered", { defaultValue: "Tournaments Entered" }), value: "5", icon: <Trophy className="w-4 h-4" /> },
        { label: t("success_stories.metrics_skill_level", { defaultValue: "Skill Level" }), value: t("success_stories.skill_progress", { defaultValue: "Beginner → Intermediate" }), icon: <TrendingUp className="w-4 h-4" /> }
      ],
      achievements: [
        t("success_stories.adult_achievement1", { defaultValue: "First Tournament Participation" }),
        t("success_stories.adult_achievement2", { defaultValue: "Local Club Champion 2023" }),
        t("success_stories.adult_achievement3", { defaultValue: "USTA 3.0 Rating" })
      ],
      coach: "Sarah Williams",
      program: t("success_stories.adult_beginner_program", { defaultValue: "Adult Beginner Program" }),
      age: "37",
      location: t("success_stories.downtown_center", { defaultValue: "Downtown Center" }),
      likes: 67
    },
    {
      id: 5,
      name: t("success_stories.coach_maria_title", { defaultValue: "Coach Maria's Perspective on Player Development" }),
      category: "coaches",
      type: "coach",
      date: "2024-03-22",
      image: storyImage5,
      thumbnail: storyImage5,
      video: "https://example.com/coach-maria-video",
      quote: t("success_stories.coach_maria_quote", { defaultValue: "Watching a player transform from hesitant beginner to confident competitor is what makes coaching worthwhile." }),
      story: t("success_stories.coach_maria_story", { defaultValue: "With over 15 years of coaching experience, Maria shares insights on what makes KUZO's approach unique. She discusses the importance of mental training, personalized coaching, and building confidence alongside technical skills." }),
      metrics: [
        { label: t("success_stories.metrics_players_coached", { defaultValue: "Players Coached" }), value: "150+", icon: <Users className="w-4 h-4" /> },
        { label: t("success_stories.metrics_champions_trained", { defaultValue: "Champions Trained" }), value: "25+", icon: <Crown className="w-4 h-4" /> },
        { label: t("success_stories.metrics_years_experience", { defaultValue: "Years Experience" }), value: "15", icon: <Calendar className="w-4 h-4" /> }
      ],
      achievements: [
        t("success_stories.coach_maria_achievement1", { defaultValue: "Former WTA Top 50" }),
        t("success_stories.coach_maria_achievement2", { defaultValue: "Davis Cup Coach" }),
        t("success_stories.coach_maria_achievement3", { defaultValue: "USPTA Certified" })
      ],
      coach: "Mohammed Bashiru",
      program: t("success_stories.head_coach", { defaultValue: "Head Coach" }),
      age: t("success_stories.na", { defaultValue: "N/A" }),
      location: t("success_stories.main_academy", { defaultValue: "Main Academy" }),
      likes: 92
    },
    {
      id: 6,
      name: t("success_stories.emma_title", { defaultValue: "Emma's Path to Collegiate Tennis" }),
      category: "students",
      type: "student",
      date: "2024-05-10",
      image: storyImage6,
      thumbnail: storyImage6,
      video: "https://example.com/emma-video",
      quote: t("success_stories.emma_quote", { defaultValue: "KUZO didn't just prepare me for college tennis - they prepared me for life." }),
      story: t("success_stories.emma_story", { defaultValue: "Emma's journey from local junior player to securing a full tennis scholarship at a top university. Her story highlights the importance of academic balance, mental resilience, and the comprehensive support system at KUZO." }),
      metrics: [
        { label: t("success_stories.metrics_ranking", { defaultValue: "Ranking Improvement" }), value: "100 → 12", icon: <TrendingUp className="w-4 h-4" /> },
        { label: t("success_stories.metrics_college_offers", { defaultValue: "College Offers" }), value: "7", icon: <BookOpen className="w-4 h-4" /> },
        { label: t("success_stories.metrics_years_at_kuzo", { defaultValue: "Years at KUZO" }), value: "4", icon: <Calendar className="w-4 h-4" /> }
      ],
      achievements: [
        t("success_stories.emma_achievement1", { defaultValue: "National Ranking #12" }),
        t("success_stories.emma_achievement2", { defaultValue: "Full Scholarship Offer" }),
        t("success_stories.emma_achievement3", { defaultValue: "Academic Excellence Award" })
      ],
      coach: "Marcus Johnson",
      program: t("success_stories.high_performance_program", { defaultValue: "High Performance Program" }),
      age: "18",
      location: t("success_stories.main_academy", { defaultValue: "Main Academy" }),
      likes: 143
    },
    // Adding the 7th story to utilize storyImage7
    {
      id: 7,
      name: t("success_stories.community_title", { defaultValue: "Building Tennis Communities" }),
      category: "coaches",
      type: "coach",
      date: "2024-06-18",
      image: storyImage7,
      thumbnail: storyImage7,
      video: "https://example.com/community-video",
      quote: t("success_stories.community_quote", { defaultValue: "Tennis is more than a sport - it's about building connections and communities that last a lifetime." }),
      story: t("success_stories.community_story", { defaultValue: "Our coaches have been instrumental in building local tennis communities that extend beyond the courts. This story showcases how our academy has fostered connections between players, families, and the broader community through various outreach programs and events." }),
      metrics: [
        { label: t("success_stories.metrics_events", { defaultValue: "Community Events" }), value: "25+", icon: <Users className="w-4 h-4" /> },
        { label: t("success_stories.metrics_volunteers", { defaultValue: "Volunteers Engaged" }), value: "50+", icon: <Heart className="w-4 h-4" /> },
        { label: t("success_stories.metrics_outreach", { defaultValue: "Outreach Programs" }), value: "5", icon: <Zap className="w-4 h-4" /> }
      ],
      achievements: [
        t("success_stories.community_achievement1", { defaultValue: "Annual Community Tennis Day" }),
        t("success_stories.community_achievement2", { defaultValue: "Youth Mentorship Program" }),
        t("success_stories.community_achievement3", { defaultValue: "Local Charity Partnership" })
      ],
      coach: "David Chen",
      program: t("success_stories.community_program", { defaultValue: "Community Outreach" }),
      age: t("success_stories.na", { defaultValue: "N/A" }),
      location: t("success_stories.champions_city", { defaultValue: "Champions City" }),
      likes: 76
    }
  ];

  // Filter and sort stories
  const filteredStories = successStories
    .filter(story => 
      (activeCategory === "all" || story.category === activeCategory) &&
      (story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       story.coach.toLowerCase().includes(searchTerm.toLowerCase()) ||
       story.program.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === "popular") return b.likes - a.likes;
      if (sortBy === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
      return 0;
    });

  const toggleLike = (storyId) => {
    setLikedStories(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(storyId)) {
        newLiked.delete(storyId);
      } else {
        newLiked.add(storyId);
      }
      return newLiked;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 w-full">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={tennisBallImage}
            alt={t("success_stories.tennis_ball_alt", { defaultValue: "Tennis Ball" })} 
            className="absolute top-20 right-10 w-32 h-32 animate-geometric-float" 
          />
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/15 rotate-12 animate-hero-float" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            🏆 {t("success_stories.celebrating_excellence", { defaultValue: "Celebrating Excellence" })}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            {t("success_stories.title_line1", { defaultValue: "Success" })}
            <span className="block text-accent-bright">{t("success_stories.title_line2", { defaultValue: "Stories" })}</span>
          </h1>
          {/* Replaced TypingEffect with regular paragraph */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {t("success_stories.description", { defaultValue: "Discover inspiring journeys of our students, families, and coaches who have achieved remarkable success through dedication, exceptional coaching, and the KUZO Tennis Academy experience." })}
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">250+</div>
                <div className="text-sm text-muted-foreground">{t("success_stories.stats_champions_trained", { defaultValue: "Champions Trained" })}</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">{t("success_stories.stats_tournaments_won", { defaultValue: "Tournaments Won" })}</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary-foreground mb-2">15+</div>
                <div className="text-sm text-muted-foreground">{t("success_stories.stats_years_excellence", { defaultValue: "Years Excellence" })}</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-foreground/10 to-foreground/5 border-foreground/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-foreground mb-2">98%</div>
                <div className="text-sm text-muted-foreground">{t("success_stories.stats_satisfaction_rate", { defaultValue: "Satisfaction Rate" })}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-background/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    placeholder={t("success_stories.search_placeholder", { defaultValue: "Search stories, coaches, programs..." })}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {/* Sort */}
                <div className="flex gap-2">
                  <select 
                    className="px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">{t("success_stories.sort_newest", { defaultValue: "Newest First" })}</option>
                    <option value="popular">{t("success_stories.sort_popular", { defaultValue: "Most Popular" })}</option>
                    <option value="oldest">{t("success_stories.sort_oldest", { defaultValue: "Oldest First" })}</option>
                  </select>
                  
                  <Button variant="outline" size="icon">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mt-6">
                {storyCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={`transition-all duration-300 ${
                      activeCategory === category.id 
                        ? "bg-accent hover:bg-accent-bright text-white" 
                        : "hover:bg-accent/20"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredStories.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🎾</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t("success_stories.no_stories_found", { defaultValue: "No stories found" })}</h3>
              <p className="text-muted-foreground">{t("success_stories.try_adjusting_search", { defaultValue: "Try adjusting your search or filter criteria" })}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card 
                    className="h-full group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-xl border-border/50 overflow-hidden"
                    onClick={() => setSelectedStory(story)}
                  >
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Story Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Video Play Button */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button 
                            size="icon" 
                            className="w-14 h-14 rounded-full bg-white/90 hover:bg-white text-foreground"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Video play functionality would go here
                            }}
                          >
                            <Play className="w-6 h-6 ml-1" />
                          </Button>
                        </div>
                        
                        {/* Story Type Badge */}
                        <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                          {story.type.charAt(0).toUpperCase() + story.type.slice(1)}
                        </Badge>
                        
                        {/* Like Button */}
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(story.id);
                          }}
                        >
                          <Heart 
                            className={`w-4 h-4 ${
                              likedStories.has(story.id) ? "fill-red-500 text-red-500" : "text-foreground"
                            }`} 
                          />
                          <span className="ml-1">{story.likes + (likedStories.has(story.id) ? 1 : 0)}</span>
                        </Button>
                      </div>
                      
                      {/* Story Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                          {story.name}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                          {story.quote}
                        </p>
                        
                        {/* Story Metrics */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {story.metrics.map((metric, i) => (
                            <div 
                              key={i} 
                              className="bg-secondary/30 rounded-lg p-2 text-center"
                            >
                              <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                              <div className="text-sm font-bold text-foreground flex items-center justify-center">
                                {metric.icon}
                                <span className="ml-1">{metric.value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Story Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <User className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="text-xs font-medium text-foreground">{story.coach}</div>
                              <div className="text-xs text-muted-foreground">{story.program}</div>
                            </div>
                          </div>
                          
                          <Badge variant="outline" className="text-xs">
                            {story.age}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-background rounded-xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="p-0">
              {/* Story Header */}
              <div className="relative">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.name}
                  className="w-full h-64 md:h-80 object-cover"
                />
                
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  onClick={() => setSelectedStory(null)}
                >
                  ✕
                </Button>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedStory.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-white/90">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {selectedStory.coach}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {selectedStory.program}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedStory.location}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {/* Story Quote */}
                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Quote className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                      <p className="text-lg italic text-foreground">
                        "{selectedStory.quote}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Story Content */}
                <div className="prose max-w-none mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedStory.story}
                  </p>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {selectedStory.metrics.map((metric, i) => (
                    <Card key={i} className="bg-secondary/10 border-border/50">
                      <CardContent className="p-4 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                          {metric.icon}
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Achievements */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-accent" />
                    {t("success_stories.key_achievements", { defaultValue: "Key Achievements" })}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedStory.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary" className="py-2 px-3 text-sm">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Video Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                    <Video className="w-5 h-5 mr-2 text-accent" />
                    {t("success_stories.video_testimonial", { defaultValue: "Video Testimonial" })}
                  </h3>
                  <Card className="bg-secondary/10 border-border/50">
                    <CardContent className="p-8 text-center">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                        <Button 
                          size="lg" 
                          className="rounded-full w-16 h-16 bg-accent hover:bg-accent-bright"
                          onClick={() => {
                            // Video play functionality would go here
                          }}
                        >
                          <Play className="w-6 h-6 ml-1 text-white" />
                        </Button>
                      </div>
                      <p className="text-muted-foreground">
                        {t("success_stories.watch_testimonial", { defaultValue: "Watch {{storyName}} share their journey in their own words", storyName: selectedStory.name })}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="flex-1 bg-accent hover:bg-accent-bright text-white"
                    onClick={() => toggleLike(selectedStory.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 mr-2 ${
                        likedStories.has(selectedStory.id) ? "fill-white" : ""
                      }`} 
                    />
                    {likedStories.has(selectedStory.id) ? t("success_stories.liked", { defaultValue: "Liked" }) : t("success_stories.like_story", { defaultValue: "Like Story" })}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    {t("success_stories.share_story", { defaultValue: "Share Story" })}
                  </Button>
                </div>
              </div>
            </CardContent>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SuccessStoriesPage;