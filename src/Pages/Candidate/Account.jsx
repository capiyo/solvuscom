import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Update} from "./Update";
import {PostJob} from "../Employer/PostJob";

const styles = {
    slide: {
        padding: 1,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        background: '#FEA900',
    },
    slide2: {
        background: '#B3DC4A',
    },

};

const MyComponent = () => (
    <SwipeableViews>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <Update/>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <PostJob/>
        </div>

    </SwipeableViews>
);

export default MyComponent;