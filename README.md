# Kala Kamna - Handmade Paintings E-Commerce Website

## Overview
Kala Kamna is a beautiful, luxury e-commerce website for handmade paintings. The website features five exclusive painting collections with an elegant design that reflects the artistry of the brand.

## Features

### 1. **Splash Screen**
- Logo animation that displays for 5 seconds on initial load
- Elegant fade-out transition to the main categories page
- Smooth animations and transitions

### 2. **Categories Page**
- Five interactive category cards:
  - **Bharat Kala** - Traditional Indian Art
  - **Beyond the Canvas** - Sculptural Designs
  - **Scenic Escapes** - Nature & Landscapes
  - **Crystal Resin Series** - Modern Abstract Art
  - **Dev Kala** - Spiritual & Divine Art
- **3D Hover Effects**: Cards lift and rotate on cursor hover
- **Interactive Overlays**: Category information appears on hover
- **Smooth Transitions**: Elegant animations throughout

### 3. **Products Page**
- **Dynamic Product Display**: 4 products per category
- **Product Cards** include:
  - High-quality product images
  - Product name and detailed description
  - Available sizes
  - Pricing in INR
  - Handmade/Premium badges
  - Add to Cart functionality
- **Layout**: Amazon/Flipkart-inspired grid design
- **Back Navigation**: Easy return to categories page

### 4. **Navigation**
- **Logo Monogram**: Fixed in top-right corner on all pages
- **Back Button**: Navigate from products back to categories
- **Keyboard Shortcuts**: Press ESC to return to categories
- **Logo Click**: Click logo to return to categories from products page

### 5. **Responsive Design**
- Mobile-friendly layout
- Tablet optimization
- Desktop experience with 3D effects
- Adaptive grid layouts

## Color Scheme
- **Primary Color**: Dark Green (#2d5016)
- **Secondary Color**: Gold (#d4af37)
- **Background**: Cream/Light Beige (#f5f1e8)
- Creates a luxurious, artistic feel

## File Structure
```
kala-kamna-website/
├── index.html              # Main HTML file with all page structures
├── styles.css             # All styling and animations
├── script.js              # JavaScript for interactivity
├── assets/                # Images and logo
│   ├── logo-monogram.png  # Logo for splash and corner
│   ├── bharat-kala.jpg
│   ├── beyond-canvas.jpg
│   ├── scenic-escapes.jpg
│   ├── crystal-resin.jpg
│   ├── dev-kala.jpg
│   └── product-placeholder.png
└── README.md              # This file
```

## How to Use

1. **Open the website**: Load `index.html` in your web browser
2. **Splash Screen**: Watch the beautiful logo animation (5 seconds)
3. **Browse Categories**: Explore the 5 collections by hovering and clicking
4. **View Products**: Click any category to see available paintings
5. **Add to Cart**: Click "Add to Cart" to add items
6. **Navigation**: Use back button or ESC key to return to categories

## Technical Features

### CSS Features
- **3D Transforms**: `transform-style: preserve-3d`, `rotateY()`, `rotateX()`
- **Animations**: Keyframe animations for splash screen and hover effects
- **Gradients**: Linear gradients for backgrounds and overlays
- **Transitions**: Smooth transitions on all interactive elements
- **Perspective**: CSS perspective for 3D card effects

### JavaScript Features
- **Event Handling**: Click and keyboard event listeners
- **DOM Manipulation**: Dynamic product card generation
- **Local State Management**: Category and product data structure
- **Interactive Feedback**: Add to cart button feedback

### Responsive Breakpoints
- Desktop: 1024px and above
- Tablet: 768px to 1024px
- Mobile: Below 768px

## Product Collections

Each collection has 4 featured paintings with:
- Unique titles and descriptions
- Price points ranging from ₹11,000 to ₹22,000
- Handcrafted quality indicators
- Detailed sizing information

## Future Enhancements
- Shopping cart page with checkout
- Customer reviews and ratings
- Search and filter functionality
- Product detail pages with more information
- Admin dashboard for inventory management
- Payment gateway integration
- Customer account system

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Notes
- Replace placeholder images with actual product photographs
- Add product images from your collection
- Customize colors if needed in the CSS `:root` variables
- Update pricing and product information in the JavaScript products database

---

**Kala Kamna** - Celebrating the Art of Handmade Paintings ✨