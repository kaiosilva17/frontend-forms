import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave, AiOutlineDoubleLeft } from 'react-icons/ai'
import cursoValidator from '../../validators/cursoValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        console.log(dados)
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        push('/cursos')
    }



    return (
        <>
            <Pagina titulo='Curso'>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} />
                        {
                            errors.nome &&
                            <small className='text-danger'>{errors.nome.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="duracao">
                        <Form.Label>Duração:</Form.Label>
                        <Form.Control isInvalid={errors.duracao} type="text" {...register('duracao', cursoValidator.duracao)} />
                        {
                            errors.duracao &&
                            <small className='text-danger'>{errors.duracao.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="modalidade">
                        <Form.Label>Modalidade:</Form.Label>
                        <Form.Control isInvalid={errors.modalidade} type="text" {...register('modalidade', cursoValidator.modalidade)} />
                        {
                            errors.modalidade &&
                            <small className='text-danger'>{errors.modalidade.message}</small>
                        }
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