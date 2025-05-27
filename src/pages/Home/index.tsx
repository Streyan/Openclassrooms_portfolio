import Cards from "../../components/cards";
import Presentation from "../../components/presentation";
import Separator from "../../components/separator";
import Skills from "../../components/skills";

function App() {
  return (
    <main className="flex-column">
      <Presentation />
      <Separator />
      <Skills />
      <Cards />
    </main>
  );
}

export default App;
