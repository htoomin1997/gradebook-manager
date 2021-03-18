import './App.css';
import React, {useReducer} from "react";
import GradeCard from "./components/GradeCard";

const gradeReducer = (gradeState, action) => {
  switch(action.type){
    case "ADD_CLASS":
      return [action.newObj, ...gradeState];
    case "APPEND_GRADE_TO_CLASS":
      const newArr = gradeState.map((currEl) => {
        if (currEl.id === action.target){
          return {
            class: currEl.class,
            id: currEl.id,
            grade: [...currEl.grade, action.newGrade],
            credits: currEl.credits
          }
        } else {
          return currEl;
        }
      })
      return newArr;
      
    default:
      console.log("shouldnt get here!");
  }
}

const App = () => {

  const [gradeState, gradeDispatch] = useReducer(gradeReducer, [
    {class: "MA-UY1111", grade: [], id: 1, credits: 4},
    {class: "Anatomy and Physiology", grade: [], id: 2, credits: 3}
  ])


  return (
    <div>
      <h1>Welcome to the average calculator</h1>
      <div className="grade-card-display">
        {gradeState.map((currEl) => {
          return <GradeCard
            name={currEl.class}
            grades={currEl.grade}
            id={currEl.id}
            credits={currEl.credits}
            addGrade={(targetId, grade) => gradeDispatch({type: "APPEND_GRADE_TO_CLASS", newGrade: grade, target: targetId})}
          />
        })}
      </div>
    </div>
  );
}

export default App;
