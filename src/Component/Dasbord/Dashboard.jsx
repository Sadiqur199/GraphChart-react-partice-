import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // const [marks , setMarks] = useState([])
  // useEffect(()=>{
  //   fetch('mark.js')
  //   .then(res=>res.json())
  //   .data(data=>setMarks(data))
  // },[])
  let students = [
    { name: "John", physics: 80, chemistry: 75, math: 90 },
    { name: "Mary", physics: 85, chemistry: 90, math: 80 },
    { name: "Peter", physics: 70, chemistry: 80, math: 85 },
    { name: "Alice", physics: 90, chemistry: 95, math: 95 },
    { name: "Bob", physics: 60, chemistry: 70, math: 75 },
    { name: "Sarah", physics: 75, chemistry: 80, math: 70 },
    { name: "Tom", physics: 85, chemistry: 90, math: 90 },
    { name: "Samantha", physics: 80, chemistry: 85, math: 85 },
    { name: "Harry", physics: 70, chemistry: 75, math: 80 },
    { name: "Lily", physics: 95, chemistry: 90, math: 85 }
  ];

  return (
    <div>
      <LineChart
        width={1000}
        height={500}
        data={students}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="math"></Line>
        <Line dataKey='chemistry'></Line>
        <Line dataKey='physics'></Line>

      </LineChart>
    </div>
  );
};

export default Dashboard;