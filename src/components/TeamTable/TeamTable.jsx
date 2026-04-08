import PropTypes from 'prop-types';
import styles from './TeamTable.module.css';

export const TeamTable = ({ team }) => {

  const totalCount = team.reduce((acc, member) => acc + member.count, 0);

  if (team.length === 0) return null; 

  return (
    <div className={styles.tableContainer}>
      <h3 className={styles.tableTitle}>Team Statistics</h3>
      <table className={styles.statsTable}>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Type</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {team.map((member) => (
            <tr key={member.id}>
              <td className={styles.nameCell}>{member.name}</td>
              <td>
                <span className={`${styles.typeBadge} ${styles[member.type]}`}>
                  {member.type}
                </span>
              </td>
              <td className={styles.countCell}>x{member.count}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className={styles.totalLabel}>Total Pokemon:</td>
            <td className={styles.totalValue}>{totalCount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

TeamTable.propTypes = {
  team: PropTypes.array.isRequired,
};