import { FaCog, FaMinus } from 'react-icons/fa'
import './styles.scss'
import { ReactElement } from 'react'

interface Contact {
    info?: string,
    type: string,
    element?: ReactElement,
}


export function Terminal() {
    const contact_data: Contact[] = [
        {
            info: 'jeffsilva1@outlook.com',
            type: 'email'
        },
        {
            element: <a href="https://web.whatsapp.com/send?phone=53981470762" target="_blank">(53) 98147-0762</a>, 
            type: 'whatsapp'
        },
        {
            type: 'linkedin',
            element: <a href='https://www.linkedin.com/in/jfromjefferson' target="_blank">https://www.linkedin.com/in/jfromjefferson</a>
        },
        {
            type: 'github',
            element: <a href='https://github.com/jfromjefferson' target="_blank">https://github.com/jfromjefferson</a>
        },
    ]

    return (
        <div className='terminal'>
            <div className="terminal-options">
                <div className="first-area">
                    <span>Terminal: </span>
                    <span className="local selected">Local</span>
                    <span className="local">Local (2)</span>
                </div>
                <div className="second-area">
                    <FaCog />
                    <FaMinus />
                </div>
            </div>
            <div className="terminal-area">
                <p>
                    (env) 
                    <span className="green-text">
                        jfromjefferson@jefferson-pc
                    </span>
                    <span className="gray-text">:</span>
                    <span className="blue-text">~/Documents/Projects/Portfolio</span>
                    <span>$ </span>
                    <span>Hello strange! Let's talk?</span>
                </p>
                {
                   contact_data.map(item => (
                        <p key={item.type}>
                            (env) 
                            <span className="green-text">
                                jfromjefferson@jefferson-pc
                            </span>
                            <span className="gray-text">:</span>
                            <span className="blue-text">~/Documents/Projects/Portfolio</span>
                            <span>$ </span>
                            <span>[{item.type}]: {item.info ?? item.element}</span>
                        </p>
                        )
                    ) 
                }

            </div>
        </div>
    )
}