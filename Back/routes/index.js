import express from "express"
import auth from './auth.js'
import users from './users.js'
import posts from './posts.js'

const router = express();


/* Auth Routes */

router.use('/auth', auth);


/* Users Routes */

router.use('/users', users)
router.use('/posts', posts)



export default router;