import { createContext, useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import FeedbackDetails from './pages/FeedbackDetails.jsx';
import NewFeedback from './pages/NewFeedback.jsx';
import EditFeedback from './pages/EditFeedback.jsx';
import Roadmap from './pages/Roadmap.jsx';


export const DataContext = createContext(null);

export default function App() {

  const [data, setData] = useState('');
  const [ currentUser, setCurrentUser ] = useState('');

  useEffect(() => {
    async function getData() {
      const feedbackData = await fetch('/data/feedback-data.json').then(r => r.json());
      setData(feedbackData.productRequests);
      setCurrentUser(feedbackData.currentUser);
    }
    getData();
  }, [])

  return (
    <>
      <DataContext.Provider value={{ data, setData, currentUser}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={'/feedback-details/:feedbackId'} element={<FeedbackDetails />} />
          <Route path='/new-feedback' element={<NewFeedback />} />
          <Route path='/edit-feedback/:feedbackId' element={<EditFeedback />} />
          <Route path='/roadmap' element={<Roadmap />} />
        </Routes>
      </DataContext.Provider>
    </>
  )
}

