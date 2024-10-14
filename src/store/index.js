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
                    netWeight: "",
                    description: "desc1"
                },
                {
                    name: "bread2",
                    img: "../assets/bread2.jpg",
                    ingredients: "ingredients2",
                    price: "price2",
                    netWeight: "",
                    description: "desc2"
                },
                {
                    name: "Apple Thyme",
                    img: "img3",
                    ingredients: " AP flour (unbleached hard red wheat flour, enzyme or malted barley flour), apples, milk, canola oil, almonds, sugar, vanilla extract (water, sugar, glycerin, vanilla extract, alcohol, natural flavors, fruit juice),  thyme, salt, yeast",
                    price: "price3",
                    netWeight: "31oz/880g",
                    description: "Apple Thyme Loaf"
                },
                {
                    name: "Chocolate Orange Loaf",
                    img: "img4",
                    ingredients: "AP flour (unbleached hard red wheat flour, enzyme or malted barley flour), water, sweet chocolate (sugar, chocolate liquor, cocoa butter, butterfat, soy lecithin, natural flavor), 100% hard red wheat flour, dutch process cocoa powder, orange zest, salt, yeast",
                    price: "price4",
                    netWeight: "18oz/520g",
                    description: "Chocolate Orange Loaf"
                },
                {
                    name: "Curry & Date",
                    img: "img5",
                    ingredients: "Bread flour(unbleached hard red wheat flour, enzyme or malted barley flour), AP flour (unbleached hard red wheat flour, enzyme or malted barley flour), Medjool dates, honey, coconut oil, curry powder, salt, yeast",
                    price: "price5",
                    netWeight: "560g/19oz",
                    description: "Curry and Date Loaf"
                },
                {
                    name: "NY Deli Style Rye",
                    img: "../assets/bread1.jpg",
                    ingredients: "Bread flour (unbleached hard red wheat flour, enzyme or malted barley flour), water,100% organic dark rye flour, caraway seeds, salt, yeast",
                    price: "price1",
                    netWeight: "760g/26OZ",
                    description: "NY Deli Rye"
                },
                {
                    name: "Roasted Garlic and Herb",
                    img: "../assets/bread1.jpg",
                    ingredients: "Bread flour (unbleached hard red wheat flour, enzyme or malted barley flakes), water, herb blend (could contain any combination of the following – parsley, rosemary, chives, oregano, thyme, basil), roasted garlic, salt, yeast",
                    price: "price1",
                    netWeight: "625g/22OZ",
                    description: "Roasted Garlic and Herb Loaf"
                },
                {
                    name: "Honey Wheat Loaf",
                    img: "../assets/bread1.jpg",
                    ingredients: "All purpose flour (unbleached hard red wheat flour, enzyme or malted barley flour), 100% hard red wheat flour, water, honey, cornmeal (whole grain corn), salt, yeast",
                    price: "price1",
                    netWeight: "740g/26OZ",
                    description: "Honey Wheat"
                },
                {
                    name: "Icelandic Rye",
                    img: "../assets/bread1.jpg",
                    ingredients: "Rye flour, buttermilk, molasses, honey, baking powder, salt, baking soda",
                    price: "price1",
                    netWeight: "565g",
                    description: "Icelandic Rye"
                },
                {
                    name: "Multigrain",
                    img: "../assets/bread1.jpg",
                    ingredients: "Bread flour (unbleached hard red wheat flour, enzyme or malted barley flour), water, multi-grain blend (millet, wheat flakes, oat groats, rye flakes, barley flakes, flaxseed, sunflower seeds, poppy seeds), salt, yeast",
                    price: "price1",
                    netWeight: "600g/21OZ",
                    description: "Multigrain"
                },
                {
                    name: "Otis Loaf",
                    img: "../assets/bread1.jpg",
                    ingredients: "Bread flour (unbleached hard red wheat flour, enzyme or malted barley flour), water, salt, yeast",
                    price: "price1",
                    netWeight: "700g/24OZ",
                    description: "Otis!"
                },
                {
                    name: "bread1",
                    img: "../assets/bread1.jpg",
                    ingredients: "",
                    price: "price1",
                    netWeight: "",
                    description: ""
                },
            ],
            specialtyBreads: [
                {
                    name: "Everything Bagel",
                    img: "spec-img1",
                    ingredients: "Bread flour (unbleached hard red wheat flour, enzyme or malted barley flour), water, everything bagel seasoning (garlic, poppy seed, salt, onion, sesame seed, sunflower oil & natural flavor), extra virgin olive oil, salt, yeast",
                    price: "spec-price1",
                    netWeight: "940g/33OZ or 560g/19OZ",
                    description: "Everything Bagel large and small sizes"
                },
                {
                    name: "Harvest Bread",
                    img: "spec-img2",
                    ingredients: "Water, bread flour(unbleached hard red wheat flour, enzyme or malted barley flour), 100% hard red wheat flour, walnuts, cranberries (cranberries, sugar, refined sunflower oil), golden raisins(raisins, sulfates), salt, yeast",
                    price: "spec-price2",
                    netWeight: "1000g/35OZ",
                    description: "Harvest Bread"
                },
                {
                    name: "Olive Loaf",
                    img: "spec-img3",
                    ingredients: "Bread flour (unbleached hard red wheat flour, enzyme or malted barley flour), water, olives, olive oil, oregano, salt, yeast",
                    price: "spec-price3",
                    netWeight: "800g/28OZ",
                    description: "Olive Loaf"
                },
                {
                    name: "Ploughman Sourdough",
                    img: "../assets/bread1.jpg",
                    ingredients: "Bread flour (unbleached hard red wheat flour, enzyme or malted barley flour), water, salt",
                    price: "price1",
                    netWeight: "680g/23OZ",
                    description: ""
                },
                {
                    name: "White Chocolate Brioche",
                    img: "../assets/bread1.jpg",
                    ingredients: "Bread flour(unbleached hard red wheat flour, enzyme or malted barley flour), water, white chocolate (sugar, palm kernel oil, white milk powder, nonfat dry milk, soy lecithin, vanilla extract, natural flavor), butter, sugar, milk powder, egg, honey, salt, yeast",
                    price: "price1",
                    netWeight: "310g/10oz",
                    description: "White Choc Brioche"
                },
            ],
            bakedGoods: [
                {
                    name: "Cinnamon Roll",
                    img: "baked-good-img1",
                    ingredients: "Bread flour(unbleached hard red wheat flour, enzyme or malted barley flour), milk, brown sugar, powdered sugar, butter(pasteurized cream, salt), sugar, cinnamon, yeast, salt, vanilla extract(water, sugar, glycerin, vanilla extract, alcohol, natural flavors, fruit juice)",
                    price: "baked-good-price1",
                    netWeight: "105g/3.5OZ",
                    description: "Cinny Roll"
                },
                {
                    name: "Pretzel Focaccia",
                    img: "../assets/bread1.jpg",
                    ingredients: "Bread flour(unbleached hard red wheat flour, enzyme or malted barley flour), water, extra virgin olive oil, egg, butter(pasteurized cream, salt), salt, yeast, baking soda",
                    price: "price1",
                    netWeight: "100G/3.5OZ",
                    description: "Pretzel Focaccia"
                },
            ],
        },
        mutations: {

        },
        strict: true
    })
}