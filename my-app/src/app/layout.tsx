/**
 * comments in deoxygen style below
 **/


/**
 * @file            src/app/layout.tsx
 * @description     root layout for the application
 * @version         1.0.0
 * @date            @2025-08-07
 * @author          morgan bergen
 */
import type { Metadata } from "next";
import "./globals.css"; // Ensure global styles are imported

export const metadata: Metadata = {
  title: "Dashboard UI",
  description: "User dashboard interface",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Header remains consistent across pages */}
        <header>
          <nav>
            {/* Simple anchor tags for navigation - consider using Next.js <Link> for client-side routing if these were actual pages */}
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#more">more</a>
          </nav>
        </header>
        {/* Page content is rendered here */}
        {children}
      </body>
    </html>
  );
}
