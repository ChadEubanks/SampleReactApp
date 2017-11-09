import React from 'react';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import ListView from './list.js';
import BarGraph from './graph_bar.js';

const totalCount = (state) => {
    return state.answerStatistics.reduce(function (a, b) {
        return a + parseInt(b.count, 10);
    }, 0);
}

const Graph = ({
    state
}) => {
    return (
        <div className="graph-frame">
            <div className="total">{totalCount(state)}</div>
            <div className="base">0</div>
            <div className="total-line"></div>
            <ListView data={state.answerStatistics}>
                <BarGraph state={state} totalCount={totalCount(state)} />
            </ListView>
            <div className="answer-line"></div>
            <div className="answer-id first-answer-id">A</div>
            <div className="answer-id">B</div>
            <div className="answer-id">C</div>
            <div className="answer-id">D</div>
        </div>
    );

};

export default Graph;