import React from "react";
import Card from "../components/Cards/Card";
import AlgoSection from "../components/Cards/AlgoSection";

const Home = () => {
    return (
        <div className="w-full min-h-screen  bg-gray-50 px-6 py-10">

            {/* Page Heading */}
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900">Algo-Vision  :A Smarter Way to Understand Algorithms.</h1>
                <h3 className="text-gray-600  mt-1">
                    Where Code Turns Into Clarity
                </h3>
            </div>

            {/* including category and card grid */}
            <div className="bg-[#0e1525] py-3 mt-10 w-[full] rounded-lg pb-20">
                {/* Optional Category Filter */}
                {/* <div className="max-w-6xl mx-auto flex gap-4 mt-6 overflow-x-auto pb-2">
                    <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200">
                        Sorting
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
                        Searching
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
                        Graph
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
                        Easy
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
                        Medium
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
                        Hard
                    </button>
                </div> */}



                {/* Cards Grid */}

                {/* sorting k liye hai  */}
                {/* Sorting Section */}
                <div>
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
                            description="Finds the minimum element in each pass and places it at the correct position."
                            link="/sorting/selection-sort"
                        />

                        <Card
                            topic="sorting"
                            difficulty="medium"
                            algoName="Insertion Sort"
                            description="Builds the sorted array one element at a time by inserting each element into its correct position."
                            link="/sorting/insertion-sort"
                        />

                    </AlgoSection>
                </div>


                {/* Searching Section */}
                <div>
                    <AlgoSection title="Searching Algorithms" viewAllLink="/searching">

                        <Card
                            topic="searching"
                            difficulty="easy"
                            algoName="Linear Search"
                            description="Checks each element one by one until the target value is found."
                            link="/searching/linear-search"
                        />

                        <Card
                            topic="searching"
                            difficulty="medium"
                            algoName="Binary Search"
                            description="Efficiently searches a sorted list by repeatedly dividing the search interval in half."
                            link="/searching/binary-search"
                        />

                    </AlgoSection>
                </div>





            </div>
        </div>
    );
};

export default Home;
