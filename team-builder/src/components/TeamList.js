import React from "react";

const TeamList = (props) => {
    return (
        <div className="card-list">
            {props.teamList.map(member => {
                return (
                    <div className="member-card" key={member.id}>
                        <h2>{member.name}</h2>
                        <hr />
                        <p>{member.role}</p>
                        <p>{member.email}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default TeamList;