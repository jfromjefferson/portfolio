import './style.scss'

export function Editor() {
    return (
        <div className="editor">
            <div className="comment-area">
                <p># Hi! My name is Jefferson, i'm a web developer</p>
                <p># Python is my main language, but i have knowledge and experience with other languages such as Javascript and Dart</p>
                <p># Flutter lover</p>
                <p>#</p>
                <p># Pycharm style portfolio, made using React + scss</p>
            </div>
            <div className="import-area">
                <span>import</span> requests
            </div>
            <div className="code-area">
                <p className="function">
                    <span className="def">def</span> <span className="main">main</span>():
                </p>
                <div className="function-body">
                    <p>response = requests.get(<span className="green-text">'https://api.oitobits.tech'</span>).json()</p>
                    <p className="first-print">
                        <span className="blue-text">print</span>("Hello strange! Let's talk?")
                    </p>
                    <p className="loop">
                        <span>for</span> contact <span>in</span> response:
                    </p>
                    <p className="print">
                        <span className="blue-text">print</span>(f"[{'{'}contact.get(<span className="green-text">'type'</span>){'}'}]: {'{'}contact.get(<span className="green-text">'info'</span>){'}'}")
                    </p>
                </div>
                <div className="function-call">
                    <p><span className="bool">if</span> __name__ == <span className="green-text">'__main__'</span>:</p>
                    <p className="main-function">main()</p>
                </div>
            </div>
        </div>
    )
}