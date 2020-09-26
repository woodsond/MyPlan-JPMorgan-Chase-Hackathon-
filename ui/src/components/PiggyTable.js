import React from "react";
import Table from "react-bootstrap/Table";

class PiggyTable extends React.Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction Name</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9/2020</td>
            <td>Travis Scott Meal</td>
            <td>Food</td>
            <td>$4.00</td>
          </tr>
          <tr>
            <td>9/2020</td>
            <td>Kith Purchase</td>
            <td>Clothes</td>
            <td>$70</td>
          </tr>
          <tr>
            <td>10/2020</td>
            <td>Saving</td>
            <td>Deposit</td>
            <td>$1000</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default PiggyTable;
