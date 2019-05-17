class Helper {
  playPauseAndUpdate(song) {
    player.playPause (song);
    $('#time-control .total-time').text( totalTime );

  }

var helper = new Helper ();
