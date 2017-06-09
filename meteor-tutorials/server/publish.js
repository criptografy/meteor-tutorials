import {Meteor} from 'meteor/meteor';

Meteor.publish('myRecipes', function () {
    return Recipes.find({author:this.userId});
});

Meteor.publish('singleRecipe', function (id) {
    check(id, String);
    return Recipes.find({_id:id});
});