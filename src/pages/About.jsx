import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import avatar from '../assets/user.png';
import replyIcon from '../assets/reply.svg';
import thumbsUpIcon from '../assets/thumbsUp.svg';
import thumbsDownIcon from '../assets/thumbsDown.svg';
import MoreVert from '@mui/icons-material/MoreVert';



const About = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const hasFetchedInitial = useRef(false);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [isClamped, setIsClamped] = useState({});
  const reviewRefs = useRef([]);


const fetchPosts = async () => {
  if (loading || !hasMore) return;

  setLoading(true); 

  try {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const res = await fetch(`https://dummyjson.com/posts?limit=10&skip=${skip}`);
    const data = await res.json();

    const enrichedPosts = data.posts.map(post => ({
      ...post,
      hoursAgo: Math.floor(Math.random() * 23) + 1,
      likes: Math.floor(Math.random() * 200),
      dislikes: Math.floor(Math.random() * 50)
    }));

    setPosts(prev => [...prev, ...enrichedPosts]);
    setHasMore(skip + 10 < data.total);
    setSkip(prev => prev + 10);
  } catch (err) {
    console.error("Error fetching posts:", err);
  } finally {
    setLoading(false);
  }
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<i key={i} className="bi bi-star-fill star-icon"></i>);
    } else if (rating >= i - 0.5) {
      stars.push(<i key={i} className="bi bi-star-half star-icon"></i>);
    } else {
      stars.push(<i key={i} className="bi bi-star star-icon"></i>);
    }
  }
  return stars;
};
const toggleReviewExpansion = (idx) => {
  setExpandedReviews(prev => ({
    ...prev,
    [idx]: !prev[idx]
  }));
};

useEffect(() => {
  requestAnimationFrame(() => {
    reviewRefs.current.forEach((ref, idx) => {
      if (ref) {
        const computed = getComputedStyle(ref);
        const lineHeight = parseFloat(computed.lineHeight);

        if (!lineHeight || isNaN(lineHeight)) return;

        const lines = ref.scrollHeight / lineHeight;

        if (lines > 5) {
          setIsClamped(prev => ({ ...prev, [idx]: true }));
        }
      }
    });
  });
}, []);

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
    <div className="review-summary-section">
<h4 className="course-rating-title">
  <i className="bi bi-star-fill rating-star"></i>
  <span className="rating-text"><strong>4.2 course rating · 2K ratings</strong></span>
</h4>

      <div className="review-grid">
{[
  {
    initials: 'GK',
    name: 'Gauri K.',
    time: '3 weeks ago',
    stars: 5,
    text: 'Good digital marketing and copywriting course. Easy to understand thank.',
  },
  {
    initials: 'KT',
    name: 'Kanishkha T.',
    time: 'a month ago',
    stars: 5,
    text: 'it was really awesome learned lot of things',
  },
  {
    initials: 'AB',
    name: 'Avik B.',
    time: 'a month ago',
    stars: 4,
    text: "Apart from the fact that some of the things were a little repetitive and there were a little too many assignments, the course is really enriching and fills a marketing aspirant with so much confidence. I would have loved to have had a more hands on learning experience.",
  },
  {
    initials: 'S',
    name: 'Spherical',
    time: '2 months ago',
    stars: 3.5,
    text: "So far, things too generic that we all know, and the first 4 videos, too silly... I'm sorry, but I don't need so many welcome videos.",
  },
].map((review, idx) => (
  <div className="review-card" key={idx}>
    <div className="review-header">
      <div className="review-avatar">{review.initials}</div>
      <div className="review-info">
        <p className="review-name">{review.name}</p>
        <div className="stars-time-row">
          <div className="stars">{renderStars(review.stars)}</div>
          <span>{review.time}</span>
        </div>
      </div>
      <MoreVert style={{ cursor: 'pointer' }} />
    </div>

  <div
    ref={el => (reviewRefs.current[idx] = el)}
    className={`review-text ${expandedReviews[idx] ? 'expanded' : 'clamped'}`}
  >
    {review.text}
  </div>
  {isClamped[idx] && (
    <button
      className="show-more-btn"
      onClick={() => toggleReviewExpansion(idx)}
    >
      {expandedReviews[idx] ? 'Show less' : 'Show more'}
    </button>
  )}

          </div>
        ))}
      </div>
    </div>

    <div className="user-posts-section">
      <h4><strong>User Posts</strong></h4>
      <div className="comments-container">
        {posts.map(post => (
          <div className="comment-wrapper" key={post.id}>
            <div className="comment-avatar">
              <img src={avatar} alt="User avatar" />
            </div>
            <div className="comment-card">
              <h3 className="comment-author">User #{post.userId}</h3>
              <p className="comment-time">
              {post.hoursAgo ? `${post.hoursAgo} hours ago` : 'Just now'}
              </p>
              <p className="comment-text">{post.body}</p>
              <div className="comment-actions">
                <span className="icon-text">
                  <img src={thumbsUpIcon} alt="Thumbs up" className="icon" />
                  {post.likes}
                </span>
                <span className="icon-text">
                  <img src={thumbsDownIcon} alt="Thumbs down" className="icon" />
                  {post.dislikes}
                </span>
                <span className="reply icon-text">
                  <img src={replyIcon} alt="Reply" className="icon" />
                  Reply
                </span>
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        )}
      </div>
    </div>
  </div>
);

};

export default About;
