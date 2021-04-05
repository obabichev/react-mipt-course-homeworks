import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';
import {useMutation} from "react-query";
import {register} from "../../../service/auth";
import {useAuthSession} from "../context/AuthContext";
import {useHistory} from "react-router-dom";
import {Auth} from "../auth/Auth";

const inputLabels = ["Имя", "Почта", "Пароль"]
const buttonLabels = ["Регистрация", "Авторизация"]
const inputNames = ["name", "email", "password"]


export const Register = () => {

    const [form, setForm] = useState({name: '', email: '', password: ''});
    const {setSession} = useAuthSession();
    const history = useHistory();

    const formsElements = [form.name, form.email, form.password]

    const request = useMutation(register(form), {
        onSuccess: (response) => {
            setSession(response.data)
            history.push("/boards")
        }
    })

    const onChange: ChangeEventHandler<{value: string, name: string}> =
        (event) => {
            setForm({
                ...form,
                [event.target.name]: event.target.value
            })
        }

    const onSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        request.mutate();
    }

    const onSwitch: FormEventHandler = (event) => {
        event.preventDefault();
        history.push("/login")
    }

    const buttonTriggers = [onSubmit, onSwitch];

    return <Auth
        buttonLabels={buttonLabels}
        inputNames={inputNames}
        inputLabels={inputLabels}
        label={"Регистрация"}
        inputOnChange={onChange}
        formsElements={formsElements}
        buttonTriggers={buttonTriggers}
        marginTop={"13%"}/>
}
