export function padRight(str, length) {
    return str.padEnd(length);
}

export function formatPrice(price) {
    return (price / 100).toFixed(2) + " Eur";
}

export function createLine(width, char = '-') {
    return char.repeat(width);
}

export function getLineWidth(columnWidths, extraPadding = 0) {
    return Object.values(columnWidths).reduce((sum, width) => sum + width) + extraPadding;
}
