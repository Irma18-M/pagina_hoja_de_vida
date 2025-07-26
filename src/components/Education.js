import React from 'react';
import './Education.css';  // Importación del archivo CSS correspondiente

function Education() {
  return (
    <section className="container mt-5 education">
      <h2>Formación Académica</h2>

      {/* Sección de Centros de Estudio */}
      <div className="list-group">
        <div className="list-group-item education-item">
          <h4>Centros de Estudio</h4>
          <p>En el transcurso de los años, he pasado por varios establecimientos educativos que me han formado como una persona profesional y capaz:</p>
          <ul>
            <li><strong>Cool Spring Elementary School</strong> | Preparatoria- 2007</li>
            <li><strong>Roscoe R. Nix Elementary School</strong> |Primaria- 2008</li>
            <li><strong>Colegio Evangélico Shaddai</strong> | Primaria - 2009-2013</li>
            <li><strong>Colegio Evangélico Shaddai</strong> | Basicos - 2014-2017</li>
            <li><strong>Colegio Técnico de Computación CTS</strong> | Diversificado - 2016-2018</li>
           <li><strong>Universidad Mariano Gálvez</strong> | Ingeniería en Sistemas (2019 - 2025)</li>
          </ul>
        </div>

        {/* Sección de Educación Culminada */}
        <div className="list-group-item education-item">
          <h4>Educación Culminada</h4>
          <ul>
            <li><strong>Colegio Técnico de Computación CTS</strong> | Bachiller en Computación (Promoción 2016-2018)</li>
            <li><strong>Certificación en Inglés</strong> | Nivel: Principiante a Avanzado, Universidad Mariano Gálvez (2020 - 2023)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education;
