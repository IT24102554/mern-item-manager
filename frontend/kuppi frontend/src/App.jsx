import { useEffect, useState } from 'react';
import { getItems } from './api';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await getItems();
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Item Manager</h1>
      <ItemForm onItemAdded={fetchItems} />
      <ItemList items={items} onRefresh={fetchItems} />
    </div>
  );
}

export default App;