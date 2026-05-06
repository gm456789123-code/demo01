"use client"

import React from 'react'
import { Search, Bell, Sun, Moon } from 'lucide-react'
import { useCMSTheme } from '../context/ThemeContext'
import styles from './TopNav.module.css'

export default function TopNav() {
  const { theme, toggleTheme } = useCMSTheme()

  return (
    <header className={styles.topnav}>
      <div className={styles.search}>
        <Search size={18} className={styles.iconBtn} />
        <input type="text" placeholder="Search..." />
      </div>

      <div className={styles.actions}>
        <div className={styles.iconBtn} onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </div>
        <div className={styles.iconBtn}>
          <Bell size={20} />
        </div>
        <div className={styles.profile}>
          AD
        </div>
      </div>
    </header>
  )
}
