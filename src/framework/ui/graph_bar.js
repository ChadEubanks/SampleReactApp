import React from 'react';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

const height = (data, totalCount) => {
    const x = Math.floor(data.count / totalCount * 100);
    const y = 300;
    const a = (y * x) / 100;
    const remainder = y - a;
    return {height: `${a}px`, 'margin-top': `${remainder}px`};
};

const BarGraph = ({
    state, data, totalCount
}) => {
    if (data.answer_id === state.selectedAnswer.answer) {
        return (
            <div style={height(data,totalCount)} className="graph-bar-my-answer" />
        )
    } else {
        return (
            <div style={height(data,totalCount)} className="graph-bar" />
        )
    }

};

export default BarGraph;