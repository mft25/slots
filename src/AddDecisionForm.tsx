import React, { useState } from 'react';

interface Props {
  addDecision: AddDecision;
}

export const AddDecisionForm: React.FC<Props> = ({addDecision}) => {
  const [text, setText] = useState('');
  const [weighting, setWeighting] = useState(0);

  return (
    <form>
      <div>
        Add a new decision:
      </div>
      <input type="number"
        value={weighting}
        onChange={(e) => {
          setWeighting(parseInt(e.target.value));
      }} />
      <input type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
      }} />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addDecision({
            text: text,
            weighting: weighting
          });
      }}>
        Add
      </button>
    </form>
  );
};