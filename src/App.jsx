import { History } from "@/components/History";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="p-4">
      <Header />
      <div className="px-24">
        <History />
      </div>
    </div>
  );
}

export default App;
