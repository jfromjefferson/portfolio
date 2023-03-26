import { IdeOptions } from "./components/IdeOptions";
import { Sidebar } from "./components/Sidebar";
import { Terminal } from "./components/Terminal";

export function App() {
  return (
    <>
      <IdeOptions />
      <Sidebar />
      <main>
        <span>Main</span>
      </main>
      <Terminal />
    </>
  )
}

