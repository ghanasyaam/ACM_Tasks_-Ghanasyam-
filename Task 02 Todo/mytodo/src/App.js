import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  useEffect(() => {
    const savedToDos = localStorage.getItem('toDos');
    
    if (savedToDos) {
      setToDos(JSON.parse(savedToDos));
    }
  }, []);

  useEffect(() => {
    if (toDos.length > 0) {
      localStorage.setItem('toDos', JSON.stringify(toDos));
    }
  }, [toDos]);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>TODO</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input 
          value={toDo} 
          onChange={(e) => setToDo(e.target.value)} 
          type="text" 
          placeholder="🖊️ Add item..." 
        />
        <i 
          onClick={() => {
            if (toDo.trim()) {
              setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
              setToDo('');
            }
          }} 
          className="fas fa-plus">
        </i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input 
                  type="checkbox" 
                  checked={obj.status} 
                  onChange={(e) => {
                    setToDos(toDos.map((obj2) => {
                      if (obj2.id === obj.id) {
                        return { ...obj2, status: e.target.checked };
                      }
                      return obj2;
                    }));
                  }} 
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i 
                  className="fas fa-times" 
                  onClick={() => setToDos(toDos.filter((obj2) => obj2.id !== obj.id))}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
