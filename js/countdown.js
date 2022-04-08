// Javascript
$(function() {
  var currentDate = new Date();
//  $('.countdown').countdown("yyyy/MM/dd/hh:mm:ss", function(event)
//	Delete line 6
// 1995-10-11 0:0:0 2072-10-11 0:0:0 起止时间相差: 28125天 0小时 0分钟 0秒 （平均寿命 77 岁）
// 2022-04-08 0:0:0 2072-10-11 0:0:0 起止时间相差: 18449天 0小时 0分钟 0秒
  $('.time').countdown(18449 * 24 * 60 * 60 * 1000 + currentDate.valueOf(), function(event)
//	until here
	{
    $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span.'+event.type).html(event.value);
        break;
      case "finished":
        $this.fadeTo('slow', .5);
        break;
    }
  });
});
