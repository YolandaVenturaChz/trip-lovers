$(document).ready(begin);
function begin() {
  console.log(socialNetData);
  function getFriends() {
    return socialNetData;
  }
  var dataFriends = getFriends();
  var arrFriends = dataFriends.AMIGOS;
  var $boxFriends = $('.small');
  var $boxFriendsDetails = $('.media-body');
  function showFriends() {
    var str = '';
    for (var i = 0; i < arrFriends.length; i++) {
      var place = '<div class="card mb-2">' +
        '<a href="#"> <img class="card-img-top img-fluid w-100" src="' + arrFriends[i].photo + '" alt="' + arrFriends[i].name + '"></a>' +
        '<div class="card-body d-flex justify-content-between">' +
        '<h6 class="card-title mb-1 d-inline">' +
        '<a href="#">' + arrFriends[i].name + 
        '</a></h6></div></div>';
      str += place;
    }
    $boxFriends.html(str);
  }

  function showDetailsFriends() {
    var strDetails = '';
    for (var i = 0; i < arrFriends.length; i++) {
      var details = '<spam>' + arrFriends[i].name + '"></spam>';
      str += strDetails;
    }
    $boxFriendsDetails.html(strDetails);
  }

  showFriends();
  showDetailsFriends();
}