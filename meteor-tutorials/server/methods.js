import {Meteor} from 'meteor/meteor';

Meteor.methods({
    toggleMenuItem: function(recipeId,currentState){
        Recipes.update(recipeId,{
            $set:{
                inMenu:!currentState
            }
        })
    },
    deleteRecipe: function(recipeId){
        Recipes.remove(recipeId);
    }
});