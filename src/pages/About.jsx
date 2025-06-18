import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import avatar from '../assets/user.png';
import replyIcon from '../assets/reply.svg';
import thumbsUpIcon from '../assets/thumbsUp.svg';
import thumbsDownIcon from '../assets/thumbsDown.svg';

const About = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const hasFetchedInitial = useRef(false);

  const fetchPosts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/posts?limit=10&skip=${skip}`);
      const data = await res.json();

      setPosts(prev => [...prev, ...data.posts]);
      setHasMore(skip + 10 < data.total);
      setSkip(prev => prev + 10);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetchedInitial.current) {
      hasFetchedInitial.current = true;
      fetchPosts();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading &&
        hasMore
      ) {
        fetchPosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="about-page">
      <div className="comments-container">
        {posts.map(post => (
          <div className="comment-wrapper" key={post.id}>
            <div className="comment-avatar">
              <img src={avatar} alt="User avatar" />
            </div>
            <div className="comment-card">
              <h3 className="comment-author">User #{post.userId}</h3>
              <p className="comment-time">{Math.floor(Math.random() * 23) + 1} hours ago</p>
              <p className="comment-text">{post.body}</p>
              <div className="comment-actions">
                <span className="icon-text">
                  <img src={thumbsUpIcon} alt="Thumbs up" className="icon" />
                  {Math.floor(Math.random() * 200)}
                </span>
                <span className="icon-text">
                  <img src={thumbsDownIcon} alt="Thumbs down" className="icon" />
                  {Math.floor(Math.random() * 50)}
                </span>
                <span className="reply icon-text">
                  <img src={replyIcon} alt="Reply" className="icon" />
                  Reply
                </span>
              </div>
            </div>
          </div>
        ))}
        {loading && <p style={{ textAlign: 'center', marginTop: '1rem' }}>Loading...</p>}
      </div>
    </div>
  );
};

export default About;
