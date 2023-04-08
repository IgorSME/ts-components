import { IStatItem } from 'types/appTypes';
import { Label, Item, Percentage } from './StatisticsItem.styled';

export const StatisticsItem: React.FC<IStatItem> = ({ label, percentage }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage} % </Percentage>
    </Item>
  );
};
