import React, { useEffect } from "react";
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
import Faq from "../pages/Faq";
import Terms from "../pages/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy";

import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { logOut } from '../redux/reducers/UserReducer'

const Navigation = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.UserReducer.value);
   console.log("userData", userData);

  
  useEffect(() => { 
    const checkTokenExpiration = () => {
      const token = userData.token;
    
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
        
    
        if (decodedToken.exp < currentTime) {
          // Logout user
          dispatch(logOut());
          window.location.href = "/";
        }
      } else {
        // Token not found, handle accordingly (e.g., redirect to login)
      }
    };
    checkTokenExpiration();
  }, [userData.token,dispatch]);

  if (userData === null) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/friendlist" element={<FriendList />} />
          <Route path="/nearbypeople" element={<NearbyPeople />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/imagefeed" element={<ImageFeed />} />
          <Route path="/videofeed" element={<VideoFeed />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/timelineabout" element={<TimelineAbout />} />
          <Route path="/timelinefriend" element={<TimelineFriend />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    );
  }
};

export default Navigation;
