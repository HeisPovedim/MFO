// REACT
import { Routes, Route } from 'react-router-dom'

// SCSS
import './App.scss'

// IMPORT PAGE
import { BasicPage } from './pages/basic/basic'
import { ApplicationFormPage } from './pages/application-form/application-form'
import { ErrorPage } from './pages/errorPage/errorPage'


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