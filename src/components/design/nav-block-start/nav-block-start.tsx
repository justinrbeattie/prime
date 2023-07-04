import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./nav-block-start.css?inline";

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <nav-block-start>
            aaa
        </nav-block-start>
    );
});
