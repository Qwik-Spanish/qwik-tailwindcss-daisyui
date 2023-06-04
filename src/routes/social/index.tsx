import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>Social Networks</>
  );
});

export const head: DocumentHead = {
  title: 'Social Networks',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
