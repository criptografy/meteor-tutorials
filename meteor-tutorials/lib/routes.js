import {FlowRouter} from 'meteor/kadira:flow-router';
import {GAnlytics} from 'meteor/datariot:ganalytics';

if(Meteor.isClient) {
//this is made possible because of the package gwendall:auth-client-callbacks
    Accounts.onLogin(function () {
        FlowRouter.go('recipe-book');
    });

    Accounts.onLogout(function () {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context,redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/',{
    name:'home',
    action(){
        if(Meteor.userId()){
            FlowRouter.go('recipe-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book',{
    name:'recipe-book',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'RecipeList'});
    }
});

FlowRouter.route('/recipe/:id',{
    name:'recipe',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'RecipeView'});
    }
});

FlowRouter.route('/menu',{
    name:'menu',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'Menu'});
    }
});

FlowRouter.route('/shopping-list',{
    name:'shopping-list',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'ShoppingList'});
    }
});