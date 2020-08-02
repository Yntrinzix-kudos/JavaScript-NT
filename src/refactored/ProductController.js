import 'angular';

const app = angular.module('main',[]);

export const productController = (productsData) => {

    app.controller('ProductData', productsData);

    productsData.$inject = ['$scope'];

}