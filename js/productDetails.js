export function productDetails(products, id) {
    const product = products.find(p => p.id === id);

    if (!product) {
        return `Prekė, su ID: ${id} neegzistuoja.`;
    }

    return [
        `ID            ${product.id}`,
        `Pavadinimas   ${product.name}`,
        `Kiekis        ${product.amount} vnt`,
        `Vieneto kaina ${formatPrice(product.unitPrice)}`,
        `Viso mokėti   ${formatPrice(product.amount * product.unitPrice)}`
    ].join('\n');
}

function formatPrice(price) {
    return (price / 100).toFixed(2) + ' Eur';
}
