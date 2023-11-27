const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

//user API
router.post('/register', userController.register);
router.post('/login', userController.login);
//send user friend request
router.post('/send-friend-request', [authMiddleware.isAuth], userController.sendFriendRequest);
//friend request list
router.get('/friend-request-list', [authMiddleware.isAuth], userController.friendRequestList);
//frind request status update
router.put('/friend-request-status-update', [authMiddleware.isAuth], userController.friendRequestStatusUpdate);

module.exports = router;