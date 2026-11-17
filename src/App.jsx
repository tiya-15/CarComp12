import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Courses from "./pages/Courses";
import Navigator from "./pages/Navigator";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import CareerDetail from "./pages/CareerDetail";
import CourseDetail from "./pages/CourseDetail";
import Exams from "./pages/Exams";
import ExamDetail from "./pages/ExamDetail";
import FAQ from "./pages/FAQ";
import NavigationAssistant from "./pages/NavigationAssistant";
import ProtectedRoute from "./components/ProtectedRoute";
import AssessmentHistory from "./pages/AssessmentHistory";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/navigator" element={<ProtectedRoute><Layout><Navigator /></Layout></ProtectedRoute>}/>
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/careers/:id" element={<Layout> <CareerDetail /></Layout>} />
        <Route path="/courses/:id" element={<Layout><CourseDetail /></Layout>} />
        <Route path="/exams" element={<Layout><Exams /></Layout>} />
        <Route path="/exams/:id" element={<Layout><ExamDetail /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/assistant" element={<Layout><NavigationAssistant /></Layout>} />
        <Route path="/history" element={<ProtectedRoute><Layout><AssessmentHistory /></Layout></ProtectedRoute>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;