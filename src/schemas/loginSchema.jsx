import * as yup from "yup";

const emailRules = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no)$/;

 export const loginSchema = yup.object().shape({

   email: yup.string()
   .required("Required")
   .matches(emailRules,{ message: "Email must have @stud.noroff.no"}),

   password: yup.string()
   .required("Required")
   .min(8, "must be at least 8 characters",),

})