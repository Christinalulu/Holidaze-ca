import * as yup from "yup";

const emailRules = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no)$/;

 export const signUpSchema = yup.object().shape({
   name: yup.string()
   .min(3, "username must be at least 3 characters", )
   .required('Required'),
   
   email: yup.string()
   .required("Required")
   .matches(emailRules,{ message: "Email must have @stud.noroff.no"}),

  
   password: yup.string()
   .required("Required")
   .min(8, "must be at least 8 characters",),

   confirmPassword: yup.string()
   .oneOf([yup.ref('password'), null], 'password must match')
   .required("Required"),

   venueManager: yup.boolean()
   .oneOf([false], "Become a Host")
   .optional("optional")

})
