# Apple Music Thai-First 🎵

A mobile-first web application inspired by Apple Music, featuring Thai music and artists. Built with React + Vite with a beautiful design system featuring Thai typography, brand colors, and smooth interactions.

## Features

✅ **Complete and Functional**

- **Music Player Interface**: Full-featured mini player and expanded now-playing overlay
- **Play Controls**: Play/pause, skip next/previous, shuffle, and repeat functionality
- **Progress Tracking**: Real-time playback progress with seek capability
- **Responsive Design**: Mobile-first design (390px max-width) with smooth animations
- **Thai Language Support**: Complete Thai localization with Sukhumvit Set font
- **Genre Browsing**: Genre pills for filtering music by category
- **Album & Chart Display**: 
  - Hot this week albums
  - New releases
  - Top 100 charts
  - Featured playlists
- **Navigation System**: 
  - Global navigation header
  - Bottom tab bar (Home, Radio, Library, Search)
- **Design Tokens**: Complete color, typography, and spacing token system
- **Accessibility**: Semantic HTML with ARIA labels and keyboard support

## Project Structure

```
src/
├── App.jsx                    # Main app component with state management
├── App.module.css            # App-level styles
├── main.jsx                  # React entry point
├── data.js                   # Thai artists, tracks, and copy data
├── styles/
│   └── globals.css           # Global styles and design tokens
├── tokens/
│   └── index.js              # Design token exports
└── components/
    ├── GlobalNav/            # Top navigation bar
    ├── TabBar/               # Bottom navigation tabs
    ├── AlbumCard/            # Album card in grid
    ├── ChartItem/            # Chart ranking item
    ├── FeaturedCard/         # Featured playlist banner
    ├── GenrePill/            # Genre filter buttons
    ├── MiniPlayer/           # Mini player at bottom
    ├── NowPlaying/           # Full-screen player overlay
    ├── SectionHeader/        # Section titles with links
    ├── EqualizerBars/        # Animated equalizer visualization
    ├── LiveIndicator/        # Live badge component
    └── Icon/                 # Icon system
```

## Getting Started

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will start at `http://localhost:5174/` (or next available port).

### Production Build

```bash
npm run build
```

Builds optimized production files in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Design System

### Color Palette
- **Primary**: Apple Music Red (#FA233B)
- **Canvas**: White backgrounds (#FFFFFF)
- **Ink**: Text colors (dark to muted)
- **Semantic**: Success, Warning, Danger, Info
- **Surfaces**: Tile and chip surfaces for layered UI

### Typography
- **Brand Font**: Sukhumvit Set (Thai)
- **Latin Font**: SF Pro / Inter
- **Type Scale**: Display, Section, Body Strong, Body, Caption, Label, Nav

### Spacing System
- CSS custom properties for consistent spacing (--space-xs to --space-md)
- Thai line-height adjustments for proper text rendering

## Key Components

### MiniPlayer
Sticky player at bottom of screen showing current track with basic controls.

### NowPlaying
Full-screen overlay showing current track artwork, controls, and seek bar with time display.

### AlbumCard
Grid card component for albums with cover art and metadata.

### ChartItem
Ranked list item showing chart position, artwork, and controls.

## Data

Music data includes:
- Real Thai artists (Bodyslam, Slot Machine, Tilly Birds, etc.)
- Track metadata (title in Thai/English, duration)
- Genre classifications
- Artist information with Thai names

## Browser Support

- Modern browsers with ES6+ support
- iOS Safari
- Chrome, Edge, Firefox

## Technologies

- **React 18.3** - UI framework
- **Vite 5.4** - Build tool
- **CSS Modules** - Component styling
- **Google Fonts** - Latin typography

## Performance

- Optimized build size (~165KB JavaScript, ~23KB CSS)
- Fast development rebuild with Vite
- Responsive imagery with Picsum placeholder service
- Efficient state management with React hooks

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Tab order management

## Future Enhancements

- Backend integration for real music data
- Audio playback engine
- User authentication
- Playlists and favorites
- Search functionality
- Recommendations algorithm

## License

MIT

## Credits

Designed and built as a Thai-first music streaming application inspired by Apple Music design language.
