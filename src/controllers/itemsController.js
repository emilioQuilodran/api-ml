const itemService = require('../services/itemService');

const author = {
    name: 'Emilio',
    lastname: 'Quilodran'
};

const searchItems = async (req, res) => {
    const query = req.query.q;
    try {
        const { categories, items } = await itemService.fetchItems(query);
        res.json({ author, categories, items });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
};

const getItemDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const itemDetails = await itemService.fetchItemDetails(id);
        res.json({ author, item: itemDetails });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching item details' });
    }
};

module.exports = {
    searchItems,
    getItemDetails
};