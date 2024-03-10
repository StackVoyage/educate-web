import { check, validationResult } from "express-validator";

export const signUpValidator = [
  check("name").trim().not().isEmpty().withMessage("Name is required"),
  check("email").normalizeEmail().isEmail().withMessage("Invalid Email"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 6, max: 12 })
    .withMessage("Password must contain atleast 6 to 12 characters"),
];

export const signInValidator = [
  check("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email is missing")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid Email"),
  check("password").trim().not().isEmpty().withMessage("Password is missing"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(401).json({ error: errors.array[0].msg });
  }
  next();
};
