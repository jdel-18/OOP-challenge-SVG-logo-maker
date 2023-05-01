function renderLogoShape(shape) {
    if(shape === 'square') {
        return '<rect x="10" y="10" width="80" height="60" fill="#f00" stroke="#000" stroke-width="2"/>';
    }
}
function renderLogoShape(shape) {
    if(shape === 'circle') {
        return '<circle cx="50" cy="50" r="40" fill="#0f0" stroke="#000" stroke-width="2"/>';
    }
}
function renderLogoShape(shape) {
    if(shape === 'triangle') {
        return '<polygon points="10,70 50,10 90,70" fill="#00f" stroke="#000" stroke-width="2"/>';
    }
}

function generateLogo(data) {
    const initials = data.initials.toUpperCase();
    const initialsColor = data['initials-color'];
    const shape = data.shape;
    const shapeColor = data['shape-color'];

    const shapeSVG = renderLogoShape(shape);
    const initialsSVG = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="50" font-weight="bold" fill="${initialsColor}">${initials}</text>`;

    const logoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="300">
                        ${shapeSVG}
                        ${initialsSVG}
                    </svg>`;

    return logoSVG;
}
