# 🔄 Loading System Architecture

## Overview

This loading system provides a centralized, clean way to show loading states during route transitions in React Router v7.

## Architecture

```
App.jsx
  └── Routes
      └── Layout.jsx (Loading Logic Here)
          ├── useRouteLoading() hook
          ├── <Loading /> component
          ├── <Navbar />
          ├── <Outlet /> (Page content)
          └── <Footer />
```

## Key Components

### 1. `useRouteLoading` Hook
**Location:** `src/hooks/useRouteLoading.js`

**Purpose:** Centralized route change detection and loading state management

**Features:**
- ✅ Detects route changes using `useLocation()`
- ✅ Prevents loader on same route navigation
- ✅ Prevents loader on component re-renders
- ✅ Handles initial page load
- ✅ Configurable minimum loading time

**How it works:**
```javascript
const useRouteLoading = (minLoadingTime = 500) => {
  // 1. Track current location
  const location = useLocation();
  
  // 2. Store previous path to compare
  const prevPathRef = useRef(location.pathname);
  
  // 3. Detect if it's initial mount
  const isInitialMount = useRef(true);
  
  // 4. Compare paths on location change
  // 5. Show loader only if path actually changed
  // 6. Hide loader after minimum time
  
  return isLoading;
};
```

### 2. `Loading` Component
**Location:** `src/Components/Loading.jsx`

**Purpose:** Visual loading indicator

**Features:**
- ✅ Full-screen overlay
- ✅ Animated spinner
- ✅ Animated dots
- ✅ High z-index (100) to cover everything

### 3. `Layout` Component
**Location:** `src/Components/Layout.jsx`

**Purpose:** Centralized loading state management

**Why Layout?**
- ✅ Wraps all routes
- ✅ Single source of truth
- ✅ No prop drilling needed
- ✅ Automatic for all pages

## How It Works

### Initial Page Load
```
1. User visits website
2. Layout mounts → isLoading = true
3. Loading component shows
4. After 500ms → isLoading = false
5. Home page renders
```

### Route Navigation
```
1. User clicks "Projects"
2. location.pathname changes: "/" → "/projects"
3. useRouteLoading detects change
4. isLoading = true
5. Loading component shows
6. After 500ms → isLoading = false
7. Projects page renders
```

### Same Route Click
```
1. User is on "/projects"
2. User clicks "Projects" again
3. location.pathname = "/projects" (same)
4. useRouteLoading compares: previous === current
5. isLoading stays false
6. No loader shown ✅
```

### Component Re-render
```
1. User is on "/projects"
2. Component state changes (e.g., filter)
3. Component re-renders
4. location.pathname unchanged
5. useRouteLoading: no path change detected
6. No loader shown ✅
```

## Configuration

### Adjust Loading Time

In `Layout.jsx`:
```javascript
const isLoading = useRouteLoading(500); // 500ms (default)
const isLoading = useRouteLoading(300); // Faster
const isLoading = useRouteLoading(1000); // Slower
```

### Customize Loading Component

Edit `src/Components/Loading.jsx`:
- Change colors
- Change animation
- Add logo
- Add progress bar

## Best Practices

### ✅ DO:
- Keep loading time reasonable (300-800ms)
- Use centralized state in Layout
- Let the hook handle all logic
- Test on slow connections

### ❌ DON'T:
- Add loading state to individual pages
- Use arbitrary timeouts without explanation
- Show loader on same route navigation
- Show loader on component re-renders

## Testing

### Test Scenarios:

1. **Initial Load**
   - Visit http://localhost:5174/
   - Should see loader → Home page

2. **Route Change**
   - Click "Projects"
   - Should see loader → Projects page

3. **Same Route**
   - Click "Projects" again
   - Should NOT see loader

4. **Back Navigation**
   - Click browser back button
   - Should see loader → Previous page

5. **Component State Change**
   - On Projects page, change filter
   - Should NOT see loader

### Debug Mode

Check console for route change logs:
```
🔄 Route changed: / → /projects
🔄 Route changed: /projects → /skills
```

## Troubleshooting

### Loader shows on re-renders
**Cause:** Not comparing previous path
**Fix:** Already handled in `useRouteLoading` with `prevPathRef`

### Loader shows on same route
**Cause:** Not checking if path changed
**Fix:** Already handled with `if (currentPath === previousPath) return;`

### Loader too fast/slow
**Cause:** Wrong minimum time
**Fix:** Adjust `minLoadingTime` parameter

### Loader doesn't show
**Cause:** Hook not called in Layout
**Fix:** Verify `useRouteLoading()` is called in Layout.jsx

## Performance

- ✅ No unnecessary re-renders
- ✅ Cleanup timers on unmount
- ✅ Single loading state for entire app
- ✅ Minimal bundle size impact

## Future Enhancements

Possible additions:
- Progress bar instead of spinner
- Page-specific loading messages
- Skeleton screens for specific pages
- Preload data before showing page
- Transition animations between pages

## Summary

This loading system provides:
- ✅ Clean architecture
- ✅ Centralized state management
- ✅ No prop drilling
- ✅ Prevents unnecessary loaders
- ✅ Easy to customize
- ✅ Follows React Router best practices
- ✅ Production-ready
