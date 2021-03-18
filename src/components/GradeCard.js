import React, {useState, useRef} from "react";
import "./GradeCard.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';

const GradeCard = (props) => {
    const [inputFieldState, setInputFieldState] = useState("");
    const addGradeRef = useRef();
    console.log(props.grades);

    const addHandler = () => {
        setInputFieldState((prevState) => {
            if (prevState !== "Add"){
                setInputFieldState("Add");
            } else {
                setInputFieldState("");
            }
        })
        
    }

    const editHandler = () => {
        setInputFieldState((prevState) => {
            if (prevState !== "Edit"){
                setInputFieldState("Edit");
            } else {
                setInputFieldState("");
            }
        })
    }

    return (
        <div className="grade-card">
            <div className="delete-button-container">
                <Button style={{backgroundColor: "#2196f3"}} onClick={addHandler}><AddIcon /></Button>
                <div className="divider" />
                <Button style={{backgroundColor: "#4caf50"}} onClick={editHandler}><EditIcon /></Button>
                <div className="divider" />
                <Button style={{backgroundColor: "#f44336"}} onClick={() => alert("You are trying to delete!")}><ClearIcon /></Button>
            </div>
            <h2><u>{props.name}</u></h2>
            <p>Credits: {props.credits}</p>
            <p>Current Average: {props.grades.length > 0 ? (props.grades.reduce((acc, currEl) => acc+parseInt(currEl), 0)) / props.grades.length : "No Grades!"}</p>
            {inputFieldState === "Add" ? <div>
                <input placeholder="Grade" ref={addGradeRef}></input>
                <button onClick={() => props.addGrade(props.id, addGradeRef.current.value)}>Submit</button>
            </div> : inputFieldState === "Edit" ? <div>
                <p>Edit controls go here!</p>
            </div> : null}
        </div>
    )
}

export default GradeCard;