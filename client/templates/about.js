Template.about.onCreated(function(){

});

Template.about.helpers({
    version: function(){
        return Version.findOne({_id:"versionInfo"}).number;
    },
    branch: function(){
        return Version.findOne({_id:"versionInfo"}).branch;
    },
    updateAvailable: function(){
        return Version.findOne({_id:"versionInfo"}).updateAvailable;
    },
    url: function () {
         return Meteor.absoluteUrl();
     }
});
