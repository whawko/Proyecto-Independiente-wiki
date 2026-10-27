import React from 'react';
import InfoCard from './molecule/InfoCard';
import Boton from './atom/Boton';

export default function App() {
  return (
    <div className="container mt-5">
      <h2>L4D2 Community Hub</h2>
      <p>Prueba de componentes básicos:</p>
      
      <InfoCard
      titulo="L4D2 HUB"
      descripcion="Únete a la mejor comunidad hispanohablante de Left 4 Dead 2. 
      Encuentra salas de PUG, guías de infectados especiales y herramientas para mejorar tu juego."
      botonText='Unirse a la comunidad'
      onBotonClick={() => alert('Bienvenido a la comunidad')}
      />


      <Boton
        text="Probar Acción" 
        onClick={() => alert('¡El átomo funciona!')} 
        variant="success" 
      />
    </div>
  );
}