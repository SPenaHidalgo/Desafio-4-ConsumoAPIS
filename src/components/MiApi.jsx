import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';

const MiApi = () => {
  const [feriadosApi, setFeriadosApi] = useState([]);
  const [buscar, setBuscar] = useState('');
  const [criterioOrdenamiento, setCriterioOrdenamiento] = useState('');

  const URL = "https://api.boostr.cl/feriados/en.json";

  const consultaApi = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      setFeriadosApi(result.data || []);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
      setFeriadosApi([]); // Establecer un array vacío en caso de error
    }
  };

  useEffect(() => {
    consultaApi();
  }, []);

  const ordenarPor = (a, b) => {
    if (criterioOrdenamiento === 'date_asc') {
      return new Date(a.date) - new Date(b.date);
    }
    if (criterioOrdenamiento === 'date_des') {
      return new Date(b.date) - new Date(a.date);
    }
    if (criterioOrdenamiento === 'az') {
      return a.title.localeCompare(b.title);
    }
    if (criterioOrdenamiento === 'za') {
      return b.title.localeCompare(a.title);
    }
    return 0;
  };

  const showFeriados = feriadosApi
    .filter((feriado) => feriado.title.toLowerCase().includes(buscar.toLowerCase()))
    .sort(ordenarPor)
    .map((feriado) => (
      <div key={feriado.date} className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{feriado.title}</h5>
            <p className="card-text">
              {feriado.type}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary" title="Fecha lanzamiento">
              {feriado.date}
            </small>
          <div>
            <small className="text-body-secondary">
              <span className="badge bg-secondary">{feriado.extra}</span>
            </small>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <main>
      <Buscador searchFeriado={setBuscar} orderFeriado={setCriterioOrdenamiento} />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
        {feriadosApi.length ? showFeriados : <p>No se encontraron feriados.</p>}
      </div>
    </main>
  );
};

export default MiApi;
