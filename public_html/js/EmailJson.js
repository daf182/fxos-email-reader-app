/**
 * json REST service to fetch dummy data from learn.knockoutjs.com.
 * @author Gergo Nagy
 * @type @exp;angular@call;module
 */
var emailJsonService = angular.module('emailJsonService', ['ngResource']);
emailJsonService.factory('EmailJson', ['$resource',
    function($resource) {
        var foldersClient = $resource('http://email-reader.appspot.com/emailreader?folder=:folder', {}, {
                    query: {method:'GET', params:{folder : 'Inbox'}}
                });
        var mailClient = $resource('http://email-reader.appspot.com/emailreader?mailId=:mailId', {}, {
                    query: {method:'GET', params:{mailId: 0}}
                    });
        
        return {
            getFolderByName : function (folder) {
                return foldersClient.get({folder : folder});
            },
            getEmailById : function (emailId) {
                return mailClient.get({mailId : emailId});
            }
        };
}]);

