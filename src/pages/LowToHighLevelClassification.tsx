import React from 'react'
import { Table } from '../components/Table'
import { LevelsTable } from '../information/levels'

export const LowToHighLevelClassification = () => {
  return (
    <>
        <h1 className='text-4xl font-bold mb-10'>
          Limbajele de programare la fel se diferă prin nivelele acestora de
          abstracție
        </h1>
        <h2 className='text-2xl font-semibold'>
          Limbajele de nivel de abstracție scăzut
        </h2>
        <p className='mb-10'>
          Limbajele de nivel scăzut sunt folosite pentru a scrie programe care
          se referă la arhitectura specifică și hardware-ul unui anumit tip de
          computer. Sunt mai aproape de limba maternă a a computer (binare),
          făcându-le mai greu de înțeles de către programatori. Programe scrise
          în limbi de nivel scăzut sunt rapide și eficiente de memorie. Cu toate
          acestea, este un coșmar pentru programatori să scrie, să depaneze și
          să mențină programe de nivel scăzut. Ele sunt utilizate în cea mai
          mare parte pentru a dezvolta sisteme de operare, drivere de
          dispozitiv, baze de date și aplicații care necesită direct acces
          hardware.
        </p>
        <h3 className='text-xl mb-2'>Avantajele acestor limbaje:</h3>
        <ul className='list-disc pl-10 mb-10'>
          <li>
            Programele dezvoltate folosind limbaje de nivel scăzut sunt rapide
            și eficiente de memorie.
          </li>
          <li>
            Programatorii pot utiliza procesorul și memoria într-un mod mai bun
            folosind un nivel scăzut limba.
          </li>
          <li>
            Nu este nevoie de nici un compilator sau interpreți pentru a traduce
            sursa pe mașină cod. Astfel, se reduce timpul de compilare și
            interpretare.
          </li>
          <li>
            Limbajele de nivel scăzut asigură manipularea directă a registrelor
            computerului și a stocării.
          </li>
          <li>Poate comunica direct cu dispozitivele hardware.</li>
        </ul>
        <h3 className='text-xl mb-2'>Dezavantajele acestor limbaje:</h3>
        <ul className='list-disc pl-10 mb-20'>
          <li>
            Programele dezvoltate folosind limbaje de nivel scăzut sunt
            dependente de mașină și nu sunt portabil.
          </li>
          <li>Este dificil de dezvoltat, depanat și întreținut.</li>
          <li>Programele de nivel scăzut sunt mai predispuse la erori.</li>
          <li>
            Programarea la nivel scăzut are ca rezultat, de obicei, o
            productivitate slabă a programării.
          </li>
          <li>
            Un programator trebuie să aibă cunoștințe suplimentare despre
            arhitectura computerului a mașină specială, pentru programare în
            limbajul de nivel scăzut.
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>
          Limbajele de nivel de abstracție înalt
        </h2>
        <p className='mb-10'>
          Limbile de nivel înalt sunt similare cu limbajul uman. limbajele de
          nivel înalt sunt prietenos cu programatorii, ușor de codificat,
          depanat și întreținut. oferă un nivel mai înalt de abstracție din
          limbajul mașină. Ele nu interacționează direct cu hardware-ul. Mai
          degrabă, se concentrează mai mult pe operațiile aritmetice complexe,
          pe eficiența optimă a programului și ușurință în codificare.
          Programele într-o limbă de nivel înalt sunt scrise folosind limba
          engleză instrucțiuni (cum ar fi Python, Java, C++ etc.). Programele de
          nivel înalt necesită compilatoare/interpreți pentru a traduce codul
          sursă în limbajul mașinii. Putem compila cod sursă scris în limbajul
          de nivel înalt pentru mai multe limbaje de mașină. Astfel, ei sunt
          limbaj independent de mașină. Limbile de nivel înalt sunt grupate în
          două categorii pe baza modelului de execuție – limbaje compilate sau
          interpretate. De asemenea, putem clasifica limbajul de nivel înalt
          câteva alte categorii pe baza paradigma de programare. <br />
          <span className='font-bold'>Programarea structurată</span> (uneori
          cunoscută ca programare modulară) este a paradigma de programare care
          vizează îmbunătățirea clarității, calității și timpului de dezvoltare
          a un program de calculator prin utilizarea pe scară largă a
          structurilor de flux de control structurat ale selecție
          (dacă/atunci/altfel) și repetare (în timp ce și pentru), structuri de
          bloc și subrutine. Prin urmare, făcându-l mai eficient și mai ușor de
          înțeles și modificat. Structurat programarea folosește frecvent un
          model de design de sus în jos, în care dezvoltatorii planifică
          structura generală a programului în subsecțiuni separate. Rețineți,
          este posibil să faceți structurat programare în orice limbaj de
          programare. <br />{' '}
          <span className='font-bold'>Programarea procedurală</span> este o
          paradigmă de programare, derivată din structurat programare, bazată pe
          conceptul de apel de procedură. Proceduri, cunoscute și ca rutinele,
          subrutinele sau funcțiile, conțin pur și simplu o serie de pași de
          calcul efectuate. Orice procedură dată poate fi apelată în orice
          moment în timpul execuției unui program, inclusiv prin alte proceduri
          sau în sine. <br />
          <span className='font-bold'>Programarea orientată</span> pe obiecte
          este o paradigmă de programare bazată pe conceptul de „obiecte”, care
          pot conține date, sub formă de câmpuri, cunoscute adesea sub denumirea
          de atribute; și cod, sub formă de proceduri, adesea cunoscute sub
          numele de metode. O caracteristică a obiectelor este că an procedurile
          obiectului pot accesa și adesea modifica câmpurile de date ale
          obiectului cu care sunt asociate. Astfel, programatorii definesc nu
          numai tipul de date al unei structuri de date, ci de asemenea tipurile
          de operaţii (funcţii) care pot fi aplicate structurii de date. În
          acest fel, structura de date devine un obiect care include atât date,
          cât și funcții. În plus, programatorii pot crea relații între un
          obiect și altul.
        </p>
        <h3 className='text-xl mb-2'>Avantajele acestor limbaje:</h3>
        <ul className='list-disc pl-10 mb-10'>
          <li>
            Limbajele de nivel înalt sunt prietenoase cu programatorii. Sunt
            ușor de scris, de depanat și menţine.
          </li>
          <li>
            Oferă un nivel mai ridicat de abstractizare din limbajele mașină.
          </li>
          <li>Este un limbaj independent de mașină.</li>
          <li>Ușor de învățat.</li>
          <li>
            Mai puțin predispus la erori, ușor de găsit și de depanat erori.
          </li>
          <li>
            Programarea la nivel înalt are ca rezultat o mai bună productivitate
            a programării.
          </li>
        </ul>
        <h3 className='text-xl mb-2'>Dezavantajele acestor limbaje:</h3>
        <ul className='list-disc pl-10 mb-10'>
          <li>Este nevoie de timpi suplimentari de traducere pentru a traduce sursa în codul automat.</li>
          <li>Programele de nivel înalt sunt comparativ mai lente decât programele de nivel scăzut.</li>
          <li>În comparație cu programele de nivel scăzut, acestea sunt în general mai puțin eficiente în memorie</li>
          <li>Nu pot comunica direct cu hardware-ul.</li>
        </ul>
        <Table table={LevelsTable} />
    </>
  )
}
