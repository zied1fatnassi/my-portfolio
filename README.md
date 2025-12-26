# 🚀 My Portfolio

A stunning glassmorphic portfolio website built with modern web technologies.

![Portfolio Preview](./preview.png)

## ✨ Features

- **Glassmorphic Design** - Beautiful frosted glass UI with dark gradients
- **Dark/Light Mode** - Toggle with localStorage persistence
- **Responsive** - Mobile-first design, works on all devices
- **Animations** - Smooth Framer Motion scroll reveals and micro-interactions
- **PWA Ready** - Installable as a progressive web app
- **Contact Form** - EmailJS integration ready
- **Performance Optimized** - Fast loading, static generation

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Heroicons |
| **Email** | EmailJS |
| **Deployment** | Vercel |

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/my-portfolio.git

# Navigate to the project
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy**

Your site will be live at `your-project.vercel.app`

### Custom Domain

1. Go to your Vercel project settings
2. Navigate to **Domains**
3. Add your custom domain
4. Update DNS records as instructed

## ⚙️ Configuration

### EmailJS Setup

1. Create account at [emailjs.com](https://emailjs.com)
2. Create email service and template
3. Update `src/components/sections/Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser';

await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current!,
  'YOUR_PUBLIC_KEY'
);
```

### Profile Photo

Replace the emoji in `src/components/sections/Hero.tsx` with your image:

```tsx
<Image 
  src="/your-photo.jpg" 
  alt="Profile" 
  width={128} 
  height={128}
  className="rounded-full"
/>
```

## 👤 About Me

**YOUR NAME** - Autonomous Tunisian Builder | GDSC Leader | AI Agents & Web Apps

- 🇹🇳 From Ksar Hellal, Tunisia
- 🎓 Bachelor in Business Intelligence (Power BI)
- 🏆 IoT Competition Winner
- 💻 Web Developer since age 13
- 🎭 5-Year Theater Diploma

### Skills
- **Frontend**: Next.js, React, Tailwind CSS, TypeScript
- **Backend**: Node.js, Supabase, Symfony, SQL
- **Hardware**: Arduino, ESP32, IoT
- **AI**: AI Agents, n8n, Automation

### Languages
- 🇹🇳 Arabic (Native)
- 🇫🇷 French (C1)
- 🇬🇧 English (C1)

## 📞 Contact

- **Email**: your.email@example.com
- **GitHub**: [github.com/YOUR_USERNAME](https://github.com)
- **LinkedIn**: [linkedin.com/in/YOUR_USERNAME](https://linkedin.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, Tailwind CSS & Framer Motion
