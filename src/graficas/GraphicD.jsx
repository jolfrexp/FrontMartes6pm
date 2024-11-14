import React, { useEffect, useState } from 'react'
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Filler,Tooltip,PointElement,LineElement,Legend,ArcElement } from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineElement,
    PointElement,
    Filler,
)
function GraphicD({valores,descripciones}) {
  const data = {
    labels : descripciones,
    datasets:[
        {
         label:'',
         data: valores,
         backgroundColor:[
            '#FFEB99',
            '#8eb5ff',
            '#f888ef',
            '#0233d6'  
         ] 
    }]
    }
    const options = {
        responsive: true,
        plugins:{
            legend:{position:'left'},
            tooltip:{enabled:true}
        }
    }
  return <Doughnut className='p' data={data} options={options}/>
}
function GraphicE() {
    const data = {
        labels : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets:[
            {
             label:'Usuarios',
             data: [0,0,0,0,0,0,0,0,1,3,7,0],
             backgroundColor:[
                // '#FFEB99',
                '#8eb5ff',
                // '#f888ef',
                // '#0233d6'
                
             ],
            //  borderColor:[
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)'
            //  ],
            //  borderWidth: 1   
            type: 'bar'
        },
        {
            label:'Objetivos Usuarios',
            data: [0,0,0,0,0,0,0,0,0,5,10,20],
            backgroundColor:[
            //    '#FFEB99',
            //    '#8eb5ff',
            //    '#f888ef',
               '#0233d6'
               
            ],
            fill:true,
            tension:0.1,   
            type: 'line',
       }]
    }
    const options = {
        responsive: true,
        scales:{ y:{
            beginAtZero:true
        }
        }
    }
    return <Bar className='p' data={data} options={options}/>
}
function GraphicF(){
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          label: 'Andrea',
          data: [300, 400, 350, 500, 530],
          backgroundColor: '#FF5733',
          borderColor: '#FF5733',
          borderWidth: 1,
          fill: false,
        },
        {
            label: 'Jose',
            data: [350, 350, 450, 450, 500],
            backgroundColor: '#009585',
            borderColor: '#009585',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Camila',
            data: [100, 230, 350, 230, 300],
            backgroundColor: '#02665c',
            borderColor: '#02665c',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Angel',
            data: [230, 360, 450, 523, 710],
            backgroundColor: '#00ED40',
            borderColor: '#00ED40',
            borderWidth: 1,
            fill: false,
          },
      ],
    };
    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Balance entre usuarios',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
      
      animation: {
        duration: 1000, 
        easing: 'easeInOutCubic',
      },
    };
    return <Bar data={data} options={options} />
}

export  {GraphicD,GraphicE,GraphicF}
