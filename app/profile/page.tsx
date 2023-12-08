
import React from 'react';
import dynamic from 'next/dynamic'
const Chart = dynamic(
    () => import('@/components/profileComponents/Chart'),
    { ssr: false }
  )

const data = [
    {name1 : 'Story 1', likes: 17},
    {name1 : 'Story 2', likes: 33},    
    {name1 : 'Story 3', likes: 21},
    {name1 : 'Story 4', likes: 11},
    {name1 : 'Story 5', likes: 5}
]

const Dashboard: React.FC = () => {

  return (
    <div className="bg-slate-700 min-h-screen p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-16 mb-4">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://placekitten.com/200/200" // Replace with your avatar image URL
            alt="Avatar"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold text-slate-700">John Doe</h1>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">Published Stories</h2>
          <ul>
            <li className="mb-2">Story 1</li>
            <li className="mb-2">Story 2</li>
          </ul>
        </div>

        <Chart chartData = {data}/>
      </div>
    </div>
  );
};

export default Dashboard;
