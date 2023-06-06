import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class='collapse collapse-plus bg-base-200'>
        <input type='radio' name='my-accordion-3' checked={'checked'} />
        <div class='collapse-title text-xl font-medium'>
          Click to open this one and close others
        </div>
        <div class='collapse-content'>
          <p>hello</p>
        </div>
      </div>
      <div class='collapse collapse-plus bg-base-200'>
        <input type='radio' name='my-accordion-3' />
        <div class='collapse-title text-xl font-medium'>
          Click to open this one and close others
        </div>
        <div class='collapse-content'>
          <p>hello</p>
        </div>
      </div>
      <div class='collapse collapse-plus bg-base-200'>
        <input type='radio' name='my-accordion-3' />
        <div class='collapse-title text-xl font-medium'>
          Click to open this one and close others
        </div>
        <div class='collapse-content'>
          <p>hello</p>
        </div>
      </div>
    </>
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
