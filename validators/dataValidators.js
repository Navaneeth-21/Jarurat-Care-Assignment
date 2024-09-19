const joi = require('joi');

const createValidation  = (data)=>{
    const schema = joi.object({
        serviceName : joi.string().required(),
        description : joi.string().required(),
        price : joi.number().required(),
    });

    return schema.validate(data);
};

module.exports = {createValidation};