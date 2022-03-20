interface DecisionOption {
  text: string;
  weighting: number;
}

type AddDecision = (newDecision: DecisionOption) => void;
type ComputeDecision = () => DecisionOption;

interface DecisionList {
  decisions: DecisionOption[];
  addDecision: AddDecision;
  computeDecision: ComputeDecision;
}
