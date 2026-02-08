// lib/fonts.ts
import { Funnel_Display } from 'next/font/google';

// Variable font – no need to specify weight array
export const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // pick what you need
  variable: "--font-funnel-display", // optional but useful
});