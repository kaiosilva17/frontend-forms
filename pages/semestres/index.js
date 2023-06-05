import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { set } from 'react-hook-form'
import { BsTrash, BsFillPlusCircleFill } from 'react-icons/bs'
import { HiPencil } from 'react-icons/hi'


const index = () => {

  const [semestres, setSemestres] = useState([])

  useEffect(() => {
    setSemestres(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('semestres')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o resgistro?')) {
      const items = getAll()
      items.splice(id, 1)
      window.localStorage.setItem('semestres', JSON.stringify(items))
      setSemestres(items)
    }
  }

  return (
    <>
      <Pagina titulo='Semestres'>

        <Link href='/semestres/form' className='mb-2 btn btn-primary'>
          <BsFillPlusCircleFill className='me-2' />
          Novo
        </Link>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Data Inicio</th>
              <th>Data Fim</th>
            </tr>
          </thead>
          <tbody>
            {semestres.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link href={'/semestres/' + i}>
                    <HiPencil title='alterar' className='text-primary' />
                  </Link>
                  {''}
                  <BsTrash title='excluir' onClick={() => excluir(i)} className='text-danger' />
                </td>
                <td>{item.nome}</td>
                <td>{item.data_inicio}</td>
                <td>{item.data_fim}</td>
              </tr>
            ))}
          </tbody>

        </Table>

      </Pagina>
    </>
  )
}

export default index