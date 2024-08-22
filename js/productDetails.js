import { formatPrice, padRight, createLine, getLineWidth } from './utils.js';

export function productDetails(products, productId) {
    const product = products.find(p => p.id === productId);

    if (!product) {
        return `Prekė, su ID: ${productId} neegzistuoja.`;
    }

    const details = {
        ID: product.id,
        Pavadinimas: product.name,
        Kiekis: `${product.amount} vnt`,
        'Vieneto kaina': formatPrice(product.unitPrice),
        'Viso mokėti': formatPrice(product.amount * product.unitPrice)
    };

    const maxKeyLength = Math.max(...Object.keys(details).map(key => key.length)) + 2;
    const maxValueLength = Math.max(...Object.values(details).map(value => value.length)) + 2;

    const lineWidth = getLineWidth({ ID: maxKeyLength, Pavadinimas: maxKeyLength, Kiekis: maxKeyLength, 'Vieneto kaina': maxKeyLength, 'Viso mokėti': maxKeyLength }, 3);

    const formattedDetails = Object.entries(details).map(([key, value]) => 
        `${padRight(key, maxKeyLength)}| ${value}`
    ).join('\n');

    return `
${createLine(lineWidth)}
Prekės informacija
${createLine(lineWidth)}
${formattedDetails}
${createLine(lineWidth)}
    `.trim();
}
