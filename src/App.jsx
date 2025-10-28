import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import ErrorPage from './components/Error'
import Cart from './components/Cart'
import Contacts from './components/Contacts'
import { Routes, Route } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'
import Profile from './components/Profile'
import { lazy, Suspense, useState } from 'react'
import Shimmer from "./components/Shimmer"
import UserContext from './utils/useContext'
import {Provider} from 'react-redux';
import store from './utils/store'

const Instamart = lazy(() => import("./components/Instamart")) 

const App = () => {
   const [user,setUser] = useState({
    name:"Riya Mishra",
    email:"mriya0619@gmail.com"
   });


  return (
    <Provider store={store}>
    <UserContext.Provider
     value={{user:user}}>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
        
        {/* ✅ Lazy-loaded route wrapped properly in Suspense */}
        <Route
          path="/instamart"
          element={
            <Suspense fallback={<Shimmer />}>
              <Instamart />
            </Suspense>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
   </UserContext.Provider>
   </Provider>
  )
}

export default App
