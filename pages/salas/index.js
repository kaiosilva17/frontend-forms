import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { set } from 'react-hook-form'
import { BsTrash, BsFillPlusCircleFill } from 'react-icons/bs'
import { HiPencil } from 'react-icons/hi'


const index = () => {

  const [salas, setSalas] = useState([])

  useEffect(() => {
    setSalas(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('salas')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o resgistro?')) {
      const items = getAll()
      items.splice(id, 1)
      window.localStorage.setItem('salas', JSON.stringify(items))
      setSalas(items)
    }
  }

  return (
    <>
      <Pagina titulo='Salas'>

        <Link href='/salas/form' className='mb-2 btn btn-primary'>
          <BsFillPlusCircleFill className='me-2' />
          Novo
        </Link>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Capacidade</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {salas.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link href={'/salas/' + i}>
                    <HiPencil title='alterar' className='text-primary' />
                  </Link>
                  {''}
                  <BsTrash title='excluir' onClick={() => excluir(i)} className='text-danger' />
                </td>
                <td>{item.nome}</td>
                <td>{item.capacidade}</td>
                <td>{item.tipo}</td>
              </tr>
            ))}
          </tbody>

        </Table>

      </Pagina>
    </>
  )
}

export default index