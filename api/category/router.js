const app = require('express')
const router = app.Router()
const { addCategory, allCategories, CategorybyName, CategorybyId, DeleteCategory, updateCategory } = require('./controller')

router.post('/add-category', addCategory)
router.get('/all-categories', allCategories)
router.get('/categorybyname', CategorybyName) //query
router.get('/categorybyid/:_id', CategorybyId) //params
router.delete('/delete-category', DeleteCategory)
router.put('/update-category', updateCategory)





module.exports = router