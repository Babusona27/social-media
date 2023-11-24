import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import ChatRoom from "../pages/ChatRoom";
import FriendList from "../pages/FriendList";
import NearbyPeople from "../pages/NearbyPeople";
import EditProfile from "../pages/EditProfile";
import ImageFeed from "../pages/ImageFeed";
import NewsFeed from "../pages/NewsFeed";
import VideoFeed from "../pages/VideoFeed";
import Timeline from "../pages/Timeline";
import TimelineAbout from "../pages/TimelineAbout";
import TimelineFriend from "../pages/TimelineFriend";
import Page404 from "../pages/Page404";

const Navigation = () => {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/chatroom" element={<ChatRoom />} />
            <Route path="/friendlist" element={<FriendList />} />
            <Route path="/nearbypeople" element={<NearbyPeople />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/imagefeed" element={<ImageFeed />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
            <Route path="/videofeed" element={<VideoFeed />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/timelineabout" element={<TimelineAbout />} />
            <Route path="/timelinefriend" element={<TimelineFriend />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
        </Router>
  )
};

export default Navigation;
