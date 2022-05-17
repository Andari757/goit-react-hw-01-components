import styles from "./style.module.css";
import PropTypes from 'prop-types';
export function TransactionHistory({ items }) {
    return (

        <table className={styles['transaction-history']}>
            <thead className={styles['transaction-history__head']}>
                <tr className={`${styles['transaction-history__row']} ${styles['transaction-history__row--head']}`}>
                    <th className={styles['transaction-history__row-element']}>Type</th>
                    < th className={styles['transaction-history__row-element']}>Amount</th>
                    <th className={styles['transaction-history__row-element']}>Currency</th>
                </tr>
            </thead>
            <tbody className={styles['transaction-history__body']}>
                {items.map(item => (
                    <tr className={styles['transaction-history__row']} key={item.id}>
                        <td className={styles['transaction-history__row-element']}>{item.type}</td>
                        <td className={styles['transaction-history__row-element']}>{item.amount}</td>
                        <td className={styles['transaction-history__row-element']}>{item.currency}</td>
                    </tr>

                ))}
            </tbody>
        </table >

    );
}
TransactionHistory.defaultProps = {
    items: []
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
    }))
}
