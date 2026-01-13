# 💼 Balram Prajapati - Portfolio

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS, showcasing my journey as a Full-Stack Developer with expertise in MERN stack, DevOps, and cloud technologies.

## ✨ Features

- 🎨 Modern dark theme with purple accents
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js App Router
- 🎬 Dynamic video background with fallback support
- 📊 Interactive project filtering and categorization
- 🔍 SEO optimized with meta tags and schema markup
- 💾 Easy content management through `data.json`

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.6
- **Styling:** Tailwind CSS 4
- **Language:** JavaScript (React 19)
- **Animations:** Custom CSS animations
- **Typewriter:** react-simple-typewriter
- **Deployment:** Vercel-ready

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Balram04/Motluptes-Client.git

# Navigate to project directory
cd myportfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the site.

## 📁 Project Structure

```
myportfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page
│   ├── projects/          # Projects page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.js           # Hero section
│   ├── ProjectsSection.js # Projects showcase
│   ├── SkillsSection.js  # Tech skills
│   ├── AboutMe.js        # About section
│   ├── Contact.js        # Contact form
│   └── UI/               # Reusable UI components
├── data/
│   └── data.json         # Content configuration
└── public/               # Static assets
```

## ⚙️ Customization

1. **Update Content:** Edit `data/data.json` with your information
2. **Add Projects:** Update the `projects` array in `data.json`
3. **Change Theme:** Modify CSS variables in `app/globals.css`
4. **Replace Images:** Add your images to `public/` directory

## 📧 Contact

**Balram Prajapati**  
Email: balramprajapati3263@gmail.com  
Portfolio: [Live Demo](https://balram-portfolio19.vercel.app/)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ and ☕ by Balram Prajapati
-   **SEO**:
    -   Update the metadata object in app/layout.js with your site's title, description, and Open Graph images.
    -   Customize the public/sitemap.xml and public/robots.txt for your domain.

🌟 Key Features in Action
-------------------------

-   **Navbar**: Highlights the active section as you scroll (e.g., #projects turns white when viewing the Projects section).
-   **Hero Section**: Features a video background with a fallback image, a typewriter effect for titles, and SEO-optimized <h1> placement.
-   **Projects Page**: Displays all projects at /projects, with category filtering (e.g., Full Stack, React) and a fade-in animation for project cards.
-   **SEO Optimization**: Includes meta tags, schema markup, and a sitemap to rank for your name.
-   **Performance**: Uses server-side rendering for most components, with client-side interactivity isolated to specific features (e.g., filtering, scroll effects).

🤝 Contributing
---------------

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (git checkout -b feature/your-feature).
3.  Make your changes and commit (git commit -m "Add your feature").
4.  Push to your branch (git push origin feature/your-feature).
5.  Open a Pull Request.


📬 Contact
----------

-   **Name**: Balram Prajapati
-   **Email**: <balramprajapati3263@gmail.com>
-   **GitHub**: [github.com/Balram04](https://github.com/Balram04)

