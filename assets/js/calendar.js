/*global console, XDate*/

var tdy = new XDate(true);
var monday, tuesday, wednesday, thursday, friday, saturday, sunday, rdv_date, tr_index, td_index, td_value, date_selected, temptest, index_first_day;

console.log("Hello World");

$(".td-week").watch({
    properties: "prop_innerHTML",
    callback: function () {

      switch($(".dispo-active").index()) {
          case 0:
              date_selected = monday.clone();
              break;
          case 1:
              date_selected = tuesday.clone();
              break;
          case 2:
              date_selected = wednesday.clone();
              break;
          case 3:
              date_selected = thursday.clone();
              break;
          case 4:
              date_selected = friday.clone();
              break;
      }

      if ($(".dispo-active").index() === 0)
      {
        rdv_date = monday.clone();
        td_index = 1;
      }
      else if ($(".dispo-active").index() === 1)
      {
        rdv_date = tuesday.clone();
        td_index = 2;
      }
      else if ($(".dispo-active").index() === 2)
      {
        rdv_date = wednesday.clone();
        td_index = 3;
      }
      else if ($(".dispo-active").index() === 3)
      {
        rdv_date = thursday.clone();
        td_index = 4;
      }
      else if ($(".dispo-active").index() === 4)
      {
        rdv_date = friday.clone();
        td_index = 5;
      }

      td_value = $(".dispo-active").text();

      switch(td_value) {
          case "10:00":
              tr_index = 2;
              break;
          case "10:30":
              tr_index = 3;
              break;
          case "11:00":
              tr_index = 4;
              break;
          case "11:30":
              tr_index = 5;
              break;
          case "12:00":
              tr_index = 6;
              break;
          case "13:30":
              tr_index = 7;
              break;
          case "14:00":
              tr_index = 8;
              break;
          case "14:30":
              tr_index = 9;
              break;
          case "15:00":
              tr_index = 10;
              break;
          case "15:30":
              tr_index = 11;
              break;
          case "16:00":
              tr_index = 12;
              break;
          case "16:30":
              tr_index = 13;
              break;
          case "17:00":
              tr_index = 14;
              break;

          default:
              td_index = -1;
      }

    }
});

function add_rounddate_week() {

  $(".dd").removeClass("round-date");

  var month_temp_value = $(".mois-p-sem").text();

  month_temp_value = month_temp_value.substr(0,month_temp_value.length - 1);

  for (var i=1 ; i<=7 ; i++)
  {
    if ((tdy.toString("MMMM") === month_temp_value) && (tdy.toString("yyyy") === $(".annee-p-sem").text()) && ($(".days-row td:nth-child(" + i + ") .dd ").text() === tdy.toString("dd")))
    {
      $(".days-row td:nth-child(" + i + ") .dd ").addClass("round-date");
    }
  }

}

function add_rounddate_mon() {

  $("span").removeClass("round-date");

  var month_temp_value_mon = $(".mois-p-mon").text();

  month_temp_value_mon = month_temp_value_mon.substr(0,month_temp_value_mon.length - 1);

  var trn = 2;
  var tdn = 1;

  for (var i=1 ; i<=42 ; i++)
  {
    if ((tdy.toString("MMMM") === month_temp_value_mon) && (tdy.toString("yyyy") === $(".annee-p-mon").text()) && ($('#table-mon tr:nth-child('+trn+') td:nth-child(' + tdn + ') span').text() === tdy.toString("dd")))
    {
      $('#table-mon tr:nth-child('+trn+') td:nth-child(' + tdn + ') span').addClass("round-date");
    }

    tdn++;

    if (tdn>7)
    {
      tdn=1;
      trn++;
    }
  }

}

function get_rdv_date (rdv_date) {

  if ($(".dispo-active").index() === 0)
  {
    rdv_date = monday.clone();
  }
  else if ($(".dispo-active").index() === 1)
  {
    rdv_date = tuesday.clone();
  }
  else if ($(".dispo-active").index() === 2)
  {
    rdv_date = wednesday.clone();
  }
  else if ($(".dispo-active").index() === 3)
  {
    rdv_date = thursday.clone();
  }
  else if ($(".dispo-active").index() === 4)
  {
    rdv_date = friday.clone();
  }

  return rdv_date;

}

function month_check_prec() {

  $(".dd").each(function () {

    var rgxLundi = new RegExp("^lundi");
    var rgxMardi = new RegExp("^mardi");
    var rgxMercredi = new RegExp("^mercredi");
    var rgxJeudi = new RegExp("^jeudi");
    var rgxVendredi = new RegExp("^vendredi");
    var rgxSamedi = new RegExp("^samedi");
    var rgxDimanche = new RegExp("^dimanche");

    if ($(this).text() === "01")
    {

      if (rgxLundi.test($(this).parent().prev().attr("class")))
      {
        $(".mois-p-sem").text(monday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(monday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",monday.clone());
        $(".annee-p-sem").attr("sem-annee-value",monday.clone());
      }
      else if (rgxMardi.test($(this).parent().prev().attr("class")))
      {
        $(".mois-p-sem").text(tuesday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(tuesday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",tuesday.clone());
        $(".annee-p-sem").attr("sem-annee-value",tuesday.clone());
      }
      else if (rgxMercredi.test($(this).parent().prev().attr("class")))
      {
        $(".mois-p-sem").text(wednesday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(wednesday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",wednesday.clone());
        $(".annee-p-sem").attr("sem-annee-value",wednesday.clone());
      }
      else if (rgxJeudi.test($(this).parent().prev().attr("class")))
      {
        $(".mois-p-sem").text(thursday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(thursday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",thursday.clone());
        $(".annee-p-sem").attr("sem-annee-value",thursday.clone());
      }
      else if (rgxVendredi.test($(this).parent().prev().attr("class")))
      {
        $(".mois-p-sem").text(friday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(friday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",friday.clone());
        $(".annee-p-sem").attr("sem-annee-value",friday.clone());
      }
      else if (rgxSamedi.test($(this).parent().prev().attr("class")))
      {
        $(".mois-p-sem").text(saturday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(saturday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",saturday.clone());
        $(".annee-p-sem").attr("sem-annee-value",saturday.clone());
      }
      else if (rgxDimanche.test($(this).parent().prev().attr("class")))
      {
        $(".mois-p-sem").text(sunday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(sunday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",sunday.clone());
        $(".annee-p-sem").attr("sem-annee-value",sunday.clone());
      }
    }
  });

}

function month_check_suiv() {

  $(".dd").each(function () {

    var rgxLundi = new RegExp("^lundi");
    var rgxMardi = new RegExp("^mardi");
    var rgxMercredi = new RegExp("^mercredi");
    var rgxJeudi = new RegExp("^jeudi");
    var rgxVendredi = new RegExp("^vendredi");
    var rgxSamedi = new RegExp("^samedi");
    var rgxDimanche = new RegExp("^dimanche");

    if ($(this).text() === "01")
    {

      if (rgxLundi.test($(this).parent().attr("class")))
      {
        $(".mois-p-sem").text(monday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(monday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",monday.clone());
        $(".annee-p-sem").attr("sem-annee-value",monday.clone());
      }
      else if (rgxMardi.test($(this).parent().attr("class")))
      {
        $(".mois-p-sem").text(tuesday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(tuesday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",tuesday.clone());
        $(".annee-p-sem").attr("sem-annee-value",tuesday.clone());
      }
      else if (rgxMercredi.test($(this).parent().attr("class")))
      {
        $(".mois-p-sem").text(wednesday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(wednesday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",wednesday.clone());
        $(".annee-p-sem").attr("sem-annee-value",wednesday.clone());
      }
      else if (rgxJeudi.test($(this).parent().attr("class")))
      {
        $(".mois-p-sem").text(thursday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(thursday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",thursday.clone());
        $(".annee-p-sem").attr("sem-annee-value",thursday.clone());
      }
      else if (rgxVendredi.test($(this).parent().attr("class")))
      {
        $(".mois-p-sem").text(friday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(friday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",friday.clone());
        $(".annee-p-sem").attr("sem-annee-value",friday.clone());
      }
      else if (rgxSamedi.test($(this).parent().attr("class")))
      {
        $(".mois-p-sem").text(saturday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(saturday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",saturday.clone());
        $(".annee-p-sem").attr("sem-annee-value",saturday.clone());
      }
      else if (rgxDimanche.test($(this).parent().attr("class")))
      {
        $(".mois-p-sem").text(sunday.clone().toString("MMMM"));
        $(".mois-p-sem").append("&nbsp;");
        $(".annee-p-sem").text(sunday.clone().toString("yyyy"));

        $(".mois-p-sem").attr("sem-mois-value",sunday.clone());
        $(".annee-p-sem").attr("sem-annee-value",sunday.clone());
      }
    }
  });

}

function set_today () {

  if (tdy.getDay() === 1)
  {

    monday = tdy.clone();
    tuesday = tdy.clone().addDays(1);
    wednesday = tdy.clone().addDays(2);
    thursday = tdy.clone().addDays(3);
    friday = tdy.clone().addDays(4);
    saturday = tdy.clone().addDays(5);
    sunday = tdy.clone().addDays(6);

    $(".lundi > .dd").text(monday.toUTCString("dd"));
    $(".mardi > .dd").text(tuesday.toUTCString("dd"));
    $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
    $(".jeudi > .dd").text(thursday.toUTCString("dd"));
    $(".vendredi > .dd").text(friday.toUTCString("dd"));
    $(".samedi > .dd").text(saturday.toUTCString("dd"));
    $(".dimanche > .dd").text(sunday.toUTCString("dd"));

    $(".mois-p-sem").text(tdy.clone().toString("MMMM"));
    $(".mois-p-sem").append("&nbsp;");
    $(".annee-p-sem").text(tdy.clone().toString("yyyy"));

  }
  else if (tdy.getDay() === 2)
  {


    monday = tdy.clone().addDays(-1);
    tuesday = tdy.clone();
    wednesday = tdy.clone().addDays(1);
    thursday = tdy.clone().addDays(2);
    friday = tdy.clone().addDays(3);
    saturday = tdy.clone().addDays(4);
    sunday = tdy.clone().addDays(5);

    $(".lundi > .dd").text(monday.toUTCString("dd"));
    $(".mardi > .dd").text(tuesday.toUTCString("dd"));
    $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
    $(".jeudi > .dd").text(thursday.toUTCString("dd"));
    $(".vendredi > .dd").text(friday.toUTCString("dd"));
    $(".samedi > .dd").text(saturday.toUTCString("dd"));
    $(".dimanche > .dd").text(sunday.toUTCString("dd"));

    $(".mois-p-sem").text(tdy.clone().toString("MMMM"));
    $(".mois-p-sem").append("&nbsp;");
    $(".annee-p-sem").text(tdy.clone().toString("yyyy"));

  }
  else if (tdy.getDay() === 3)
  {

    monday = tdy.clone().addDays(-2);
    tuesday = tdy.clone().addDays(-1);
    wednesday = tdy.clone();
    thursday = tdy.clone().addDays(1);
    friday = tdy.clone().addDays(2);
    saturday = tdy.clone().addDays(3);
    sunday = tdy.clone().addDays(4);

    $(".lundi > .dd").text(monday.toUTCString("dd"));
    $(".mardi > .dd").text(tuesday.toUTCString("dd"));
    $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
    $(".jeudi > .dd").text(thursday.toUTCString("dd"));
    $(".vendredi > .dd").text(friday.toUTCString("dd"));
    $(".samedi > .dd").text(saturday.toUTCString("dd"));
    $(".dimanche > .dd").text(sunday.toUTCString("dd"));

    $(".mois-p-sem").text(tdy.clone().toString("MMMM"));
    $(".mois-p-sem").append("&nbsp;");
    $(".annee-p-sem").text(tdy.clone().toString("yyyy"));

  }
  else if (tdy.getDay() === 4)
  {

    monday = tdy.clone().addDays(-3);
    tuesday = tdy.clone().addDays(-2);
    wednesday = tdy.clone().addDays(-1);
    thursday = tdy.clone();
    friday = tdy.clone().addDays(1);
    saturday = tdy.clone().addDays(2);
    sunday = tdy.clone().addDays(3);

    $(".lundi > .dd").text(monday.toUTCString("dd"));
    $(".mardi > .dd").text(tuesday.toUTCString("dd"));
    $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
    $(".jeudi > .dd").text(thursday.toUTCString("dd"));
    $(".vendredi > .dd").text(friday.toUTCString("dd"));
    $(".samedi > .dd").text(saturday.toUTCString("dd"));
    $(".dimanche > .dd").text(sunday.toUTCString("dd"));

    $(".mois-p-sem").text(tdy.clone().toString("MMMM"));
    $(".mois-p-sem").append("&nbsp;");
    $(".annee-p-sem").text(tdy.clone().toString("yyyy"));

  }
  else if (tdy.getDay() === 5)
  {

    monday = tdy.clone().addDays(-4);
    tuesday = tdy.clone().addDays(-3);
    wednesday = tdy.clone().addDays(-2);
    thursday = tdy.clone().addDays(-1);
    friday = tdy.clone();
    saturday = tdy.clone().addDays(1);
    sunday = tdy.clone().addDays(2);

    $(".lundi > .dd").text(monday.toUTCString("dd"));
    $(".mardi > .dd").text(tuesday.toUTCString("dd"));
    $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
    $(".jeudi > .dd").text(thursday.toUTCString("dd"));
    $(".vendredi > .dd").text(friday.toUTCString("dd"));
    $(".samedi > .dd").text(saturday.toUTCString("dd"));
    $(".dimanche > .dd").text(sunday.toUTCString("dd"));

    $(".mois-p-sem").text(tdy.clone().toString("MMMM"));
    $(".mois-p-sem").append("&nbsp;");
    $(".annee-p-sem").text(tdy.clone().toString("yyyy"));

  }
  else if (tdy.getDay() === 6)
  {

    monday = tdy.clone().addDays(-5);
    tuesday = tdy.clone().addDays(-4);
    wednesday = tdy.clone().addDays(-3);
    thursday = tdy.clone().addDays(-2);
    friday = tdy.clone().addDays(-1);
    saturday = tdy.clone();
    sunday = tdy.clone().addDays(1);

    $(".lundi > .dd").text(monday.toUTCString("dd"));
    $(".mardi > .dd").text(tuesday.toUTCString("dd"));
    $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
    $(".jeudi > .dd").text(thursday.toUTCString("dd"));
    $(".vendredi > .dd").text(friday.toUTCString("dd"));
    $(".samedi > .dd").text(saturday.toUTCString("dd"));
    $(".dimanche > .dd").text(sunday.toUTCString("dd"));

    $(".mois-p-sem").text(tdy.clone().toString("MMMM"));
    $(".mois-p-sem").append("&nbsp;");
    $(".annee-p-sem").text(tdy.clone().toString("yyyy"));

  }
  else if (tdy.getDay() === 0)
  {

    monday = tdy.clone().addDays(-6);
    tuesday = tdy.clone().addDays(-5);
    wednesday = tdy.clone().addDays(-4);
    thursday = tdy.clone().addDays(-3);
    friday = tdy.clone().addDays(-2);
    saturday = tdy.clone().addDays(-1);
    sunday = tdy.clone();

    $(".lundi > .dd").text(monday.toUTCString("dd"));
    $(".mardi > .dd").text(tuesday.toUTCString("dd"));
    $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
    $(".jeudi > .dd").text(thursday.toUTCString("dd"));
    $(".vendredi > .dd").text(friday.toUTCString("dd"));
    $(".samedi > .dd").text(saturday.toUTCString("dd"));
    $(".dimanche > .dd").text(sunday.toUTCString("dd"));

    $(".mois-p-sem").text(tdy.clone().toString("MMMM"));
    $(".mois-p-sem").append("&nbsp;");
    $(".annee-p-sem").text(tdy.clone().toString("yyyy"));

  }

  $(".mois-p-sem").attr("sem-mois-value",tdy.clone());
  $(".annee-p-sem").attr("sem-annee-value",tdy.clone());

}

function set_suiv () {

  monday = sunday.clone().addDays(1);
  tuesday = monday.clone().addDays(1);
  wednesday = tuesday.clone().addDays(1);
  thursday = wednesday.clone().addDays(1);
  friday = thursday.clone().addDays(1);
  saturday = friday.clone().addDays(1);
  sunday = saturday.clone().addDays(1);

  $(".lundi > .dd").text(monday.toUTCString("dd"));
  $(".mardi > .dd").text(tuesday.toUTCString("dd"));
  $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
  $(".jeudi > .dd").text(thursday.toUTCString("dd"));
  $(".vendredi > .dd").text(friday.toUTCString("dd"));
  $(".samedi > .dd").text(saturday.toUTCString("dd"));
  $(".dimanche > .dd").text(sunday.toUTCString("dd"));

  $(".dispo-active").removeClass("dispo-active");

  if (monday.diffDays(date_selected) === 0 || tuesday.diffDays(date_selected) === 0 || wednesday.diffDays(date_selected) === 0 || thursday.diffDays(date_selected) === 0 || friday.diffDays(date_selected) === 0 )
  {
    $('#table-week tr:nth-child(' + tr_index + ') td:nth-child(' + td_index + ')').addClass("dispo-active");
  }

}

function set_prec () {

  sunday = monday.clone().addDays(-1);
  saturday = sunday.clone().addDays(-1);
  friday = saturday.clone().addDays(-1);
  thursday = friday.clone().addDays(-1);
  wednesday = thursday.clone().addDays(-1);
  tuesday = wednesday.clone().addDays(-1);
  monday = tuesday.clone().addDays(-1);

  $(".lundi > .dd").text(monday.toUTCString("dd"));
  $(".mardi > .dd").text(tuesday.toUTCString("dd"));
  $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
  $(".jeudi > .dd").text(thursday.toUTCString("dd"));
  $(".vendredi > .dd").text(friday.toUTCString("dd"));
  $(".samedi > .dd").text(saturday.toUTCString("dd"));
  $(".dimanche > .dd").text(sunday.toUTCString("dd"));

  $(".dispo-active").removeClass("dispo-active");

  if (monday.diffDays(date_selected) === 0 || tuesday.diffDays(date_selected) === 0 || wednesday.diffDays(date_selected) === 0 || thursday.diffDays(date_selected) === 0 || friday.diffDays(date_selected) === 0 )
  {
    $('#table-week tr:nth-child(' + tr_index + ') td:nth-child(' + td_index + ')').addClass("dispo-active");
  }

}

set_today();
add_rounddate_week();

$(".sem-ajd-sem").click(function () {
  set_today();

  add_rounddate_week();
});

$(".sem-suiv-sem").click(function () {
  set_suiv();
  month_check_suiv();

  add_rounddate_week();
});

$(".sem-prec-sem").click(function () {

  set_prec();
  month_check_prec();

  add_rounddate_week();

});

$(".td-week").watch({
    properties: "attr_class",
    callback: function () {

        $(".rdv-time").css("opacity","1");

        $(".p-date-rdv").text(get_rdv_date(rdv_date).toString("dddd")+" le "+get_rdv_date(rdv_date).toString("dd MMMM yyyy")+" à "+$('#table-week tr:nth-child(' + tr_index + ') td:nth-child(' + td_index + ')').text());

    }
});

var today = new XDate(true);
var currentDate = today.clone().setDate(1);
var trn = 2;
var tdn = currentDate.clone().getDay();
var index_first_day;

function fill_table() {

  var index_first_day = currentDate.clone().getDay();

  if (tdn === 0)
  {
    tdn = 7;
  }

  if (index_first_day === 0)
  {
    index_first_day = 7;
  }

  for (var i=0 ; i <= 42 - index_first_day ; i++)
  {

    $('#table-mon tr:nth-child('+trn+') td:nth-child(' + tdn + ') span').text(currentDate.toString("dd"));
    $('#table-mon tr:nth-child('+trn+') td:nth-child(' + tdn + ')').attr("date-value",currentDate);

    if (currentDate.getDate() === 1)
    {
      $('#table-mon tr:nth-child('+trn+') td:nth-child(' + tdn + ') span').append(" "+currentDate.toString("MMM")+".");
    }

    tdn++;


    currentDate.addDays(1);
    if (tdn>7)
      {
        tdn=1;
        trn++;
      }

    if (currentDate.getDate() > new XDate(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate())
    {
      currentDate.addMonths(1);
    }

  }

  trn = 7;
  tdn = 7;

  var last_td_table = parseInt($('#table-mon tr:nth-child(7) td:nth-child(7) span').text()) + 1;

  $(".td-mon span").removeClass("grayed");

  for (i=1 ; i < last_td_table ; i++)
  {

    $('#table-mon tr:nth-child('+trn+') td:nth-child(' + tdn + ') span').addClass("grayed");

    tdn--;

    if (tdn<1)
      {
        tdn=7;
        trn--;
      }

  }

  var xc = currentDate.clone();
  xc.setDate(1);
  xc.addMonths(-1);
  xc.addDays(-1);

  if (index_first_day === 0)
  {
    index_first_day = 7;
  }

  for (i = index_first_day - 1 ; i>0 ; i--)
  {
    $('#table-mon tr:nth-child(2) td:nth-child(' + i + ') span').text(xc.toString("dd"));
    $('#table-mon tr:nth-child(2) td:nth-child(' + i + ') span').addClass("grayed");
    $('#table-mon tr:nth-child(2) td:nth-child(' + i + ')').attr("date-value",currentDate);
    xc.addDays(-1);
  }

  for (i=1 ; i<=7 ; i++)
  {
    if ($('#table-mon tr:nth-child(2) td:nth-child(' + i + ') span').text().match("^01"))
    {
      temptest = new XDate (parseInt($('#table-mon tr:nth-child(2) td:nth-child(' + i + ')').attr("date-value")));
      $(".mois-p-mon").text(temptest.toString("MMMM"));
      $(".mois-p-mon").append("&nbsp;");
      $(".annee-p-mon").text(temptest.toString("yyyy"));
    }
  }

}

$(".semaine-mois-button > span").click(function () {

  if ($(this).attr("class") === "semaine-select")
  {

    if (temptest.getDay() === 0)
    {
      monday = temptest.clone().addDays(-6);
      tuesday = temptest.clone().addDays(-5);
      wednesday = temptest.clone().addDays(-4);
      thursday = temptest.clone().addDays(-3);
      friday = temptest.clone().addDays(-2);
      saturday = temptest.clone().addDays(-1);
      sunday = temptest.clone();
    }
    else
    {
      monday = temptest.clone().addDays(- temptest.getDay() + 1);
      tuesday = temptest.clone().addDays(- temptest.getDay() + 2);
      wednesday = temptest.clone().addDays(- temptest.getDay() + 3);
      thursday = temptest.clone().addDays(- temptest.getDay() + 4);
      friday = temptest.clone().addDays(- temptest.getDay() + 5);
      saturday = temptest.clone().addDays(- temptest.getDay() + 6);
      sunday = temptest.clone().addDays(- temptest.getDay() + 7);
    }

    $(".lundi > .dd").text(monday.toUTCString("dd"));
    $(".mardi > .dd").text(tuesday.toUTCString("dd"));
    $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
    $(".jeudi > .dd").text(thursday.toUTCString("dd"));
    $(".vendredi > .dd").text(friday.toUTCString("dd"));
    $(".samedi > .dd").text(saturday.toUTCString("dd"));
    $(".dimanche > .dd").text(sunday.toUTCString("dd"));

    var month_temp = new XDate(sunday);
    month_temp.setDate(1);
    $(".mois-p-sem").text(month_temp.toUTCString("MMMM"));
    $(".mois-p-sem").append("&nbsp;");
    $(".annee-p-sem").text(month_temp.toUTCString("yyyy"));

    $(".mois-p-sem").attr("sem-mois-value",month_temp);
    $(".annee-p-sem").attr("sem-annee-value",month_temp);

    $(".semaine-select").addClass("semaine-mois-selected");
    $(".mois-select").removeClass("semaine-mois-selected");

    $(".semaine-wrap").css("display","block");
    $(".mois-wrap").css("display","none");

    add_rounddate_week();
  }
  else if ($(this).attr("class") === "mois-select")
  {

    var monthi;

    if ($(".mois-p-sem").text().match("^Jan"))
    {
      monthi = 0;
    }
    else if ($(".mois-p-sem").text().match("^Fév"))
    {
      monthi = 1;
    }
    else if ($(".mois-p-sem").text().match("^Mar"))
    {
      monthi = 2;
    }
    else if ($(".mois-p-sem").text().match("^Avr"))
    {
      monthi = 3;
    }
    else if ($(".mois-p-sem").text().match("^Mai"))
    {
      monthi = 4;
    }
    else if ($(".mois-p-sem").text().match("^Juin"))
    {
      monthi = 5;
    }
    else if ($(".mois-p-sem").text().match("^Juill"))
    {
      monthi = 6;
    }
    else if ($(".mois-p-sem").text().match("^Ao"))
    {
      monthi = 7;
    }
    else if ($(".mois-p-sem").text().match("^Sept"))
    {
      monthi = 8;
    }
    else if ($(".mois-p-sem").text().match("^Oct"))
    {
      monthi = 9;
    }
    else if ($(".mois-p-sem").text().match("^Nov"))
    {
      monthi = 10;
    }
    else if ($(".mois-p-sem").text().match("^Déc"))
    {
      monthi = 11;
    }

    console.log(monthi);

    //index_first_day.setMonth(monthi);
    //index_first_day.setFullYear($(".annee-p-sem").text());

    //console.log("sjajsajasj : "+index_first_day.toString("dd MMMM yyyy"));

    var ksa = new XDate ();

    ksa.setMonth(monthi);
    ksa.setFullYear($(".annee-p-sem").text());


    currentDate = ksa.clone();
    currentDate.setDate(1);

    trn = 2;
    tdn = currentDate.clone().getDay();
    index_first_day = currentDate.clone().getDay();

    fill_table();

    $(".mois-select").addClass("semaine-mois-selected");
    $(".semaine-select").removeClass("semaine-mois-selected");

    $(".mois-wrap").css("display","block");
    $(".semaine-wrap").css("display","none");

    add_rounddate_mon();
  }
});

$(".sem-suiv-mon").click(function () {

  currentDate.setDate(1);
  trn = 2;
  tdn = currentDate.clone().getDay();
  index_first_day = currentDate.clone().getDay();

  fill_table();

  add_rounddate_mon();

});

$(".sem-prec-mon").click(function () {

  currentDate.addMonths(-2);
  currentDate.setDate(1);

  trn = 2;
  tdn = currentDate.clone().getDay();
  index_first_day = currentDate.clone().getDay();

  fill_table();

  add_rounddate_mon();

});

$(".sem-ajd-mon").click(function () {

  currentDate = today.clone();
  currentDate.setDate(1);

  trn = 2;
  tdn = currentDate.clone().getDay();
  index_first_day = currentDate.clone().getDay();

  fill_table();

  add_rounddate_mon();

});

$(".td-mon").click(function () {

  var date_mon_selected = new XDate (parseInt($(this).attr("date-value")));

  if (date_mon_selected.getDay() === 0)
  {
    monday = date_mon_selected.clone().addDays(-6);
    tuesday = date_mon_selected.clone().addDays(-5);
    wednesday = date_mon_selected.clone().addDays(-4);
    thursday = date_mon_selected.clone().addDays(-3);
    friday = date_mon_selected.clone().addDays(-2);
    saturday = date_mon_selected.clone().addDays(-1);
    sunday = date_mon_selected.clone();

    $(".lundi > .dd").text(monday.toUTCString("dd"));
    $(".mardi > .dd").text(tuesday.toUTCString("dd"));
    $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
    $(".jeudi > .dd").text(thursday.toUTCString("dd"));
    $(".vendredi > .dd").text(friday.toUTCString("dd"));
    $(".samedi > .dd").text(saturday.toUTCString("dd"));
    $(".dimanche > .dd").text(sunday.toUTCString("dd"));

  }
  else
  {
    monday = date_mon_selected.clone().addDays(- date_mon_selected.getDay() + 1);
    tuesday = date_mon_selected.clone().addDays(- date_mon_selected.getDay() + 2);
    wednesday = date_mon_selected.clone().addDays(- date_mon_selected.getDay() + 3);
    thursday = date_mon_selected.clone().addDays(- date_mon_selected.getDay() + 4);
    friday = date_mon_selected.clone().addDays(- date_mon_selected.getDay() + 5);
    saturday = date_mon_selected.clone().addDays(- date_mon_selected.getDay() + 6);
    sunday = date_mon_selected.clone().addDays(- date_mon_selected.getDay() + 7);

    $(".lundi > .dd").text(monday.toUTCString("dd"));
    $(".mardi > .dd").text(tuesday.toUTCString("dd"));
    $(".mercredi > .dd").text(wednesday.toUTCString("dd"));
    $(".jeudi > .dd").text(thursday.toUTCString("dd"));
    $(".vendredi > .dd").text(friday.toUTCString("dd"));
    $(".samedi > .dd").text(saturday.toUTCString("dd"));
    $(".dimanche > .dd").text(sunday.toUTCString("dd"));

  }


  $(".semaine-select").addClass("semaine-mois-selected");
  $(".mois-select").removeClass("semaine-mois-selected");

  $(".semaine-wrap").css("display","block");
  $(".mois-wrap").css("display","none");

  $(".mois-p-sem").text(sunday.toString("MMMM"));
  $(".mois-p-sem").append("&nbsp;");
  $(".annee-p-sem").text(sunday.toString("yyyy"));

  $(".dd").removeClass("round-date");
  add_rounddate_week();

});
