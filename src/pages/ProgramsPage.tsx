import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";
import * as THREE from 'three';
import { Trophy, Target, Zap, Crown, Medal, Star } from 'lucide-react';

// Define interfaces for our data structures
interface Program {
  id: number;
  name: string;
  age: string;
  duration: string;
  focus: string[];
  description: string;
  coach: string;
  schedule: string;
  price: string;
  features: string[];
  competitiveRating: number;
  successRate: number;
  popular: boolean;
  achievements: string[];
}

interface ProgramLevel {
  id: string;
  title: string;
  description: string;
  icon: string;
  competitiveLevel: number;
  programs: Program[];
}


const ProgramsPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const categoryButtonsRef = useRef<HTMLDivElement>(null);
  const threejsRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    balls: THREE.Mesh[];
    trophies: (THREE.Mesh & { rotationSpeed: number })[];
  } | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Three.js Tennis Court Scene with Flying Tennis Balls
  useEffect(() => {
    if (!threejsRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    threejsRef.current.appendChild(renderer.domElement);

    // Tennis Court
    const courtGeometry = new THREE.PlaneGeometry(20, 12);
    const courtMaterial = new THREE.MeshBasicMaterial({
      color: 0x2d5016,
      transparent: true,
      opacity: 0.3
    });
    const court = new THREE.Mesh(courtGeometry, courtMaterial);
    court.rotation.x = -Math.PI / 2;
    scene.add(court);

    // Tennis Court Lines
    const linesMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const linesGeometry = new THREE.BufferGeometry();
    const linePoints = [
      new THREE.Vector3(-10, 0.01, -6), new THREE.Vector3(10, 0.01, -6),
      new THREE.Vector3(-10, 0.01, 6), new THREE.Vector3(10, 0.01, 6),
      new THREE.Vector3(-10, 0.01, -6), new THREE.Vector3(-10, 0.01, 6),
      new THREE.Vector3(10, 0.01, -6), new THREE.Vector3(10, 0.01, 6),
      new THREE.Vector3(0, 0.01, -6), new THREE.Vector3(0, 0.01, 6),
    ];
    linesGeometry.setFromPoints(linePoints);
    const courtLines = new THREE.Line(linesGeometry, linesMaterial);
    scene.add(courtLines);

    // Tennis Balls with Physics
    const ballGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const ballMaterial = new THREE.MeshBasicMaterial({ color: 0x9aff00 });
    const balls: (THREE.Mesh & { velocity: THREE.Vector3 })[] = [];

    for (let i = 0; i < 15; i++) {
      const ball = new THREE.Mesh(ballGeometry, ballMaterial) as any;
      ball.position.set(
        (Math.random() - 0.5) * 30,
        Math.random() * 10 + 5,
        (Math.random() - 0.5) * 20
      );
      ball.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.2
      );
      balls.push(ball);
      scene.add(ball);
    }

    // Trophy Particles
    const trophyGeometry = new THREE.ConeGeometry(0.3, 0.6, 8);
    const trophyMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    const trophies: (THREE.Mesh & { rotationSpeed: number })[] = [];

    for (let i = 0; i < 8; i++) {
      const trophy = new THREE.Mesh(trophyGeometry, trophyMaterial) as any;
      trophy.position.set(
        (Math.random() - 0.5) * 40,
        Math.random() * 8 + 2,
        (Math.random() - 0.5) * 30
      );
      trophy.rotationSpeed = (Math.random() - 0.5) * 0.1;
      trophies.push(trophy);
      scene.add(trophy);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    camera.position.set(0, 15, 20);
    camera.lookAt(0, 0, 0);

    sceneRef.current = { scene, camera, renderer, balls: balls as any, trophies };

    // Animation Loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Animate tennis balls with bouncing physics
      balls.forEach(ball => {
        ball.position.add(ball.velocity);

        // Bounce off invisible boundaries
        if (ball.position.x > 15 || ball.position.x < -15) ball.velocity.x *= -0.8;
        if (ball.position.z > 10 || ball.position.z < -10) ball.velocity.z *= -0.8;
        if (ball.position.y < 0.2) {
          ball.velocity.y = Math.abs(ball.velocity.y) * 0.7;
          ball.position.y = 0.2;
        }
        if (ball.position.y > 12) ball.velocity.y *= -0.9;

        // Add gravity
        ball.velocity.y -= 0.005;

        // Add slight rotation
        ball.rotation.x += ball.velocity.y * 0.1;
        ball.rotation.z += ball.velocity.x * 0.1;
      });

      // Animate trophies
      trophies.forEach(trophy => {
        trophy.rotation.y += trophy.rotationSpeed;
        trophy.position.y += Math.sin(Date.now() * 0.001 + trophy.position.x) * 0.01;
      });

      // Rotate the entire scene slowly
      scene.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (threejsRef.current && renderer.domElement) {
        threejsRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const competitiveStats = useMemo(() => [
    { number: 89, label: t("programs.stats_tournament_wins", { defaultValue: "Tournament Wins" }), suffix: "%", icon: Trophy },
    { number: 45, label: t("programs.stats_professional_players", { defaultValue: "Professional Players" }), suffix: "+", icon: Crown },
    { number: 156, label: t("programs.stats_championships_won", { defaultValue: "Championships Won" }), suffix: "", icon: Medal },
    { number: 98, label: t("programs.stats_college_placements", { defaultValue: "College Placements" }), suffix: "%", icon: Target }
  ], []);

  // Enhanced program data with competitive features
  const programLevels: ProgramLevel[] = useMemo(() => [
    {
      id: 'beginner',
      title: t("programs.future_champions_title", { defaultValue: "FUTURE CHAMPIONS" }),
      description: t("programs.future_champions_description", { defaultValue: "Building tomorrow's tennis stars from the ground up with world-class fundamentals" }),
      icon: '🌟',
      competitiveLevel: 1,
      programs: [
        {
          id: 1,
          name: t("programs.little_legends_name", { defaultValue: "Little Legends Academy" }),
          age: t("programs.little_legends_age", { defaultValue: "Ages 4-6" }),
          duration: t("programs.little_legends_duration", { defaultValue: "8 weeks intensive" }),
          focus: [
            t("programs.little_legends_focus_1", { defaultValue: "Champion Mindset" }),
            t("programs.little_legends_focus_2", { defaultValue: "Pro Techniques" }),
            t("programs.little_legends_focus_3", { defaultValue: "Mental Toughness" })
          ],
          description: t("programs.little_legends_description", { defaultValue: "Professional-grade training adapted for young champions. Building the foundation for future tournament success." }),
          coach: t("programs.little_legends_coach", { defaultValue: "Coach Maria Rodriguez (Former Pro)" }),
          schedule: t("programs.little_legends_schedule", { defaultValue: "Mon/Wed/Fri 3:00-4:00 PM + Weekend Camps" }),
          price: "$180/month",
          features: [
            t("programs.little_legends_feature_1", { defaultValue: "Video Analysis" }),
            t("programs.little_legends_feature_2", { defaultValue: "Parent Progress Reports" }),
            t("programs.little_legends_feature_3", { defaultValue: "Mini Tournaments" })
          ],
          competitiveRating: 3,
          successRate: 95,
          popular: false,
          achievements: [
            t("programs.little_legends_achievement_1", { defaultValue: "30+ Junior Tournament Wins" }),
            t("programs.little_legends_achievement_2", { defaultValue: "State Championship Qualifiers" })
          ]
        },
        {
          id: 2,
          name: t("programs.kuzo_junior_name", { defaultValue: "KUZO Junior Development" }),
          age: t("programs.kuzo_junior_age", { defaultValue: "Ages 7-10" }),
          duration: t("programs.kuzo_junior_duration", { defaultValue: "12 weeks championship prep" }),
          focus: [
            t("programs.kuzo_junior_focus_1", { defaultValue: "Tournament Play" }),
            t("programs.kuzo_junior_focus_2", { defaultValue: "Advanced Strategy" }),
            t("programs.kuzo_junior_focus_3", { defaultValue: "Physical Conditioning" })
          ],
          description: t("programs.kuzo_junior_description", { defaultValue: "High-performance training preparing young athletes for competitive junior circuits." }),
          coach: t("programs.kuzo_junior_coach", { defaultValue: "Coach James Thompson (ATP Certified)" }),
          schedule: t("programs.kuzo_junior_schedule", { defaultValue: "Tue/Thu 4:00-6:00 PM + Saturday Matches" }),
          price: "$220/month",
          features: [
            t("programs.kuzo_junior_feature_1", { defaultValue: "Live Match Streaming" }),
            t("programs.kuzo_junior_feature_2", { defaultValue: "Nutrition Coaching" }),
            t("programs.kuzo_junior_feature_3", { defaultValue: "Mental Performance Training" })
          ],
          competitiveRating: 4,
          successRate: 92,
          popular: true,
          achievements: [
            t("programs.kuzo_junior_achievement_1", { defaultValue: "Regional Champions" }),
            t("programs.kuzo_junior_achievement_2", { defaultValue: "National Ranking Points" })
          ]
        },
        {
          id: 3,
          name: t("programs.championship_teen_name", { defaultValue: "Championship Teen Academy" }),
          age: t("programs.championship_teen_age", { defaultValue: "Ages 11-14" }),
          duration: t("programs.championship_teen_duration", { defaultValue: "16 weeks KUZO training" }),
          focus: [
            t("programs.championship_teen_focus_1", { defaultValue: "College Prep" }),
            t("programs.championship_teen_focus_2", { defaultValue: "Professional Technique" }),
            t("programs.championship_teen_focus_3", { defaultValue: "Leadership" })
          ],
          description: t("programs.championship_teen_description", { defaultValue: "KUZO training program with direct pathway to high school and college tennis success." }),
          coach: t("programs.championship_teen_coach", { defaultValue: "Coach Sarah Williams (Former WTA)" }),
          schedule: t("programs.championship_teen_schedule", { defaultValue: "Mon/Wed/Fri 5:00-7:30 PM + Weekend Tournaments" }),
          price: "$280/month",
          features: [
            t("programs.championship_teen_feature_1", { defaultValue: "College Scout Connections" }),
            t("programs.championship_teen_feature_2", { defaultValue: "Scholarship Guidance" }),
            t("programs.championship_teen_feature_3", { defaultValue: "International Tournament Prep" })
          ],
          competitiveRating: 5,
          successRate: 88,
          popular: false,
          achievements: [
            t("programs.championship_teen_achievement_1", { defaultValue: "15+ College Scholarships" }),
            t("programs.championship_teen_achievement_2", { defaultValue: "State Championship Titles" })
          ]
        }
      ]
    },
    {
      id: 'intermediate',
      title: t("programs.tournament_warriors_title", { defaultValue: "TOURNAMENT WARRIORS" }),
      description: t("programs.tournament_warriors_description", { defaultValue: "Competitive training for ambitious players ready to dominate tournaments" }),
      icon: '⚡',
      competitiveLevel: 2,
      programs: [
        {
          id: 4,
          name: t("programs.championship_circuit_name", { defaultValue: "Championship Circuit" }),
          age: t("programs.championship_circuit_age", { defaultValue: "Ages 12-16" }),
          duration: t("programs.championship_circuit_duration", { defaultValue: "20 weeks tournament season" }),
          focus: [
            t("programs.championship_circuit_focus_1", { defaultValue: "Match Strategy" }),
            t("programs.championship_circuit_focus_2", { defaultValue: "Tournament Psychology" }),
            t("programs.championship_circuit_focus_3", { defaultValue: "Ranking Advancement" })
          ],
          description: t("programs.championship_circuit_description", { defaultValue: "Intensive tournament preparation with professional coaching and mental performance training." }),
          coach: t("programs.championship_circuit_coach", { defaultValue: "Coach Michael Chen (Davis Cup Captain)" }),
          schedule: t("programs.championship_circuit_schedule", { defaultValue: "Mon/Wed/Fri 6:00-8:30 PM + Weekend Tournaments" }),
          price: "$350/month",
          features: [
            t("programs.championship_circuit_feature_1", { defaultValue: "Tournament Travel Support" }),
            t("programs.championship_circuit_feature_2", { defaultValue: "Performance Analytics" }),
            t("programs.championship_circuit_feature_3", { defaultValue: "Sports Psychology" })
          ],
          competitiveRating: 8,
          successRate: 85,
          popular: true,
          achievements: [
            t("programs.championship_circuit_achievement_1", { defaultValue: "National Tournament Victories" }),
            t("programs.championship_circuit_achievement_2", { defaultValue: "ITF Junior Circuit Success" })
          ]
        },
        {
          id: 5,
          name: t("programs.adult_championship_name", { defaultValue: "Adult Championship League" }),
          age: t("programs.adult_championship_age", { defaultValue: "18+ Competitive" }),
          duration: t("programs.adult_championship_duration", { defaultValue: "12 weeks league prep" }),
          focus: [
            t("programs.adult_championship_focus_1", { defaultValue: "League Dominance" }),
            t("programs.adult_championship_focus_2", { defaultValue: "Advanced Tactics" }),
            t("programs.adult_championship_focus_3", { defaultValue: "Peak Performance" })
          ],
          description: t("programs.adult_championship_description", { defaultValue: "KUZO adult training focused on league championships and tournament success." }),
          coach: t("programs.adult_championship_coach", { defaultValue: "Coach Lisa Martinez (Former #1 College Player)" }),
          schedule: t("programs.adult_championship_schedule", { defaultValue: "Tue/Thu 7:00-9:00 PM + Weekend Matches" }),
          price: "$250/month",
          features: [
            t("programs.adult_championship_feature_1", { defaultValue: "Match Video Analysis" }),
            t("programs.adult_championship_feature_2", { defaultValue: "Opponent Scouting" }),
            t("programs.adult_championship_feature_3", { defaultValue: "Fitness Optimization" })
          ],
          competitiveRating: 6,
          successRate: 91,
          popular: false,
          achievements: [
            t("programs.adult_championship_achievement_1", { defaultValue: "Regional League Champions" }),
            t("programs.adult_championship_achievement_2", { defaultValue: "USTA Tournament Winners" })
          ]
        },
        {
          id: 6,
          name: t("programs.masters_tournament_name", { defaultValue: "Masters Tournament KUZO" }),
          age: t("programs.masters_tournament_age", { defaultValue: "35+ Champions" }),
          duration: t("programs.masters_tournament_duration", { defaultValue: "16 weeks masters circuit" }),
          focus: [
            t("programs.masters_tournament_focus_1", { defaultValue: "Masters Tournaments" }),
            t("programs.masters_tournament_focus_2", { defaultValue: "Strategic Play" }),
            t("programs.masters_tournament_focus_3", { defaultValue: "Experience Advantage" })
          ],
          description: t("programs.masters_tournament_description", { defaultValue: "Championship-level training for experienced competitors dominating masters events." }),
          coach: t("programs.masters_tournament_coach", { defaultValue: "Coach David Rodriguez (Masters Champion)" }),
          schedule: t("programs.masters_tournament_schedule", { defaultValue: "Sat/Sun 9:00-12:00 PM + Tournament Travel" }),
          price: "$320/month",
          features: [
            t("programs.masters_tournament_feature_1", { defaultValue: "Tournament Strategy Sessions" }),
            t("programs.masters_tournament_feature_2", { defaultValue: "Recovery Protocols" }),
            t("programs.masters_tournament_feature_3", { defaultValue: "Mental Edge Training" })
          ],
          competitiveRating: 7,
          successRate: 89,
          popular: false,
          achievements: [
            t("programs.masters_tournament_achievement_1", { defaultValue: "Masters National Championships" }),
            t("programs.masters_tournament_achievement_2", { defaultValue: "International Tournament Success" })
          ]
        }
      ]
    },
    {
      id: 'advanced',
      title: t("programs.champions_league_title", { defaultValue: "CHAMPIONS LEAGUE" }),
      description: t("programs.champions_league_description", { defaultValue: "KUZO training for future professionals and scholarship athletes" }),
      icon: '🏆',
      competitiveLevel: 3,
      programs: [
        {
          id: 7,
          name: t("programs.professional_pathway_name", { defaultValue: "Professional Pathway Academy" }),
          age: t("programs.professional_pathway_age", { defaultValue: "Ages 14-18" }),
          duration: t("programs.professional_pathway_duration", { defaultValue: "24 weeks pro preparation" }),
          focus: [
            t("programs.professional_pathway_focus_1", { defaultValue: "Professional Circuit" }),
            t("programs.professional_pathway_focus_2", { defaultValue: "College Scholarships" }),
            t("programs.professional_pathway_focus_3", { defaultValue: "World Rankings" })
          ],
          description: t("programs.professional_pathway_description", { defaultValue: "The ultimate training program producing professional players and Division I college athletes." }),
          coach: t("programs.professional_pathway_coach", { defaultValue: "Coach Maria Elena Santos (Former Top 50 WTA)" }),
          schedule: t("programs.professional_pathway_schedule", { defaultValue: "Daily Training 6:00-10:00 PM + Full Tournament Schedule" }),
          price: "$500/month",
          features: [
            t("programs.professional_pathway_feature_1", { defaultValue: "Professional Coaching Staff" }),
            t("programs.professional_pathway_feature_2", { defaultValue: "International Tournament Circuit" }),
            t("programs.professional_pathway_feature_3", { defaultValue: "Agent Connections" })
          ],
          competitiveRating: 10,
          successRate: 78,
          popular: true,
          achievements: [
            t("programs.professional_pathway_achievement_1", { defaultValue: "Pro Tour Qualifiers" }),
            t("programs.professional_pathway_achievement_2", { defaultValue: "Division I Scholarships" }),
            t("programs.professional_pathway_achievement_3", { defaultValue: "ATP/WTA Points" })
          ]
        },
        {
          id: 8,
          name: t("programs.kuzo_performance_name", { defaultValue: "KUZO Performance Institute" }),
          age: t("programs.kuzo_performance_age", { defaultValue: "16+ Professional Track" }),
          duration: t("programs.kuzo_performance_duration", { defaultValue: "Ongoing professional development" }),
          focus: [
            t("programs.kuzo_performance_focus_1", { defaultValue: "Professional Tours" }),
            t("programs.kuzo_performance_focus_2", { defaultValue: "Sponsorship Deals" }),
            t("programs.kuzo_performance_focus_3", { defaultValue: "World Rankings" })
          ],
          description: t("programs.kuzo_performance_description", { defaultValue: "The pinnacle of tennis training - preparing athletes for professional careers and international success." }),
          coach: t("programs.kuzo_performance_coach", { defaultValue: "Director: Coach Alex Petrov (Former ATP Top 20)" }),
          schedule: t("programs.kuzo_performance_schedule", { defaultValue: "Full-time training program with flexible scheduling" }),
          price: "$750/month",
          features: [
            t("programs.kuzo_performance_feature_1", { defaultValue: "24/7 Facility Access" }),
            t("programs.kuzo_performance_feature_2", { defaultValue: "Professional Team Support" }),
            t("programs.kuzo_performance_feature_3", { defaultValue: "International Coaching Exchange" })
          ],
          competitiveRating: 10,
          successRate: 82,
          popular: false,
          achievements: [
            t("programs.kuzo_performance_achievement_1", { defaultValue: "ATP/WTA Tour Players" }),
            t("programs.kuzo_performance_achievement_2", { defaultValue: "Grand Slam Qualifiers" }),
            t("programs.kuzo_performance_achievement_3", { defaultValue: "Olympic Training Partners" })
          ]
        }
      ]
    }
  ], []);

  // Filter programs based on active category
  const filteredPrograms = useMemo(() =>
    activeCategory === 'all'
      ? programLevels
      : programLevels.filter(level => level.id === activeCategory),
    [activeCategory, programLevels]
  );

  // Tennis ball serve animation with Three.js enhancement
  const serveBounceAnimation = useCallback((e: React.MouseEvent<HTMLButtonElement>, program: Program | null) => {
    const button = e.currentTarget;

    // Add Three.js ball effect
    if (sceneRef.current) {
      const { balls } = sceneRef.current;
      balls.forEach(ball => {
        (ball as any).velocity.y += 0.5;
        (ball as any).velocity.x += (Math.random() - 0.5) * 0.3;
        (ball as any).velocity.z += (Math.random() - 0.5) * 0.3;
      });
    }

    // Enhanced button animation
    button.animate([
      { transform: 'translateY(0px) scale(1) rotateZ(0deg)' },
      { transform: 'translateY(-30px) scale(0.9) rotateZ(-5deg)' },
      { transform: 'translateY(-60px) scale(0.8) rotateZ(-10deg)' },
      { transform: 'translateY(0px) scale(1.2) rotateZ(5deg)' },
      { transform: 'translateY(15px) scale(0.95) rotateZ(2deg)' },
      { transform: 'translateY(0px) scale(1) rotateZ(0deg)' }
    ], {
      duration: 1500,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    });

    // Show program details modal
    if (program) {
      setSelectedProgram(program);
    }
  }, []);

  // Competitive Rating Component
  const CompetitiveRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      ))}
      <span className="text-sm font-semibold ml-1">{rating}/5</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Three.js Background Scene */}
      <div
        ref={threejsRef}
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        aria-hidden="true"
      />

      {/* Hero Section with Championship Theme */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 z-10">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Championship Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-32 h-32 border-4 border-yellow-400/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-24 h-24 border-4 border-green-400/30 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xl py-3 px-8 font-black">
                🏆 CHAMPIONS ARE MADE HERE
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight"
            >
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                KUZO TENNIS
              </span>
              <span className="block text-white mt-2">ACADEMY</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {t("programs.hero_description", { defaultValue: "Where champions are forged, legends are born, and every serve brings you closer to greatness." })}
            </motion.p>

            {/* Championship Level Selector */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
            >
              {programLevels.map((level, index) => (
                <motion.div
                  key={level.id}
                  className="relative cursor-pointer group"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(level.id)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
                    <div className="text-6xl mb-4">{level.icon}</div>
                    <h3 className="text-xl font-black text-white mb-2">{level.title}</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(level.competitiveLevel)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full" />
                      ))}
                    </div>
                    <p className="text-sm text-white/70">{level.description}</p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-row justify-center gap-6"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-black px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Trophy className="mr-2" size={24} />
                {t("programs.dominate_court", { defaultValue: "DOMINATE THE COURT" })}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-12 py-6 text-xl rounded-full font-black"
              >
                <Target className="mr-2" size={24} />
                {t("programs.assess_skills", { defaultValue: "ASSESS MY SKILLS" })}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Championship Statistics */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">{t("programs.championship_legacy_title", { defaultValue: "CHAMPIONSHIP LEGACY" })}</h2>
            <p className="text-xl text-white/70">{t("programs.championship_legacy_description", { defaultValue: "Our track record speaks for itself" })}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitiveStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm rounded-2xl border border-yellow-400/20 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <stat.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-6xl font-black text-white mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-lg text-white/80 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative z-10">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              className={`px-8 py-4 text-lg font-black rounded-full ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700'
                  : 'border-2 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              {t("programs.all_champions", { defaultValue: "ALL CHAMPIONS" })}
            </Button>
            {programLevels.map((level) => (
              <Button
                key={level.id}
                variant={activeCategory === level.id ? 'default' : 'outline'}
                className={`px-8 py-4 text-lg font-black rounded-full ${
                  activeCategory === level.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700'
                    : 'border-2 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(level.id)}
              >
                {level.title}
              </Button>
            ))}
          </div>

          {/* Program Levels */}
          <AnimatePresence mode="wait">
            {filteredPrograms.map((level) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="mb-24"
              >
                <div className="text-center mb-16">
                  <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xl py-3 px-6 font-black">
                    {level.icon} {level.title}
                  </Badge>
                  <h2 className="text-5xl font-black text-gray-900 mb-6">
                    {level.title}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    {level.description}
                  </p>
                </div>

                {/* Program Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {level.programs.map((program) => (
                    <motion.div
                      key={program.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="relative group"
                    >
                      <Card className="h-full bg-white shadow-2xl border-0 overflow-hidden relative">
                        {program.popular && (
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-black z-10 shadow-lg">
                            🔥 {t("programs.most_popular", { defaultValue: "MOST POPULAR" })}
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <CardContent className="p-8">
                          <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl font-black text-gray-900 mb-2">{program.name}</h3>
                            <div className="text-right">
                              <CompetitiveRating rating={program.competitiveRating} />
                            </div>
                          </div>

                          {/* Success Rate Indicator */}
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-semibold text-gray-600">{t("programs.success_rate", { defaultValue: "Success Rate" })}</span>
                              <span className="text-sm font-black text-green-600">{program.successRate}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${program.successRate}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>

                          {/* Focus Areas */}
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {program.focus.map((skill, idx) => (
                                <Badge key={idx} className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold">
                                  <Zap size={12} className="mr-1" />
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {program.description}
                          </p>

                          {/* Features List */}
                          <div className="mb-6">
                            <h4 className="font-black text-gray-900 mb-3">{t("programs.championship_features", { defaultValue: "Championship Features:" })}</h4>
                            <ul className="space-y-2">
                              {program.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
                            <h4 className="font-black text-yellow-800 mb-2 flex items-center">
                              <Medal className="mr-2" size={16} />
                              {t("programs.recent_achievements", { defaultValue: "Recent Achievements" })}
                            </h4>
                            <ul className="space-y-1">
                              {program.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-sm text-yellow-700 flex items-center">
                                  <Trophy size={12} className="mr-2 text-yellow-600" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-3xl font-black text-green-600 mb-1">
                                {program.price}
                              </div>
                              <div className="text-xs text-gray-500">{t("programs.championship_training", { defaultValue: "Championship Training" })}</div>
                            </div>
                            <Button
                              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-black px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                              onClick={(e) => serveBounceAnimation(e, program)}
                            >
                              <Crown className="mr-2" size={16} />
                              {t("programs.join_kuzo", { defaultValue: "JOIN KUZO" })}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-black text-gray-900 mb-2">{selectedProgram.name}</h2>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black">
                    {t("programs.championship_program", { defaultValue: "CHAMPIONSHIP PROGRAM" })}
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProgram(null)}
                  className="rounded-full"
                >
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-black text-gray-900 mb-2">{t("programs.program_details", { defaultValue: "Program Details" })}</h3>
                  <div className="space-y-2">
                    <div><strong>{t("programs.age_group", { defaultValue: "Age Group:" })}</strong> {selectedProgram.age}</div>
                    <div><strong>{t("programs.duration", { defaultValue: "Duration:" })}</strong> {selectedProgram.duration}</div>
                    <div><strong>{t("programs.coach", { defaultValue: "Coach:" })}</strong> {selectedProgram.coach}</div>
                    <div><strong>{t("programs.schedule", { defaultValue: "Schedule:" })}</strong> {selectedProgram.schedule}</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-black text-gray-900 mb-2">{t("programs.success_metrics", { defaultValue: "Success Metrics" })}</h3>
                  <div className="space-y-2">
                    <div><strong>{t("programs.success_rate", { defaultValue: "Success Rate:" })}</strong> {selectedProgram.successRate}%</div>
                    <div><strong>{t("programs.competitive_rating", { defaultValue: "Competitive Rating:" })}</strong> {selectedProgram.competitiveRating}/10</div>
                    <div><strong>{t("programs.investment", { defaultValue: "Investment:" })}</strong> {selectedProgram.price}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-black text-gray-900 mb-3">{t("programs.championship_features", { defaultValue: "Championship Features" })}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProgram.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center p-2 bg-gray-50 rounded-lg">
                      <Star className="text-yellow-500 mr-2" size={16} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-black py-4 rounded-full"
                  onClick={(e) => {
                    serveBounceAnimation(e, selectedProgram);
                    setSelectedProgram(null);
                  }}
                >
                  <Crown className="mr-2" />
                  {t("programs.enroll_now_price", { defaultValue: "ENROLL NOW - {{price}}" }).replace("{{price}}", selectedProgram.price)}
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-full font-black"
                >
                  <Target className="mr-2" />
                  {t("programs.trial_session", { defaultValue: "TRIAL SESSION" })}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Championship CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Championship Graphics */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotateZ: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 border-4 border-yellow-400/10 rounded-full"
          />
          <motion.div
            animate={{
              rotateZ: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 border-4 border-green-400/10 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xl py-4 px-8 font-black">
              🏆 CHAMPIONS START HERE
            </Badge>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              <span className="block">READY TO</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                DOMINATE?
              </span>
            </h2>

            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              {t("programs.cta_description", { defaultValue: "Join the KUZO ranks of champions. Every legend started with a single decision." })}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-black text-white mb-2">{t("programs.kuzo_training", { defaultValue: "KUZO Training" })}</h3>
                <p className="text-white/70">{t("programs.kuzo_training_description", { defaultValue: "World-class coaching with proven championship methods" })}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-black text-white mb-2">{t("programs.tournament_success", { defaultValue: "Tournament Success" })}</h3>
                <p className="text-white/70">{t("programs.tournament_success_description", { defaultValue: "Direct pathway to competitive victories and rankings" })}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <Crown className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-black text-white mb-2">{t("programs.champion_mindset", { defaultValue: "Champion Mindset" })}</h3>
                <p className="text-white/70">{t("programs.champion_mindset_description", { defaultValue: "Mental toughness training for peak performance" })}</p>
              </motion.div>
            </div>

            <div className="flex flex-row justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-black px-12 py-6 text-xl rounded-full shadow-2xl"
                >
                  <Crown className="mr-3" size={24} />
                  {t("programs.claim_your_spot", { defaultValue: "CLAIM YOUR SPOT" })}
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-12 py-6 text-xl rounded-full font-black"
                >
                  <Medal className="mr-3" size={24} />
                  {t("programs.free_assessment", { defaultValue: "FREE ASSESSMENT" })}
                </Button>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white/60 mt-8 text-lg"
            >
              {t("programs.limited_spots", { defaultValue: "Limited spots available • KUZO training begins now" })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Floating Championship Badge */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Button
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-black p-4 rounded-full shadow-2xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Trophy size={24} />
        </Button>
      </motion.div>
    </div>
  );
};

export default ProgramsPage;
