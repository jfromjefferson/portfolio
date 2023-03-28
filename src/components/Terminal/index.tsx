import { FaCog, FaMinus } from 'react-icons/fa'
import './styles.scss'

interface Contact {
    info: string,
    type: string,
}


export function Terminal() {
    const contact_data: Contact[] = [
        {info: 'jeffsilva1@outlook.com', type: 'email'},
        {info: '53 99999-9999', type: 'phone'},
        {info: 'https://linkedin.com/jfromjefferson', type: 'linkedin'},
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
                {
                   contact_data.map(item => (
                        <p>
                            (env) 
                            <span className="green-text">
                                jfromjefferson@jefferson-pc
                            </span>
                            <span className="gray-text">:</span>
                            <span className="blue-text">~/Documents/Projects/Portfolio</span>
                            <span>$ </span>
                            <span>[{item.type}]: {item.info}</span>
                        </p>
                        )
                    ) 
                }

            </div>
        </div>
    )
}