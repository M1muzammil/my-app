// app/layout.tsx or app/layout.js
"use client"; // Ensure this is a client component

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import  ContextProvider  from './context/context'; // Adjust the path

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
