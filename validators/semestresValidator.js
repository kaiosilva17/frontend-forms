const semestresValidator = {
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

    data_inicio: {
        required: 'Campo Obrigatório',
        pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: 'data invalida, exemplo: 10/10/2023'
        },
    },

    data_fim: {
        required: 'Campo Obrigatório',
        pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: 'data invalida, exemplo: 10/10/2023'
        },
    }
}

export default semestresValidator