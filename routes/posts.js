const express = require('express');

const router = express.Router();
const Post = require('../models/Post');

//Submit Request 
router.post('/', (req, res) => {
    console.log(req.body);
    const post = new Post({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(errr => {
        res.json({message : errr});
    })
})

//Get all the records
router.get('/', async(req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

// Get Specific Record
router.get('/:postId', async(req, res)=> {
    console.log(req.params.postId);
    try {
        const posts = await Post.findById(req.params.postId);
        res.json(posts);    
    } catch (error) {
        res.json({message: error});
    }
});


// Delete Specific Record
router.delete('/:postId', async(req, res)=> {
    //console.log(req.params.postId);
    try {
        const removePost = await Post.remove({_id: req.params.postId})
        res.json(removePost);    
    } catch (error) {
        res.json({message: error});
    }
});

//Update a post
router.patch('/:postId', async(req, res)=> {
    //console.log(req.params.postId);
    try {
        const updatePost = await Post.updateOne({_id: req.params.postId}, { $set: {firstName: req.body.firstName}});
        res.json(updatePost);    
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;