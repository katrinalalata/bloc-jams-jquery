class Helper {


  playPauseAndUpdate(song) {
    player.playPause (song);
    const totalTime = player.getTime();
    const duration = player.getDuration();
    const percent = (totalTime / duration) * 100;
    $('#time-control .total-time').text( totalTime );
    $('#time-control input').val(percent);
  }


  }

var helper = new Helper ();
