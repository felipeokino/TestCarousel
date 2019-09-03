import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-animated-slider';
import { Bar } from 'react-chartjs-2';
import 'react-animated-slider/build/horizontal.css';

function App() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  const list = [
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '90vw',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <div style={{ width: '45%' }}>
          <Bar
            data={data}
            width={100}
            height={500}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
        <div style={{ width: '45%' }}>
          <Bar
            data={data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    </div>
  ];
  return <Slider autoplay={5000}>{list.map(el => el)}</Slider>;
}

export default App;
