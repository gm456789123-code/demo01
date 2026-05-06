import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="bg-mesh" />
      
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>DEMO.01</div>
        <div className={styles.navLinks}>
          <a href="#">Features</a>
          <a href="#">How it works</a>
          <button className="btn-secondary">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="animate-fade-in">
          <h1 className={styles.title}>
            The Future of <span className={styles.gradientText}>Magic Coding</span>
          </h1>
          <p className={styles.subtitle}>
            Experience the power of AI-driven development. Beautiful, fast, and connected 
            directly to your cloud.
          </p>
          <div className={styles.ctaGroup}>
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">View Demo</button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <div className="glass-card">
          <div className={styles.featureIcon}>🚀</div>
          <h3>Lightning Fast</h3>
          <p>Built with Next.js 16 and React 19 for the best performance possible.</p>
        </div>
        <div className="glass-card">
          <div className={styles.featureIcon}>💎</div>
          <h3>Premium Design</h3>
          <p>Glassmorphism, smooth animations, and a modern aesthetic out of the box.</p>
        </div>
        <div className="glass-card">
          <div className={styles.featureIcon}>☁️</div>
          <h3>Vercel Ready</h3>
          <p>Seamlessly connected to GitHub and Vercel for instant deployments.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Antigravity Demo Project. Created for a visionary user.</p>
      </footer>
    </main>
  );
}
