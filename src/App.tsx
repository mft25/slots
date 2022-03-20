import { DecisionList } from './DecisionList';
import { DecisionListDisplay } from './DecisionListDisplay';

const initialDecisions: DecisionOption[] = [];

function App() {
  const decisionList = DecisionList(initialDecisions);

  return (
    <>
      <DecisionListDisplay decisionList={decisionList} />
    </>
  );
}

export default App;
