import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  // const [state, setState] = React.useState(1)
  // console.log(state)
  const [tasks,setState] = React.useState(["Task1", "Task2"])
  var tasksElement = tasks.map((tasks) => <p>{tasks}</p>)


  function addTask() {
    //setState(2)

     const newTasks = `Task${tasks.length + 1}`
     //tasks.push(newTasks)
    setState(prevState => [...prevState,newTasks])
    // tasksElement = tasks.map((tasks) => <p>{tasks}</p>)
    // console.log(tasksElement)

  }
  return (
    <div className="App">
      <button onClick={addTask}>Add Task</button>
      {tasksElement}

    </div>
  );
}

export default App;
