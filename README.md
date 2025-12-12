# ShopHub - E-Commerce React Application

A modern, full-featured e-commerce web application built with React, Vite, and React Router. Features a beautiful UI with dark/light theme support, shopping cart functionality, user profiles, and product management.

## 🚀 Features

### Shopping Features
- **Product Catalog**: Browse 30+ products across multiple categories
- **Product Search**: Search products by name or description
- **Category Filtering**: Filter products by category (Electronics, Clothing, Home & Kitchen, Accessories, Books)
- **Product Details**: Detailed product pages with images, descriptions, ratings, and pricing
- **Shopping Cart**: Add, remove, and update quantities with persistent cart storage
- **Cart Summary**: View cart total and item count with checkout functionality

### User Features
- **User Profile**: View and manage personal information
- **Profile Settings**: Edit profile details, shipping address, and preferences
- **Avatar Upload**: Upload and manage profile pictures
- **Theme Toggle**: Switch between light and dark themes
- **Persistent Data**: All user data and cart items saved to localStorage

### UI/UX Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Modern UI**: Beautiful gradients, smooth animations, and intuitive navigation
- **Full-Width Product Grid**: Products utilize entire page width for better viewing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Cart/           # Shopping cart component
│   ├── Header/         # Navigation header with avatar
│   ├── ProductCard/    # Product card component
│   ├── ProductDetails/ # Product detail page
│   └── ProductList/   # Product listing with filters
├── context/            # React Context providers
│   ├── CartContext.jsx    # Shopping cart state management
│   ├── ThemeContext.jsx   # Theme (dark/light) management
│   └── UserContext.jsx    # User profile state management
├── data/               # Static data
│   └── products.js    # Product catalog data
├── pages/              # Page components
│   ├── Home.jsx       # Homepage with hero section
│   ├── Products.jsx   # Products listing page
│   ├── Profile.jsx    # User profile page
│   └── Settings.jsx  # User settings page
├── App.jsx            # Main app component with routing
├── main.jsx           # Application entry point
└── index.css          # Global styles and CSS variables
```

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.10.1** - Client-side routing
- **CSS3** - Styling with CSS variables for theming
- **LocalStorage** - Client-side data persistence

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd E-COMMERCE
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features in Detail

### Product Management
- 30+ products with images, prices, ratings, and descriptions
- Real-time search and category filtering
- Product detail pages with quantity selection
- Discount badges and original price display

### Shopping Cart
- Add/remove products
- Update quantities
- Persistent cart across sessions
- Cart badge showing item count
- Order summary with totals

### User Profile
- View personal information
- Edit profile details
- Manage shipping address
- Upload custom avatar images
- Set preferences (notifications, newsletter, language)

### Theme System
- Light and dark themes
- Automatic system preference detection
- Persistent theme selection
- Smooth theme transitions
- CSS variables for easy customization

## 🎯 Key Components

### Context Providers
- **CartContext**: Manages shopping cart state and localStorage persistence
- **ThemeContext**: Handles theme switching and preference storage
- **UserContext**: Manages user profile data and settings

### Pages
- **Home**: Landing page with hero section and featured products
- **Products**: Full product catalog with search and filters
- **Profile**: User profile display page
- **Settings**: User settings and profile editing

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/index.css` to customize colors:
```css
:root {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #333333;
  --accent-color: #667eea;
  /* ... more variables */
}
```

### Products
Add or modify products in `src/data/products.js`

## 📝 Notes

- All data is stored in localStorage (cart, user profile, theme preference)
- Product images use Unsplash URLs
- Avatar images can be uploaded or auto-generated from user name
- No backend required - fully client-side application

## 🚀 Deployment

Build the project for production:
```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static file server

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Development

Built with modern React practices:
- Functional components with hooks
- Context API for state management
- React Router for navigation
- CSS modules for component styling
- Responsive design principles

---

**ShopHub** - Your one-stop shop for modern e-commerce experience! 🛍️
