import React from "react";

function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(()=> {
        try {
          const localStorageItem = localStorage.getItem(itemName);
    
          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify([]));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem)
          }

          setLoading(false);
        } catch (error) {
          setError(true)
        }
     }, 2000);
      
    });
  
        
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem);
    };
    return {
      item, 
      saveItem, 
      loading, 
      error
    };
  }

  export {useLocalStorage};

  // const defaultTodos = [
//   { text: 'salir a caminar', completed: true},
//   { text: 'Tomar el curso de react', completed: false},
//   { text: 'Completar curso de fullstack', completed: false},
//   { text: 'Completar el curso de javascript', completed: false},
// ]

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1')