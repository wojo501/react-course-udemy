import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [errorOccured, setErrorOccured] = useState(false);

    const addUsertHandler = (event) => {
        event.preventDefault();
        console.log("Refs: ", nameInputRef, ageInputRef);
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || +enteredUserAge < 1 || enteredUserAge.trim().length === 0) {
            setErrorOccured(true);
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    }

    const errorHandler = () => {
        setErrorOccured(false);
    }

    return (
        <Wrapper>
            {errorOccured && <ErrorModal onConfirm={errorHandler} title="An error occured" message="User data are invalid" />}
            <Card className={classes.input}>
                <form onSubmit={addUsertHandler} action="">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>

    )
}

export default AddUser;