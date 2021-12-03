import { NavigationBar } from '../NavigationBar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  )
}
