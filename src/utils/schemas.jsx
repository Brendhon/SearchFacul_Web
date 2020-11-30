import * as yup from 'yup'

const courseSchema = yup.object().shape({

    name: yup.string().required('Informe um nome'),
    duration: yup.string().trim().required('Informe a duração do curso'),
    score: yup.string()
        .length(1, 'Apenas um número inteiro')
        .matches(/[0-5]+/gi, "Apenas números de 0 - 5"),
    description: yup.string().trim().required('Informe uma descrição'),
    titration: yup.string().required('Escolha uma titulação'),
    modality: yup.string().required('Escolha uma modalidade'),

})

const universitySchema = yup.object().shape({

    IES: yup.string().trim().required('Informe um IES da faculdade'),

    telephone: yup.string()
        .matches(/^[0-9]{8,11}$/, "Insira um número de telefone válido")
        .required('Informe um telefone para contato'),

    email: yup.string()
        .email('Deve ser um formato válido')
        .required('Informe um email para contato'),

    uf: yup.string()
        .matches(/^[A-Z]{2,2}$/, "Apenas letras maiúsculas")
        .required('Informe o UF do seu estado'),

    password: yup.string().trim().required('Informe uma senha'),

    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas não coincidem'),
    city: yup.string().trim().required('Informe a cidade'),
    address: yup.string().trim().required('Informe um endereço de referência'),
    site: yup.string().url('Deve estar no formato de Url'),
    category: yup.string().required('Uma categoria deve ser escolhida'),

})

const loginSchema = yup.object().shape({

    email: yup.string()
        .email('Deve ser um formato válido')
        .required('Informe um email'),

    password: yup.string().trim().required('Informe uma senha'),

})

export { courseSchema, universitySchema, loginSchema }