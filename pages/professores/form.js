import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave, AiOutlineDoubleLeft } from 'react-icons/ai'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        console.log(dados)
        const professores = JSON.parse(window.localStorage.getItem('professores')) || []
        professores.push(dados)
        window.localStorage.setItem('professores', JSON.stringify(professores))
        push('/professores')
    }

    return (
        <>
             <Pagina titulo='Professor'>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" {...register('nome')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cpf">
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control type="text" {...register('cpf')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="matricula">
                        <Form.Label>Matricula:</Form.Label>
                        <Form.Control type="text" {...register('matricula')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="salario">
                        <Form.Label>Salario:</Form.Label>
                        <Form.Control type="text" {...register('salario')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" {...register('email')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="telefone">
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control type="text" {...register('telefone')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cep">
                        <Form.Label>CEP:</Form.Label>
                        <Form.Control type="text" {...register('cep')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="logradouro">
                        <Form.Label>Logradouro:</Form.Label>
                        <Form.Control type="text" {...register('logradouro')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="complemento">
                        <Form.Label>Complemento:</Form.Label>
                        <Form.Control type="text" {...register('complemento')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="numero">
                        <Form.Label>Numero:</Form.Label>
                        <Form.Control type="text" {...register('numero')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="bairro">
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control type="text" {...register('bairro')} />
                    </Form.Group>

                    <div className='text-center'>
                        <Link className='btn btn-danger' href="/professores">
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