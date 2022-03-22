import { TextInput, NumberInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';

interface Props {
  addDecision: AddDecision;
}

export const AddDecisionForm: React.FC<Props> = ({addDecision}) => {
  const form = useForm({
    initialValues: {
      decisionOptionText: '',
      weighting: 1,
    },
    validate: {
      weighting: (value) => value >= 0 ? null : 'Weighting cannot be negative'
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => addDecision({
          text: values.decisionOptionText,
          weighting: values.weighting
        }))}>
    <TextInput
      required
      label="New Decision"
      placeholder="Type option here..."
      {...form.getInputProps('decisionOptionText')}
    />

    <NumberInput
      required
      label="Weighting"
      {...form.getInputProps('weighting')}
    />

      <Group position="right" mt="md">
        <Button type="submit">Add</Button>
      </Group>
    </form>
  );
};
