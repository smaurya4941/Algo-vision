import React from 'react';
import AlgoSection from "../components/Cards/AlgoSection";
import Card from "../components/Cards/Card";

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
            <AlgoSection title="Sorting Algorithms" viewAllLink="/sorting">

              <Card
                topic="sorting"
                difficulty="easy"
                algoName="Bubble Sort"
                description="Repeatedly compares adjacent elements and swaps them until the array becomes sorted."
                link="/sorting/bubble-sort"
              />

              <Card
                topic="sorting"
                difficulty="easy"
                algoName="Selection Sort"
                description="Finds the smallest element in each pass and places it at the correct position."
                link="/sorting/selection-sort"
              />

              <Card
                topic="sorting"
                difficulty="medium"
                algoName="Insertion Sort"
                description="Builds the sorted list by inserting each element into its correct position."
                link="/sorting/insertion-sort"
              />

              <Card
                topic="sorting"
                difficulty="medium"
                algoName="Merge Sort"
                description="A divide-and-conquer algorithm that recursively splits the array and merges sorted halves."
                link="/sorting/merge-sort"
              />

              <Card
                topic="sorting"
                difficulty="medium"
                algoName="Quick Sort"
                description="A fast, divide-and-conquer algorithm that partitions the array around a pivot."
                link="/sorting/quick-sort"
              />

            </AlgoSection>

          </div>



        </div>
      </div>
    </div>
  )
}

export default Sorting