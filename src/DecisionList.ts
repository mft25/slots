import { useState } from "react";

export function DecisionList(initialDecisions: DecisionOption[]) {
  var [decisions, setDecisions] = useState(initialDecisions);

  return {
    decisions: decisions,

    addDecision: function(newDecision: DecisionOption) {
      setDecisions([...decisions, newDecision]);
    },

    computeDecision: function() {
      const totalWeighting = decisions.map(decision => decision.weighting).reduce((n1, n2) => n1 + n2, 0);

      const selectedWeight = Math.floor(Math.random() * totalWeighting);

      var currentWeight = 0;

      for (var i = 0; i < decisions.length; i++){
        currentWeight += decisions[i].weighting;

        if (currentWeight > selectedWeight){
          return decisions[i];
        }
      }

      throw new Error("At least one decision with a non-zero weighting must be supplied.");
    }
  }
};
