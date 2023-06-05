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
            const semestres = JSON.parse(window.localStorage.getItem('semestres'))
            const semestre = semestres[id]

            for (let atributo in semestre) {
                setValue(atributo, semestre[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        console.log(dados)
        const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
        semestres.splice(query.id, 1, dados)
        window.localStorage.setItem('semestres', JSON.stringify(semestres))
        push('/semestres')
    }

    return (
        <>
            <Pagina titulo='Semestre'>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" {...register('nome')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="data_inicio">
                        <Form.Label>Data Inicio:</Form.Label>
                        <Form.Control type="text" {...register('data_inicio')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="data_fim">
                        <Form.Label>Data Fim:</Form.Label>
                        <Form.Control type="text" {...register('data_fim')} />
                    </Form.Group>

                    <div className='text-center'>
                        <Link className='btn btn-danger' href="/semestres">
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