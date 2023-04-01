import { FaFolder, FaPython, FaCodeBranch, FaCodepen, FaBookmark, FaCubes } from 'react-icons/fa';

import './styles.scss'

export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <div className="top-options">
                    <span className='selected'><FaFolder /> Project</span>
                    <span><FaCodeBranch /> Commit</span>
                    <span><FaCodepen /> Pull Requests</span>
                </div>
                <div className="bottom-options">
                    <span><FaBookmark /> Bookmarks</span>
                    <span><FaCubes /> Structure</span>
                </div>
            </div>
            <div className="main-folder">
                <span></span>
                <FaFolder />
                <h3>main</h3>
                <span>~/Documents/Projects/Portfolio/...</span>
                <span></span>
            </div>
            <div className="file-area">
                <FaPython />
                <span>main.py</span>
            </div>
        </div>
    )
}