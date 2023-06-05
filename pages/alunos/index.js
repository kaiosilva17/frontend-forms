import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { set } from 'react-hook-form'
import { BsTrash, BsFillPlusCircleFill } from 'react-icons/bs'
import { HiPencil } from 'react-icons/hi'


const index = () => {

  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    setAlunos(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('alunos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o resgistro?')) {
      const items = getAll()
      items.splice(id, 1)
      window.localStorage.setItem('alunos', JSON.stringify(items))
      setAlunos(items)
    }
  }

  return (
    <>
      <Pagina titulo='Alunos'>

        <Link href='/alunos/form' className='mb-2 btn btn-primary'>
          <BsFillPlusCircleFill className='me-2' />
          Novo
        </Link>

        <Table striped bordered hover>
          <thead>
            <tr>
            <th>#</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Matricula</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>CEP</th>
              <th>Logradouro</th>
              <th>Complemento</th>
              <th>Numero</th>
              <th>Bairro</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link href={'/alunos/' + i}>
                    <HiPencil title='alterar' className='text-primary' />
                  </Link>
                  {''}
                  <BsTrash title='excluir' onClick={() => excluir(i)} className='text-danger' />
                </td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.matricula}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>{item.cep}</td>
                <td>{item.logradouro}</td>
                <td>{item.complemento}</td>
                <td>{item.numero}</td>
                <td>{item.bairro}</td>
              </tr>
            ))}
          </tbody>

        </Table>

      </Pagina>
    </>
  )
}

export default index