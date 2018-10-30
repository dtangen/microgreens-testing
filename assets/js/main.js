$(document).ready(function () {

    var products = [
        {
            "id": 1,
            "productName": "Arugula Microgreens",
            "image": "https://koenigandhill.com/wp-content/uploads/2017/11/arugulamicrogreens-768x576.jpg",
            "price": "4.50"
        },
        {
            "id": 2,
            "productName": "Broccoli Microgreens",
            "image": "https://koenigandhill.com/wp-content/uploads/2017/11/broccolimicrogreens-768x513.jpg",
            "price": "4.50"
        }
    ]
        console.log(products.length);
    // function displayProductInfo(products) {
        for (var i = 0; i < products.length; i++) {
            $(".productInfo").append(products[i].productName);
            console.log(products[i].productName);
        }
    

    // displayProductInfo(products);
})