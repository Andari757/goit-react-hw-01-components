import "./style.css";
import PropTypes from 'prop-types';
export function Transactions({ items }) {
    return (

        <table className="transaction-history">
            <thead className="transaction-history__head">
                <tr className=" transaction-history__row transaction-history__row--head" >
                    <th className="transaction-history__row-element ">Type</th>
                    <th className="transaction-history__row-element">Amount</th>
                    <th className="transaction-history__row-element">Currency</th>
                </tr>
            </thead>
            <tbody className="transaction-history__body">
                {items.map(item => (
                    <tr className="transaction-history__row" key={item.id}>
                        <td className="transaction-history__row-element">{item.type}</td>
                        <td className="transaction-history__row-element">{item.amount}</td>
                        <td className="transaction-history__row-element">{item.currency}</td>
                    </tr>

                ))}
            </tbody>
        </table>

    );
}
Transactions.prototype = {
    items: PropTypes.arrayOf(PropTypes.object)
}