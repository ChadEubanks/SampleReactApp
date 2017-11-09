import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import Intro from '../../framework/ui/intro.js';

const transitionToQuestion = (props) => {
    props.history.push('/question')
}

class IntroView extends React.Component {

    componentDidMount() {
        window.setTimeout(transitionToQuestion, 2000, this.props);
    }

    render() {
        return (
            <Intro />
        )
    }

};

const mapStateToProps = state => ({
    applicationState: state.ApplicationReducer
});

export default withRouter(connect(mapStateToProps)(IntroView));