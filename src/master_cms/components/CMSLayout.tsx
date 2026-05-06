"use client"

import React from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'
import { CMSThemeProvider } from '../context/ThemeContext'
import '../styles/theme.css'

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <CMSThemeProvider>
      <div className="cms-body">
        <Sidebar />
        <TopNav />
        <main style={{ marginLeft: '260px', paddingTop: '70px', padding: '2rem' }}>
          {children}
        </main>
      </div>
    </CMSThemeProvider>
  )
}
