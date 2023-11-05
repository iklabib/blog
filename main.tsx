/** @jsx h */

import blog, { ga, h, redirects } from "blog";

function IconMastodon() {
  return (
    <svg
      className="inline-block w-4 h-4"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m 19.511621,6.5529853 c 0,-4.3325586 -2.858596,-5.62785744 -2.858596,-5.62785744 -2.769261,-1.25063495 -10.183739,-1.25063495 -12.9530035,0 0,0 -2.85859381,1.29529884 -2.85859381,5.62785744 0,5.1811997 -0.31265876,11.6130377 4.73454581,12.9083367 1.7866208,0.491322 3.3499146,0.580654 4.6005495,0.53599 2.277943,-0.134007 3.528578,-0.803981 3.528578,-0.803981 l -0.04466,-1.652625 c 0,0 -1.652625,0.491322 -3.483914,0.446655 -1.7866155,-0.08935 -3.7072318,-0.22332 -3.9752264,-2.41194 l -0.044657,-0.625317 c 3.8412328,0.937976 7.1018194,0.40199 7.9951284,0.312669 2.50127,-0.312669 4.689881,-1.875951 4.957876,-3.260582 0.446654,-2.2332757 0.40199,-5.4491947 0.40199,-5.4491947 z M 16.161703,12.136176 H 14.062424 V 7.0443035 c 0,-2.2332752 -2.858594,-2.3226069 -2.858594,0.312669 V 10.170902 H 9.1492155 V 7.3569732 c 0,-2.5905977 -2.8585926,-2.5459339 -2.8585926,-0.312669 v 5.0918718 h -2.09928 c 0,-5.4491951 -0.223321,-6.6104988 0.8039772,-7.8164697 1.1613071,-1.2952989 3.5732455,-1.3399665 4.6452174,0.2679762 l 0.5359855,0.8933087 0.535986,-0.8933087 c 1.071975,-1.6526252 3.483913,-1.5186297 4.60055,-0.2679762 1.071975,1.2506352 0.848644,2.3672746 0.848644,7.8164697 z"
        fill="currentColor"
      />
    </svg>
  );
}

blog({
  title: "Labib's Blog",
  description: "A personal blog",
  // header: <header>Your custom header</header>,
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar:
    "https://files.techhub.social/accounts/avatars/109/819/297/819/023/149/original/9edd60ffa3ad0b03.png",
  avatarClass: "rounded",
  author: "An author",
  links: [
    { title: "Email", url: "mailto:ikhwanul.labib@protonmail.com" },
    {
      title: "Mastodon",
      url: "https://techhub.social/@iklabib",
      icon: IconMastodon(),
    },
  ],
  // middlewares: [

  // If you want to set up Google Analytics, paste your GA key here.
  // ga("UA-XXXXXXXX-X"),

  // If you want to provide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirects({
  //  "/hello_world.html": "/hello_world",
  // }),

  // ]
});
