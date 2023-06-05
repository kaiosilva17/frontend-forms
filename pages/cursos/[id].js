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
            const cursos = JSON.parse(window.localStorage.getItem('cursos'))
            const curso = cursos[id]

            for (let atributo in curso) {
                setValue(atributo, curso[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        console.log(dados)
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.splice(query.id, 1, dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        push('/cursos')
    }

    return (
        <>
            <Pagina titulo='Curso'>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" {...register('nome')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="duracao">
                        <Form.Label>Duração:</Form.Label>
                        <Form.Control type="text" {...register('duracao')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="modalidade">
                        <Form.Label>Modalidade:</Form.Label>
                        <Form.Control type="text" {...register('modalidade')} />
                    </Form.Group>

                    <div className='text-center'>
                        <Link className='btn btn-danger' href="/cursos">
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