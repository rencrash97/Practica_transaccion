
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [money, setMoney] = useState(0)
  const [comment, setComment] = useState("")


  const handleChangeMoney = (m) => {
    setMoney(m.target.value);
  }

  const handleChangeComment = (d) => {
    setComment(d.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const transaction = {
      money,
      comment
    }

    fetch("http://localhost:3000/transaction", {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(transaction)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert(`Transacción completada!\nMonto transferido: $${money}\n Comentario: ${comment? comment : "Sin comentario"}`);
    })
    .catch(error => console.log(error))
  }

  /*useEffect(() => {
    fetch("http://localhost:3000/transaction")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  })*/

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Monto a transferir:</label>
            <div>
              <input type="number"
                id="cantidad"
                name="cantidad"
                onChange={handleChangeMoney}
                required
              />
            </div>
          </div>

          <div>
            <label>Comentario: </label>
            <div>
              <textarea
                id="Comentario"
                name="Comentario"
                onChange={handleChangeComment}
                maxLength={200}
              />
            </div>
          </div>

          <button type="submit">
            Enviar
          </button>
        </form>

      </div>
    </>
  )
}

export default App
