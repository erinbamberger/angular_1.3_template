 /****************************************************************************************
 *
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./module'], function (factories) {
    factories.factory('sampleFactory', ['$http', function ($http) {
        var sampleFactory = {
            sampleFunction : function() {
                return $http({
                    url: '././data/sampleData.json',
                    method: 'GET'
                }).then(function (response) {
                    return response;
                });
            }
        };
        return sampleFactory;
    }]);
 });