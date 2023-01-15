import Button from "./components/ui/Button/Button.styled";
import { Input } from "./components/ui/Input/Input.component";
import { SingleCard } from "./components/SingleCard/SingleCard.component";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button secondary>Click Me</Button>
      <Button>Click Me2</Button>
      <Button secondary>Click Me3</Button>
      <Input placeholder="Hello world" />
      <Input placeholder="Filter by title, companies, expertise" />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </>
  );
}
export default App;
