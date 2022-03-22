import { Title, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState } from 'react';

interface Props {
  computeDecision: ComputeDecision;
}

export const ComputeDecisionForm: React.FC<Props> = ({computeDecision}) => {
  const [decision, setDecision] = useState<DecisionOption | null>(null);
  const form = useForm({
    initialValues: {},
  });

  return (
    <>
      <form onSubmit={form.onSubmit(() => setDecision(computeDecision()))}>
        <Group position="right" mt="md">
          <Button type="submit">Decide</Button>
        </Group>
      </form>
      {decision !== null
        ? <Title order={1}>Decision: {decision.text}</Title>
        : <></>}
    </>
  );
};
