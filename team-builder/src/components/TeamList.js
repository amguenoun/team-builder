import React from "react";

const TeamList = (props) => {
    return (
        <div>
            {props.teamList.map(member => {
                return <p>I am {member.name}, a {member.role} and you can contact me at {member.email}</p>
            })}
        </div>
    );
}

export default TeamList;