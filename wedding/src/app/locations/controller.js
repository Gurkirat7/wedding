angular.module("app", ['bootstrapLightbox']);

angular.module('app').controller('GalleryCtrl', function ($scope, Lightbox) {
 
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal(images, index);
  };
});