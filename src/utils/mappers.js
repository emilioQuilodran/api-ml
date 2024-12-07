const mapSearchResults = (data) => {
    const categories = data.filters.map(filter => filter.id);
    const items = data.results.slice(0, 4).map(item => ({
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 0
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
    }));

    return { categories, items };
};

const mapItemDetails = (item, description) => ({
    id: item.id,
    title: item.title,
    price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0 
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description.plain_text
});

module.exports = {
    mapSearchResults,
    mapItemDetails
};