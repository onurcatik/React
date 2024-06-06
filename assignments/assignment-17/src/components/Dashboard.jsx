import React, { useState, useMemo, useCallback } from "react";
import SocialMediaCard from "./SocialMediaCard";
import Metrics from "./Metrics";
import { mockSocialMediaData } from "../mockSocialMediaData";

const Dashboard = () => {
  const [socialMediaData, setSocialMediaData] = useState(mockSocialMediaData);

  const totalLikes = useMemo(() => {
    return socialMediaData.reduce((total, account) => total + account.likes, 0);
  }, [socialMediaData]);

  const handleUpdateLikes = useCallback((accountId, newLikes) => {
    setSocialMediaData((prevData) =>
      prevData.map((account) =>
        account.id === accountId ? { ...account, likes: newLikes } : account
      )
    );
  }, []);

  return (
    <div className="dashboard">
      <h1>Social Media Dashboard</h1>
      <div className="cards-container">
        {socialMediaData.map((account) => (
          <SocialMediaCard
            key={account.id}
            account={account}
            onUpdateLikes={handleUpdateLikes}
          />
        ))}
      </div>
      <Metrics totalLikes={totalLikes} />
    </div>
  );
};

export default Dashboard;
