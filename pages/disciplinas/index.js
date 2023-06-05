import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { set } from 'react-hook-form'
import { BsTrash, BsFillPlusCircleFill } from 'react-icons/bs'
import { HiPencil } from 'react-icons/hi'


const index = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    setDisciplinas(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('disciplinas')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o resgistro?')) {
      const items = getAll()
      items.splice(id, 1)
      window.localStorage.setItem('disciplinas', JSON.stringify(items))
      setDisciplinas(items)
    }
  }

  return (
    <>
      <Pagina titulo='Disciplinas'>

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
            {disciplinas.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link href={'/disciplinas/' + i}>
                    <HiPencil title='alterar' className='text-primary' />
                  </Link>
                  {''}
                  <BsTrash title='excluir' onClick={() => excluir(i)} className='text-danger' />
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