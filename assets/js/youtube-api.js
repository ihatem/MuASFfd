var videourl = $("iframe").attr("src");
var videoindex = $("iframe").attr("src").indexOf("embed");

var videoid = ("https://www.youtube.com/watch?v="+videourl.substring(videoindex + 6, videourl.length));


var matches = videoid.match(/^https:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i) || videoid.match(/^https:\/\/youtu\.be\/([^?]+)/i);

if (matches) {
  videoid = matches[1];
}

if (videoid.match(/^[a-z0-9_-]{11}$/i) === null) {
  $(".video-title-text").text("Unable to parse Video ID/URL");
}

$.getJSON("https://www.googleapis.com/youtube/v3/videos",
{
  key: "AIzaSyAxk8yqhIqzfZ7qY2Rcs9_h4l3MU5sQjzg",
  part: "snippet,statistics,contentDetails",
  id: videoid
},

function(data)
{
  if (data.items.length === 0)
  {
    $(".video-title-text").text("Video not found");
  }

  var videodesc = data.items[0].snippet.description.replace(/\n/g, "<br /><br />");;
  var videoduration = moment.duration(data.items[0].contentDetails.duration,moment.ISO_8601);

  $(".video-title-text").text(data.items[0].snippet.title);
  $(".video-description-text").html(videodesc);
  $(".duration-icon").next("p").text(Math.floor(videoduration._milliseconds / 60000)
  +":"+
  ((videoduration._milliseconds % 60000) / 1000).toFixed(0));
  $(".comment-icon").next("p").text(data.items[0].statistics.viewCount);
  $(".likes-icon").next("p").text(data.items[0].statistics.likeCount);

}).fail(function(jqXHR, textStatus, errorThrown) {
  $("<p style='color: #F00;'></p>").text(jqXHR.responseText || errorThrown).appendTo("#video-data-1");
});
