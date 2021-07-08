import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStopwatch,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { useState } from "react";

library.add(faStopwatch, faMinus, faPlus);

function App() {
  const [counter, setCounter] = useState([0]);

  const handleAddCounter = () => {
    if (counter.length < 3) {
      const newCounter = [...counter];
      newCounter.push(0);
      setCounter(newCounter);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <button onClick={handleAddCounter}>Add Counter</button>
        </div>
        <div className="counter-disposition">
          {counter.map((item, index) => {
            return (
              <Counter
                counter={counter}
                setCounter={setCounter}
                item={item}
                index={index}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
