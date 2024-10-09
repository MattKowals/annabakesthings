import { createStore as _createStore } from 'vuex';

export function createStore() {
    return _createStore({
        state: {
            standardBreads: [
                {
                    name: "bread1",
                    img: "../assets/bread1.jpg",
                    ingredients: "ingredients1",
                    price: "price1",
                    description: "desc1"
                },
                {
                    name: "bread2",
                    img: "../assets/bread2.jpg",
                    ingredients: "ingredients2",
                    price: "price2",
                    description: "desc2"
                },
                {
                    name: "bread3",
                    img: "img3",
                    ingredients: "ingredients3",
                    price: "price3",
                    description: "desc3"
                },
                {
                    name: "bread4",
                    img: "img4",
                    ingredients: "ingredients4",
                    price: "price4",
                    description: "desc4"
                },
                {
                    name: "bread5",
                    img: "img5",
                    ingredients: "ingredients5",
                    price: "price5",
                    description: "desc5"
                },
                
            ],
            specialtyBreads: [
                {
                    name: "spec-bread1",
                    img: "spec-img1",
                    ingredients: "spec-ingredients1",
                    price: "spec-price1",
                    description: "desc1"
                },
                {
                    name: "spec-bread2",
                    img: "spec-img2",
                    ingredients: "spec-ingredients2",
                    price: "spec-price2",
                    description: "desc2"
                },
                {
                    name: "spec-bread3",
                    img: "spec-img3",
                    ingredients: "spec-ingredients3",
                    price: "spec-price3",
                    description: "desc3"
                },
            ],
            bakedGoods: [
                {
                    name: "baked-good1",
                    img: "baked-good-img1",
                    ingredients: "baked-good-ingredients1",
                    price: "baked-good-price1",
                    description: "desc1"
                },
            ],
        },
        mutations: {

        },
        strict: true
    })
}