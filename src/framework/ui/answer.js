import React from 'react';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import teslaIcon from '../../theme/images/tesla_icon.png';
import Graph from '../../framework/ui/graph.js';
import GraphTitle from '../../framework/ui/graph_title.js';

const transitionToQuestion = (history) => {
    history.push('/question')
};

const Answer = ({
    state, icon, iconAlt, history
}) => {
    return (
        <div className="answer-view">
            <div className="top-bar" />
            <div className="icon-frame" >
                <img className="icon" src={ icon } alt={ iconAlt } />
            </div>
            <div className="header-line"></div>
            <button className="back-button" onClick={() => (transitionToQuestion(history))}>Home</button>
            <div className="view-title"><span>Answer</span></div>
            <div className="answer-frame">
                <GraphTitle state={state} />
                <Graph state={state} />
            </div>
        </div>
    );
};

Answer.defaultProps = {
    state: {},
    icon: teslaIcon,
    iconAlt: 'Tesla Inc icon',
};

export default Answer;