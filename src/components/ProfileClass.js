import React from "react";

class Profile extends React.Component {

    render() {
        return (
            <>
                <h2>This is a Profile class.</h2>
                <p>Name: {this.props.name}</p>
            </>
        );
    }

}

export default Profile;