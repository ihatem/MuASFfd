function click_cal_suiv(){$("td").data("clicked")?($("html, body").animate({scrollTop:$("#content-wrap").offset().top},300),$("#commande-form").attr("display","true"),$("#commande-form").css("display","block"),$("#calendar-form").attr("display","false"),$("#calendar-form").css("display","none"),$(".progress-bar").css("width","50%"),$(".form-icon").next().css("color","#32c5d2"),$(".form-icon").css("filter","grayscale(0)"),$(".btn-white").removeClass("btn-white-disabled")):($("html, body").animate({scrollTop:$("#content-wrap").offset().top},300),$(".error-calendar").toggleClass("animated shake"),$(".error-calendar").css("display","flex"))}$("td").click(function(){$("td").data("clicked",!0)}),$("td").click(function(){"days-row"!==$(this).parent(".days-row").attr("class")&&"dispo-disable"!==$(this).attr("class")&&($("td").removeClass("dispo-active"),$(this).toggleClass("dispo-active"),$(".error-calendar").css("display","none"))});