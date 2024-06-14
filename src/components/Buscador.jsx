import React from 'react';

const Buscador = ({ searchFeriado, orderFeriado }) => {
  const inputHandler = (e) => {
    if (e.target.name === 'search') {
      searchFeriado(e.target.value);
    }
    if (e.target.name === 'order') {
      orderFeriado(e.target.value);
    }
  };

  return (
    <div className="row m-0 py-2">
      <div className="col-sm-9 mb-2">
        <div className="input-group">
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
            <option value="">Ordenar por:</option>
            <option value="date_asc">Fecha ascendente ↑</option>
            <option value="date_des">Fecha descendente ↓</option>
            <option value="az">Alfabéticamente ↑</option>
            <option value="za">Alfabéticamente ↓</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
