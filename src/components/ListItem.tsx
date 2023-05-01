import React, { FC } from 'react'

interface ListItemProps {
  item: string
}

export const ListItem: FC<ListItemProps> = ({ item }) => {
  return <li className='flex justify-center'>
    <span>{ item }</span>
  </li>
}
