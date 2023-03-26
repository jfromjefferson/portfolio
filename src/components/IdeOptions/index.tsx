import { FaFolderOpen, FaCaretDown, FaCrosshairs, FaCog, FaMinus, FaPython, FaTimes } from 'react-icons/fa'
import './styles.scss'

export function IdeOptions() {
    return (
        <div className="ide-options">
            <div className="first-area">
                <div className="project-area">
                    <FaFolderOpen className='folder-open' />
                    <span>Project</span>
                    <FaCaretDown />
                </div>
                <div className="config-area">
                    <FaCrosshairs />
                    <FaCog />
                    <FaMinus />
                </div>
            </div>
            <div className="second-area">
                <div className="py-file-area">
                    <FaPython />
                    <span className='filename'>main.py</span>
                    <span className='close'>x</span>
                </div>
            </div>
        </div>
    )
}