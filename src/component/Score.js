import QuestionData from "../data/QuestionsData.js";
import { DataContext} from '../App.js';
import { useContext } from 'react';
const Score = () => {
    const {score,setAppState,setScore} = useContext(DataContext);

    const restartApp = () => {
        setAppState("menu");
        setScore(0);
    }
    return(

        <div className="score">
            <h1>สรุปผลคะแนน</h1>
        <h2>{score} / {QuestionData.length}</h2>
        <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
      </div>
    )
}
export default Score;
