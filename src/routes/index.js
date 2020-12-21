const express = require('express');
const router = express.Router();

const Product = require('../models/products')

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.render('index', {
       products 
    });
});

router.post('/add', async (req, res)=> {
    
    const products = new Product(req.body);
    await products.save();
    res.redirect('/');
});

router.get('/turn/:id', async (req, res) => {
    const { id }= req.params;
    const products = await Product.findById(id);
    products.status = !products.status;
    await products.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
    const { id }= req.params;
    const products = await Product.findById(id);
    res.render('edit', {
        products
    });
});

router.post('/update/:id', async (req, res) => {
    const { id }= req.params;
    await Product.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) =>{
    const { id } = req.params;
    await Product.remove({_id: id});
    res.redirect('/');
});

module.exports = router;