import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import { Layout } from "./layout/Layout"
import { Home } from "./pages/home/Home"
import { SignUp } from './pages/signUp/SignUp'
import Login from "./pages/login/Login"



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Route>

  ))
  return <RouterProvider router={router} />

}

export default App
