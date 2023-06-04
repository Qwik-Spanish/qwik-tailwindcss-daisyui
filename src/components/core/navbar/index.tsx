import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { menuPrincipalData } from '~/constants/menu';

export default component$(() => {
  return (
    <div class='navbar bg-neutral text-neutral-content'>
      <div class='flex-1'>
        <Link
          class='btn btn-ghost normal-case text-xl'
          href={menuPrincipalData.home.url}
        >
          {menuPrincipalData.home.title}
        </Link>
      </div>
      <div class='flex-none'>
        <ul class='menu menu-horizontal px-1'>
          <li>
            <Link href={menuPrincipalData.links.social.url}>
              {menuPrincipalData.links.social.title}
            </Link>
          </li>
          <li>
            <details>
              <summary>Components</summary>
              <ul class='p-2 bg-neutral text-black'>
                {menuPrincipalData.links.components.map((link) => (
                  <li>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
});
