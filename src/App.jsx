import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import About from './pages/About'
import Home from './pages/Home'
import Searching from './pages/Searching'
import Sorting from './pages/Sorting'

// routing
import { Route, Routes } from "react-router-dom"
import Bubble from './components/Algorithms/Bubble'
import Selection from './components/Algorithms/Selection'
import Insertion from './components/Algorithms/Insertion'
import Merge from './components/Algorithms/Merge'
import Quick from './components/Algorithms/Quick'
import Linear from './components/Algorithms/searching/Linear'
import Binary from './components/Algorithms/searching/Binary'
import Graph from './pages/Graph'
import NotFound404Page from './others/NotFound404Page'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="*" element={<NotFound404Page />} />
       
        

        {/* Algorithm Visualizers */}
        {/* sorting  */}
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/sorting/bubble-sort" element={<Bubble/> } />
        <Route path="/sorting/selection-sort" element= {  <Selection/> } />
        <Route path="/sorting/insertion-sort" element={ <Insertion/> }   />
        <Route path="/sorting/merge-sort" element={<Merge/> }   />
        <Route path="/sorting/quick-sort" element={<Quick/> }   />



        {/* searching  */}
        <Route path="/searching" element={<Searching />} />
        <Route path='searching/linear-search' element={<Linear/> } />
        <Route path='searching/binary-search' element={<Binary/> } />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
