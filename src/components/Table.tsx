import React, { FC } from 'react'
import { ITable } from '../types/ITable'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'

interface TableProps {
  table: ITable
}

export const Table: FC<TableProps> = ({ table }) => {
  const { title, headers, body } = table
  return (
    <table className='min-w-full mt-20'>
      <caption className='text-2xl mb-5'>{title}</caption>
      <thead>
        <tr>{headers.map((header) => (
            <TableHeader header={header} key={header} />
          ))}</tr>
      </thead>
      <tbody>
        <tr>
          {<TableBody items={body.row1} />} {<TableBody items={body.row2} />}{' '}
          {<TableBody items={body.row3} />} {<TableBody items={body.row4} />}{' '}
          {<TableBody items={body.row5} />} {<TableBody items={body.row6} />}
        </tr>
      </tbody>
    </table>
  )
}
