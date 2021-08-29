import { useState } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ItemList from "./components/ItemList";

function App() {
  const [enteredText, setEnteredText] = useState([
    { text: "Watch anime", id: "t1" },
    { text: "Do exercises", id: "t2" }
  ]);

  const addItemHandler = (item) => {
    setEnteredText((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.unshift({ text: item, id: Math.random().toString() });
      return updatedItems;
    });
  };

  const deleteItemHandler = (itemID) => {
    setEnteredText((prevItems) => {
      const updatedItems = prevItems.filter(item => item.id !== itemID);
      return updatedItems;
    })
  }

  let content = (<p className="nothing">Nothing found :(</p>);
  if(enteredText.length > 0) {
    content = (<ItemList text={enteredText} onDeleteItem={deleteItemHandler} />);
  }

  return (
    <header>
      <section className="input-section">
        <ToDoInput onAddItem={addItemHandler} />
      </section>
      <section className="items-section">
        {content}
      </section>
    </header>
  );
}

export default App;
