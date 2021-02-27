import * as Yup from "yup";

const loginSchemaValidate = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O email precisa ser informado"),
  password: Yup.string().required("A senha precisa ser informada"),
});

export default loginSchemaValidate;
