import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Home = lazy(() => import("./screens/Home"))
const Dashboard = lazy(() => import("./screens/Dashboard"))
const Category = lazy(() => import("./screens/Category"))

const App = () => {
  return (
    <>
     <Suspense fallback>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/category/:id" element={<Category />} />
     </Routes>
     </BrowserRouter> 
     </Suspense>
    </>
  )
}

export default App