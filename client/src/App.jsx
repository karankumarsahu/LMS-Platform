import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Home = lazy(() => import("./screens/Home"))
const Dashboard = lazy(() => import("./screens/Dashboard"))
const Category = lazy(() => import("./screens/Category"))
const Profile = lazy(() => import ("./screens/Profile"))
const CourseDetails = lazy(() => import ("./screens/CourseDetails"))

const App = () => {
  return (
    <>
     <Suspense fallback>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/course_details/:id" element={<CourseDetails />} />
     </Routes>
     </BrowserRouter> 
     </Suspense>
    </>
  )
}

export default App