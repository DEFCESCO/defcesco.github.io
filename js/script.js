document.addEventListener('DOMContentLoaded', function() {
    const verticalCableContainer = document.querySelector('.vertical-cables');
    if (verticalCableContainer) {
        const numCables = 30;
        const archHeight = 120; // From CSS

        for (let i = 1; i < numCables; i++) {
            const cable = document.createElement('span');
            const position = i / numCables;

            // Parabolic curve for the top of the cable
            const x = (position - 0.5) * 2; // Map to -1 to 1
            const y_parabola = x * x; // y = x^2 parabola, 0 at center, 1 at edges

            const cableTop = y_parabola * archHeight;
            const cableHeight = archHeight - cableTop;

            cable.style.top = `${cableTop}px`;
            cable.style.height = `${cableHeight}px`;
            cable.style.left = `${position * 100}%`;

            verticalCableContainer.appendChild(cable);
        }
    }
});
