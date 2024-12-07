const axios = require('axios');
const { mapSearchResults, mapItemDetails } = require('../utils/mappers');
const { apiBaseSearch, apiBaseDetail } = require("../config/index")

const fetchItems = async (query) => {
    const response = await axios.get(`${apiBaseSearch}?q=${query}`);
    return mapSearchResults(response.data);
};

const fetchItemDetails = async (id) => {
    const [itemResponse, descriptionResponse] = await Promise.all([
        axios.get(`${apiBaseDetail}/${id}`),
        axios.get(`${apiBaseDetail}/${id}/description`)
    ]);

    return mapItemDetails(itemResponse.data, descriptionResponse.data);
};

module.exports = {
    fetchItems,
    fetchItemDetails
};