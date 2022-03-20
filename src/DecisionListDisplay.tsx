import { AddDecisionForm } from './AddDecisionForm';
import { DecisionOptionDisplay } from './DecisionOptionDisplay';

interface Props {
  decisionList: DecisionList;
}

export const DecisionListDisplay: React.FC<Props> = ({decisionList}) => {
  return (
    <>
      <ul>
        {decisionList.decisions.map((decision) => (
          <DecisionOptionDisplay key={decision.text} decisionOption={decision} />
        ))}
      </ul>
      <AddDecisionForm addDecision={decisionList.addDecision} />
    </>
  );
};

