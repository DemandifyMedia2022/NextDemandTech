"use client";

import { SlideTabsExample } from "./SliderTabs";
import Button from "./Button";

export default function HeaderNav() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 relative flex items-center justify-center">
            <div className="flex justify-center">
                <SlideTabsExample />
            </div>
            <div className="absolute right-4 sm:right-6 lg:right-8">
                <Button label="Let’s Talk" href="/contact" />
            </div>
        </div>
    );
}


