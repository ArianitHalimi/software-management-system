import * as Joi from 'joi'

import { ALPHABET_CHARACTERS_PATTERN } from '../_helpers/patterns'
import Validator from './validator.schema'

export class RegisterValidator {

    private static validationSchema: Joi.ObjectSchema = Joi.object({
        firstName: Joi.string()
            .required()
            .pattern(ALPHABET_CHARACTERS_PATTERN)
            .min(2)
            .max(13)
            .messages({
                'string.base': `Firstname should be a string`,
                'string.empty': `Firstname is required`,
                'string.pattern.base': `Firstname should only contain letters`,
                'any.required': `Firstname is required`,
                'string.min': `Firstname length must be greater than 2`,
                'string.max': `Firstname length must be less than 13`
            }),
        lastName: Joi.string()
            .required()
            .pattern(ALPHABET_CHARACTERS_PATTERN)
            .min(2)
            .max(13)
            .messages({
                'string.base': `Lastname should be a string`,
                'string.empty': `Lastname is required`,
                'string.pattern.base': `Lastname should only contain letters`,
                'any.required': `Lastname is required`,
                'string.min': `Lastname length must be greater than 2`,
                'string.max': `Lastname length must be less than 13`
            }),
        email: Joi.string()
            .required()
            .email()
            .messages({
                'string.empty': `Email is required`,
                'string.email': `Invalid email`,
                'any.required': `Email is required`
            }),
        password: Joi.string()
            .required()
            .min(8)
            .max(64)
            .messages({
                'string.base': `Password should be a string`,
                'string.empty': `Password is required`,
                'any.required': `Password is required`,
                'string.min': `Password length must be greater than 8`,
                'string.max': `Password length must be less than 64`
            })
    })

    public static validate(){
        return Validator.validate(this.validationSchema);
    }
}