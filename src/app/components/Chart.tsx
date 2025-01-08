
'use client';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis,   CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from 'recharts';

const data = [
  {
    name: 'sat',
    debit: 5000,
    credit: 7400,
    amt: 2400,
  },
  {
    name: 'sun',
    debit: 4000,
    credit: 8398,
    amt: 2210,
  },
  {
    name: 'mon',
    debit: 5000,
    credit: 9800,
    amt: 2290,
  },
  {
    name: 'tue',
    debit: 7780,
    credit: 6908,
    amt: 2000,
  },
  {
    name: 'wed',
    debit: 6890,
    credit: 9800,
    amt: 2181,
  },
  {
    name: 'thur',
    debit: 8390,
    credit: 4800,
    amt: 2500,
  },
  {
    name: 'thurs',
    debit: 4490,
    credit: 7300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
        <div className="w-full bg-white rounded-[25px]  overflow-hidden p-3 pb-9">

        <div className=" h-[380px]">
 <p className='pt-4 px-5'>$7,560 <span className='text-[#718EBF]'>Debited &</span>$5,420<span className='text-[#718EBF]'> Credited in this Week</span></p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} strokeDasharray="3 3" />
          <XAxis axisLine={false}  tickLine={false} tick={{ fill: '#718EBF'}}  dataKey="name" />
           <Tooltip />
          <Legend verticalAlign="top" 
              align="right"
              iconSize={10}
              />
          <Bar  dataKey="debit" barSize={30}  radius={[10, 10, 10, 10]} fill="#1A16F3" activeBar={<Rectangle fill="#1A16F3" stroke="#1A16F3" />} />
          <Bar barSize={30}   radius={[10, 10, 10, 10]} dataKey="credit" fill="#FCAA0B" activeBar={<Rectangle fill="#FFD366" stroke="#FCAA0B" />} />
        </BarChart>
      </ResponsiveContainer>
        </div>
        </div>
    );
  }
}
