import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Home = lazy(() => import("./screens/Home"))

const App = () => {
  return (
    <>
     <Suspense fallback>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
     </BrowserRouter> 
     </Suspense>
    </>
  )
}

export default App