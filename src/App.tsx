import ErrorPage from "./pages/Error/Error.page.tsx";
import HomePage from "./pages/Home.page.tsx"
import Success from "./pages/Payment/Success/Success.page.tsx";
//import LoadPage from "./pages/Loading/Loading.page.tsx"
import ReportPage from "./pages/Report/Report.page.tsx"
//import useData from "./redux/useData.ts"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terms from "./pages/Terms/Terms.page.tsx";
import Policy from "./pages/Policy/Policy.tsx";



function App() {
  // const { loading,/*  preview, seo, report, recomend */ } = useData()
  return (


    <Router >
      <Routes>
        <Route path="/report/:id" element={<ReportPage />} />
        <Route path="/payment/success/:id" element={<Success />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/"
          element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>


  )
}

export default App
