import { IStatisticsProps } from 'types/appTypes';
import { Container, StatList } from './Statistics.styled';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { findUniqueItems } from '../../helpers/findUniqueItem';

export const Statistics:React.FC<IStatisticsProps> = ({ title, stats }) =>{
  return (
    <Container>
      {title && <h2 className="title">{title}</h2>}
      <StatList>
        {stats
          .map(stat => (
            <StatisticsItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          ))
          .reduce((acc, i) => findUniqueItems(acc, i), [])}
      </StatList>
    </Container>
  );
}


