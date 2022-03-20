interface DecisionOption {
  text: string;
  weighting: number;
}

type AddDecision = (newDecision: DecisionOption) => void;

interface DecisionList {
  decisions: DecisionOption[];
  addDecision: AddDecision;
}
  