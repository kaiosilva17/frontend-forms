import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { set } from 'react-hook-form'
import { BsTrash } from 'react-icons/bs'

const index = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }

  function excluir(id) {
    const items = getAll()
    items.splice(id, 1)
    window.localStorage.setItem('cursos', JSON.stringify(items))
    setCursos(items)
  }

  return (
    <>
      <Pagina titulo='Cursos'>

        <Link href='/cursos/form' className='mb-2 btn btn-primary'>
          Novo
        </Link>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Duracao</th>
              <th>Modalidade</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((item, i) => (
              <tr key={i}>
                <td><BsTrash onClick={() => excluir(i)} className='text-danger' /></td>
                <td>{item.nome}</td>
                <td>{item.duracao}</td>
                <td>{item.modalidade}</td>
              </tr>
            ))}
          </tbody>

        </Table>

      </Pagina>
    </>
  )
}

export default index