import {Template} from 'meteor/templating';

Template.Menu.onCreated(function onCreated() {
    //We subscribe the template to the the subscription
    var self = this;
    self.autorun(function(){
        self.subscribe('myRecipes');
    });
});

Template.Menu.helpers({
    recipes(){
        return Recipes.find({inMenu:true});
    }
});





