import { FaFolderOpen, FaCaretDown, FaCrosshairs, FaCog, FaMinus, FaPython } from 'react-icons/fa'
import styles from './styles.module.scss'

export function IdeOptions() {
  return (
    <div className={styles.ideOptions} role="toolbar" aria-label="IDE options">
      <div className={styles.firstArea}>
        <div className={styles.projectArea} role="button" tabIndex={0} aria-label="Select project">
          <FaFolderOpen className={styles.folderOpen} aria-hidden="true" />
          <span>Project</span>
          <FaCaretDown aria-hidden="true" />
        </div>
        <div className={styles.configArea}>
          <FaCrosshairs role="button" tabIndex={0} aria-label="Crosshairs" />
          <FaCog role="button" tabIndex={0} aria-label="Settings" />
          <FaMinus role="button" tabIndex={0} aria-label="Minimize" />
        </div>
      </div>
      <div className={styles.secondArea}>
        <div className={styles.pyFileArea}>
          <FaPython aria-hidden="true" />
          <span className={styles.filename}>main.py</span>
          <span className={styles.close} role="button" tabIndex={0} aria-label="Close file">
            x
          </span>
        </div>
      </div>
    </div>
  )
}
