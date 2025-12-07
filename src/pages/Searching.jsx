import React from 'react'
import Card from "../components/Cards/Card";
import AlgoSection from "../components/Cards/AlgoSection";
import { Outlet } from 'react-router-dom';


const Searching = () => {
  return (
    <div>
      <div className="w-full min-h-screen  bg-gray-50 px-6 py-10">

        {/* Page Heading */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Searching Algorithm</h1>
          <p className="text-gray-600 mt-1">
            Explore algorithms with step-by-step animations and intuitive explanations.
          </p>
        </div>

        {/* including category and card grid */}
        <div className="bg-[#0e1525] py-3 mt-10 w-[full] rounded-lg pb-20">


          {/* Cards Grid */}

          {/* sorting k liye hai  */}
          <div >
            <AlgoSection title="" viewAllLink="/sorting">
              <Card topic="searching" difficulty="easy" algoName="Linear Search " description="this is bubble sort" />
              <Card topic="searching" difficulty="medium" algoName="Selection Sort " description="this is selection sort" />
              <Card topic="searching" difficulty="hard" algoName="Merge Sort" description="this is merge sort" />
            </AlgoSection>
          </div>



        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Searching