import React from 'react'
import { Table } from '../components/Table'
import { ParadigmsTable } from '../information/paradigms'

export const Paradigm = () => {
  return (
    <>
      <h1 className='text-4xl font-bold mb-10'>
        Paradigmele limbajelor de programare
      </h1>
      <p className='mb-10'>
        Paradigmele de programare sunt o modalitate de a clasifica limbajele de
        programare pe baza caracteristicilor lor. Limbile pot fi clasificate în
        mai multe paradigme. Unele paradigme sunt preocupate în principal de
        implicațiile pentru modelul de execuție al limbajului, cum ar fi
        permisiunea de efecte secundare sau dacă secvența operațiilor este
        definită de modelul de execuție. Alte paradigme sunt preocupate în
        principal de modul în care codul este organizat, cum ar fi gruparea unui
        cod în unități împreună cu starea care este modificată de cod. Cu toate
        acestea, alții sunt preocupați în principal de stilul de sintaxă și
        gramatică. <br />
        Unele paradigme comune de programare sunt: <br />
        <ul className='list-disc pl-10 mb-5 mt-5'>
          <li>
            Imperativă, în care programatorul instruiește mașina cum să-și
            schimbe starea <br />
            <ul className='list-disc pl-10'>
              <li>procedurală, care grupează instrucțiunile în proceduri</li>
              <li>
                orientată pe obiecte, care grupează instrucțiunile cu partea din
                starea în care operează
              </li>
            </ul>
          </li>
          <li>
            Declarativă, în care programatorul declară doar proprietățile
            rezultatului dorit, dar nu cum să-l calculeze <br />
            <ul className='list-disc pl-10'>
              <li>
                funcțională, în care rezultatul dorit este declarat ca valoare a
                unei serii de aplicații de funcție
              </li>
              <li>
                logică, in care rezultatul dorit este declarat ca raspuns la o
                intrebare despre un sistem de fapte si reguli
              </li>
              <li>
                matematică, în care rezultatul dorit este declarat ca soluție a
                unei probleme de optimizare
              </li>
              <li>
                reactivă, în care rezultatul dorit este declarat cu fluxuri de
                date și propagarea schimbării
              </li>
            </ul>
          </li>
        </ul>
        Tehnicile simbolice, cum ar fi reflecția, care permit programului să se
        refere la sine, ar putea fi, de asemenea, considerate o paradigmă de
        programare. Cu toate acestea, aceasta este compatibilă cu paradigmele
        majore și, prin urmare, nu este o paradigmă reală în sine. De exemplu,
        limbajele care se încadrează în paradigma imperativă au două
        caracteristici principale: ele stabilesc ordinea în care au loc
        operațiunile, cu constructe care controlează în mod explicit acea ordine
        și permit efecte secundare, în care starea poate fi modificată la un
        moment dat, într-o unitate de cod și apoi citite la un moment diferit de
        timp în interiorul unei alte unități de cod. Comunicarea între unitățile
        de cod nu este explicită. Între timp, în programarea orientată pe
        obiecte, codul este organizat în obiecte care conțin o stare care este
        modificată doar de codul care face parte din obiect. Majoritatea
        limbajelor orientate pe obiecte sunt, de asemenea, limbaje imperative.
        În schimb, limbile care se potrivesc paradigmei declarative nu
        precizează ordinea în care să se execute operațiile. În schimb, ele
        furnizează un număr de operațiuni disponibile în sistem, împreună cu
        condițiile în care fiecare este permis să se execute. Implementarea
        modelului de execuție al limbajului urmărește operațiunile care pot fi
        executate liber și alege ordinea în mod independent. Mai multe la
        Comparația limbajelor de programare multi-paradigma.
      </p>
      <Table table={ParadigmsTable} />
    </>
  )
}
