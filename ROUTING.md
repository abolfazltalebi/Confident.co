# React Router Setup Documentation

## Overview
This project uses React Router v6 with the latest modern practices for optimal performance and developer experience.

## Features

### 🚀 **Modern Router Setup**
- Uses `createBrowserRouter` (React Router v6.4+)
- Lazy loading for all page components
- Suspense boundaries for smooth loading experiences
- TypeScript support throughout

### 📱 **Performance Optimizations**
- **Lazy Loading**: All page components are loaded only when needed
- **Code Splitting**: Automatic bundle splitting for better performance
- **Suspense**: Smooth loading states with fallback components
- **Nested Routes**: Efficient routing structure with shared layouts

### 🎨 **UI/UX Features**
- Responsive navigation with active state indicators
- Beautiful loading spinners during route transitions
- Modern design with Tailwind CSS
- Smooth hover effects and transitions

## File Structure

```
src/
├── router.tsx          # Main router configuration
├── components/
│   ├── Layout.tsx      # Main layout with navigation
│   └── LoadingSpinner.tsx # Loading component
├── pages/
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
└── hooks/
    └── useNavigation.ts # Custom navigation hook
```

## Router Configuration

The router is configured in `src/router.tsx` with:

- **Nested Routes**: Layout wraps all pages
- **Lazy Loading**: Each page is dynamically imported
- **Suspense Boundaries**: Loading states for each route
- **404 Handling**: Catch-all route for unknown paths

## Usage Examples

### Basic Navigation
```tsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

### Programmatic Navigation
```tsx
import { useNavigation } from './hooks/useNavigation';

const { goTo, goBack, goHome } = useNavigation();

// Navigate to a specific route
goTo('/contact');

// Go back to previous page
goBack();

// Go to home page
goHome();
```

### Active Route Detection
```tsx
import { useNavigation } from './hooks/useNavigation';

const { isCurrentPath } = useNavigation();

// Check if current route is active
const isActive = isCurrentPath('/about');
```

## Performance Benefits

1. **Bundle Splitting**: Each route gets its own bundle
2. **Lazy Loading**: Pages load only when accessed
3. **Suspense**: Smooth loading experiences
4. **TypeScript**: Full type safety for routes

## Best Practices Implemented

- ✅ Lazy loading for all page components
- ✅ Suspense boundaries for loading states
- ✅ TypeScript support throughout
- ✅ Modern React Router v6 patterns
- ✅ Responsive and accessible navigation
- ✅ Clean component separation
- ✅ Reusable navigation hooks

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Navigate between routes using the navigation menu
4. Check browser console for route changes

## Adding New Routes

To add a new route:

1. Create a new page component in `src/pages/`
2. Add the route to `src/router.tsx`
3. Add navigation link in `src/components/Layout.tsx`
4. Use lazy loading for optimal performance

Example:
```tsx
// In router.tsx
const NewPage = lazy(() => import('./pages/NewPage'));

// Add to routes array
{
  path: 'new-page',
  element: (
    <Suspense fallback={<LoadingSpinner />}>
      <NewPage />
    </Suspense>
  ),
}
```
