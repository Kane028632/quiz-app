import { useState,createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './component/Quiz.js';
import Menu from './component/Menu.js';
import Score from './component/Score.js';


export const DataContext = createContext();

function App() {
  const [appState,setAppState] = useState("menu");
  const [score,setScore] = useState(0);
  return (
   <DataContext.Provider value={{appState,setAppState,score,setScore}}>
 <div className="App">
      <h1>Web development Quiz</h1>
      {appState==="menu" && <Menu/>}{/* <Menum/> */}
      {appState==="quiz" && <Quiz/>}
      {appState==="score" && <Score/>}
    </div>
   </DataContext.Provider>
  );
}

export default App;
