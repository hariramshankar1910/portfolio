# 🚀 Hariram Shankar - Developer Portfolio

A modern, responsive developer portfolio built with React and Bootstrap, showcasing professional experience, technical skills, and project work.

![Portfolio Preview](https://via.placeholder.com/800x400/1e40af/ffffff?text=Portfolio+Preview)

## ✨ Features

- **Modern Design**: Glassmorphism effects with gradient backgrounds
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Smooth animations and hover effects
- **Code Snippets**: Technical expertise showcase
- **Professional Sections**: Hero, About, Skills, Projects, Experience, Contact
- **Dark Theme Ready**: Professional color scheme

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1, Bootstrap 5.3.3
- **Styling**: CSS3 with modern features (gradients, backdrop-filter, animations)
- **Build Tool**: Create React App
- **Deployment**: Ready for static hosting (Netlify, Vercel, GitHub Pages)

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hariram-shankar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── CodeSnippet.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Customization

### Personal Information

Update the following in `src/App.js`:

- **Personal Details**: Name, role, bio in the Hero section
- **Skills**: Modify `skillCategories` array
- **Projects**: Update `projects` array with your work
- **Experience**: Edit `experiences` array
- **Contact**: Update contact information

### Styling

Modify `src/App.css` to customize:
- Color scheme and gradients
- Typography and spacing
- Animation timings
- Responsive breakpoints

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Add corresponding styles in `src/App.css`

## 📱 Sections Overview

### 🏠 Hero Section
- Professional introduction with call-to-action buttons
- Glassmorphism card design
- Responsive typography

### 👨‍💻 About Section
- Personal highlights with statistics
- Professional summary
- Key achievements

### 🛠️ Skills Section
- Categorized technical skills
- Interactive skill badges
- Backend, Frontend, Database, Tools, Concepts

### 💻 Code Snippets
- Technical expertise showcase
- Syntax-highlighted code examples
- REST API, React hooks, SQL optimization

### 📁 Projects Section
- Featured project cards
- GitHub links and tech stacks
- Project descriptions and technologies

### 💼 Experience Section
- Professional timeline
- Company details and roles
- Achievement highlights

### 📞 Contact Section
- Contact information
- Pre-filled email link
- Social media links

## 🚀 Deployment

### GitHub Pages

1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Netlify/Vercel

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `build` folder to your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Hariram Shankar**
- Email: [your.email@example.com](mailto:your.email@example.com)
- LinkedIn: [linkedin.com/in/hariram-shankar](https://linkedin.com/in/hariram-shankar)
- GitHub: [github.com/hariram-shankar](https://github.com/hariram-shankar)

---

⭐ **Star this repo** if you found it helpful!

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
