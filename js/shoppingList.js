export function shoppingList(products) {
    const info = `Jūsų prekių krepšelyje yra ${products.length} prekės:`;

    const Pavadinimas = [
        'Pavadinimas',
        'Kiekis',
        'Vieneto kaina',
        'Viso mokėti'
    ];

    const details = products.map((product, index) => {
        return `${index + 1}. ${product.name}   ${product.amount} vnt   ${formatPrice(product.unitPrice)}   ${formatPrice(product.amount * product.unitPrice)}`;
    });

    return [info, Pavadinimas.join('   '), ...details].join('\n');
}

function formatPrice(price) {
    return (price / 100).toFixed(2) + ' Eur';
}
