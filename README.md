# Dhaval Desai - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and GSAP animations, showcasing my projects, skills, and experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **GSAP Animations**: Sophisticated scroll-triggered animations with bidirectional effects
- **Interactive Elements**: 3D hover effects, staggered card animations, and smooth transitions
- **Performance Optimized**: Fast loading with code splitting and optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Frontend**: React 19.1.0, Vite 7.0.0
- **Styling**: Tailwind CSS 4.1.11, CSS3
- **Animations**: GSAP 3.13.0 with ScrollTrigger
- **Icons**: React Icons, Lucide React
- **Build Tool**: Vite with ESLint configuration
- **Deployment**: Vercel

## 🎨 Key Sections

- **Home**: Hero section with animated typing effect and personal introduction
- **About**: Personal story, education, achievements, and coding statistics
- **Projects**: Interactive project showcase with detailed modals
- **Skills**: Technology stack and expertise areas with animated cards
- **Contact**: Contact form and social media links

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎭 Animation Features

- **Bidirectional Scroll Animations**: Smooth animations that work when scrolling up and down
- **Staggered Card Effects**: Cards animate in sequence for visual appeal
- **3D Hover Effects**: Interactive card hovering with perspective transforms
- **Smooth Heading Animations**: Elegant text animations with various effects
- **Mobile Optimized**: Reduced animation distances for better mobile performance

## 🚀 Deployment

This project is deployed on Vercel with automatic deployments from the main branch.

### Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):

   ```bash
   npm install -g vercel
   ```
2. **Login to Vercel**:

   ```bash
   vercel login
   ```
3. **Deploy**:

   ```bash
   vercel --prod
   ```

### Manual Deployment Steps

1. Build the project:

   ```bash
   npm run build
   ```
2. The build files will be in the `dist` folder
3. Upload to your hosting provider or use Vercel/Netlify for automatic deployments

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dhaval-desai10/ME.git
   cd portfolioweb
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Start development server**:

   ```bash
   npm run dev
   ```
4. **Build for production**:

   ```bash
   npm run build
   ```
5. **Preview production build**:

   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolioweb/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/          # Reusable UI components
│   │   ├── Home.jsx     # Home page component
│   │   ├── About.jsx    # About page component
│   │   ├── Projects.jsx # Projects showcase
│   │   ├── Skills.jsx   # Skills and expertise
│   │   └── Contact.jsx  # Contact information
│   ├── assets/          # Images and static assets
│   ├── lib/            # Utility functions
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── README.md
```

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: < 3 seconds on 3G networks
- **Animations**: 60fps smooth animations

## 📞 Contact

- **Email**: dhavaldesai7000@gmail.com
- **LinkedIn**: [Dhaval Desai](https://www.linkedin.com/in/dhaval-desai-82122028a/)
- **GitHub**: [dhaval-desai10](https://github.com/dhaval-desai10)
- **CodeChef**: [dhaval_desai](https://www.codechef.com/users/dhaval_desai)
- **LeetCode**: [Dhaval_Desai_dd](https://leetcode.com/u/Dhaval_Desai_dd/)
