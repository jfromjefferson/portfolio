import { useState, useEffect, useRef } from 'react'
import { FaCog, FaMinus } from 'react-icons/fa'
import { contacts } from '../../data/contact'
import styles from './styles.module.css'

const COMMAND = 'python main.py'
const prompt = (
  <>
    (env)
    <span className={styles.green}> jfromjefferson@jefferson-pc</span>
    <span className={styles.gray}>:</span>
    <span className={styles.blue}>~/Documents/Projects/Portfolio</span>
    <span>$ </span>
  </>
)

type Step = 'idle' | 'typing' | 'executing' | 'output'

export function Terminal() {
  const [step, setStep] = useState<Step>('idle')
  const [typed, setTyped] = useState('')
  const typedRef = useRef('')

  useEffect(() => {
    const t1 = setTimeout(() => setStep('typing'), 400)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (step !== 'typing') return
    if (typed.length < COMMAND.length) {
      const timer = setTimeout(() => {
        const next = COMMAND.slice(0, typed.length + 1)
        typedRef.current = next
        setTyped(next)
      }, 60)
      return () => clearTimeout(timer)
    }
    const t2 = setTimeout(() => setStep('executing'), 300)
    return () => clearTimeout(t2)
  }, [step, typed])

  useEffect(() => {
    if (step !== 'executing') return
    const t3 = setTimeout(() => setStep('output'), 1600)
    return () => clearTimeout(t3)
  }, [step])

  return (
    <div className={styles.terminal} role="region" aria-label="Terminal">
      <div className={styles.terminalOptions}>
        <div className={styles.firstArea}>
          <span>Terminal: </span>
          <span className={`${styles.local} ${styles.selected}`}>Local</span>
          <span className={styles.local}>Local (2)</span>
        </div>
        <div className={styles.secondArea}>
          <FaCog role="button" tabIndex={0} aria-label="Terminal settings" />
          <FaMinus role="button" tabIndex={0} aria-label="Minimize terminal" />
        </div>
      </div>
      <div className={styles.terminalArea}>
        <p className={styles.line}>
          {prompt}
          {step === 'idle' && <span className={styles.cursor} />}
          {step !== 'idle' && <span>{typed}</span>}
          {step === 'typing' && typed.length < COMMAND.length && (
            <span className={styles.cursor} />
          )}
        </p>

        {step === 'executing' && (
          <p className={styles.line}>
            <span className={`${styles.spinnerText} ${styles.green}`}>
              Executing main.py
            </span>
          </p>
        )}

        {step === 'output' && (
          <>
            <p className={`${styles.line} ${styles.reveal}`}>
              <span className={styles.dim}>──────────────────────────────</span>
            </p>
            {contacts.map((item, i) => (
              <p
                key={item.type}
                className={`${styles.line} ${styles.reveal}`}
                style={{ animationDelay: `${0.2 + i * 0.18}s` }}
              >
                <span className={styles.cyan}>
                  [{item.type}]
                </span>
                :{' '}
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.info}
                  </a>
                ) : (
                  item.info
                )}
              </p>
            ))}
            <p
              className={`${styles.line} ${styles.reveal}`}
              style={{ animationDelay: `${0.2 + contacts.length * 0.18}s` }}
            >
              <span className={styles.dim}>──────────────────────────────</span>
            </p>
            <p
              className={`${styles.line} ${styles.reveal}`}
              style={{ animationDelay: `${0.4 + contacts.length * 0.18}s` }}
            >
              <span className={styles.green}>&#10003; Process finished with exit code 0</span>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
