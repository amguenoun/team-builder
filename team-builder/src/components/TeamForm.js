import React, { useState } from 'react'

const TeamForm = (props) => {
    const [teamMember, setTeamMember] = useState({ name: "", email: "", role: "" });

    const changeTeamMember = (event) => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    };
    console.log(teamMember);
    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder="Name" name="name" onChange={e => changeTeamMember(e)} />
                <label htmlFor="email">Email: </label>
                <input type="email" placeholder="Email" name="email" onChange={e => changeTeamMember(e)} />
                <label htmlFor="role">Role: </label>
                <input type="text" placeholder="Role" name="role" onChange={e => changeTeamMember(e)} />
                <button type="submit">Add Team Member!</button>
            </form>
        </div>
    );
}

export default TeamForm;