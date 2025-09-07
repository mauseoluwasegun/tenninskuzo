# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/5d28daa6-c4c6-4e06-8592-ef2937ea42b9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5d28daa6-c4c6-4e06-8592-ef2937ea42b9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Framer Motion
- React Router
- EmailJS
- React Three Fiber
- React Three Drei
- Mailchimp (for newsletter subscriptions)

## Environment Configuration

This project uses environment variables for configuration. Create a `.env` file in the root directory based on the `.env.example` file.

### Mailchimp Integration

The project includes Mailchimp integration for newsletter subscriptions:

1. Sign up at [Mailchimp](https://mailchimp.com/) to get your API key and audience ID
2. Add the following variables to your `.env` file:
   ```
   VITE_MAILCHIMP_API_KEY=your_actual_mailchimp_api_key_here
   VITE_MAILCHIMP_SERVER_PREFIX=us1 # Change this to your server prefix (e.g., us1, us2, etc.)
   VITE_MAILCHIMP_AUDIENCE_ID=your_actual_mailchimp_audience_id_here
   ```

## New Features Added

### Success Stories Page
A dedicated page showcasing inspiring journeys of students, families, and coaches at KUZO Tennis Academy. Features include:
- Story categorization (Student Journeys, Tournament Wins, Parent Stories, Coach Insights)
- Advanced filtering and search functionality
- Interactive story cards with metrics and achievements
- Detailed story view with video testimonials
- Like and share functionality
- Statistics dashboard highlighting academy achievements

### Modern Contact Page
A redesigned contact page with modern UI elements and enhanced functionality:
- Clean, minimalist form design with custom styling
- Interactive 3D visualization using React Three Fiber
- Testimonials section with glowing card effects
- EmailJS integration for form submissions
- Responsive design for all screen sizes
- Custom animations and transitions

### Interactive 3D Tennis Scene
An engaging 3D visualization on the About page:
- Realistic tennis court with proper markings
- Animated tennis ball with physics-based bouncing
- Rotating tennis racket for dynamic visual interest
- Interactive orbit controls for 360-degree viewing
- Responsive design that works on all devices

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5d28daa6-c4c6-4e06-8592-ef2937ea42b9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)