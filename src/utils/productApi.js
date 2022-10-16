import { post, get } from './ApiCaller';

const productApi = {
    placeOrder: (cart = [], restuarantId) => {
        const url = `/orders/`;
        return post(url, { cart, restuarantId });
    },
    startBattle: (id, token) => {
        const url = `/battle/start/${id}`;
        return get(url, {}, { authorization: token });
    },
    getAllProduct: () => {
        const url = `/product/list-all`;
        return get(url, {}, {});
    },
};

export default productApi;
