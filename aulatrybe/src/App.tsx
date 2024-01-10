import Greeting from "./Greeting";
import LuckyNumbers from "./LuckyNumbers"; 

function App() {
  return (
    <>
      <Greeting person={{ firstName: "Chapolin", lastName: "Colorado" }} />
      <LuckyNumbers />
    </>
  );
}

export default App;
