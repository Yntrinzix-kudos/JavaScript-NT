import 'angular';
import {
    addProductType, 
    mergeProducts, 
    currencies, 
    formatCurrencyPrice
} from'./refactored/Products.js';

const app = angular.module('main',[]);

            
app.controller('ProductData', ProductsData)


function ProductsData ($scope){

    $scope.currencies = currencies;

    $scope.products = mergeProducts([

		addProductType(new LawnmowerRepository().getAll(), 'Lawnmower'),
		addProductType(new PhoneCaseRepository().getAll(), 'Phone Case'),
        addProductType(new TShirtRepository().getAll(), 'T-Shirt'),
        
    ])

    $scope.formatCurrencyPrice = formatCurrencyPrice
    
}

ProductsData.$inject = ['$scope'];