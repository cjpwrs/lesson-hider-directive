/**
 * Created by cjpowers on 5/31/16.
 */
angular.module('directivePractice').controller('lessonCtrl', function ($scope) {
    $scope.name = 'CJ';
    $scope.test = 'Two way data binding';
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    $scope.announceDay = function(lesson, day){
        alert(lesson + ' is active on ' + day + '.');
    };
    $scope.removeLesson = function(lesson){
        for(var i = 0; i < $scope.lessons.length; i++){
            console.log('removing');
            if(lesson === $scope.lessons[i]){
                $scope.lessons.splice(i, 1);
            }
        }
    }
});