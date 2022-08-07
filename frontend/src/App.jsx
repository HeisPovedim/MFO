import './App.scss';
import { Routes, Route, Link } from 'react-router-dom'

import { Basic } from './page/basic/basic'
import { ErrorPage } from './page/errorPage/errorPage'

const App = () => {
  return (
    <>
    <div className="App"></div>
    <Routes>
      <Route path="/" element={ <Basic /> } />
      <Route path="*" element={ <ErrorPage /> } />
    </Routes>
    </>
  )
}

export default App