// js/productDetails.js

export function productDetails(products, productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        return `Prekė, su ID: ${productId} neegzistuoja.`;
    }

    return `
${'-'.repeat(62)}
Prekės informacija
${'-'.repeat(62)}
ID            | ${product.id}
Pavadinimas   | ${product.name}
Kiekis        | ${product.amount} vnt
Vieneto kaina | ${formatPrice(product.unitPrice)}
Viso mokėti   | ${formatPrice(product.amount * product.unitPrice)}
${'-'.repeat(62)}
    `.trim();
}

function formatPrice(price) {
    return (price / 100).toFixed(2) + " Eur";
}
