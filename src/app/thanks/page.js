import { Suspense } from 'react';
import ThanksClient from '@/components/ThanksClient';

export default function ThanksPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThanksClient />
    </Suspense>
  );
}