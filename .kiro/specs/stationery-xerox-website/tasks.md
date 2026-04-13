# Implementation Plan: Stationery Xerox Website

## Overview

This plan tracks the implementation of the Shree Swami Stationery and Xerox website. The vanilla HTML/CSS/JS version is complete. A React + Tailwind version with Apple-inspired minimalist design has been created in the stationery-react/ folder. Current focus is completing the dark/light theme implementation.

## Tasks

### Phase 1: Vanilla HTML/CSS/JS Implementation (COMPLETE)

- [x] 1. Project Setup and File Structure
  - Create root directory structure with index.html, style.css, script.js
  - Create /images folder with /products and /shop subfolders
  - Add basic HTML5 boilerplate with meta tags for SEO and viewport
  - Link CSS and JavaScript files in HTML
  - _Requirements: 11.1, 11.3_

- [ ] 2. HTML Structure - Navigation and Header
  - [x] 2.1 Create semantic header element with navigation
    - Add nav element with logo/shop name
    - Create navigation links for Home, Products, Services, Contact sections
    - Add hamburger menu icon for mobile (hidden on desktop)
    - Use semantic HTML5 tags (header, nav)
    - _Requirements: 1.1, 1.4, 9.1_
  
  - [x] 2.2 Add accessibility attributes to navigation
    - Add aria-labels for navigation elements
    - Ensure keyboard navigation support with proper tabindex
    - _Requirements: 9.4_

- [ ] 3. HTML Structure - Hero Section
  - [x] 3.1 Create hero section with semantic markup
    - Add section element with id="home"
    - Create h1 heading with shop name
    - Add tagline paragraph
    - Create call-to-action button
    - _Requirements: 2.1, 2.2, 9.1_

- [ ] 4. HTML Structure - About Section
  - [x] 4.1 Create about section with shop introduction
    - Add section element with id="about"
    - Create h2 heading for section title
    - Add paragraph content describing the shop
    - _Requirements: 9.1, 11.3_

- [ ] 5. HTML Structure - Products Section
  - [x] 5.1 Create products section with grid container
    - Add section element with id="products"
    - Create h2 heading "Our Products"
    - Add container div for product cards
    - Create product card template structure (div with image, name, price)
    - Add at least 6 product cards with placeholder content
    - Include alt text for all product images
    - _Requirements: 3.1, 3.2, 3.4, 9.2, 11.4_

- [ ] 6. HTML Structure - Services Section
  - [x] 6.1 Create services section with grid container
    - Add section element with id="services"
    - Create h2 heading "Our Services"
    - Add container div for service cards
    - Create service card template structure (div with icon, title, description)
    - Add at least 4 service cards (Xerox, Printing, Lamination, Binding)
    - _Requirements: 4.1, 4.2, 9.1_

- [ ] 7. HTML Structure - Contact Section
  - [x] 7.1 Create contact section with all contact methods
    - Add section element with id="contact"
    - Create h2 heading "Contact Us"
    - Add clickable phone number link with tel: protocol
    - Add shop address paragraph
    - Create WhatsApp button with wa.me link format
    - Embed Google Maps iframe with shop location
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 6.3_

- [ ] 8. HTML Structure - Footer
  - [x] 8.1 Create footer with navigation and contact info
    - Add footer element with semantic markup
    - Create footer navigation links
    - Add contact information (phone, address)
    - Include copyright text
    - _Requirements: 12.1, 12.2, 12.3, 9.1_

- [ ] 9. HTML Structure - WhatsApp Float Button
  - [x] 9.1 Create floating WhatsApp button
    - Add fixed position button element
    - Use WhatsApp icon or emoji
    - Link to wa.me with pre-filled message
    - _Requirements: 6.1, 6.2, 6.3_

- [ ] 10. CSS - Global Styles and Variables
  - [x] 10.1 Set up CSS reset and global styles
    - Add CSS reset (margin, padding, box-sizing)
    - Define CSS custom properties for colors (blue, white, grays)
    - Set base font family (sans-serif)
    - Define global typography styles
    - _Requirements: 2.3, 9.3_
  
  - [x] 10.2 Add smooth scrolling behavior
    - Set html { scroll-behavior: smooth; }
    - _Requirements: 8.3_

- [ ] 11. CSS - Navigation Styling
  - [x] 11.1 Style desktop navigation
    - Style header with flexbox layout
    - Style logo/shop name
    - Style navigation links with hover effects
    - Hide hamburger menu on desktop
    - _Requirements: 1.1, 8.2_
  
  - [x] 11.2 Style mobile navigation (mobile-first)
    - Show hamburger menu icon on mobile
    - Style mobile menu as overlay or slide-in
    - Add transitions for menu open/close
    - Ensure touch-friendly button sizes (min 44px)
    - _Requirements: 1.4, 7.4_

- [ ] 12. CSS - Hero Section Styling
  - [x] 12.1 Style hero section
    - Apply blue and white color scheme
    - Center content with flexbox
    - Style heading and tagline typography
    - Style call-to-action button with hover effect
    - Make hero section full viewport height
    - _Requirements: 2.1, 2.3, 8.2_

- [ ] 13. CSS - Products Section Styling
  - [x] 13.1 Style products grid layout
    - Create responsive grid with CSS Grid (1 column mobile, 2-3 columns tablet/desktop)
    - Style product cards with border, padding, shadow
    - Style product images to fit card
    - Style product name and price typography
    - Add hover effect to product cards (scale or shadow)
    - _Requirements: 3.1, 3.4, 4.3, 7.1, 7.2, 7.3, 8.2_

- [ ] 14. CSS - Services Section Styling
  - [x] 14.1 Style services grid layout
    - Create responsive grid with CSS Grid (1 column mobile, 2 columns tablet, 3-4 columns desktop)
    - Style service cards with border, padding, background
    - Style service icons (font-awesome or emoji)
    - Style service title and description typography
    - Add hover effect to service cards
    - _Requirements: 4.1, 4.2, 4.3, 7.1, 7.2, 7.3, 8.2_

- [ ] 15. CSS - Contact Section Styling
  - [x] 15.1 Style contact section layout
    - Use flexbox or grid for contact information layout
    - Style phone number link with icon
    - Style address text
    - Style WhatsApp button with green color and hover effect
    - Style Google Maps iframe to be responsive
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 7.1, 7.2, 7.3_

- [ ] 16. CSS - Footer Styling
  - [x] 16.1 Style footer section
    - Apply background color and padding
    - Style footer navigation links
    - Style contact information text
    - Ensure footer stays at bottom
    - _Requirements: 12.1, 12.2, 12.3_

- [ ] 17. CSS - WhatsApp Float Button Styling
  - [x] 17.1 Style floating WhatsApp button
    - Position fixed at bottom-right corner
    - Style as circular button with WhatsApp green color
    - Add shadow for depth
    - Add hover and pulse animation
    - Ensure button is visible on all sections
    - _Requirements: 6.1, 6.2, 8.2_

- [ ] 18. CSS - Responsive Design Media Queries
  - [x] 18.1 Add mobile-first responsive breakpoints
    - Define breakpoints for tablet (768px) and desktop (1024px)
    - Adjust grid columns for products and services at each breakpoint
    - Adjust navigation layout for desktop
    - Adjust hero section height and typography
    - Test all layouts on different screen sizes
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 19. CSS - Animations and Transitions
  - [x] 19.1 Add scroll-based animation classes
    - Create CSS classes for fade-in, slide-up animations
    - Add transition properties to buttons and cards
    - Add hover transitions for interactive elements
    - _Requirements: 8.1, 8.2, 8.3_

- [ ] 20. JavaScript - Mobile Menu Toggle
  - [x] 20.1 Implement hamburger menu functionality
    - Select hamburger icon and mobile menu elements
    - Add click event listener to toggle menu open/close
    - Toggle CSS class to show/hide mobile menu
    - Close menu when navigation link is clicked
    - _Requirements: 1.5_

- [ ] 21. JavaScript - Smooth Scroll Navigation
  - [x] 21.1 Implement smooth scroll to sections
    - Select all navigation links
    - Add click event listeners to navigation links
    - Prevent default anchor behavior
    - Scroll to target section using scrollIntoView with smooth behavior
    - _Requirements: 1.2, 8.3_
  
  - [x] 21.2 Implement active section highlighting
    - Track scroll position using scroll event listener
    - Detect which section is currently in viewport
    - Add/remove active class to corresponding navigation link
    - _Requirements: 1.3_

- [ ] 22. JavaScript - Scroll-Based Animations
  - [x] 22.1 Implement intersection observer for animations
    - Create IntersectionObserver instance
    - Observe all sections for viewport entry
    - Add animation class when section enters viewport
    - Remove animation class when section exits (optional)
    - _Requirements: 8.1_

- [ ] 23. JavaScript - WhatsApp Integration
  - [x] 23.1 Set up WhatsApp links with pre-filled message
    - Define shop phone number variable
    - Create pre-filled message text (e.g., "Hello, I'm interested in your products")
    - Format wa.me link with phone number and encoded message
    - Apply link to WhatsApp button and floating button
    - _Requirements: 5.4, 6.2, 6.3_

- [ ] 24. Assets Setup and Optimization
  - [x] 24.1 Prepare image assets
    - Create placeholder images for products (or use actual product photos)
    - Create shop logo or use text-based logo
    - Optimize all images (compress to web-friendly sizes)
    - Add images to /images/products and /images/shop folders
    - _Requirements: 3.3, 10.1_
  
  - [x] 24.2 Add fallback for missing images
    - Create CSS rule for broken image fallback
    - Or use onerror attribute to replace with placeholder
    - _Requirements: 3.3_

- [ ] 25. SEO and Meta Tags
  - [x] 25.1 Add comprehensive meta tags
    - Add title tag with shop name and location
    - Add meta description with keywords
    - Add meta keywords (stationery, xerox, Idar, Gujarat)
    - Add Open Graph tags for social sharing
    - _Requirements: 11.1, 11.2, 11.4_

- [ ] 26. Performance Optimization
  - [x] 26.1 Implement lazy loading for images
    - Add loading="lazy" attribute to images below the fold
    - _Requirements: 10.3_
  
  - [x] 26.2 Minify CSS and JavaScript
    - Minify style.css (or note for production build)
    - Minify script.js (or note for production build)
    - _Requirements: 10.2_

- [ ] 27. Accessibility Enhancements
  - [x] 27.1 Audit and enhance accessibility
    - Verify all images have descriptive alt text
    - Check color contrast ratios meet WCAG standards
    - Test keyboard navigation for all interactive elements
    - Add focus styles for keyboard users
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [ ] 28. Final Integration and Testing
  - [x] 28.1 Test all functionality
    - Test navigation links and smooth scrolling
    - Test mobile menu toggle
    - Test WhatsApp button and phone links
    - Test responsive layout on multiple devices
    - Test scroll animations
    - Test Google Maps embed
    - _Requirements: 1.2, 1.5, 5.2, 5.4, 6.2, 7.1, 7.2, 7.3, 8.1_
  
  - [x] 28.2 Cross-browser testing
    - Test on Chrome, Firefox, Safari, Edge
    - Test on mobile browsers (iOS Safari, Chrome Mobile)
    - _Requirements: 7.5_

- [x] 29. Checkpoint - Ensure all features are working
  - Ensure all tests pass, ask the user if questions arise.

### Phase 2: React + Tailwind Implementation (IN PROGRESS)

- [x] 30. React Project Setup
  - [x] 30.1 Initialize React + Vite project in stationery-react/ folder
    - Create project with Vite
    - Install React 18.3.1
    - Configure Vite for development
    - _Requirements: 11.1, 11.3_
  
  - [x] 30.2 Install and configure Tailwind CSS
    - Install Tailwind 3.4.17
    - Configure tailwind.config.js with dark mode support
    - Set up PostCSS
    - _Requirements: 2.3, 9.3_

- [x] 31. Apple-Inspired Design System
  - [x] 31.1 Implement design system
    - Configure Inter font family
    - Set up minimalist color palette (white, gray, blue)
    - Configure large typography scale
    - Apply clean spacing system
    - _Requirements: 2.3, 9.3_

- [x] 32. Core React Components
  - [x] 32.1 Create Navbar component
    - Implement fixed navigation with backdrop blur
    - Add smooth scroll navigation
    - Create mobile-responsive layout
    - _Requirements: 1.1, 1.2, 1.4, 9.1_
  
  - [x] 32.2 Create Hero component
    - Implement full-height hero section
    - Add large typography and CTAs
    - Include scroll indicator
    - _Requirements: 2.1, 2.2, 2.3_
  
  - [x] 32.3 Create About component
    - Implement centered content layout
    - Apply minimalist styling
    - _Requirements: 9.1, 11.3_
  
  - [x] 32.4 Create Products component
    - Implement responsive grid layout
    - Create product cards with emoji icons
    - Add hover effects
    - _Requirements: 3.1, 3.2, 3.4, 7.1, 7.2, 7.3_
  
  - [x] 32.5 Create Services component
    - Implement responsive grid layout
    - Create service cards with icons
    - Add hover animations
    - _Requirements: 4.1, 4.2, 4.3, 7.1, 7.2, 7.3_
  
  - [x] 32.6 Create Contact component
    - Add phone, address, WhatsApp links
    - Embed Google Maps iframe
    - Apply Apple-inspired styling
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_
  
  - [x] 32.7 Create Footer component
    - Add navigation links
    - Include contact information
    - Add copyright text
    - _Requirements: 12.1, 12.2, 12.3_
  
  - [x] 32.8 Add floating WhatsApp button
    - Position fixed at bottom-right
    - Style with green color and hover effects
    - Link to WhatsApp with pre-filled message
    - _Requirements: 6.1, 6.2, 6.3_

- [x] 33. Dark/Light Theme Setup
  - [x] 33.1 Create ThemeContext
    - Implement React Context for theme state
    - Add localStorage persistence
    - Detect system preference
    - Apply dark class to document root
    - _Requirements: 8.2_
  
  - [x] 33.2 Add theme toggle to Navbar
    - Create toggle button with sun/moon icons
    - Wire up to ThemeContext
    - Add smooth transitions
    - _Requirements: 1.1, 8.2_

- [x] 34. Complete Dark Mode Implementation
  - [x] 34.1 Update Navbar with dark mode classes
    - Add dark:bg-gray-900/80 for background
    - Add dark:text-white for text
    - Add dark:text-gray-300 for links
    - _Requirements: 1.1, 8.2_
  
  - [x] 34.2 Update Hero with dark mode classes
    - Add dark:bg-gray-900 for background
    - Add dark:text-white for headings
    - Add dark:text-gray-400 for subtext
    - _Requirements: 2.1, 2.3, 8.2_
  
  - [x] 34.3 Update About with dark mode classes
    - Add dark:bg-gray-900 for background
    - Add dark:text-white for headings
    - Add dark:text-gray-400 for text
    - _Requirements: 9.1, 8.2_
  
  - [x] 34.4 Update Products with dark mode classes
    - Add dark:bg-gray-800 for section background
    - Add dark:bg-gray-900 for cards
    - Add dark:text-white for headings
    - Add dark:text-gray-400 for text
    - _Requirements: 3.1, 3.4, 8.2_
  
  - [x] 34.5 Update Services with dark mode classes
    - Add dark:bg-gray-900 for background
    - Add dark:bg-gray-800 for icon backgrounds
    - Add dark:text-white for headings
    - Add dark:text-gray-400 for text
    - _Requirements: 4.1, 4.2, 8.2_
  
  - [x] 34.6 Update Contact with dark mode classes
    - Add dark:bg-gray-900 for section background
    - Add dark:text-white for headings
    - Add dark:text-gray-400 for labels
    - Add dark:text-gray-300 for links
    - _Requirements: 5.1, 5.2, 5.3, 8.2_
  
  - [x] 34.7 Update Footer with dark mode classes
    - Add dark:bg-gray-900 for background
    - Add dark:border-gray-800 for borders
    - Add dark:text-white for headings
    - Add dark:text-gray-400 for text
    - _Requirements: 12.1, 12.2, 12.3, 8.2_
  
  - [x] 34.8 Wrap App with ThemeProvider
    - Import ThemeProvider in App.jsx
    - Wrap all components with ThemeProvider
    - Ensure theme context is available to all components
    - _Requirements: 8.2_

- [ ] 35. Final Testing and Validation
  - [ ] 35.1 Test theme toggle functionality
    - Verify toggle button switches themes
    - Verify localStorage persistence
    - Verify system preference detection
    - Test all components in both themes
    - _Requirements: 8.2_
  
  - [ ] 35.2 Test responsive design
    - Test on mobile, tablet, desktop viewports
    - Verify all components are responsive
    - Test touch interactions on mobile
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [ ] 35.3 Test all interactive features
    - Test navigation smooth scrolling
    - Test WhatsApp button and links
    - Test phone number links
    - Test Google Maps embed
    - _Requirements: 1.2, 5.2, 5.4, 6.2_

- [ ] 36. Checkpoint - React version complete
  - Ensure all features work in both light and dark modes, ask the user if questions arise.

## Notes

- Phase 1 (Vanilla HTML/CSS/JS) is complete and functional
- Phase 2 (React + Tailwind) implements Apple-inspired minimalist design
- Dark mode uses Tailwind's dark: prefix with class-based strategy
- ThemeContext manages theme state with localStorage persistence
- All components use transition-colors for smooth theme switching
- No property-based tests included as this is a UI/presentation project
- React version can be deployed to Vercel or Netlify after completion
