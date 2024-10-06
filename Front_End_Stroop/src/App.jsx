
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Juego } from './Pages/Juego'
import { Resultado } from './Pages/Resultado'
import { Resultados } from './Pages/Resultados'
import { Ajuste } from './Pages/Ajuste'
import { JuegoContex } from './components/JuegoContex'

function App() {
  
const AppRouter=()=>{
  const router = useRoutes([
    {path: '/', element:<Home/>},
    {path:'/ajustes', element:<Ajuste/>},
    {path:'/juego', element:<Juego/>},
    {path:'resultado', element:<Resultado/>},
    {path:'resultados', element:<Resultados/>}
  ])

  return router
}
  return (
    <>
     <BrowserRouter>
     <JuegoContex>
     <AppRouter/>
     </JuegoContex>
     </BrowserRouter>
    </>
  )
}

export default App
