import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import CreatePage from 'pages/CreatePage/CreatePage';
import EventPage from 'pages/EventPage/EventPage';
import HomePage from 'pages/HomePage/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/create-new-event" element={<CreatePage />} />
        <Route path="/events/:eventId" element={<EventPage />} />
      </Route>
    </Routes>
  );
};

export default App;
