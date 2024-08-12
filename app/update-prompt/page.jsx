'use client';

import { Suspense } from 'react';
import EditPromptForm from '@components/EditPromptForm';

const EditPrompt = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPromptForm />
    </Suspense>
  );
};

export default EditPrompt;
