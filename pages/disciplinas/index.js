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
    
  }, [])

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
              <th>Duracao</th>
              <th>Modalidade</th>
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