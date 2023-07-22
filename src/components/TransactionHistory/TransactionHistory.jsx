import { Table,TableRaw } from "./TransactionHistory.styled"

import PropTypes from 'prop-types'

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <TableRaw key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </TableRaw>
        ))}
      </tbody>
    </Table>
  );
};


TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    }
    )).isRequired
}