# Suvit - CA Office Automation Platform

A modern web application built with React, TypeScript, and Vite that helps Chartered Accountants automate their office workflows and manage client communications effectively.

## 🚀 Features

- **Blog System**: Dynamic blog posts with API integration
- **Modern UI**: Built with Tailwind CSS and Shadcn/ui components
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Implements React Query for efficient data fetching
- **Type Safety**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Data Fetching**: React Query + Axios
- **API**: JSON Server (mock)
- **Date Handling**: date-fns

## 📦 Installation & Running the Application

1. Clone the repository:
```bash
git clone <repository-url>
cd pixel-perfect-tool-main
```

2. Install dependencies:
```bash
npm install
```

3. Start both frontend and backend (in separate terminal windows):

Frontend (Terminal 1):
```bash
# Start the Vite development server
npm run dev

# The frontend will be available at:
# http://localhost:8080
```

Backend (Terminal 2):
```bash
# Start the JSON Server (mock API)
npx json-server --watch db.json --port 3001

# The API will be available at:
# http://localhost:3001/blogs
# http://localhost:3001/featuredBlogs
```

4. Running in Development Mode:
- Frontend runs on `http://localhost:8080`
- Backend API runs on `http://localhost:3001`
- Both servers must be running for the application to work properly
- Keep both terminal windows open while developing

## 🏗️ Project Structure

```
src/
├── assets/         # Static assets (images, etc.)
├── components/     # Reusable UI components
├── pages/         # Page components
├── lib/           # Utility functions
└── hooks/         # Custom React hooks
```

## 💡 Implementation Approach

### Component Architecture
- **Atomic Design**: Components are built following atomic design principles
- **Composition**: Emphasis on component composition over inheritance
- **Props Interface**: Strong typing with TypeScript interfaces
- **Error Boundaries**: Implemented for better error handling

### State Management
- **React Query**: For server state management
- **Loading States**: Skeleton loaders for better UX
- **Error Handling**: Comprehensive error handling with retry mechanisms

## ⚡ Performance Optimizations

Current Implementations:
- Lazy loading of images
- Skeleton loading states
- React Query caching
- Optimized bundle size with Vite
- SVG icons for better performance

Future Optimizations:
1. **Code Splitting**:
   - Implement React.lazy for route-based code splitting
   - Dynamic imports for heavy components

2. **Caching Strategy**:
   - Implement service workers
   - Add offline support
   - Browser caching headers

3. **Image Optimization**:
   - Implement responsive images
   - Next-gen image formats (WebP)
   - Lazy loading with IntersectionObserver

4. **Performance Monitoring**:
   - Add performance metrics tracking
   - Implement error tracking
   - Monitor Core Web Vitals

## 🔍 API Integration

The application uses a mock API built with JSON Server:
- Endpoints are available at `http://localhost:3001`
- Blog posts: `/blogs`
- Featured posts: `/featuredBlogs`

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚧 Future Enhancements

1. **Features**:
   - Authentication system
   - Real-time notifications
   - Advanced search functionality
   - Client dashboard

2. **Technical**:
   - PWA support
   - Automated testing
   - CI/CD pipeline
   - Performance monitoring

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👥 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

