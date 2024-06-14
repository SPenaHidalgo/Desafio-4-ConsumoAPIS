import React, { useEffect, useState } from 'react'
import Buscador from './Buscador'

const MiApi = () => {
  const [feriadosApi, setFeriadosApi] = useState(null)
  const[buscar, setBuscar] = useState('')
  const [criterioOrdenamiento, setCriterioOrdenamiento] = useState('')

  const URL = "https://api.boostr.cl/feriados/en.json"

  const consultaApi = async () => {
    try {
      const data = await fetch(URL)
      const result = await data.json()
      const ordenedData = result.items
      setFeriadosApi(ordenedData)
    } catch (error) {
      // Manejo específico del error aquí, por ejemplo:
      console.error("Error al cargar los datos:", error)
    }
  }

  useEffect(() => {
    consultaApi()
  }, []) // Sin dependencias, se ejecuta solo al montar el componente

  function ordenarPor(feriado) {
    if (criterioOrdenamiento === 'date_des' || criterioOrdenamiento === 'date_asc') {
      const date1 = new Date(feriado.date)
      return date1.getTime()
    }
    if (criterioOrdenamiento === 'az') {
      return feriado.title.localeCompare(feriado)
    }
    if (criterioOrdenamiento === 'za') {
      return feriado.title.localeCompare(feriado) * -1
    }
  }

  const showFeriados = feriadosApi
    ?.filter((feriado) => feriado.title.toLowerCase().includes(buscar.toLowerCase()))
    .sort(ordenarPor)
    .map((feriado) => (
      <div key={feriado.date} className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{feriado.title}</h5>
            <p className="card-text">
              {feriado.short_description.slice(0, 50) + '...'}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary" title="Fecha lanzamiento">
              {feriado.type}
            </small>
            <small className="text-body-secondary">
              <span className="badge bg-secondary">{feriado.extra}</span>
            </small>
          </div>
        </div>
      </div>
    ))

  return (
    <main>
      <Buscador searchFeriado={setBuscar} orderFeriado={setCriterioOrdenamiento} />
      <div className="games row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
        {showFeriados}
      </div>
    </main>
  )
}

export default MiApi
