import React, { FC } from 'react'
import { ListItem } from './ListItem'

interface TableBodyProps {
  items: string[] | undefined
}

export const TableBody: FC<TableBodyProps> = ({ items }) => {
  if (typeof items === typeof undefined) {
    return null
  }
  return <td className='border-black border-[1px]'>
    <ul>
      { items?.map(item => <ListItem item={item} key={item}/>) }
    </ul>
  </td>
}