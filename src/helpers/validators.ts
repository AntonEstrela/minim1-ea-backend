import Joi, { ValidationResult } from '@hapi/joi';

module Validators {
    // Register
    export const registerValidator = (data: any) => {
        console.log(data);
        const schema = Joi.object({
            Username: Joi.string()
                .min(6).required(),
            Email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required(),
            Password: Joi.string()
                .min(6).required()
        });
        return schema.validate(data); 
    }
    
    // Login
    export const loginValidator = (data: any) => {
        const schema = Joi.object({
            Username: Joi.string()
            .min(6).required(),
            Password: Joi.string()
            .min(6).required()
        });
        return schema.validate(data);
    }

}
export default Validators;
