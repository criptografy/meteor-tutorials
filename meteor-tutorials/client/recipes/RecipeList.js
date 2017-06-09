import {Template} from 'meteor/templating';

Template.RecipeList.onCreated(function onCreated() {
    //We subscribe the template to the the subscription
    var self = this;
    self.autorun(function(){
        self.subscribe('myRecipes');
    });
});

Template.RecipeList.helpers({
    recipes(){
        return Recipes.find({});
    }
});

Template.RecipeList.events({
    'click .new-recipe'(){
        Session.set('newRecipe',true);
    }
});





