
import React from 'react';

const Members = ({members, deleteMember}) => {
    const memberList = members.map(member => {
        return (
            <ul className="list" key={ member.id }>
                <li>Username: { member.username }</li>
                <li>Email: { member.email }</li>                                 
            </ul>
        )
    })
    return (
        <div className="member-list">
            { memberList }
        </div>
    )
    
}

export default Members;