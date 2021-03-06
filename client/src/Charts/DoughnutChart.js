import React, { useEffect } from 'react'
import {Chart as ChartJS, BarElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
ChartJS.register(
    BarElement
)

const DoughnutChart=()=> {
    // var baseUrl = "http://localhost:8000/api/bug/?limit=10"
    // var proxyUrl="http://cors-anywhere.herokuapp.com/"

    // useEffect(()=>{
    //     const fetchBugs = async () => {
    //         await fetch(`${proxyUrl}${baseUrl}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type':'application/json'
    //             }
    //         }).then((response)=>{
    //             response.json().then((json)=>{
    //                 console.log(json)
    //             })
    //         }).catch(error=>{
    //             console.log(error);
    //         })
    //     }
    //     fetchBugs()
    // }, [])

   var data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
   var options = {
       maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend:{
            labels: {
                fontSize: 26
            }
        }
    }
  return (
    <div>
        <Doughnut
        data ={data}
        height={400}
        options={options}

        
        />
    </div>
  )
}

export default DoughnutChart