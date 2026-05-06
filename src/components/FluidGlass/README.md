# FluidGlass Component

A React component that creates a fluid glass effect using Three.js. This is an integration of the FluidGlass component from React Bits.

## Installation Status
✅ Dependencies installed:
- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `maath`

## 3D Models Required
This component requires three 3D model files in the `public/assets/3d/` directory:
- `lens.glb` - Used for 'lens' mode
- `bar.glb` - Used for 'bar' mode  
- `cube.glb` - Used for 'cube' mode

**Note:** These models are not included in this repository. You will need to provide them or obtain them from the React Bits repository.

## Usage

### Basic Usage
```jsx
import FluidGlass from './components/FluidGlass'

export default function App() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <FluidGlass mode="lens" />
    </div>
  )
}
```

### With Custom Props
```jsx
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
```

### Available Modes
- `'lens'` (default) - Cylinder lens effect
- `'bar'` - Navigation bar at bottom
- `'cube'` - Cube effect

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mode | string | 'lens' | Display mode: 'lens', 'bar', or 'cube' |
| lensProps | object | {} | Props for lens mode (scale, ior, thickness, chromaticAberration, anisotropy) |
| barProps | object | {} | Props for bar mode (navItems, material properties) |
| cubeProps | object | {} | Props for cube mode (material properties) |

### Bar Mode - Navigation Items
```jsx
<FluidGlass 
  mode="bar"
  barProps={{
    navItems: [
      { label: 'Home', link: '/' },
      { label: 'About', link: '/about' },
      { label: 'Contact', link: '/contact' }
    ]
  }}
/>
```

## Features
- Three display modes (lens, bar, cube)
- Responsive design (mobile, tablet, desktop)
- Smooth animations and easing
- Scroll controls integration
- Pointer interaction
- Customizable material properties

## Notes
- The component uses Canvas from React Three Fiber, so only one per page is recommended
- All 3D models must be valid GLTF/GLB format
- The component requires a container with defined height
- Browser must support WebGL for proper rendering
