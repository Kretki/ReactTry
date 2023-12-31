import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// page & layout imports
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
import Category from './pages/Category'
import Book from './pages/Book/Book.tsx'
import TimelinePage from './pages/Timeline/TimelinePage.tsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/details/:id" element={<ReviewDetails/>} />
          <Route path="/category/:id" element={<Category/>} />
          <Route path="/book/:id" element={<Book/>} />
          <Route path="/timeline/:id" element={<TimelinePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App