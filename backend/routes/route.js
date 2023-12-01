const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const messageController = require('../controllers/messageController');
const feedController = require('../controllers/feedController');
const fileUploadController = require('../controllers/fileUploadController');

//user API
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', [authMiddleware.isAuth], userController.profile);
router.put('/update-profile', [authMiddleware.isAuth], userController.updateProfile);
router.get('/user-list', [authMiddleware.isAuth], userController.userList);
//send user friend request
router.post('/send-friend-request', [authMiddleware.isAuth], userController.sendFriendRequest);
//friend request list
router.get('/friend-request-list', [authMiddleware.isAuth], userController.friendRequestList);
//friend request status update
router.put('/friend-request-status-update', [authMiddleware.isAuth], userController.friendRequestStatusUpdate);
//friend list
router.get('/friend-list', [authMiddleware.isAuth], userController.friendList);
//friend delete
router.delete('/friend-delete', [authMiddleware.isAuth], userController.friendDelete);
//follow user
router.post('/follow-user', [authMiddleware.isAuth], userController.followUser);
//follow user list
router.get('/follow-user-list', [authMiddleware.isAuth], userController.followUserList);
//send message
router.post('/send-message', [authMiddleware.isAuth], messageController.sendMessage);
//message list
router.get('/message-list', [authMiddleware.isAuth], messageController.messageList);
//feed API
router.post('/create-feed', [authMiddleware.isAuth], feedController.createFeed);
//feed list
router.get('/feed-list', [authMiddleware.isAuth], feedController.feedList);
//reacting on feed
router.post('/react-on-feed', [authMiddleware.isAuth], feedController.reactOnFeed);
//comment on feed
router.post('/comment-on-feed', [authMiddleware.isAuth], feedController.commentOnFeed);
//reply on comment
router.post('/reply-on-comment', [authMiddleware.isAuth], feedController.replyOnComment);
//tag friend on feed
router.post('/tag-friend-on-feed', [authMiddleware.isAuth], feedController.tagFriendOnFeed);
//file upload
router.post('/file-upload', [authMiddleware.isAuth], fileUploadController.fileUpload);
module.exports = router;