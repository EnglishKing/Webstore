(function(){
    
    //....................MODULES....................
    
    //StoreModule
    var app = angular.module('store',[]);
    
    
    //.....................DATA.......................
    
    //GemData
    var gems = [{
        name : "Ruby",
        price : "100",
        description : "Ruby is very precious stone",
        image : "./images/image1.JPG",
        reviews: ["This is an excellent ruby",
                  "This is second review of ruby"]
    },{
        name : "Pearl",
        price : "200",
        description : "Pearl is very precious gem",
        image : "./images/image2.JPG",
        reviews: ["This is an excellent pearl",
                 "This is second review of pearl"]
    }];
    
    //....................CONTROLLERS..................
    
    //StoreController
    app.controller('StoreController',function(){
        this.products = gems;
    });
    
    
    //TabController
    app.controller('TabController',function(){
        this.tab = 1;
        
        this.setTab = function(tabValue){
            this.tab = tabValue;
        }
        
        this.isTabSelected = function(tabValue){
            return (tabValue===this.tab);
        }
    });
    
    //ReviewController
    app.controller("ReviewController",function(){
        this.newReview = '';
        
        this.addReview = function(product){
            product.reviews.push(this.newReview);
            this.newReview = '';
        }
    });
    
})();