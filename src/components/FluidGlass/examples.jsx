import FluidGlass from './FluidGlass';

/**
 * Example: Basic FluidGlass Implementation
 * 
 * This example demonstrates how to use the FluidGlass component
 * in your Apple Music Thai application.
 */

// Example 1: Simple lens mode
export function FluidGlassLensDemo() {
  return (
    <div style={{ height: '600px', position: 'relative', width: '100%' }}>
      <FluidGlass mode="lens" />
    </div>
  );
}

// Example 2: Lens with custom properties
export function FluidGlassLensCustom() {
  return (
    <div style={{ height: '600px', position: 'relative', width: '100%' }}>
      <FluidGlass 
        mode="lens"
        lensProps={{
          scale: 0.25,
          ior: 1.15,
          thickness: 5,
          chromaticAberration: 0.1,
          anisotropy: 0.01  
        }}
      />
    </div>
  );
}

// Example 3: Bar mode with navigation items
export function FluidGlassBarDemo() {
  return (
    <div style={{ height: '600px', position: 'relative', width: '100%' }}>
      <FluidGlass 
        mode="bar"
        barProps={{
          navItems: [
            { label: 'Home', link: '/' },
            { label: 'Featured', link: '#featured' },
            { label: 'Playlists', link: '#playlists' }
          ]
        }}
      />
    </div>
  );
}

// Example 4: Cube mode
export function FluidGlassCubeDemo() {
  return (
    <div style={{ height: '600px', position: 'relative', width: '100%' }}>
      <FluidGlass mode="cube" />
    </div>
  );
}

// Example 5: Full screen integration
export function FluidGlassFullScreen() {
  return (
    <div style={{ height: '100vh', position: 'relative', width: '100vw' }}>
      <FluidGlass mode="lens" />
    </div>
  );
}

export default FluidGlassLensDemo;
