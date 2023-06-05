import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/core/footer";
import Navbar from "~/components/core/navbar";

export default component$(() => {
  return (
    <div>
      <Navbar />
      <div class="md:container md:mx-auto p-3 my-6">
        <Slot />
      </div>
      <Footer />
    </div>
  );
});
