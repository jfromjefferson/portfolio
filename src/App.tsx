import { IdeOptions } from "./components/IdeOptions";
import { Sidebar } from "./components/Sidebar";
import { Terminal } from "./components/Terminal";

export function App() {
  return (
    <main className="main-area">
        <div className="ide">
          <IdeOptions />
          <Sidebar />
          <div className="editor">
            <span>Main</span>
          </div>
          <Terminal />
      </div>
    </main>
  )
}

