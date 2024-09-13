import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import TableData from './CounryTAble'
// import Appmain from './AddressApp/Appmain'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Appmain /> */}
  </StrictMode>
)
