# Resume Portfolio - Vite React Project

A professional, modern resume portfolio built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project folder**
   ```bash
   cd resume-vite-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will be running at `http://localhost:5173`
   - Or the URL shown in your terminal

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Update Your Information

Edit `src/App.jsx` and modify these data objects:

#### Personal Information
```javascript
const profileData = {
  name: "Your Name",
  title: "Your Job Title",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, State",
  linkedin: "linkedin.com/in/yourprofile",
  github: "github.com/yourusername",
  website: "yourwebsite.com",
  avatar: "your-image-url"
};
```

#### About Section
```javascript
const about = {
  summary: "Your professional summary...",
  highlights: [
    "Your achievement 1",
    "Your achievement 2",
    // Add more highlights
  ]
};
```

#### Work Experience
```javascript
const experience = [
  {
    company: "Company Name",
    position: "Your Position",
    duration: "Start - End Date",
    location: "City, State",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
    ],
    tech: ["Tech1", "Tech2"]
  }
];
```

#### Education
```javascript
const education = [
  {
    degree: "Your Degree",
    institution: "Institution Name",
    duration: "Year Range",
    gpa: "Your GPA",
    achievements: ["Achievement 1", "Achievement 2"]
  }
];
```

#### Skills
```javascript
const skills = {
  "Category1": ["Skill1", "Skill2"],
  "Category2": ["Skill3", "Skill4"],
};
```

#### Projects
```javascript
const projects = [
  {
    name: "Project Name",
    description: "Project description",
    tech: ["Tech1", "Tech2"],
    link: "https://project-url.com",
    github: "https://github.com/user/repo"
  }
];
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles directly in JSX using Tailwind classes

## 📱 Features

- ✅ Fully responsive design
- ✅ Interactive navigation tabs
- ✅ Professional layout
- ✅ Customizable sections
- ✅ Modern UI with Tailwind CSS
- ✅ Icon support with Lucide React
- ✅ Fast development with Vite

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🚀 Deployment

### Option 1: Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Deploy automatically

Or drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 2: Vercel
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📝 Project Structure

```
resume-vite-project/
├── src/
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Vite will automatically use the next available port
# Or specify a custom port:
npm run dev -- --port 3000
```

### Dependencies not installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Tailwind styles not working
Make sure:
1. `tailwind.config.js` is properly configured
2. `postcss.config.js` exists
3. `@tailwind` directives are in `src/index.css`
4. You've restarted the dev server

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
