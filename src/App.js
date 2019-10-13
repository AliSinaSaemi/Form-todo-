import React, { Component } from 'react';
import Members from './Members';
import MemberForm from './memberForm';


class App extends Component {
    state = {
        members : [
            { username: 'Alisina', email: 'alisina@gmail.com', password: 'Programmer', id: 1 },
            { username: 'Joe', email: 'joe2016@gmail.com', password: 'Postman', id: 2 },
        ]
    }
    addMember = (member) => {
        member.id = Math.random();
        let members = [...this.state.members, member]
        this.setState({
            members: members
        })
    }

    render() {
        return (
            <div id="app-content">
                <h1>This is our first application</h1>
                <Members members={this.state.members} />
                <MemberForm addMember={this.addMember} />
            </div>
        )
    }
}

export default App;