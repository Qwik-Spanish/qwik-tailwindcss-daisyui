import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>Accordion</>
  );
});

export const head: DocumentHead = {
  title: 'Accordion',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
