import { Box, List } from '@mantine/core';
import { AddDecisionForm } from './AddDecisionForm';
import { ComputeDecisionForm } from './ComputeDecisionForm';
import { DecisionOptionDisplay } from './DecisionOptionDisplay';

interface Props {
  decisionList: DecisionList;
}

export const DecisionListDisplay: React.FC<Props> = ({decisionList}) => {
  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <List style={{ marginLeft: 2 + "em" }} size="xl">
        {decisionList.decisions.map((decision) => (
          <DecisionOptionDisplay key={decision.text} decisionOption={decision} />
        ))}
      </List>
      <AddDecisionForm addDecision={decisionList.addDecision} />
      <ComputeDecisionForm computeDecision={decisionList.computeDecision} />
    </Box>
  );
};
