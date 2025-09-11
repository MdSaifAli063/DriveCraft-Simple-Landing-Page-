# 🚗 DriveCraft — Car Showcase (Simple Landing Page)

Beautiful, responsive, and accessible landing page for showcasing a car lineup with a hero section, feature highlights, and a model carousel.

![Status](https://img.shields.io/badge/status-stable-34D058?style=flat) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000) ![Responsive](https://img.shields.io/badge/Responsive-Yes-0eb37a)

![image](https://github.com/MdSaifAli063/DriveCraft-Simple-Landing-Page-/blob/c8a9fbba0c71d47c01969bc5bb4a5f041a5c12cd/Screenshot%202025-09-12%20012308.png)
![image](https://github.com/MdSaifAli063/DriveCraft-Simple-Landing-Page-/blob/eeb125868f5fd407f22f950da52d009eae0d41f8/Screenshot%202025-09-12%20012428.png)

---

## ✨ Overview

DriveCraft is a sleek single-page site that highlights modern car models with rich imagery and a smooth carousel. It’s built with semantic HTML, lightweight CSS, and vanilla JavaScript—no frameworks required.

- Landing sections: Hero, Features, Models (Carousel), Contact/Footer
- Accessible markup: alt text, ARIA roles, focusable carousel
- Optimized images: responsive `srcset`, lazy loading, safe referrer handling with fallbacks

---

## 🌟 Features

- 🖼️ Hero banner with call-to-action buttons
- 🧭 Sticky header with smooth in-page navigation
- 🏁 Carousel of car models with “Explore” detail views
- 📱 Fully responsive layout
- ⚡ Performance-friendly image loading (lazy, async decoding)
- 🛡️ Graceful fallbacks for broken images
- ♿ Accessibility-minded attributes and roles

---

## 🧩 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

---

## 🚀 Quick Start

1. Clone or download this repository.
2. Ensure the following files are present:
   - index.html
   - style.css
   - script.js
3. Open index.html directly in your browser, or serve locally:
   - Using VS Code Live Server, or
   - python3 -m http.server 5500 (then visit http://localhost:5500)

No build step required.

---

## 📁 Project Structure


. ├─ index.html # Main landing page markup ├─ style.css # Styles for layout, typography, components ├─ script.js # Carousel interactions and UI behavior └─ assets/ # (optional) Local images, icons, or fonts


---

## 🛠️ Customization

- Branding:
  - Update the site name in header/footer: “DriveCraft”
  - Change page title in <head> to your brand
- Hero:
  - Replace hero image URL in the “Hero” section
  - Update hero heading, copy, and CTA links
- Models:
  - Each “.item” represents a model: image, title, specs, and buttons
  - Swap Unsplash/other URLs or use local images under /assets
- Colors & Typography:
  - Edit CSS variables or color tokens in style.css
- Buttons/Actions:
  - Wire up “REQUEST INFO” and “BOOK TEST DRIVE” buttons to forms or links

---

## 🎮 Usage Tips

- Carousel
  - Click “Previous” and “Next” to cycle models
  - Click “EXPLORE ↗” on a model to open its details
  - Click “View All ↗” to close the details view
- Keyboard
  - The carousel container is focusable (tab to it)
  - Use the visible Prev/Next buttons with Enter/Space

---

## ♿ Accessibility Notes

- Descriptive alt text on all images
- ARIA roles and labels for carousel and dialogs
- Focusable carousel container (tabindex="0")
- Buttons include aria-labels for clarity
- Consider adding focus styles and Escape-to-close in script.js for dialogs

---

## ⚙️ Performance & SEO

- Responsive images via srcset + sizes
- Lazy loading on non-hero images
- async decoding for faster paint
- Preconnect to image CDN and `no-referrer` to reduce blocking
- Add meta description and Open Graph tags in <head> for SEO/social

---

## 🖼️ Assets & Credits

- Photos from Unsplash and other sources cited in index.html:
  - Unsplash images (cars and scenes)
  - wallpaper-house.com images
- Fallbacks use placehold.co for graceful degradation
- Please review licenses of third-party images before production use

---

## 🔗 Links

- Live Demo: (add your deployed URL)
- Design Reference: (optional)

---

## 📬 Contact

- Email: sales@drivecraft.example
- Phone: +1 800 555 0123

---

## 📄 License

This project is provided as a simple starter/landing template. Add your preferred license (MIT recommended) before publishing.
