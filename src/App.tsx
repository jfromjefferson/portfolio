import { IdeOptions } from "./components/IdeOptions";
import { Sidebar } from "./components/Sidebar";
import { Terminal } from "./components/Terminal";
import { Editor } from "./components/editor/main";

export function App() {
  return (
    <main className="main-area">
        <div className="ide">
          <IdeOptions />
          <Sidebar />
          <Editor />
          <Terminal />
      </div>
    </main>
  )
}

