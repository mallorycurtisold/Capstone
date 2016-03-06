"use strict";angular.module("capstoneApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("capstoneApp").controller("MainCtrl",["$scope","flickr","soundcloud","viewPhoto",function(a,b,c,d){a.fetchData=function(){a.music=c.query({userId:a.bandname}),console.log(a.music),a.photo=b.query({tags:a.bandname}),console.log(a.photo),a.photoviewer=d.query({photoID:a.bandname}),console.log(a.photoviewer)},$(".btn-primary").on("click",function(a){console.log(a);var b=a.target,c=b.parentElement.parentElement.parentElement;$(c).find(".mainSearch").each(function(a,b){$(b).is(":visible")&&($(b).slideUp("slow",0),$(".teaser").fadeIn("slow"),$(".results").fadeIn("slow"))})})}]),angular.module("capstoneApp").factory("soundcloud",["$resource",function(a){return a("http://api.soundcloud.com/users/:userId?client_id=d12653efcff146eb581f2df668863c19",{},{query:{method:"GET",params:{userId:"Chvrches"}}})}]),angular.module("capstoneApp").factory("flickr",["$resource",function(a){return a("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=43cae9827f976a2192f6b8dd2d0ec959&tags=:tags&format=json&nojsoncallback=1",{},{query:{method:"GET",params:{tags:""}}})}]),angular.module("capstoneApp").factory("viewPhoto",["$resource",function(a){return a("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=43cae9827f976a2192f6b8dd2d0ec959&photo_id=:photoID&format=json&nojsoncallback=1",{},{query:{method:"GET",params:{photoID:""}}})}]),angular.module("capstoneApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="mainBody" ng-controller="MainCtrl"> <div> <div class="module mainSearch"> <h2> Find a Band</h2> <input type="text" name="bandname" ng-model="bandname" placeholder="Band Name"> <button type="button" class="btn btn-sm btn-primary" ng-click="fetchData()"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button> </div> <div class="teaser"> <nav class="navbar navbar-default navbar-fixed-bottom" id="hiddenNavbar"> <a class="navbar-brand" href="#"> Mallory Curtis - Seattle University Web Development Capstone Project</a> <form class="navbar-form navbar-right" role="search"> <div class="form-group"> <input type="text" name="bandname" ng-model="bandname" class="form-control" placeholder="New Band Search"> </div> <button type="button" class="btn btn-sm btn-primary" ng-click="fetchData()"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button> </form> </nav> </div> </div> <div class="row"> <div class="col-md-12" id="title"> <div ng-bind="userId in music"> <h2>{{music.username}}</h2> </div> </div> </div> <div class="results"> <div class="row"> <div class="col-md-4 col-lg-4 col-sm-4"> <div ng-bind="userId in music"> <img class="bandImage" src="{{music.avatar_url}}"> <p><a src="{{music.website}}">{{music.website}}</a></p><p> </p><p>Followers: {{music.followers_count}}</p> <p>Track Count: {{music.track_count}}</p> <p><a src="{{music.permalink_url}}">View Soundcloud Page</a></p> </div> </div> <div class="col-md-8 col-lg-8 col-sm-8"> <p class="lead"> <div ng-repeat="tags in [0,1,2,3,4,5,6,7,8] track by $index"> <div class="col-md-4 col-lg-4 col-sm-4"> <img class="resultsImages" src="https://farm{{photo.photos.photo[tags].farm}}.staticflickr.com/{{photo.photos.photo[tags].server}}/{{photo.photos.photo[tags].id}}_{{photo.photos.photo[tags].secret}}_q.jpg"> <h5 class="resultsImages-content">{{photo.photos.photo[tags].title}}</h5> </div> </div> </p> </div> </div> </div> </div>')}]);