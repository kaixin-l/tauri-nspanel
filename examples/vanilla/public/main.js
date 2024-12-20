import { invoke } from '@tauri-apps/api';
console.log('Tauri API loaded:', invoke);

console.log("Script starting...");

async function updateBounds() {
    const panel = document.getElementById('nspanel');
    const rect = panel.getBoundingClientRect();

    console.log('Current panel bounds:', rect);

    try {
        const { invoke } = window.__TAURI__;
        const payload = {
            name: 'hover-area',
            bounds: {
                x: rect.left,
                y: rect.top,
                width: rect.width,
                height: rect.height
            }
        };

        console.log('Sending payload to Rust:', payload);
        const result = await invoke('set_fake_window_bounds', payload);
        console.log('Bounds set successfully:', result);
    } catch (error) {
        console.error('Failed to update bounds:', error);
        console.error('Error details:', error.toString());
    }
}

async function init() {
    console.log('Initializing...');

    try {
        const panel = document.getElementById('nspanel');
        console.log('Panel element:', panel);

        await updateBounds();
        console.log('Initial bounds updated');

        let resizeTimeout;
        window.addEventListener('resize', () => {
            console.log('Window resized');
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updateBounds, 100);
        });

        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' &&
                    (mutation.attributeName === 'style' ||
                        mutation.attributeName === 'class')) {
                    console.log('Panel style changed');
                    updateBounds();
                }
            });
        });

        observer.observe(panel, {
            attributes: true,
            attributeFilter: ['style', 'class']
        });
        console.log('Mutation observer set up');

        panel.addEventListener('mouseover', () => {
            console.log('Mouse over panel');
            updateBounds();
        });

        panel.addEventListener('mouseenter', () => {
            console.log('Mouse entered panel');
            updateBounds();
        });

        panel.addEventListener('mousemove', (e) => {
            console.log('Mouse move:', { x: e.clientX, y: e.clientY });
        });

        setInterval(updateBounds, 1000);
        console.log('Initialization complete');
    } catch (error) {
        console.error('Initialization failed:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    init().catch(console.error);
});