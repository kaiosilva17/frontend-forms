import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave, AiOutlineDoubleLeft } from 'react-icons/ai'
import semestresValidator from '../../validators/semestresValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    function salvar(dados) {
        console.log(dados)
        const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
        semestres.push(dados)
        window.localStorage.setItem('semestres', JSON.stringify(semestres))
        push('/semestres')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara))
    }

    return (
        <>
            <Pagina titulo='Semestre'>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" {...register('nome', semestresValidator.nome)} />
                        {
                            errors.nome &&
                            <small className='text-danger'>{errors.nome.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="data_inicio">
                        <Form.Label>Data Inicio:</Form.Label>
                        <Form.Control 
                        mask='99/99/9999'
                        isInvalid={errors.data_inicio} 
                        type="text" 
                        {...register('data_inicio', semestresValidator.data_inicio)} 
                        onChange={handleChange} />
                        {
                            errors.data_inicio &&
                            <small className='text-danger'>{errors.data_inicio.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="data_fim">
                        <Form.Label>Data Fim:</Form.Label>
                        <Form.Control 
                        mask='99/99/9999'
                        isInvalid={errors.data_fim} 
                        type="text" 
                        {...register('data_fim', semestresValidator.data_fim)} 
                        onChange={handleChange}  />
                        {
                            errors.data_fim &&
                            <small className='text-danger'>{errors.data_fim.message}</small>
                        }
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