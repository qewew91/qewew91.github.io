import { ITable } from '../types/ITable'

export const LevelsTable: ITable = {
  headers: ['Limbajele de nivel de abstracție scăzut', 'Limbajele de nivel de abstracție înalt'],
  body: {
    row1:['Machine code', 'Assembly'],
    row2: ['C', 'C++', 'Java', 'Python', 'C#', 'Javascript']
  },
  title: 'Cele mai populare limbaje de programare'
}