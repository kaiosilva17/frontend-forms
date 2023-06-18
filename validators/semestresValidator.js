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
       

    data_fim: {
        required: 'Campo Obrigatório',
    
    }
    }
}

export default semestresValidator