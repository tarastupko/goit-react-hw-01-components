import { List,Text } from "components/Profile/profile.styled"
import { Section } from "./Statistics-styled"
import PropTypes from "prop-types";

export const Statistics = ({ title, statistics }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <List>
        {statistics.map((stat) => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </List>
    </Section>
  );
};  
Statistics.propTypes = {
    statistics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    title: PropTypes.string,
})).isRequired
}

