/**
 * Created by cjpowers on 5/31/16.
 */
angular.module('directivePractice').directive('lessonHider', function(){
    return {
        restrict: 'E',
        templateUrl: './lessonHider.html',
        scope: {
            lesson: '=',
            dayAlert: '&',
            remover: '&'
        },
        controller: function($scope, lessonService){
            $scope.getSchedule = lessonService.getSchedule();
            $scope.checkbox = false;


        },
        link: function(scope, element, attr){
            console.log(attr);
            scope.getSchedule.then(function(response){
                scope.schedule = response.data;
                    for (var i2 = 0; i2 < scope.schedule.length; i2++){

                        if(scope.lesson===scope.schedule[i2].lesson){
                            scope.lessonDay = scope.schedule[i2].weekday;
                            element.css({'text-decoration': 'line-through'});
                            return;
                        }
                        else(scope.lessonDay = 'This is not currently on the schedule');
                    }

            });
            scope.toggler = function(){
                if(scope.checkbox == true){
                    element.css({'text-decoration': 'line-through'});
                }
                else(element.css({'text-decoration': 'none'}));
            }

        }

    };
});