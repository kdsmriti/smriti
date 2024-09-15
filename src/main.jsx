
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { StrictMode } from 'react'
import Homepage from './Components/Homepage.jsx'
import ServicePage from './Components/Services.jsx'
import AboutusPage from './Components/About Us.jsx'
import ContactPage from './Components/Contact.jsx' 
import Layout from './Layout/layout.jsx'
import DynamicPage from './Components/Dynamicpage.jsx'
import ProductPage from './Components/Productpage.jsx'
import ProductDetail from'./Components/ProductDetail.jsx'

        


createRoot(document.getElementById('root')).render(
   /* <App >*/
    <BrowserRouter>
    <Layout>
    <Routes>
        <Route path="/"element={<Homepage/>}/>
        <Route path ="/dynamic/:id"element={<DynamicPage/>}/>
        <Route path="/services"element={<ServicePage/>}/>
        <Route path="/aboutus"element={<AboutusPage/>}/>
        <Route path="/contact"element={<ContactPage/>}/>
        <Route path="/product"element={<ProductPage/>}/>
        <Route path="/products/:id"element={<ProductDetail/>}/>
        
        </Routes>
    </Layout>
    </BrowserRouter>
  
)
