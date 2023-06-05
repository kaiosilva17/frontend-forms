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
        const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
        disciplinas.push(dados)
        window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
        push('/disciplinas')
    }

    return (
        <>
            <Pagina titulo='disciplina'>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" {...register('nome')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="curso">
                        <Form.Label>Curso:</Form.Label>
                        <Form.Control type="text" {...register('curso')} />
                    </Form.Group>

                    <div className='text-center'>
                        <Link className='btn btn-danger' href="/disciplinas">
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