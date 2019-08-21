import React, { useState, useEffect } from 'react'

const TeamForm = (props) => {
    let startObject = { name: "", email: "", role: "" };
    if (props.memberToEdit !== undefined) {
        startObject = props.memberToEdit;
    }
    useEffect(() => {
        setTeamMember(startObject);
    }, [startObject])
    const [teamMember, setTeamMember] = useState(startObject);

    const changeTeamMember = (event) => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    };

    const submitTeamMember = (e) => {
        e.preventDefault();
        props.addTeamMember({ ...teamMember, id: Date.now() });
        setTeamMember({ name: "", email: "", role: "" });
    }
    return (
        <div >
            <form className="form" onSubmit={submitTeamMember}>
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder="Name" name="name" value={teamMember.name} onChange={e => changeTeamMember(e)} />
                <label htmlFor="email">Email: </label>
                <input type="email" placeholder="Email" name="email" value={teamMember.email} onChange={e => changeTeamMember(e)} />
                <label htmlFor="role">Role: </label>
                <input type="text" placeholder="Role" name="role" value={teamMember.role} onChange={e => changeTeamMember(e)} />
                <button type="submit">Add Team Member!</button>
            </form>
        </div>
    );
}

export default TeamForm;