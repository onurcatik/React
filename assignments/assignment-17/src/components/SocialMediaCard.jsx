import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const SocialMediaCard = ({ account, onUpdateLikes }) => {
  const { id, name, likes, icon } = account;
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleLike = () => {
    const newLikes = currentLikes + 1;
    setCurrentLikes(newLikes);
    onUpdateLikes(id, newLikes);
  };

  // Map social media name to appropriate icon component
  const socialMediaIcons = {
    facebook: <FaFacebook size="40px" color="#3b5998" />,
    twitterX: <FaXTwitter size="40px" color="#1DA1F2" />,
    instagram: <FaInstagram size="40px" color="#E4405F" />,
  };

  const socialMediaIcon = socialMediaIcons[icon] || null;

  return (
    <div className="social-media-card">
      <h3>{name}</h3>
      <div className="icon-container center-icon">{socialMediaIcon}</div>
      <p>Likes: {currentLikes}</p>
      <button className="custom-btn btn" onClick={handleLike}>
        <CiHeart size="20px" color="red" />
      </button>
    </div>
  );
};

export default SocialMediaCard;
