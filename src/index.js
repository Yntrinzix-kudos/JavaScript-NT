import {productController} from './refactored/ProductController'
import {
    addProductType, 
    mergeProducts, 
    currencies, 
    formatCurrencyPrice
} from'./refactored/Products.js';

const lawnMowerType = addProductType(new LawnmowerRepository().getAll(), 'Lawnmower');
const phoneCaseType = addProductType(new PhoneCaseRepository().getAll(), 'Phone Case');
const tShirtType = addProductType(new TShirtRepository().getAll(), 'T-Shirt');
const productTypes = [lawnMowerType, phoneCaseType, tShirtType];
const products = mergeProducts(productTypes)

function ProductsData ($scope){

    $scope.currencies = currencies;

    $scope.products = products;

    $scope.formatCurrencyPrice = formatCurrencyPrice
    
}

productController(ProductsData)

