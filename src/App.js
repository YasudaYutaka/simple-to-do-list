import './App.css';
import ToDoInput from './components/ToDoInput';
import ItemList from './components/ItemList'

function App() {
  return (
    <header>
      <section className='input-section'>
        <ToDoInput />
      </section>
      <section className='items-section'>
        <ItemList />
      </section>
    </header>
  );
}

export default App;
