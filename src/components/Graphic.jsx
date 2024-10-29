import React from 'react'
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
function Graphic({ingresos,gastos,balance}) {
    const data = {
        labels : ['Ingresos','Gastos','Balance'],
        datasets:[
            {
             label:'Monto($)',
             data: [ingresos,gastos,balance],
             backgroundColor:[
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)'
             ],
             borderColor:[
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
             ],
             borderWidth: 1
            
            
        }]
    }
    const options = {
        scales: {
            y:{
                beginAtZero:true
            }
        }
    }
  return <Bar className='p' data={data} options={options}/>
}

export default Graphic
