import { useState } from 'react'
import { IdeOptions } from './components/IdeOptions'
import { Sidebar } from './components/Sidebar'
import { Terminal } from './components/Terminal'
import { Editor } from './components/editor/main'
import styles from './App.module.css'

type MobileTab = 'explorer' | 'editor' | 'terminal'

const TAB_LABELS: { key: MobileTab; label: string }[] = [
  { key: 'explorer', label: 'Explorer' },
  { key: 'editor', label: 'main.py' },
  { key: 'terminal', label: 'Terminal' },
]

export function App() {
  const [mobileTab, setMobileTab] = useState<MobileTab>('terminal')

  return (
    <main className={styles.mainArea}>
      <div className={styles.ide} data-tab={mobileTab}>
        <IdeOptions />

        <nav className={styles.tabBar} aria-label="Mobile navigation">
          {TAB_LABELS.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${mobileTab === tab.key ? styles.tabActive : ''}`}
              onClick={() => setMobileTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div data-panel="explorer">
          <Sidebar />
        </div>

        <div data-panel="editor">
          <Editor />
        </div>

        <div data-panel="terminal" className={styles.terminalPanel}>
          <Terminal />
        </div>
      </div>
    </main>
  )
}
