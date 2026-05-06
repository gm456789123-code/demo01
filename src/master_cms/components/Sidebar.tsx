"use client"

import React from 'react'
import { LayoutDashboard, FileText, Image as ImageIcon, Settings, LogOut, Sparkles } from 'lucide-react'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Sparkles size={20} fill="currentColor" />
        </div>
        <span className={styles.logoText}>Master CMS</span>
        <span className={styles.version}>v1.0</span>
      </div>
      
      <nav className={styles.nav}>
        <div className={`${styles.navItem} ${styles.active}`}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>
        <div className={styles.navItem}>
          <FileText size={20} />
          <span>Posts</span>
        </div>
        <div className={styles.navItem}>
          <ImageIcon size={20} />
          <span>Media</span>
        </div>
        <div className={styles.navItem}>
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>

      <div className={styles.footer}>
        <div className={`${styles.navItem} ${styles.logout}`}>
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  )
}
