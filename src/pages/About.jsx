import React from 'react';
import './About.css';
import avatar from '../assets/user.png'; // Add your image in /src/assets

const About = () => {
  return (
    <div className="comment-container">
      <div className="comment-avatar">
        <img src={avatar} alt="User" />
      </div>
      <div className="comment-content">
        <h3 className="comment-author">Johny Cash</h3>
        <p className="comment-time">3 hours ago</p>
        <p className="comment-text">
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
          ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus...
        </p>
        <div className="comment-actions">
          <span>👍 132</span>
          <span>👎 15</span>
          <span className="reply">↩️ Reply</span>
        </div>
      </div>
    </div>
  );
};

export default About;
