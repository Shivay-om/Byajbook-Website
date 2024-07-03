import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home.jsx'
import Blog from './components/blog/Blog.jsx'
import ContactUs from './components/contact/ContactUs.jsx'
import Header from './Header.jsx'
import Footer from './footer/Footer.jsx'

function App() {

  return (
    <BrowserRouter >
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
