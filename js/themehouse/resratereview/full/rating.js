/** @param {jQuery} $ jQuery Object */
!function($, window, document, _undefined)
{
	if (typeof ThemeHouse === "undefined") ThemeHouse = {};
	
	ThemeHouse.RadioRating = function($label)
	{
		$label.find('span.hint').hide();
		
		$label.bind(
		{
			mouseenter: function(e)
			{
				$label.find('span.hint').show();
			},
			
			mouseleave: function(e)
			{
				$label.find('span.hint').hide();
			}
		});
	};

	// *********************************************************************

	XenForo.register('label.RadioRating', 'ThemeHouse.RadioRating');

}
(jQuery, this, document);