import React from 'react'

const TeamForm = (props) => {
    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder="Name" name="name" />
                <label htmlFor="email">Email: </label>
                <input type="text" placeholder="Email" name="email" />
                <label htmlFor="role">Role: </label>
                <input type="text" placeholder="Role" name="role" />
                <button type="submit">Add Team Member!</button>
            </form>
        </div>
    );
}

export default TeamForm;