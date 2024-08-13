export function shoppingList(cart) {
    if (cart.length === 0) {
        return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
    }

    const title = "Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti";
    const line = "-----------------------------------------------------------";

    const cartDetails = cart.map((item, index) => {
        const totalPrice = (item.unitPrice * item.amount / 100).toFixed(2);
        const unitPrice = (item.unitPrice / 100).toFixed(2);
        
        return `${index + 1}. ${item.name} | ${item.amount} vnt | ${unitPrice} Eur      | ${totalPrice} Eur`;
    });

    return `Jūsų prekių krepšelyje yra ${cart.length} prekės:\n${line}\n${title}\n${line}\n${cartDetails.join('\n')}\n${line}`;
}
