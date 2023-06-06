import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <button class='btn'>Button</button>
      <button class='btn btn-neutral'>Neutral</button>
      <button class='btn btn-primary'>Button</button>
      <button class='btn btn-secondary'>Button</button>
      <button class='btn btn-accent'>Button</button>
      <button class='btn btn-ghost'>Button</button>
      <button class='btn btn-link'>Button</button>
    </>
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
