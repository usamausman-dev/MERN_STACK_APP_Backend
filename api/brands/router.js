const app = require('express')
const router = app.Router()

const { AddBrand, getAllBrands, brandByID, updateBrand, deleteBrand } = require('./controller')

router.post('/add-brand', AddBrand)
router.get('/brandbyid', brandByID)
router.get('/get-all-brands', getAllBrands)
router.put('update-brand', updateBrand)
router.delete('delete-brand', deleteBrand)

module.exports = router