import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().min(3).required("you must enter your name"),
  size: yup.string().required("you must select a size"),
  sauce: yup.string().required("you must select a sauce"),
  instructions: yup.string().max(50),
});

export default formSchema;
