// src/components/TeamTable/TeamTable.jsx
import PropTypes from 'prop-types';
import styles from './TeamTable.module.css';

export const TeamTable = ({ team }) => {
  // Pokedex-dəki kimi 'reduce' ilə ümumi EXP-ni hesablayırıq
  const totalExp = team.reduce((sum, p) => sum + (p.base_experience * p.count), 0);
  const totalMembers = team.reduce((sum, p) => sum + p.count, 0);

  return (
    <div className={styles.tableContainer}>
      <h3>Team Statistics</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Total Members</th>
            <th>Total Experience (EXP)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalMembers}</td>
            <td>{totalExp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

TeamTable.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object).isRequired
};