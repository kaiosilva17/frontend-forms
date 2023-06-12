const alunosValidator = {
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
        pattern: {
            value: /^(\d{3}\.){2}\d{3}\-\d{2}$/,
            message: "cpf invalido, exepmlo: 251.251.251-25"
        }
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

    email: {
        required: 'Campo Obrigatório',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "email invalido, exemplo: iesb@gmail.com"
        }
    },

    telefone: {
        required: 'Campo Obrigatório',
        pattern: {
            value: /^\d{4,5}\-\d{4}$/,
            message: "telefone invalido, exemplo: 99999-9999"
        }
    },

    cep: {
        required: 'Campo Obrigatório',
        pattern: {
            value: /^[0-9]{5}-[0-9]{3}$/,
            message: 'cep invalido, exemplo: 12345-123'
        },
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
            message: 'O minimo é 999'
        }
    },

    bairro: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 10,
            message: 'O minimo é 10'
        },
        maxLength: {
            value: 25,
            message: 'O máximo é 25'
        },
    }

}

export default alunosValidator