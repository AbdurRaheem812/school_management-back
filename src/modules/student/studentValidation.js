import { body } from "express-validator";

export const createStudentValidation = [
  body("userId")
    .notEmpty()
    .withMessage("User ID is required")
    .isInt()
    .withMessage("User ID must be an integer"),
  
  body("rollNumber")
    .notEmpty()
    .withMessage("Roll number is required")
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("Roll number must be between 1 and 50 characters"),
  
  body("gender")
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(["MALE", "FEMALE", "OTHER"])
    .withMessage("Invalid gender"),
  
  body("address")
    .notEmpty()
    .withMessage("Address is required")
    .trim()
    .isLength({ min: 5, max: 255 })
    .withMessage("Address must be between 5 and 255 characters"),
  
  body("dateOfBirth")
    .optional()
    .isISO8601()
    .withMessage("Invalid date format"),
  
  body("phoneNumber")
    .optional()
    .trim()
    .matches(/^[0-9+\-\s()]+$/)
    .withMessage("Invalid phone number format"),
];

export const updateStudentValidation = [
  body("rollNumber")
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("Roll number must be between 1 and 50 characters"),
  
  body("gender")
    .optional()
    .isIn(["MALE", "FEMALE", "OTHER"])
    .withMessage("Invalid gender"),
  
  body("address")
    .optional()
    .trim()
    .isLength({ min: 5, max: 255 })
    .withMessage("Address must be between 5 and 255 characters"),
  
  body("dateOfBirth")
    .optional()
    .isISO8601()
    .withMessage("Invalid date format"),
  
  body("phoneNumber")
    .optional()
    .trim()
    .matches(/^[0-9+\-\s()]+$/)
    .withMessage("Invalid phone number format"),
];