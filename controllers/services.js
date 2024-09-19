const services = require('../models/serviceModel');
const {createValidation} = require('../validators/dataValidators');
const mongoose = require('mongoose');
// API endpoints

// Add a new Service
// POST REQUEST
const addService = async (req,res) => {
    const {error,value} = createValidation(req.body);
    try {
        // validating the data
        if(error){
            return res.status(400).json({message:'Please Provide Valid details.'})
        }
        // creating the service
        const data = new services({
            serviceName: value.serviceName,
            description: value.description,
            price: value.price
        });
        await data.save();
        return res.status(201).json({message:'Service Created Successfully', data});
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error' , error: error.message});
    }
};


// Get all services
// GET REQUEST
const getServices = async (req,res) => {
    const data = await services.find().sort({_id:-1});
    try {
        if(!data){
            return res.status(404).json({message:'No Data found'});
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error' , error: error.message});
    }
};


// update a existing service
// PATCH REQUEST
const updateService = async (req,res) => {
    try {
        const id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message:'Invalid ID format'})
        }
        const {error,value} = createValidation(req.body);
        if(error){
            return res.status(400).json({message:'Please provide valid details'});
        }

        const data = await services.findByIdAndUpdate(id,value,{new:true});
        if(!data){
            return res.status(404).json({message:'No data found with the given id'})
        }
        return res.status(200).json({message:'Service updated successfully' , data});
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error' , error: error.message});
    }
};


// delete a service
// DELETE REQUEST
const deleteService = async (req,res) => {
    try {
        const id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message:'Invalid ID format'})
        }
        const result = await services.deleteOne({_id:id});
        if(!result){
            return res.status(404).json({message:`No Service is found with id:${id}`});
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error' , error: error.message});
    }
};


module.exports = {addService,getServices,updateService,deleteService}