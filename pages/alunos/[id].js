import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave, AiOutlineDoubleLeft } from 'react-icons/ai'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            const id = query.id
            const alunos = JSON.parse(window.localStorage.getItem('alunos'))
            const aluno = alunos[id]

            for (let atributo in aluno) {
                setValue(atributo, aluno[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        console.log(dados)
        const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
        alunos.splice(query.id, 1, dados)
        window.localStorage.setItem('alunos', JSON.stringify(alunos))
        push('/alunos')
    }

    return (
        <>
            <Pagina titulo='Aluno'>
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
                        <Link className='btn btn-danger' href="/alunos">
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