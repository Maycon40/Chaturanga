import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [xIsNext, setXIsNext] = useState(true)
  const [tabela, setTabela] = useState([
    Array(3).fill(""),
    Array(3).fill(""),
    Array(3).fill("")
  ])

  function calculateWinner(squares: any) {
    // Horizontal

    if(squares[0][0] === squares[0][1] && squares[0][1] === squares[0][2] && squares[0][2] !== ""){
      return squares[0][0];
    }
    if(squares[1][0] === squares[1][1] && squares[1][1] === squares[1][2] && squares[1][2] !== ""){
      return squares[1][0];
    }
    if(squares[2][0] === squares[2][1] && squares[2][1] === squares[2][2] && squares[2][2] !== ""){
      return squares[2][0];
    }

    // Vertical

    if(squares[0][0] === squares[1][0] && squares[1][0] === squares[2][0] && squares[2][0] !== ""){
      return squares[0][0];
    }
    if(squares[0][1] === squares[1][1] && squares[1][1] === squares[2][1] && squares[2][1] !== ""){
      return squares[0][1];
    }
    if(squares[0][2] === squares[1][2] && squares[1][2] === squares[2][2] && squares[2][2] !== ""){
      return squares[0][2];
    }

    // Diagonal


    if(squares[0][0] === squares[1][1] && squares[1][1] === squares[2][2] && squares[2][2] !== ""){
      return squares[0][0];
    }
    if(squares[2][0] === squares[1][1] && squares[1][1] === squares[0][2] && squares[0][2] !== ""){
      return squares[2][0];
    }

    return false;
  }

  const handleClick = (index1: number, index2: number) => {
    if(tabela[index1][index2] === "" && !calculateWinner(tabela)){
      tabela[index1][index2] = xIsNext ? "X" : "O"
      setXIsNext(state => !state)
      setTabela([...tabela])
    }
  }

  return (
    <div className={styles.container}>
      {calculateWinner(tabela) && calculateWinner(tabela) !== "" ?
        <div>
          Winner player: {xIsNext ? "O" : "X"}
        </div>
        :
        <div>Next player: {xIsNext ? "X" : "O"}</div>
      }
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
