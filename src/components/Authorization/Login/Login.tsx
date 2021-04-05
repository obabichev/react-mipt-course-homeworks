import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';
import {Auth} from "../auth/Auth";
import {useMutation} from "react-query";
import {login} from "../../../service/auth";
import {useAuthSession} from "../context/AuthContext";
import {useHistory} from "react-router-dom";

const inputLabels = ["Логин", "Пароль"]
const inputNames = ["email", "password"]
const buttonLabels = ["Войти", "Регистрация"]

export const Login = () => {

    const [form, setForm] = useState({email: '', password: ''});
    const {setSession} = useAuthSession();
    const history = useHistory();

    const onChange: ChangeEventHandler<{value: string, name: string}> =
        (event) => {
            setForm({
                ...form,
                [event.target.name]: event.target.value
            })
        }

    const request = useMutation(login(form), {
        onSuccess: (response) => {
            setSession(response.data)
            history.push("/boards")
        }
    })

    const onSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        request.mutate();
    }


    const onSwitch: FormEventHandler = (event) => {
        event.preventDefault();
        history.push("/register")
    }

    const buttonTriggers = [onSubmit, onSwitch];

    const formsElements = [form.email, form.password]

    return <Auth
        buttonLabels={buttonLabels}
        inputNames={inputNames}
        inputLabels={inputLabels}
        label={"Авторизация"}
        inputOnChange={onChange}
        formsElements={formsElements}
        buttonTriggers={buttonTriggers}
        marginTop={"23%"}/>
}
