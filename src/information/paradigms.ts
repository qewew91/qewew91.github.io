import { ITable } from '../types/ITable'

export const ParadigmsTable: ITable = {
  headers: ['Procedurală', 'Orientată pe obiecte', 'Funcțională', 'Logică', 'Matematică', 'Reactivă'],
  title: 'Paradigmele limbajelor de programare',
  body: {
    row1: ['Fortran', 'ALGOL', 'COBOL', 'BASIC', 'Pascal', 'C'],
    row2: ['Java', 'C++', 'C#', 'Python', 'Kotlin', 'Swift', 'PHP'],
    row3: ['Scala', 'Haskell', 'Erlang', 'F#', 'OCaml', 'R'],
    row4: ['ALF', 'Fril', 'Gödel', 'Mercury', 'Oz', 'Ciao', 'Visual Prolog', 'XSB'],
    row5: ['MATLAB', 'Fortran', 'Haskell', 'Wolfram Mathematica', 'AMPL'],
    row6: ['ReactiveX', 'Elm']
  }
}