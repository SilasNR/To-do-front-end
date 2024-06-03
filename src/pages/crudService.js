import axios from 'axios';

const API_URL = 'https://crudcrud.com/0f4bd3a7cab144a59fc3cee182c79939/items';

const getItems = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const createItem = async (item) => {
    const response = await axios.post(API_URL, item);
    return response.data;
};

const updateItem = async (id, item) => {
    const response = await axios.put(`${API_URL}/${id}`, item);
    return response.data;
};

const deleteItem = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export { getItems, createItem, updateItem, deleteItem };