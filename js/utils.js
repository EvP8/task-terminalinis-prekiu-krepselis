export function padRight(str, length) {
    return str.padEnd(length);
}

export function formatPrice(price) {
    return (price / 100).toFixed(2) + " Eur";
}

export function getCorrectWordForm(amount, singular, few, plural) {
    if (amount === 1) return singular;
    if (amount > 1 && amount < 10) return few;
    return plural;
}

export function getUnitForm(amount) {
    return amount === 1 ? 'vnt' : 'vnt';
}

export function getColumnWidths(products, headers) {
    const columnWidths = { 
        name: headers.name.length, 
        amount: headers.amount.length, 
        unitPrice: headers.unitPrice.length, 
        totalPrice: headers.totalPrice.length 
    };

    products.forEach(product => {
        columnWidths.name = Math.max(columnWidths.name, product.name.length);
        columnWidths.amount = Math.max(columnWidths.amount, String(product.amount).length + 4);
        columnWidths.unitPrice = Math.max(columnWidths.unitPrice, formatPrice(product.unitPrice).length);
        columnWidths.totalPrice = Math.max(columnWidths.totalPrice, formatPrice(product.amount * product.unitPrice).length);
    });

    return columnWidths;
}

export function createLine(width, char = '-') {
    return char.repeat(width);
}
