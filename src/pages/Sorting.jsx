import React from 'react'
import Card from "../components/Cards/Card";
import AlgoSection from "../components/Cards/AlgoSection";

const Sorting = () => {
  return (
    <div>
      <div className="w-full min-h-screen  bg-gray-50 px-6 py-10">

        {/* Page Heading */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Sorting Algorithm</h1>
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
              <Card topic="sorting" difficulty="easy" algoName="Bubble Sort" description="this is bubble sort"  link="/sorting/bubble-sort"/>
              <Card topic="sorting" difficulty="easy" algoName="Selection Sort"  description="this is selection sort" link="/sorting/selection-sort" />
              <Card topic="sorting" difficulty="medium" algoName="Insertion Sort"  description="this is insertion sort" link="/sorting/insertion-sort" />
              <Card topic="sorting" difficulty="medium" algoName="Merge Sort"  description="this is Merge sort" link="/sorting/merge-sort" />
              <Card topic="sorting" difficulty="medium" algoName="Quick Sort"  description="this is inserMQUickergetion sort" link="/sorting/quick-sort" />
            </AlgoSection>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Sorting