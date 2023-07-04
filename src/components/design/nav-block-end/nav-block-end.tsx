import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./nav-block-end.css?inline";

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <nav-block-end>
            aaa
        </nav-block-end>
    );
});
