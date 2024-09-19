const express = require('express');
const {addService, getServices, updateService, deleteService} = require('../controllers/services');
const router = express.Router();


router.post('/addservice' , addService);
router.get('/getservices', getServices);
router.patch('/updateservice/:id' , updateService);
router.delete('/deleteservice/:id' , deleteService);

module.exports = router;
