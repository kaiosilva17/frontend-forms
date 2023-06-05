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
            const salas = JSON.parse(window.localStorage.getItem('salas'))
            const sala = salas[id]

            for (let atributo in sala) {
                setValue(atributo, sala[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        console.log(dados)
        const salas = JSON.parse(window.localStorage.getItem('salas')) || []
        salas.splice(query.id, 1, dados)
        window.localStorage.setItem('salas', JSON.stringify(salas))
        push('/salas')
    }

    return (
        <>
           <Pagina titulo='Sala'>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" {...register('nome')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="capacidade">
                        <Form.Label>Capacidade:</Form.Label>
                        <Form.Control type="text" {...register('capacidade')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tipo">
                        <Form.Label>Tipo:</Form.Label>
                        <Form.Control type="text" {...register('tipo')} />
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