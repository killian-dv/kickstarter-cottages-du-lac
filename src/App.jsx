import { Header } from "./components/Header/Header";
import { History } from "./components/History/History";
import { Concept } from "./components/Concept/Concept";
import { Technologie } from "./components/Technologie/Technologie";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`${styles.main}`}>
      <Header />
      <div className={`${styles.container}`}>
        <History />
        <Concept />
        <Technologie />
      </div>
    </div>
  );
}

export default App;
