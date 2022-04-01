import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [state, setState] = useState({
    value: null
  })
  const [xIsNext, setXIsNext] = useState(true)
  const [tabela, setTabela] = useState([
    Array(3).fill(''),
    Array(3).fill(''),
    Array(3).fill('')
  ])

  function calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      for(let j = 0; j < lines[i].length; j++) {
        const a = lines[0][j];
        if(squares[0][a]){
          return true
        }
      }
    }
    return null
  }

  //calculateWinner(tabela)

  const handleClick = (index1: number, index2: number) => {
    tabela[index1][index2] = xIsNext ? "X" : "O"
    setXIsNext(state => !state)
    setTabela([...tabela])
  }

  return (
    <div className={styles.container}>
      <div>Next player: {xIsNext ? "X" : "O"}</div>
      <table>
        <tbody>
          {tabela.map((item1, index1) =>
            <tr key={index1}>
              {item1.map((item2, index2) =>
                <td key={index2} onClick={() => handleClick(index1, index2)}>{item2}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Home
