import { List } from '@mantine/core';
import React from 'react';
  
interface Props {
  decisionOption: DecisionOption;
}

export const DecisionOptionDisplay: React.FC<Props> = ({decisionOption}) => {
  return (
    <List.Item>
      {decisionOption.weighting}: {decisionOption.text}
    </List.Item>
  );
};
