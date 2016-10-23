$(document).ready(function(){
  greenButtonListener();
  yellowButtonListener();
  pinkButtonListener();
  profilePictureListener();
  hoverOverGridListener();
})

function greenButtonListener(){
  $('#example1').on('click', function(event){
    event.preventDefault();
    $('.modal').modal('hide');
    $('#myModal').modal('show');
  })
}

function yellowButtonListener(){
  $('#example2').on('click', function(event){
    event.preventDefault();
    $('.modal').modal('hide');
    $('#myModal2').modal('show');
})
}

function pinkButtonListener(){
  $('#example3').on('click', function(event){
    event.preventDefault();
    $('.modal').modal('hide');
    $('#myModal3').modal('show');
    })
}

function profilePictureListener(){
  $('#prof1').on('click', function(event){
    event.preventDefault();
    $('.modal').modal('hide');
    $('#profileModal').modal('show');
  })
}

function hoverOverGridListener(){
    $('#hover-this > tr > td').hover(function(event){
      event.preventDefault();
      var wow = $(this);
      wow.toggleClass('emphasize');

    })
}
