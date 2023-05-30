import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { set } from 'react-hook-form'
import { BsTrash, BsFillPlusCircleFill } from 'react-icons/bs'
import { HiPencil } from 'react-icons/hi'


const index = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/disciplinas').then(resultado => {
      setDisciplinas(resultado.data)
    })
  }

  function excluir(id) {
    axios.delete('/api/disciplinas/' + id)
  }

  return (
    <>
      <Pagina titulo='disciplinas'>

        <Link href='/disciplinas/form' className='mb-2 btn btn-primary'>
          <BsFillPlusCircleFill className='me-2' />
          Novo
        </Link>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {disciplinas.map(item => (
              <tr key={item.id}>
                <td>
                  <Link href={'/disciplinas/' + item.id}>
                    <HiPencil title='alterar' className='text-primary' />
                  </Link>
                  {''}
                  <BsTrash title='excluir' onClick={() => excluir(item.id)} className='text-danger' />
                </td>
                <td>{item.nome}</td>
                <td>{item.curso}</td>

              </tr>
            ))}
          </tbody>

        </Table>

      </Pagina>
    </>
  )
}

export default index