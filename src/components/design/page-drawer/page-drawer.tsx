import { component$, useSignal, useStore, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./page-drawer.css?inline";
let intersectionObserver: IntersectionObserver | undefined = undefined;
export default component$(() => {
    useStylesScoped$(styles);
    const store: PageDrawerStore = useStore({
        open: true,
        closed:false,
        expanded: false,
        transitioning: false,
        collapsed: true,
    });
    const drawerHeader = useSignal<Element>();
    const drawerMain = useSignal<Element>();
    useVisibleTask$(() => {
        createPageDrawerElement();
        if (drawerHeader.value && drawerMain.value) {
            intersectionObserverInit(drawerHeader.value as HTMLElement, store);
            intersectionObserverInit(drawerMain.value as HTMLElement, store);
        }
        return () => {
            intersectionObserver?.disconnect();
           }
    });
    return (
        <page-drawer class="page-drawer"
            open={store.open}
            closed={store.closed}
            expanded={store.expanded}
            transitioning={store.transitioning}
            collapsed={store.collapsed}>
            <header ref={drawerHeader} >A</header>
            <main ref={drawerMain}></main>
        </page-drawer>
    );
});


const intersectionObserverInit = (element: HTMLElement, store: PageDrawerStore) => {
    intersectionObserver = new IntersectionObserver(
        (entries) => { intersectionObserverCallback(entries, store) },
        {
            root: this,
            threshold: [0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],
        }
    );
    intersectionObserver.observe(element);
}

const intersectionObserverCallback = (entries: IntersectionObserverEntry[], store: PageDrawerStore) => {
    entries.forEach((entry) => {
        if (entry.target.tagName === 'HEADER') {
            store.open = entry.intersectionRatio >= .1;
            store.closed = entry.intersectionRatio === 0;
        } else {
            store.expanded = entry.intersectionRatio >= .85;
            store.transitioning = entry.intersectionRatio > 0 && entry.intersectionRatio < .85;
            store.collapsed = entry.intersectionRatio === 0;
        }

        const layer = entry.target.closest('.layer');
        if (layer) {
            store.open ? layer.setAttribute('layer-open', '') : layer.removeAttribute('layer-open');
            store.closed ? layer.setAttribute('layer-closed', '') : layer.removeAttribute('layer-closed');
            store.expanded ? layer.setAttribute('layer-expanded', '') : layer.removeAttribute('layer-expanded');
            store.transitioning ? layer.setAttribute('layer-transitioning', '') : layer.removeAttribute('layer-transitioning');
            store.collapsed ? layer.setAttribute('layer-collapsed', '') : layer.removeAttribute('layer-collapsed');
        }
    });
};


export interface PageDrawerStore {
    open: boolean;
    closed: boolean;
    expanded: boolean;
    transitioning: boolean;
    collapsed: boolean;
}


const createPageDrawerElement = () => {
    console.log(customElements.get('page-drawer') );
    if( customElements.get('page-drawer') === undefined ) {
        class Drawer extends HTMLElement {
            constructor() {
                super();
              }
    
              openDrawer() {
                this.scrollTop = 1000;
              }
            
              closeDrawer() {
                this.scrollTop = 0;
              }
    
              expandDrawer() {
                this.querySelector('main')?.scrollIntoView();
              }
            
              collapseDrawer() {
                this.querySelector('header')?.scrollIntoView({ block: "end" });
              }
        }
        customElements.define("page-drawer", Drawer);
    }
   
}
