//import { useState } from 'react'

import './App.css'
import { BasicFormContainer } from './chat-form/components/FormsContainer'
import { Header } from './chat-form/components/Header'


function App() {
  const formTitle = 'FORMULARIO'

  return (
    <>
    <Header title={formTitle}/>
    <BasicFormContainer/>
    {/*<BasicFormContainer subForms={myQuestions}/>*/}
    </>
  )
}

export default App
