import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {signIn} from "../../Controllers/Redux/authSlice"
import Button from "@mui/material/Button"
import "./login.css";

export default () => {
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name : "",
        password : "",
    })

    const inputChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name] : e.target.value,
        })
    }
    const submit = (e) => {
        dispatch(signIn(formInput))
        e.preventDefault();
    }

    return <>
        <div className="login-page">
            <form className="login-panel">
                <h1>Login</h1>
                <input name="name" placeholder="Name" onChange={inputChange} value={formInput.name}/>
                <input name="password" type="password" placeholder="Password" onChange={inputChange} value={formInput.password}/>
                <Button variant="contained" type="submit" onClick={submit}>Login</Button>
            </form>
        </div>
    </>;
}

