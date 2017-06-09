import {Template} from 'meteor/templating';

Template.ShoppingList.onCreated(function onCreated() {
    //We subscribe the template to the the subscription
    var self = this;
    self.autorun(function(){
        self.subscribe('myRecipes');
    });
});

Template.ShoppingList.helpers({
    shoppingList(){
        return Recipes.find({inMenu:true});
    }
});