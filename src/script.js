$(document).foundation();

$('#trackingForm')
  .on('invalid', function () {
    $( "#result" ).hide();
  })
  .on('valid', function () {
    $( "#result" ).show();
  });

function Controller($scope) {
  $scope.link = {};
  $scope.link.url = "";
  $scope.link.utmCampaign = "";
  $scope.link.utmSource = "";
  $scope.link.utmContent = "";
  $scope.finalLink = function() {
    if ($scope.link.utmContent == "") {
      return $scope.link.url + "?utm_campaign=" + $scope.link.utmCampaign + "&utm_source=" + $scope.link.utmSource;
    }
    else {
      return $scope.link.url + "?utm_campaign=" + $scope.link.utmCampaign + "&utm_source=" + $scope.link.utmSource + "&utm_content=" + $scope.link.utmContent;
    }
  }
}
