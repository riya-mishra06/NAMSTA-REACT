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
// import Instamart from './components/instamart'
import { lazy, Suspense } from 'react'
import Shimmer from "./components/Shimmer"

const Instamart = lazy(() =>
  import("./components/instamart")
)

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
        <Route path="/instamart" 
        element={<Suspense fallback={<Shimmer />}>
          <Instamart /></Suspense>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
//useParams==> hooks