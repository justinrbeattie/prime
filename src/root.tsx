import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import { QwikPartytown } from "./components/partytown/partytown";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
        <QwikPartytown forward={['dataLayer.push']} />
        <link rel="stylesheet" href="../node_modules/@oddbird/popover-polyfill/dist/popover.css" />

      </head>
      <body lang="en">
        <RouterOutlet />
        <script
          src="../node_modules/css-has-pseudo/dist/browser-global"></script>
        <script>
          cssHasPseudo(document)</script>
          <script src="../node_modules/@oddbird/popover-polyfill/dist/popover.js" type="module"></script>
          <script src="https://argyleink.github.io/scroll-timeline/dist/scroll-timeline.js"></script>
      </body>


    </QwikCityProvider>
  );
});
