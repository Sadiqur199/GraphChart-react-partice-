import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';


const PhoneBar = () => {
  const [phones, setPhones] = useState([])
  useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(data => {
        const lodededData = data.data.data
        // console.log(lodededData)
        const phonesData = lodededData.map(phone => {
          const parts = phone.slug.split('-')
          const price = parseInt(parts[1]);
          const phoneInfo = {
            name: phone.phone_name,
            price: price
          }
          return phoneInfo

        })
        console.log(phonesData)
        setPhones(phonesData)

      })
  }, [])
  return (
    <div>
      <BarChart className='mb-5'
        width={1000}
        height={500}
        data={phones}>

        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
      </BarChart>
    </div>
  );
};

export default PhoneBar;