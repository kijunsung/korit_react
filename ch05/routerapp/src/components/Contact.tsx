import ContactBusan from "./ContactBusan"
import { Routes, Route } from "react-router-dom"

export default function Contact () {
  
  return (
  <>
  <h3>Component Home</h3>
  <Routes>
  <Route path="busan" element = { <ContactBusan />} />
  </Routes>
  </>
  );
}
