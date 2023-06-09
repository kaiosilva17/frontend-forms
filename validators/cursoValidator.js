const cursoValidator = {
    nome: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'O minimo é 3'
        },
        maxLength: {
            value: 10,
            message: 'O máximo é 10'
        },
    },

    duracao: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 3,
            message: 'O maximo é 3'
        },
        min: {
            value: 2.5,
            message: 'O valor minimo é 2.5'
        },
        max: {
            value: 10,
            message: 'O valor máximo é 10'
        },
    },

    modalidade: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
        minLength: {
            value: 4,
            message: 'O minimo é 4'
        }
    }
}

export default cursoValidator