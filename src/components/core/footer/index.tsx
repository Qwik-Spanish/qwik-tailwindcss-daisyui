import { component$ } from "@builder.io/qwik";

export default component$(() => (
  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <div>
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved by Anartz
        Mugika Ledo
      </p>
    </div>
  </footer>
));
