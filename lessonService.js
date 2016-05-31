/**
 * Created by cjpowers on 5/31/16.
 */
angular.module('directivePractice').service('lessonService', function($http){
    this.getSchedule = function(){
        return $http.get('schedule.json');
    }
});