import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
export default component$(() => {
  const count = useSignal(0);

  return (
    <button
      onClick$={() => {
        count.value++;
      }}
    >
      {count.value}
    </button>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};
