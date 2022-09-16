import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [errorOccured, setErrorOccured] = useState(false);

    const addUsertHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || +enteredAge < 1 || enteredAge.trim().length === 0) {
            setErrorOccured(true);
            return;
        }
        console.log("New user data: ", enteredAge, enteredUsername);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("")
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setErrorOccured(false);
    }

    return (
        <div>
            {errorOccured && <ErrorModal onConfirm={errorHandler} title="An error occured" message="User data are invalid" />}
            <Card className={classes.input}>
                <form onSubmit={addUsertHandler} action="">
                    <label htmlFor="username">Username</label>
                    <input id="username" value={enteredUsername} type="text" onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" value={enteredAge} type="number" onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>

    )
}

export default AddUser;