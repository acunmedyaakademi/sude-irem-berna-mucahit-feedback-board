import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import FeedbackDetails from './pages/FeedbackDetails.jsx';
import NewFeedback from './pages/NewFeedback.jsx';
import EditFeedback from './pages/EditFeedback.jsx';
import Roadmap from './pages/Roadmap.jsx';

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={'/feedback-details/:feedbackId'} element={<FeedbackDetails />} />
        <Route path='/new-feedback' element={<NewFeedback />} />
        <Route path='/edit-feedback' element={<EditFeedback />} />
        <Route path='/roadmap' element={<Roadmap />} />
      </Routes>
    </>
  )
}

