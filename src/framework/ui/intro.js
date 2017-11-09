import React from 'react';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import teslaIcon from '../../theme/images/tesla_icon.png';

const Intro = ({
    icon, inconAlt
}) => {

    return (
        <div className="intro-view">
            <div className="icon-frame" >
                <img className="icon" src={ icon } alt={ inconAlt } />
            </div>
        </div>
    );
};

Intro.defaultProps = {
    icon: teslaIcon,
    inconAlt: 'Tesla Inc icon',
};

export default Intro;