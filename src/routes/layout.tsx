import { component$, Slot } from '@builder.io/qwik';
import Navbar from '~/components/core/navbar';

export default component$(() => {
  return <div>
    <Navbar />
    <Slot />
  </div>;
});
