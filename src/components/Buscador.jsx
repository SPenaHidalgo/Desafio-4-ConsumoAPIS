import React from 'react'

export const Buscador = ({searchFeriado, orderFeriado}) => {
  const inputHandler = (a) =>{
    if(a.target.name === 'search'){
      searchFeriado(a.target.value)
    }
    if(a.target.name === 'order'){
      orderFeriado(a.target.value)
  }
}
  
  
  return (
    <div className="row m-0 py-2">
    <div className="col-sm-9 mb-2">
      <div className="input-group ">
        <input
          type="text"
          className="form-control"
          name="search"
          id="search"
          placeholder="Buscar feriado..."
          onChange={inputHandler}
        />
      </div>
    </div>
    <div className="col-sm-3 mb-2">
      <div className="input-group">
        <select
          className="form-select"
          id="order"
          name="order"
          onChange={inputHandler}
        >
          <option value="">Ordernar por:</option>
          <option value="">Tipo</option>
          <option value="date_asc">Fecha ascendente ↑</option>
          <option value="date_des">Fecha descendente ↓</option>
          <option value="az">Alfabeticamente ↑</option>
          <option value="za">Alfabeticamente ↓</option>
        </select>
      </div>
    </div>
  </div>
  )
}