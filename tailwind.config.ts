import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// KUZO Tennis Brand Colors
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					deep: 'hsl(var(--primary-deep))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					bright: 'hsl(var(--accent-bright))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				
				// Tennis Court Colors
				'court-blue': 'hsl(var(--court-blue))',
				'court-line': 'hsl(var(--court-line))',
				
				// Glass Morphism
				glass: {
					bg: 'hsl(var(--glass-bg))',
					border: 'hsl(var(--glass-border))',
				},
				
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// Existing shadcn animations
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				
				// KUZO Tennis Academy Animations
				'tennis-bounce': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'court-glow': {
					'0%': { 
						opacity: '0.6',
						filter: 'drop-shadow(0 0 8px hsl(var(--accent)))'
					},
					'100%': { 
						opacity: '1',
						filter: 'drop-shadow(0 0 20px hsl(var(--accent)))'
					}
				},
				'hero-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%': { transform: 'translateY(5px) rotate(-1deg)' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.6)' }
				},
				'slide-in-left': {
					from: { opacity: '0', transform: 'translateX(-50px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					from: { opacity: '0', transform: 'translateX(50px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'geometric-float': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'25%': { transform: 'translate(-10px, -20px) rotate(90deg)' },
					'50%': { transform: 'translate(20px, -10px) rotate(180deg)' },
					'75%': { transform: 'translate(-15px, 10px) rotate(270deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				// KUZO Tennis Academy Animations
				'tennis-bounce': 'tennis-bounce 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite',
				'court-glow': 'court-glow 3s ease-in-out infinite alternate',
				'hero-float': 'hero-float 6s ease-in-out infinite',
				'fade-up': 'fade-up 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
				'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
				'geometric-float': 'geometric-float 20s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
