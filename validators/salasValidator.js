const salasValidator = {
    nome: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'O minimo é 3'
        },
        maxLength: {
            value: 12,
            message: 'O máximo é 12'
        },
    },

    capacidade: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 3,
            message: 'O maxim0 é 3'
        },
        min: {
            value: 10,
            message: 'O valor minimo é 10'
        },
        max: {
            value: 70,
            message: 'O valor máximo é 70'
        },
    },

    tipo: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 4,
            message: 'O minim0 é 4'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
    }
}

export default salasValidator