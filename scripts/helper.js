class Helper {
  playPauseAndUpdate (song = player.currentlyPlaying);
  player.playPause (song);
  $('#time-control .current-time').text( currentTime );
  $('#time-control input').val(percent);
}, 500);
}

var helper = new Helper ();
