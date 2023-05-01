export interface ITable {
  title: string
  headers: string[]
  body: ITableBody
}

export interface ITableBody {
  row1: string[]
  row2?: string[]
  row3?: string[]
  row4?: string[]
  row5?: string[]
  row6?: string[]
}