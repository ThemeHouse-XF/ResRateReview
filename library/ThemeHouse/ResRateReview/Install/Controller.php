<?php

class ThemeHouse_ResRateReview_Install_Controller extends ThemeHouse_Install
{

    protected $_resourceManagerUrl = 'https://xenforo.com/community/resources/resource-rate-and-review.4148/';

    /**
     *
     * @see ThemeHouse_Install::_getPrerequisites()
     */
    protected function _getPrerequisites()
    {
        return array(
            'XenResource' => '1010000'
        );
    }
}