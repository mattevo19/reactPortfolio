import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <img
          className="rounded-full w-40 m-auto mb-4"
          src="https://res.cloudinary.com/mge19/image/upload/v1642505230/IMG_20191004_082946_039_mixidh.jpg"
          alt="avatar"
        />
        <p className="mb-4">
          I'm a Junior full stack developer currently living in Berlin.
          <br />
          My current tech stack includes React for the Frontend, Rails for the
          Backend, and Heroku for hosting.
          <br />
          When I'm not coding I can usually be found climbing or out exploring
          on my bike.
        </p>
      </div>
    );
  }
}

export default About;
