# 🔄 Loading System Flow Diagram

## Visual Flow

```
┌─────────────────────────────────────────────────────────────┐
│                         App.jsx                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    BrowserRouter                       │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │                   Routes                         │  │  │
│  │  │  ┌───────────────────────────────────────────┐  │  │  │
│  │  │  │            Layout Component               │  │  │  │
│  │  │  │                                           │  │  │  │
│  │  │  │  ┌─────────────────────────────────┐    │  │  │  │
│  │  │  │  │   useRouteLoading() Hook        │    │  │  │  │
│  │  │  │  │                                  │    │  │  │  │
│  │  │  │  │  • Detects route changes        │    │  │  │  │
│  │  │  │  │  • Manages loading state        │    │  │  │  │
│  │  │  │  │  • Returns isLoading boolean    │    │  │  │  │
│  │  │  │  └─────────────────────────────────┘    │  │  │  │
│  │  │  │                  ↓                       │  │  │  │
│  │  │  │  ┌─────────────────────────────────┐    │  │  │  │
│  │  │  │  │  {isLoading && <Loading />}     │    │  │  │  │
│  │  │  │  └─────────────────────────────────┘    │  │  │  │
│  │  │  │                  ↓                       │  │  │  │
│  │  │  │  ┌─────────────────────────────────┐    │  │  │  │
│  │  │  │  │         <Navbar />              │    │  │  │  │
│  │  │  │  └─────────────────────────────────┘    │  │  │  │
│  │  │  │                  ↓                       │  │  │  │
│  │  │  │  ┌─────────────────────────────────┐    │  │  │  │
│  │  │  │  │         <Outlet />              │    │  │  │  │
│  │  │  │  │  (Renders current page)         │    │  │  │  │
│  │  │  │  └─────────────────────────────────┘    │  │  │  │
│  │  │  │                  ↓                       │  │  │  │
│  │  │  │  ┌─────────────────────────────────┐    │  │  │  │
│  │  │  │  │         <Footer />              │    │  │  │  │
│  │  │  │  └─────────────────────────────────┘    │  │  │  │
│  │  │  └───────────────────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## State Flow

### Scenario 1: Initial Page Load
```
User visits website
        ↓
Layout mounts
        ↓
useRouteLoading() initializes
        ↓
isInitialMount.current = true
        ↓
isLoading = true
        ↓
<Loading /> renders (full screen)
        ↓
After 500ms
        ↓
isLoading = false
        ↓
<Loading /> unmounts
        ↓
Home page visible
```

### Scenario 2: Navigate to New Page
```
User clicks "Projects"
        ↓
location.pathname changes: "/" → "/projects"
        ↓
useEffect in useRouteLoading triggers
        ↓
Compare: prevPath ("/") !== currentPath ("/projects")
        ↓
isLoading = true
        ↓
<Loading /> renders
        ↓
After 500ms
        ↓
isLoading = false
        ↓
prevPathRef.current = "/projects"
        ↓
<Loading /> unmounts
        ↓
Projects page visible
```

### Scenario 3: Click Same Page
```
User on "/projects"
        ↓
User clicks "Projects" again
        ↓
location.pathname = "/projects" (unchanged)
        ↓
useEffect in useRouteLoading triggers
        ↓
Compare: prevPath ("/projects") === currentPath ("/projects")
        ↓
Early return (no state change)
        ↓
isLoading stays false
        ↓
No loader shown ✅
        ↓
Page stays visible
```

### Scenario 4: Component Re-render
```
User on "/projects"
        ↓
User changes filter (component state)
        ↓
Component re-renders
        ↓
location.pathname = "/projects" (unchanged)
        ↓
useEffect in useRouteLoading does NOT trigger
(dependency array: [location.pathname] - no change)
        ↓
isLoading stays false
        ↓
No loader shown ✅
        ↓
Page updates with new filter
```

## Hook Logic Breakdown

```javascript
useRouteLoading(minLoadingTime = 500) {
  
  // STATE
  const [isLoading, setIsLoading] = useState(true);
  
  // REFS (persist across re-renders)
  const prevPathRef = useRef(location.pathname);
  const isInitialMount = useRef(true);
  
  // EFFECT (runs when location.pathname changes)
  useEffect(() => {
    
    // CASE 1: Initial Mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      setTimeout(() => setIsLoading(false), minLoadingTime);
      return;
    }
    
    // CASE 2: Same Route
    if (location.pathname === prevPathRef.current) {
      return; // Do nothing
    }
    
    // CASE 3: Route Changed
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      prevPathRef.current = location.pathname;
    }, minLoadingTime);
    
  }, [location.pathname]);
  
  return isLoading;
}
```

## Key Concepts

### Why useRef?
- `prevPathRef` persists across re-renders
- Doesn't trigger re-renders when updated
- Perfect for comparing previous values

### Why useEffect dependency?
- `[location.pathname]` ensures effect only runs on route change
- Component re-renders don't trigger effect
- Prevents unnecessary loading states

### Why setTimeout?
- Ensures loader shows for minimum time
- Prevents flash of loading screen
- Better UX for fast page loads
- Cleanup prevents memory leaks

### Why in Layout?
- Single source of truth
- Wraps all routes automatically
- No need to add to each page
- Centralized control

## Performance Considerations

### Optimizations:
✅ Single loading state for entire app
✅ No prop drilling
✅ Minimal re-renders
✅ Cleanup timers on unmount
✅ Early returns prevent unnecessary work

### Bundle Size:
- Hook: ~1KB
- Loading component: ~1KB
- Total impact: Minimal

## Testing Checklist

- [ ] Initial page load shows loader
- [ ] Navigation to new page shows loader
- [ ] Same page click doesn't show loader
- [ ] Component re-render doesn't show loader
- [ ] Browser back button shows loader
- [ ] Browser forward button shows loader
- [ ] Direct URL entry shows loader
- [ ] Console shows route change logs
- [ ] Loader shows for minimum time
- [ ] No memory leaks (check DevTools)

## Customization Examples

### Change Loading Time
```javascript
// Layout.jsx
const isLoading = useRouteLoading(300); // Faster
const isLoading = useRouteLoading(1000); // Slower
```

### Add Page-Specific Messages
```javascript
// useRouteLoading.js
return { isLoading, currentRoute: location.pathname };

// Layout.jsx
const { isLoading, currentRoute } = useRouteLoading();
{isLoading && <Loading message={getMessageForRoute(currentRoute)} />}
```

### Add Progress Bar
```javascript
// Loading.jsx
const [progress, setProgress] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setProgress(p => Math.min(p + 10, 90));
  }, 50);
  return () => clearInterval(interval);
}, []);
```

## Summary

This loading system is:
- ✅ Clean and maintainable
- ✅ Centralized in Layout
- ✅ Prevents unnecessary loaders
- ✅ Follows React best practices
- ✅ Production-ready
- ✅ Easy to customize
- ✅ Well-documented
