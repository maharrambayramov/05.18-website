import * as yup from "yup";
export const index = yup.object().shape({
  name: yup.string().required(),
  price: yup.string().required(),
});
