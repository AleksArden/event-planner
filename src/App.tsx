import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
