import './bootstrap'
import '../css/app.css'

import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { InertiaProgress } from '@inertiajs/progress'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
const appName =
    window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel-ecom'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        ),
    setup({ el, App, props }) {
        return root.render(<App {...props} />)
    },
})

InertiaProgress.init({ color: 'red', showSpinner: true })
