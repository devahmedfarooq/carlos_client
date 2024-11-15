import HomePage from "./pages/Home.page.tsx"
import Success from "./pages/Payment/Success/Success.page.tsx";
//import LoadPage from "./pages/Loading/Loading.page.tsx"
import ReportPage from "./pages/Report/Report.page.tsx"
//import useData from "./redux/useData.ts"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  // const { loading,/*  preview, seo, report, recomend */ } = useData()
  return (

    <Router >
      <Routes>
        <Route path="/report/:id" element={<ReportPage />} />
        <Route path="/payment/success/:id" element={<Success />} />

        <Route path="/"
          element={<HomePage />} />
      </Routes>
    </Router>


  )
}

export default App
