import React from "react";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    }

    onCLick = () => {
        console.log(this.state);
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <div>
                <div>
                    <input name="firstName" placeholder="First name" value={this.state.name} onChange={this.onChange}/>
                </div>
                <div>
                    <input name="lastName" placeholder="Last name" value={this.state.name} onChange={this.onChange}/>
                </div>
                <div>
                    <input name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div>
                    <input name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <div>
                    <input name="repeatPassword" placeholder="Repeat password" value={this.state.repeatPassword} onChange={this.onChange}/>
                </div>
                <button onClick={this.onCLick}>Sign up</button>
            </div>
        );
    }
}