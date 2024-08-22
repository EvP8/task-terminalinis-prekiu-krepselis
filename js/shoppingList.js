import { formatPrice, padRight, getCorrectWordForm, getUnitForm, getColumnWidths, createLine } from './utils.js';

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

    const columnWidths = getColumnWidths(products, headers);
    const lineWidth = Object.values(columnWidths).reduce((sum, width) => sum + width) + 9;

    const title = `
Jūsų prekių krepšelyje yra ${products.length} ${getCorrectWordForm(products.length, 'prekė', 'prekės', 'prekių')}:
${createLine(lineWidth)}
${padRight(headers.name, columnWidths.name)}| ${padRight(headers.amount, columnWidths.amount)}| ${padRight(headers.unitPrice, columnWidths.unitPrice)}| ${padRight(headers.totalPrice, columnWidths.totalPrice)}
${createLine(lineWidth)}
    `.trim();

    const rows = products.map((product, index) => {
        const total = formatPrice(product.amount * product.unitPrice);
        return `${padRight(index + 1 + '. ' + product.name, columnWidths.name)}| ${padRight(product.amount + ' ' + getUnitForm(product.amount), columnWidths.amount)}| ${padRight(formatPrice(product.unitPrice), columnWidths.unitPrice)}| ${padRight(total, columnWidths.totalPrice)}`;
    });

    return [title, ...rows, createLine(lineWidth)].join("\n");
}
