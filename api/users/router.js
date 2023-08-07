const app = require('express')
const router = app.Router()

const { SignUp, Dummy, Login, allUsers, getUserbyEmail,userbyEmail } = require('./controller')


router.post('/users', Dummy)
router.post('/signup', SignUp)
router.post('/login', Login)
router.get('/getallusers', allUsers)
router.get('/userbyemail/:email', getUserbyEmail)
router.get('/getuserbyemail', userbyEmail) // this is done using query params




module.exports = router