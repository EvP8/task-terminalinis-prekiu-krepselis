import { formatPrice, padRight, createLine, getLineWidth } from './utils.js';

export function shoppingList(products) {
    if (products.length === 0) {
        return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
    }

    const headers = {
        name: 'Pavadinimas',
        amount: 'Kiekis',
        unitPrice: 'Vieneto kaina',
        totalPrice: 'Viso mokėti'
    };

    const columnWidths = {
        name: Math.max(...products.map(p => p.name.length), headers.name.length) + 2,
        amount: Math.max(...products.map(p => String(p.amount).length + 4), headers.amount.length) + 2,
        unitPrice: Math.max(...products.map(p => formatPrice(p.unitPrice).length), headers.unitPrice.length) + 2,
        totalPrice: Math.max(...products.map(p => formatPrice(p.amount * p.unitPrice).length), headers.totalPrice.length) + 2
    };

    const lineWidth = getLineWidth(columnWidths, 9);

    const title = `
Jūsų prekių krepšelyje yra ${products.length} prekės:
${createLine(lineWidth)}
${padRight(headers.name, columnWidths.name)}| ${padRight(headers.amount, columnWidths.amount)}| ${padRight(headers.unitPrice, columnWidths.unitPrice)}| ${padRight(headers.totalPrice, columnWidths.totalPrice)}
${createLine(lineWidth)}
    `.trim();

    const rows = products.map((product, index) => {
        const total = formatPrice(product.amount * product.unitPrice);
        return `${padRight(index + 1 + '. ' + product.name, columnWidths.name)}| ${padRight(product.amount + ' vnt', columnWidths.amount)}| ${padRight(formatPrice(product.unitPrice), columnWidths.unitPrice)}| ${padRight(total, columnWidths.totalPrice)}`;
    });

    const dash = `${createLine(lineWidth)}`;

    return [title, ...rows, dash].join("\n");
}
