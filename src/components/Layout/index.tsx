import { NavigationBar } from '../NavigationBar'
import HeroImage from '../HeroImage'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationBar />
      <HeroImage />
      <main>{children}</main>
    </>
  )
}
