import { ITable } from '../types/ITable'

export const DomainsTable: ITable = {
  title: 'Domenii',
  headers: ['Web', 'Aplicatii', 'Jocuri'],
  body: {
    row1: ['JavaScript', 'Typescript', 'Python', 'PHP', 'Ruby', 'GoLang'],
    row2: ['C#', 'C++', 'C', 'Swift', 'Java', 'Kotlin', 'Objective-C'],
    row3: ['C#', 'C++', 'C', 'Java'],
  },
}
