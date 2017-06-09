import {Template} from 'meteor/templating';

Template.RecipeView.onCreated(function onCreated() {
    //We subscribe the template to the the subscription
    var self = this;
    self.autorun(function(){
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe',id);
    });
});

Template.RecipeView.helpers({
    recipe(){
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({_id:id});
    }
})





