import { FaFolder, FaPython } from 'react-icons/fa';

import './styles.scss'

export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <div className="top-options">
                    <span className='selected'><FaFolder /> Project</span>
                    <span>Commit</span>
                    <span>Pull Requests</span>
                </div>
                <div className="bottom-options">
                    <span>Bookmarks</span>
                    <span>Structure</span>
                </div>
            </div>
            <div className="main-folder">
                <FaFolder />
                <h3>main</h3> <span>~/Documents/Projects/...</span>
            </div>
            <div className="file-area">
                <FaPython />
                <span>main.py</span>
            </div>
        </div>
    )
}