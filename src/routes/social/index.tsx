import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class='hero h-96 bg-base-200'>
      <div class='hero-content flex-col lg:flex-row'>
        <img
          src='https://miro.medium.com/v2/resize:fill:88:88/1*V7PIOoevMu5s2hfV1jcsJw.jpeg'
          class='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 class='text-5xl font-bold'>Box Office News!</h1>
          <p class='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
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
