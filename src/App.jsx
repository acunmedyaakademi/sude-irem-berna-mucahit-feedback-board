import { createContext, useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import FeedbackDetails from './pages/FeedbackDetails.jsx';
import NewFeedback from './pages/NewFeedback.jsx';
import EditFeedback from './pages/EditFeedback.jsx';
import Roadmap from './pages/Roadmap.jsx';

export const DataContext = createContext();

export default function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    async function getData() {
      const feedbackData = await fetch('/src/data/feedback-data.json').then(r => r.json());
      setData(feedbackData.productRequests);
    }
    getData();
  }, [])

  console.log(data)

  return (
    <>
      <DataContext.Provider value={{ data }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={'/feedback-details/:feedbackId'} element={<FeedbackDetails />} />
          <Route path='/new-feedback' element={<NewFeedback />} />
          <Route path='/edit-feedback' element={<EditFeedback />} />
          <Route path='/roadmap' element={<Roadmap />} />
        </Routes>
      </DataContext.Provider>
    </>
  )
}

