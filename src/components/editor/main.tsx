import styles from './style.module.css'

export function Editor() {
  return (
    <div className={styles.editor} role="region" aria-label="Code editor">
      <div className={styles.commentArea}>
        <p># Hi! I&apos;m Jefferson, a web developer focused on creating clean,</p>
        <p># scalable, and user-friendly applications.</p>
        <p>#</p>
        <p># My primary language is Python, but i also have hands-on</p>
        <p># experience with JavaScript, Dart, and C#.</p>
        <p>#</p>
        <p># This portfolio was designed with a PyCharm-inspired interface</p>
        <p># and developed using React and SCSS.</p>
      </div>
      <div className={styles.importArea}>
        <span>import</span> requests
      </div>
      <div className={styles.codeArea}>
        <p className={styles.function}>
          <span className={styles.def}>def</span>{' '}
          <span className={styles.main}>main</span>():
        </p>
        <div className={styles.functionBody}>
          <p>
            response = requests.get(
            <span className={styles.greenText}>&apos;https://magenta-fox-5d5416.netlify.app&apos;</span>
            ).json()
          </p>
          <p className={styles.firstPrint}>
            <span className={styles.blueText}>print</span>(&quot;Hello stranger! Let&apos;s
            talk?&quot;)
          </p>
          <p className={styles.loop}>
            <span>for</span> contact <span>in</span> response:
          </p>
          <p className={styles.print}>
            <span className={styles.blueText}>print</span>(f&quot;[{'{'}contact.get(
            <span className={styles.greenText}>&apos;type&apos;</span>)
            {'}'}]: {'{'}contact.get(
            <span className={styles.greenText}>&apos;info&apos;</span>)
            {'}'}&quot;)
          </p>
        </div>
        <div className={styles.functionCall}>
          <p>
            <span className={styles.bool}>if</span> __name__ =={' '}
            <span className={styles.greenText}>&apos;__main__&apos;</span>:
          </p>
          <p className={styles.mainFunction}>main()</p>
        </div>
      </div>
    </div>
  )
}
