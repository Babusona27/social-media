import React, { useEffect } from 'react'
import { Box, Container } from '@mui/material';
import Sidebar from '../components/Sidebar'
import HeaderNew from '../components/HeaderNew';
import Feed from '../components/Feed';
import RightBar from '../components/RightBar';
import Footer from '../components/Footer';
import AddFeed from '../components/AddFeed';
import { useSelector, useDispatch } from 'react-redux';
import { FEED_LIST } from '../Url';
import axios from 'axios';
import { feedList } from '../redux/reducers/FeedListReducer';
const NewsFeed = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.UserReducer.value);
  useEffect(() => {
    axios.get(FEED_LIST, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    }).then((res) => {
      // console.log(res.data.data.feedList);
      dispatch(feedList(res.data.data.feedList));
    }).catch((err) => {
      console.log(err);
    })
  });
  return (
    <>
      <HeaderNew />
      <Container maxWidth="lg" sx={{
        height: "100%",
        padding: {
          xs: "0",
          sm: "0",
          md: "0",
          lg: "0",
        },
      }}>
        <Box sx={{
          display: {
            xs: "grid",
            sm: "grid",
            md: "flex",
            lg: "flex",
          },
          padding: "100px 0 50px"
        }}>
          <Box flex={1} p={"0 10px"}>
            <Sidebar />
          </Box>
          <Box flex={2} p={"0 10px"} >
            <AddFeed />
            <Box>
              <Feed />
            </Box>
          </Box>
          <Box flex={0.5} p={"0 10px"}>
            <RightBar />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default NewsFeed