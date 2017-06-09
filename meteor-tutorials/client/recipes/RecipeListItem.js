import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';

Template.RecipeListItem.onCreated(function () {
    this.editMode = new ReactiveVar(false);

});

Template.RecipeListItem.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function () {
        Meteor.call('deleteRecipe', this._id);
    },
    'click .fa-pencil': function (event, template) {
        template.editMode.set(!template.editMode.get());
    }
});

Template.RecipeListItem.helpers({
    updateRecipeId(){
        return this._id;
    },
    editMode(){
        return Template.instance().editMode.get();
    }
});