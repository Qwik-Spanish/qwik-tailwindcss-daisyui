import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>Buttons</>
  );
});

export const head: DocumentHead = {
  title: 'Buttons',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
