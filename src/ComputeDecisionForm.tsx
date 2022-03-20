import React, { useState } from 'react';

interface Props {
  computeDecision: ComputeDecision;
}

export const ComputeDecisionForm: React.FC<Props> = ({computeDecision}) => {
  const [decision, setDecision] = useState<DecisionOption | null>(null);

  return (
    <>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setDecision(computeDecision());
      }}>
        DETERMINE
      </button>
      {decision !== null
        ? <>Decision: {decision.text}</>
        : <></>}
    </>
  );
};
