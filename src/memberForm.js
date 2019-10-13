import React, { Component } from 'react';

export default class MemberForm extends Component {
    state = {
        username: null,
        email: null,
        password: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMember(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="username ..." onChange={this.handleChange} />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" placeholder="email ..." onChange={this.handleChange} />
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" placeholder="password ..." onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
