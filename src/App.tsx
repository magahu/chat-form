//import { useState } from 'react'

import './App.css'
import { BasicFormContainer } from './chat-form/components/BasicFormsContainer'
import { Header } from './chat-form/components/Header'
import { BasicForm } from './chat-form/models/form'

const myQuestions: BasicForm[] = [
  {
    formTitle: '¿Cuál es tu nombre?',
    formFields: ['Nombre', 'Segundo Nombre', 'Apellido paterno', 'Apellido materno'],
    formAnswer: 'Hola'
  },
  {
    formTitle: '¿Cual es tu fecha de nacimiento?',
    formFields: ['Dia', 'Mes', 'Año'],
    formAnswer: 'Hola'
  },
  {
    formTitle: 'Datos de contacto',
    formFields: ['Correo electrónico', 'Teléfono celular'],
    formAnswer: 'Hola'
  }
]

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <BasicFormContainer subForms={myQuestions}/>
    </>
  )
}

export default App
