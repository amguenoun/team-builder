import React from "react";

const TeamList = (props) => {
    return (
        <div>
            {props.teamList.map(member => {
                return <p>My name is {member.firstName} {member.lastName} and I do {member.position}</p>
            })}
        </div>
    );
}

export default TeamList;