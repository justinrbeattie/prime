import { Slot, component$, useVisibleTask$ } from "@builder.io/qwik";
import NavBlockStart from "../components/design/nav-block-start/nav-block-start";
import NavBlockEnd from "../components/design/nav-block-end/nav-block-end";
import PageDrawer from "../components/design/page-drawer/page-drawer";
let mutationObserver: MutationObserver | undefined = undefined;
export default component$(() => {


  useVisibleTask$(() => {
    mutationObserverInit();
    return () => {
     mutationObserver?.disconnect();
     }
  });


  return (
    <>
      <NavBlockStart />
      <div class="layer" id="layer-0" layer-expanded>
        <div class="page">
          <main>
            <Slot></Slot>
          </main>
        </div>

      </div>

      <div class="layer">
        <div class="page">
          <PageDrawer>

          </PageDrawer>
        </div>
      </div>

      <div class="layer">
        <div class="page">
          <PageDrawer>

          </PageDrawer>
        </div>
      </div>

      <div class="layer">
        <div class="page">
          <PageDrawer>

          </PageDrawer>
        </div>
      </div>

      <div class="layer">
        <div class="page">
          <PageDrawer>

          </PageDrawer>
        </div>
      </div>
      <NavBlockEnd />
    </>
  );
});


const mutationObserverInit = () => {
  const config = { attributes: true, subtree: true, attributeFilter: ['layer-expanded'], };
  mutationObserver = new MutationObserver(mutationObserverCallback);
  mutationObserver.observe(document.body, config);
  configureLayers();
}


const mutationObserverCallback = (mutationList: MutationRecord[]) => {
  mutationList.forEach(() => {
    configureLayers();
  });
}


const configureLayers = () => {
  const layerList = document.querySelectorAll('.layer');
  const expandedLayerList = document.querySelectorAll('.layer[layer-expanded]');
  const lastExpandedLayer = expandedLayerList[expandedLayerList.length - 1];
  for (let i = 0; i < layerList.length; ++i) {
    const layer = layerList[i];
    const header = layer.querySelector('header');
    const main = layer.querySelector('main');
    if (layer === lastExpandedLayer) {
      header?.removeAttribute('hidden');
      main?.removeAttribute('hidden');
    } else {
      header?.setAttribute('hidden', '');
      main?.setAttribute('hidden', '');
    }
  }
}



/*

Add anouncement bar 
Sidenav 


*/