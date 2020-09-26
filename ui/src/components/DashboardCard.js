import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Table from './PiggyTable';

class DashboardCard extends React.Component{
    render(){
        const data = {
            labels: [
                'Spending',
                'Saving',
                'Misc.'
            ],
            datasets: [{
                data: [300, 1700, 100],
                backgroundColor: [
                '#FF6384',
                '#006838',
                '#E0AD2E'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#006838',
                '#E0AD2E'
                ]
            }]
        };
        return(
            <div className="column shadow p-3 mb-5 bg-white rounded"> 
                <div className="mb-4 ml-3">
                    <h5 className="display-6 dc"><b>{this.props.title}</b></h5>
                    {this.props.title === "Spending" ?
                        <Doughnut data={data} />
                    : <Table />
                    }
                </div> 
            </div>
        );
    }
}
export default DashboardCard;
