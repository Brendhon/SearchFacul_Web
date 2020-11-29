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

export { courseSchema }