const professoresValidator = {

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

    cpf: {
        required: 'Campo Obrigatório',
        
    },

    matricula: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 11,
            message: 'O máximo é 11'
        },
        minLength: {
            value: 5,
            message: 'O minimo é 5'
        },
    },

    salario: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 7,
            message: 'O máximo é 7'
        },
        minLength: {
            value: 3,
            message: 'O minimo é 3'
        },
    },

    email: {
        required: 'Campo Obrigatório',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "email invalido, exemplo: iesb@gmail.com"
        }
    },

    telefone: {
        required: 'Campo Obrigatório',
       
    },

    cep: {
        required: 'Campo Obrigatório',
       
    },

    logradouro: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 10,
            message: 'O minimo é 10'
        },
        maxLength: {
            value: 45,
            message: 'O máximo é 45'
        },
    },

    complemento: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 50,
            message: 'O máximo é 50'
        },
        minLength: {
            value: 15,
            message: 'O minimo é 15'
        },
    },

    numero: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 3,
            message: 'O máximo é 3'
        },
        min: {
            value: 1,
            message: 'O minimo é 1'
        },
        max: {
            value: 999,
            message: 'O maximo é 999'
        }
    },

    bairro: {
        required: 'Campo Obrigatório',
        minength: {
            value: 10,
            message: 'O minimo é 10'
        },
        maxLength: {
            value: 25,
            message: 'O máximo é 25'
        },
    }

}

export default professoresValidator