import { FaFolder, FaPython, FaCodeBranch, FaCodepen, FaBookmark, FaCubes } from 'react-icons/fa'
import styles from './styles.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Project sidebar">
      <nav className={styles.sidebarOptions} aria-label="Sidebar navigation">
        <div className={styles.topOptions}>
          <span className={styles.selected}>
            <FaFolder aria-hidden="true" /> Project
          </span>
          <span>
            <FaCodeBranch aria-hidden="true" /> Commit
          </span>
          <span>
            <FaCodepen aria-hidden="true" /> Pull Requests
          </span>
        </div>
        <div className={styles.bottomOptions}>
          <span>
            <FaBookmark aria-hidden="true" /> Bookmarks
          </span>
          <span>
            <FaCubes aria-hidden="true" /> Structure
          </span>
        </div>
      </nav>
      <div className={styles.content}>
        <div className={styles.mainFolder}>
          <FaFolder aria-hidden="true" />
          <h3>main</h3>
          <span>~/Documents/Projects/Portfolio/...</span>
        </div>
        <div className={styles.fileArea}>
          <FaPython aria-hidden="true" />
          <span>main.py</span>
        </div>
      </div>
    </aside>
  )
}
