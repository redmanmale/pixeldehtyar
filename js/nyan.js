var Sparks = function () {
	return {
		init: function (_combo) {
			var yCombosAmount = Math.ceil($(document).height() / _combo.height()),
					comboTags = $(document.createElement('div')),
					newCombo = null;

			for (var a = 0; a < yCombosAmount-1; a += 1) {
				newCombo = _combo.clone();
				comboTags.append(newCombo);
			}

			$('body').prepend(comboTags.html());
		}
	}
};

$(function() {
	var sparks = new Sparks();
	sparks.init($('.sparks-combo'));

    $("#ogg").attr("src", "media/nyan.ogg");
    ogg.volume = 0.3;
    ogg.load();
});