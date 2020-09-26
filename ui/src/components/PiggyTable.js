import React from 'react';
import Table from 'react-bootstrap/Table';

class PiggyTable extends React.Component{
    render(){
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Transaction Name</th>
                    <th>Type</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Travis Scott Meal</td>
                        <td>Food</td>
                        <td>$4.00</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Kith Purchase</td>
                        <td>Clothes</td>
                        <td>$70</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Saving</td>
                        <td>Deposit</td>
                        <td>$1000</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default PiggyTable;