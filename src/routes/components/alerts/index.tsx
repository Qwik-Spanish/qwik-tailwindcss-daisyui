import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <> Alerts </>
  );
});

export const head: DocumentHead = {
  title: 'Alerts',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
