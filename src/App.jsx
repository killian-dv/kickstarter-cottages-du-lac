import { Header } from "./components/Header/Header";
import { History } from "./components/History/History";
import { Concept } from "./components/Concept/Concept";
import { Technologie } from "./components/Technologie/Technologie";
import { Objectif } from "./components/Objectif/Objectif";
import { Equipe } from "./components/Equipe/Equipe";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={`${styles.main}`}>
        <Header />
        <div className={`${styles.container}`}>
          <History />
          <Concept />
          <Technologie />
          <Objectif />
          <Equipe />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
