import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/header/Header'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/footer/Footer'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'VK-Store',
  description: 'This is VK-Store , you can shop here for your favourite products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
          )}
          >
      <ThemeProvider
       attribute="class"
       defaultTheme="system"
       enableSystem
       disableTransitionOnChange
      >
        <Header/>
        {children}
        <Footer/>
    </ThemeProvider>
    </body>
  </html>
  )
}
