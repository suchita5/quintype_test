var app = angular.module('myApp', ['ui.bootstrap']);
  app.controller('AccordionDemoCtrl', function($scope, $http){
    $scope.opened = function (groupname) {
      /*  */
    };

    var payload = new FormData();

    payload.append("city_id", "1");
    payload.append('pincode', "560010");

    $http({
        method : "POST",
        data: payload,
        transformRequest: angular.identity,
        headers: {
            'Content-Type': undefined,
            "pf": "2",
            "token": "abcde123"
          },
        url : "http://v2.20160301.testing.bro4u.com/v2/Rest/index.php/category/categories"
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
        console.log("http");
        console.log(response.data.main_cat_array);
        $scope.groups1 = response.data.main_cat_array;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
        console.log("error");
    });
   console.log($scope.groups1);
  });

        var accView1 = "";
        var accBuild1 = function (){
              accView1 = accView1 + '<div class="panel-group">';
              // for(var ab in $scope.groups1){}
              accView1 = accView1 + '<div ng-repeat="x in groups1" class="panel panel-default first-panel"> <div ng-if="x.sub_cat_array.length > 0"> <div class="panel-heading"> <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse{{x.main_cat_id}}">{{x.main_cat_name}}</a></h4></div><div id="collapse{{x.main_cat_id}}" class="panel-collapse collapse"> <div class="panel-body"> <div ng-repeat="y in x.sub_cat_array" class="panel panel-default"> <div ng-if="y.sub_option.length > 0"> <div class="panel-heading"> <span><img src="image/tap.jpg" alt="sss"></span> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion{{y.cat_id}}" href="#subcollapse{{y.cat_id}}">{{y.cat_name}}</a> </h4> </div><div id="subcollapse{{y.cat_id}}" class="panel-collapse collapse"> <div class="panel-body">djhsdfkd</div></div></div><div ng-if="y.sub_option.length==0"> <div class="panel-heading"><span><img src="image/tap.jpg" alt="sss"></span> <h4 class="panel-title">{{y.cat_name}}</h4> </div></div></div></div></div></div><div ng-if="x.sub_cat_array.length==0"> <div class="panel-heading"> <h4 class="panel-title">{{x.main_cat_name}}</h4></div></div></div>'; 
        }
        
        accBuild1();
       /* alert(accView);*/
        document.all.MainMenu.innerHTML =accView1;