import React from 'react';
  
interface Props {
  decisionOption: DecisionOption;
}

export const DecisionOptionDisplay: React.FC<Props> = ({decisionOption}) => {
  return <li>{decisionOption.weighting}: {decisionOption.text}</li>;
};
