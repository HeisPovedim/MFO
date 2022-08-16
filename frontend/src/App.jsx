import { Routes, Route } from 'react-router-dom'

import './App.scss';

import { BasicPage } from './page/basic/basic'
import { ApplicationFormPage } from './page/application-form/application-form'
import { ErrorPage } from './page/errorPage/errorPage'

const App = () => {
  return (
    <>
    <div className="App"></div>
    <Routes>
      <Route path="/" element={ <BasicPage /> } />
      <Route path="/application-form" element={ <ApplicationFormPage /> } />
      <Route path="*" element={ <ErrorPage /> } />
    </Routes>
    </>
  )
}

export default App