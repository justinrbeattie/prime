import { Slot, component$ } from "@builder.io/qwik";
import NavBlockStart from "../components/design/nav-block-start/nav-block-start";
import NavBlockEnd from "../components/design/nav-block-end/nav-block-end";

export default component$(() => {
  return (
    <>
      <NavBlockStart />
      <div class="layer layer-0">
        <div class="page">
          <main>
            <Slot></Slot>
          </main>
        </div>

      </div>
      <div class="layer layer-1">
        <div class="page">
        <div class="scroll-container">
          <div style="height:100vh">
            aa
          </div>
        </div>
        </div>
      </div>

      <div class="layer layer-2">
        <div class="page">
        <div class="scroll-container">
          <div style="width:10px; height:200vh; opacity:.5; background: linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(49,22,240,1) 100%);">
            aa
          </div>
          </div>
        </div>
      </div>
      <NavBlockEnd />
    </>
  );
});

/*

Add anouncement bar 
Main 
Layer Page 
Toast 
Sidenav components and grid

*/