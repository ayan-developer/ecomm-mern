const express = require('express');
const upload = require('../middleware/upload');
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

router.post('/create', upload.single('image'), createProduct);
router.get('/all-products', getProducts);
router.get('/get-product-by-Id/:id', getProductById);
router.put('/update/:id', upload.single('image'), updateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;