$(document).ready(function() {
  $("#chat-btn").on ("click", function(e) {
    e.preventDefault();
    // login();
    if ($("#firechat-wrapper").hasClass("closed")) {
      $("#firechat-wrapper").removeClass("closed");
      $(".popup").css( "right", "10px" );
      $("#firechat-btn-rooms").css('display', 'none');
      $(".firechat-dropdown-toggle").css('display', 'none');
      $(".clearfix label").css('display', 'none');
      $(".chat").css('border-left', '0').css('border-right', '0');
      $($('#firechat-tab-list li a')[0]).text('Diane Parker');
      $($('#firechat-tab-list li a')[1]).text("Full Circle");
      $('.tab-pane-menu').css('border-left', 'none').css('border-right', 'none').css('border-bottom', 'none');
      $('#firechat-tab-list').css('border-bottom', 'none');
      $('.message-default').css('border','none');
      $('.close').hide();
    } else {
      $("#firechat-wrapper").addClass("closed");
      $(".popup").css( "right", "-380px" );
    }
  })
});

// configure and initialize firebase
var config = {
  apiKey: "AIzaSyDw6D_RWJbfJsWuxCyf_8tbvt4fUAZhZhI",
  authDomain: "dayshare-9e38a.firebaseapp.com",
  databaseURL: "https://dayshare-9e38a.firebaseio.com"
};
firebase.initializeApp(config);

// login user via google
function login() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).catch(function(error) {
    console.log("Error authenticating user:", error);
  });
}

// new firechat instance on successful user auth
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    initChat(user);
  }
});
function initChat(user) {
  // get a firebase database ref
  var chatRef = firebase.database().ref("chat");

  // create a firechat instance
  var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

  // set the firechat user
  chat.setUser(user.uid, user.displayName);
}
