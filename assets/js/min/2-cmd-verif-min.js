function click_cmd_suiv(){reg_nom.test($("input[name=nom]").val())&&reg_nom.test($("input[name=prenom]").val())&&reg_mail.test($("input[name=mail]").val().toLowerCase())&&reg_bd.test($("input[name=birth]").val())&&"Choisir un pays"!==$(".p-pays").text()&&"Choisir un fuseau horaire"!==$(".default-label-fuseau").find(".p-tel").text()&&reg_tel.test($("input[name=tel]").val())&&"Prefix"!==$(".default-label-tel").find(".p-tel").text()?($("html, body").animate({scrollTop:$("#contact-main-wrap").offset().top},300),$("#commande-form").attr("display","false"),$("#commande-form").css("display","none"),$("#paiement-form").attr("display","true"),$("#paiement-form").css("display","block"),$(".progress-bar").css("width","75%"),$(".paiement-icon").next().css("color","#32c5d2"),$(".paiement-icon").css("filter","grayscale(0)"),$(".btn-white").removeClass("btn-white-disabled"),$(".error-calendar").toggleClass("animated shake"),$(".error-calendar").css("display","none")):($("html, body").animate({scrollTop:$("#contact-main-wrap").offset().top},300),$(".error-calendar").toggleClass("animated shake"),$(".error-calendar").css("display","flex"))}function click_cmd_prec(){$("html, body").animate({scrollTop:$("#contact-main-wrap").offset().top},300),$("#calendar-form").attr("display","true"),$("#calendar-form").css("display","block"),$("#commande-form").attr("display","false"),$("#commande-form").css("display","none"),$(".progress-bar").css("width","25%"),$(".form-icon").next().css("color","#8e8e8e"),$(".form-icon").css("filter","grayscale(100%)"),$(".btn-white").addClass("btn-white-disabled")}var reg_nom=new RegExp("^[a-zàâçéèêëîïôûùüÿñæœ .-]*$"),reg_mail=new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),reg_bd=new RegExp("^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$"),reg_tel=new RegExp("^[0-9]*$");$("input[name=mail]").keyup(function(){reg_mail.test($(this).val().toLowerCase())?($(this).addClass("input-valid"),$(this).removeClass("input-invalid")):($(this).addClass("input-invalid"),$(this).removeClass("input-valid"))}),$("input[name=nom]").keyup(function(){reg_nom.test($(this).val().toLowerCase())&&""!==$(this).val()?($(this).addClass("input-valid"),$(this).removeClass("input-invalid")):($(this).addClass("input-invalid"),$(this).removeClass("input-valid"))}),$("input[name=prenom]").keyup(function(){reg_nom.test($(this).val().toLowerCase())&&""!==$(this).val()?($(this).addClass("input-valid"),$(this).removeClass("input-invalid")):($(this).addClass("input-invalid"),$(this).removeClass("input-valid"))}),$("input[name=birth]").keyup(function(){reg_bd.test($(this).val())?($(this).addClass("input-valid"),$(this).removeClass("input-invalid")):($(this).addClass("input-invalid"),$(this).removeClass("input-valid"))}),$("input[name=tel]").keyup(function(){reg_tel.test($(this).val())&&""!==$(this).val()?($(this).addClass("input-valid"),$(this).removeClass("input-invalid")):($(this).addClass("input-invalid"),$(this).removeClass("input-valid"))}),$(".label-selected-pays").click(function(){$(".default-label-pays").css("border","2px solid #32c5d2")}),$(".label-selected-fuseau").click(function(){$(".default-label-fuseau").css("border","2px solid #32c5d2")}),$(".label-selected-tel").click(function(){$(".default-label-tel").css({border:"2px solid #32c5d2","border-right":"1px solid #32c5d2"})}),$(".label-selected-pays").click(function(){$(".default-label-pays > p").html($(this).html())}),$(document).click(function(e){var a=e.target;"dropdown-pays"!==$(a).parent().attr("class")&&"default-label-pays"!==$(a).parent().attr("class")&&"ul-pays input-checked"===$(".ul-pays").attr("class")&&($(".ul-pays").removeClass("input-checked"),$(".arrow-icon-pays").toggleClass("arrow-icon-rotated"))}),$(".default-label-pays").click(function(){$(".arrow-icon-pays").toggleClass("arrow-icon-rotated"),$(".ul-pays").toggleClass("input-checked")}),$(".label-selected-pays").each(function(){$(this).find(".country-icon").addClass("flag-icon flag-icon-"+$(this).attr("value").toLowerCase())}),$(".label-selected-fuseau").click(function(){$(".default-label-fuseau > p").html($(this).html())}),$(document).click(function(e){var a=e.target;"dropdown-fuseau"!==$(a).parent().attr("class")&&"default-label-fuseau"!==$(a).parent().attr("class")&&"ul-fuseau input-checked"===$(".ul-fuseau").attr("class")&&($(".ul-fuseau").removeClass("input-checked"),$(".arrow-icon-fuseau").toggleClass("arrow-icon-rotated"))}),$(".default-label-fuseau").click(function(){$(".arrow-icon-fuseau").toggleClass("arrow-icon-rotated"),$(".ul-fuseau").toggleClass("input-checked")}),$(".label-selected-tel").click(function(){$(".default-label-tel > p").html("(+"+$(this).attr("value")+")")}),$(document).click(function(e){var a=e.target;"dropdown-tel"!==$(a).parent().attr("class")&&"default-label-tel"!==$(a).parent().attr("class")&&"ul-tel input-checked"===$(".ul-tel").attr("class")&&($(".ul-tel").removeClass("input-checked"),$(".arrow-icon-tel").toggleClass("arrow-icon-rotated"))}),$(".default-label-tel").click(function(){$(".arrow-icon-tel").toggleClass("arrow-icon-rotated"),$(".ul-tel").toggleClass("input-checked")});