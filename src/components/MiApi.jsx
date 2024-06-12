import React, { useEffect, useState } from 'react'

const MiApi = () => {
  const [feriadosApi, setFeriadoApi] = useState([])
  const [buscar, setBuscar] = useState("") 
  const URL="https://api.boostr.cl/feriados/en.json"

  const consultaApi = async() => {
try {
  const data = await fetch(URL)
  const result = await data.json()
  const ordenedData = result.items
  setFeriadoApi(ordenedData)
} catch (error) {
  alert("No funciona")
}
}
 
  useEffect(() => { consultaApi() }, [])
  
  const handleChange = (a) => {
    setBuscar(a.target.value)
  }

  const dataFeriados = feriadosApi.filter((b)=> {
  if (
    b.name.toLowerCase().includes(buscar.toLowerCase())
  ) {
    return true
  }
  return false
  })


  return (
 <>
      <div className="appBg">
        <div className="appDiv">
          <h1>Lista de Feriados</h1>
          <Buscador onChange={handleChange} search={search} />
        </div>
      </div>
    </>  )
}

export default MiApi