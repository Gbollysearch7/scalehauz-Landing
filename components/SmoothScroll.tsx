"use client";

import { useLenis, ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
    const lenis = useLenis(({ scroll }) => {
        // optional: verify scroll events
    });

    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    );
}
