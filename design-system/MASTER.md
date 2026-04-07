# TechNotes Design System (Master)

## Core Philosophy

- **Style**: Minimalist, Clean, Powerful.
- **Vibe**: Morandi Blue Aesthetic (Quiet, Sophisticated, Low Saturation).
- **Goal**: High readability and professional look for technical notes.

## 🎨 Color Palette (Morandi Blue)

| Name         | Variable         | Light Hex | Dark Hex  | Role                            |
| ------------ | ---------------- | --------- | --------- | ------------------------------- |
| Primary BG   | `--bg-primary`   | `#F0F4F8` | `#0B192C` | Main background                 |
| Sidebar BG   | `--sidebar-bg`   | `#E1E9F0` | `#081424` | Navigation/Sidebar              |
| Accent       | `--accent`       | `#5B8FB9` | `#6DBADD` | Primary brand color, links, CTA |
| Accent Hover | `--accent-hover` | `#4477A1` | `#8BBCCC` | Interaction state               |
| Text Main    | `--text-primary` | `#334E68` | `#BCCCDC` | Body copy                       |
| Heading      | `--text-heading` | `#102A43` | `#F0F4F8` | h1-h6                           |
| Border       | `--border-color` | `#D1DBE2` | `#243B53` | Dividers, card borders          |

## Typography

- **Body**: `Inter`, `system-ui`, `sans-serif` (17px/18px)
- **Monospace**: `Fira Code`, `JetBrains Mono`
- **Line Height**: 1.6 - 1.8 for optimal readability.

## Components & Layout

- **Cards**: Minimal borders (`1px`), subtle shadows (`shadow-sm`), rounded corners (`rounded-xl`).
- **Lists**: Clean bullets, ample vertical spacing (`prose-li:my-2`).
- **Code Blocks**: Dark background always, even in light mode, with low contrast syntax highlighting.
- **Navigation**: Floating sidebar when needed, or structured left rail.

## Anti-Patterns (Avoid)

- ❌ **No pure white backgrounds** in light mode (too blinding, use `#F4F7F9`).
- ❌ **No pure black backgrounds** in dark mode (use `#1B262C`).
- ❌ **No highly saturated colors** (keep saturation < 30% for Morandi feel).
- ❌ **No emojis as UI icons** (use Lucide/Heroicons).
