const express = require('express');
const upload = require('../middleware/upload');
const authMiddleware = require('../middleware/authMiddleware');
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

router.post('/create', authMiddleware, upload.single('image'), createProduct);
router.get('/all-products',  getProducts);
router.get('/get-product-by-Id/:id', getProductById);
router.put('/update/:id', authMiddleware, upload.single('image'), updateProduct);
router.delete('/delete/:id', authMiddleware, deleteProduct);

module.exports = router;