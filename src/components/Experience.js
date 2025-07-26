import React from 'react';
import './Experience.css';  // Importación del archivo CSS correspondiente

function Experience() {
  return (
    <section className="container mt-5">
      <h2>Experiencia Profesional</h2>
      <div className="list-group">
        
        {/* Sección de prácticas profesionales */}
        <div className="list-group-item experience-item">
          <h5>Prácticas Profesionales en la Municipalidad de Chiquimulilla</h5>
          <p>Oficina de Servicios Públicos | 2018</p>
          <ul>
            <li>Apoyo en tareas informáticas y administrativas</li>
            <li>Organización y digitación de documentos</li>
            <li>Encargada temporal del área debido a la ausencia de mi supervisora</li>
          </ul>
        </div>

        {/* Sección de emprendimiento */}
        <div className="list-group-item experience-item">
          <h5>Emprendimiento: Dinnorah Glow Store</h5>
          <p>Dueña | 2023- Presente</p>
          <img src="/emprendimento.jpg" alt="Logo de Dinnorah Glow Store" className="experience-img" />
          <ul>
            <li>Gestión de compras y ventas de productos</li>
            <li>Coordinación de pedidos y control de inventario</li>
            <li>Administración de las finanzas, realizando cuentas y gestionando el dinero invertido</li>
            <li>Creación y ejecución de publicidad en redes sociales (WhatsApp, Facebook) y diseño con Canva</li>
          </ul>
        </div>

        {/* Sección de voluntariado */}
        <div className="list-group-item experience-item">
          <h5>Voluntariado en la Clínica Abicadi</h5>
          <p>Voluntaria | 2017 - 2018</p>
          
          {/* Descripción general de la experiencia */}
          <p>Durante mi tiempo como voluntaria, participé en diversas actividades que apoyaron a la comunidad y a la clínica. Fue una bonita experiencia contribuir tanto en tareas internas como en la organización de eventos fuera de la clínica.</p> 
          {/* Actividades fuera de la clínica */}
          <h6>Actividades fuera de la Clínica Abicadi</h6>
          <ul>
            <li>Participación en eventos de recolección de fondos para la clínica y otras instituciones locales</li>
            <li>Organización y promoción de campañas de salud y bienestar en la comunidad</li>
            <li>Solicitar y coordinar ayudas externas para las personas necesitadas en la región</li>
          </ul>

          {/* Sección de imágenes */}
          <div className="experience-img-group">
            <img src="/abicadi.jpg" alt="Logo de Abicadi" className="experience-img-large" />
            <img src="/voluntaria.jpg" alt="Voluntaria en Abicadi" className="experience-img-large" />
            <img src="/voluntariado.jpg" alt="Voluntariado en Abicadi" className="experience-img-large" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
