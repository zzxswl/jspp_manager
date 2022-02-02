import { HashRouter, Route, Routes } from 'react-router-dom';

import IndexPage from './pages/Index';
import LoginPage from './pages/Login';

import CoursePage from './pages/sub/Course';
import RecomCoursePage from './pages/sub/RecomCourse';
import SliderPage from './pages/sub/Slider';
import CollectionPage from './pages/sub/Collection';
import TeacherPage from './pages/sub/Teacher';
import StudentPage from './pages/sub/Student';
import CrawlerPage from './pages/sub/Crawler';
import ErrorPage from './pages/sub/Error';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<IndexPage />}>
          <Route path="/course" element={<CoursePage />} />
          <Route path="/recom_course" element={<RecomCoursePage />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/crawler" element={<CrawlerPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
