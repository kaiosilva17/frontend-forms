import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave, AiOutlineDoubleLeft } from 'react-icons/ai'
import salasValidator from '../../validators/salasValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        console.log(dados)
        const salas = JSON.parse(window.localStorage.getItem('salas')) || []
        salas.push(dados)
        window.localStorage.setItem('salas', JSON.stringify(salas))
        push('/salas')
    }

    return (
        <>
            <Pagina titulo='Sala'>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" {...register('nome', salasValidator.nome)} />
                        {
                            errors.nome &&
                            <small className='text-danger'>{errors.nome.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="capacidade">
                        <Form.Label>Capacidade:</Form.Label>
                        <Form.Control isInvalid={errors.capacidade} type="text" {...register('capacidade', salasValidator.capacidade)} />
                        {
                            errors.capacidade &&
                            <small className='text-danger'>{errors.capacidade.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tipo">
                        <Form.Label>Tipo:</Form.Label>
                        <Form.Control isInvalid={errors.tipo} type="text" {...register('tipo', salasValidator.tipo)} />
                        {
                            errors.tipo &&
                            <small className='text-danger'>{errors.tipo.message}</small>
                        }
                    </Form.Group>

                    <div className='text-center'>
                        <Link className='btn btn-danger' href="/salas">
                            <AiOutlineDoubleLeft className="me-2" />
                            Voltar
                        </Link>
                        <Button className="ms-2" variant="success" onClick={handleSubmit(salvar)}>
                            <AiFillSave className='me-2' />
                            Salvar
                        </Button>
                    </div>
                </Form>
            </Pagina>
        </>
    )
}

export default form