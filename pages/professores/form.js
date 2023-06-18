import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave, AiOutlineDoubleLeft } from 'react-icons/ai'
import professoresValidator from '../../validators/professoresValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    function salvar(dados) {
        console.log(dados)
        const professores = JSON.parse(window.localStorage.getItem('professores')) || []
        professores.push(dados)
        window.localStorage.setItem('professores', JSON.stringify(professores))
        push('/professores')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara))
    }

    return (
        <>
             <Pagina titulo='Professor'>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" {...register('nome', professoresValidator.nome)} />
                        {
                            errors.nome &&
                            <small className='text-danger'>{errors.nome.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cpf">
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control 
                        mask='999.999.999-99' 
                        isInvalid={errors.cpf} 
                        type="text" 
                        {...register('cpf', professoresValidator.cpf)} 
                        onChange={handleChange} />
                        {
                            errors.cpf &&
                            <small className='text-danger'>{errors.cpf.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="matricula">
                        <Form.Label>Matricula:</Form.Label>
                        <Form.Control isInvalid={errors.matricula} type="text" {...register('matricula', professoresValidator.matricula)} />
                        {
                            errors.matricula &&
                            <small className='text-danger'>{errors.matricula.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="salario">
                        <Form.Label>Salario:</Form.Label>
                        <Form.Control isInvalid={errors.salario} type="text" {...register('salario', professoresValidator.salario)} />
                        {
                            errors.salario &&
                            <small className='text-danger'>{errors.salario.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control isInvalid={errors.email} type="text" {...register('email', professoresValidator.email)} />
                        {
                            errors.email &&
                            <small className='text-danger'>{errors.email.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="telefone">
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control 
                        mask='(99) 99999-9999' 
                        isInvalid={errors.telefone} 
                        type="text" 
                        {...register('telefone', professoresValidator.telefone)} 
                        onChange={handleChange} />
                        {
                            errors.telefone &&
                            <small className='text-danger'>{errors.telefone.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cep">
                        <Form.Label>CEP:</Form.Label>
                        <Form.Control 
                        mask='99.999-999' 
                        isInvalid={errors.cep} 
                        type="text" 
                        {...register('cep', professoresValidator.cep)} 
                        onChange={handleChange} />
                        {
                            errors.cep &&
                            <small className='text-danger'>{errors.cep.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="logradouro">
                        <Form.Label>Logradouro:</Form.Label>
                        <Form.Control isInvalid={errors.logradouro} type="text" {...register('logradouro', professoresValidator.logradouro)} />
                        {
                            errors.logradouro &&
                            <small className='text-danger'>{errors.logradouro.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="complemento">
                        <Form.Label>Complemento:</Form.Label>
                        <Form.Control isInvalid={errors.complemento} type="text" {...register('complemento', professoresValidator.complemento)} />
                        {
                            errors.complemento &&
                            <small className='text-danger'>{errors.complemento.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="numero">
                        <Form.Label>Numero:</Form.Label>
                        <Form.Control isInvalid={errors.numero} type="text" {...register('numero', professoresValidator.numero)} />
                        {
                            errors.numero &&
                            <small className='text-danger'>{errors.numero.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="bairro">
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control isInvalid={errors.bairro} type="text" {...register('bairro', professoresValidator.bairro)} />
                        {
                            errors.bairro &&
                            <small className='text-danger'>{errors.bairro.message}</small>
                        }
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