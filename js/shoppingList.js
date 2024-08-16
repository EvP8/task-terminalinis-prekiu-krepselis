// js/shoppingList.js

export function shoppingList(products) {
    if (products.length === 0) {
        return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
    }

    const title = `
Jūsų prekių krepšelyje yra ${products.length} prekės:
${'-'.repeat(62)}
Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti
${'-'.repeat(62)}
    `.trim();

    const rows = products.map((product, index) => {
        const total = formatPrice(product.amount * product.unitPrice);
        return `${padRight(index + 1 + '. ' + product.name, 12)}| ${padRight(product.amount + ' vnt', 11)}| ${padRight(formatPrice(product.unitPrice), 14)}| ${total}`;
    });

    const dash = `${'-'.repeat(62)}`;

    return [title, ...rows, dash].join("\n");
}

function formatPrice(price) {
    return (price / 100).toFixed(2) + " Eur";
}

function padRight(str, length) {
    return str + ' '.repeat(length - str.length);
}
