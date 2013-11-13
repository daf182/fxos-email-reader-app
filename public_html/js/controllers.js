/**
 * Firefox OS Email Reader open web app.
 * @author Gergo Nagy
 * @type @exp;angular@call;module
 */
var fxosEmailReader = angular.module('fxosEmailReader', ['emailJsonService', 'ngSanitize']);

fxosEmailReader.controller('EmailListCtrl', [
    '$scope', 'EmailJson',
    function EmailListCtrl($scope, EmailJson) {
        var deck =  document.getElementById("deck");
        var backHeader = document.getElementById("backHeader");
        $scope.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
        $scope.selectedFolder = 'Inbox';
        $scope.chosenMailData = null;

        $scope.goToFolder = function (folder) {
            $scope.selectedFolder = folder;
            $scope.chosenMailData = null;
            $scope.chosenFolderData = EmailJson.getFolderByName(folder);
        };
        $scope.goToEmail = function (mail) {
            deck.shuffleNext();
            var a = EmailJson.getEmailById(mail.id);
            $scope.chosenMailData = a;
        };
        
        backHeader.addEventListener('click', function(e){
            e.preventDefault();
            deck.shufflePrev();
            goToFolder(self.lastView);
        }, false);
        $scope.chosenFolderData = EmailJson.getFolderByName('Inbox');
}]);
