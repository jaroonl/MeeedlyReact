import React from 'react';
import './About.css';
import avatar from '../assets/user.png';
import replyIcon from '../assets/reply.svg';
import thumbsUpIcon from '../assets/thumbsUp.svg';
import thumbsDownIcon from '../assets/thumbsDown.svg';

const About = () => {
  return (
    <div className="about-page">
      <div className="comment-wrapper">
        <div className="comment-avatar">
          <img src={avatar} alt="User avatar" />
        </div>
        <div className="comment-card">
          <h3 className="comment-author">Johny Cash</h3>
          <p className="comment-time">3 hours ago</p>
          <p className="comment-text">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis...
          </p>
          <div className="comment-actions">
            <span className="icon-text">
              <img src={thumbsUpIcon} alt="Thumbs up" className="icon" />
              132
            </span>
            <span className="icon-text">
              <img src={thumbsDownIcon} alt="Thumbs down" className="icon" />
              15
            </span>
            <span className="reply icon-text">
              <img src={replyIcon} alt="Reply" className="icon" />
              Reply
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
