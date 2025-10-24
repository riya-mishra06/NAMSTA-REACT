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

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
       <Route path="/about" element={<About />}>
  <Route path="profile" element={<Profile />} />
</Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
//useParams==> hooks