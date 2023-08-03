import Layout from 'components/Layout/Layout';
import CreatePage from 'pages/CreatePage/CreatePage';
import HomePage from 'pages/HomePage/HomePage';

import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/create-new-event" element={<CreatePage />} />
      </Route>
    </Routes>
  );
};

export default App;
