import { useState, useEffect } from "react"

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const[pacientes, setPacinetes]=useState([]);
  const[paciente, setPaciente]=useState({})

  useEffect(()=>{
    const obtenerLS=()=>{
      const pacientesLS= JSON.parse(localStorage.getItem('pacientes'))?? []
      setPacinetes(pacientesLS)
    }

    obtenerLS()
  },[])
  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  }, [pacientes])
  

  const eliminarPaciente=id=>{
    const pacientesActualizados=pacientes.filter(paciente=> paciente.id !== id)
    setPacinetes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacinetes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
