import { Header } from "../header"
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-(family-name:--font-geist-sans)`}>
    <div className="relative flex min-h-screen flex-col dark">
      <Header />
      <main className="flex-1 flex flex-col mb-12">
        {children}
      </main>
    </div>
    </div>
  )
}
