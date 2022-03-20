import { useState } from "react";

export function DecisionList(initialDecisions: DecisionOption[]) {
  var [decisions, setDecisions] = useState(initialDecisions);

  return {
    decisions: decisions,
    addDecision: function(newDecision: DecisionOption) {
      setDecisions([...decisions, newDecision]);
    }
  }
};
