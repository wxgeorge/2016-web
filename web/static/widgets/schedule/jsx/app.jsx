import React              from 'react';
import ReactDOM, {render} from 'react-dom';

import Analyzer from './data/analyzer.jsx';

let combinedData = require('../../../../data/schedule.json');
let scheduleData = combinedData.days;
let roomData     = combinedData.rooms;
let talkData     = require('./talks.json');
let analyzer     = new Analyzer();
let days         = analyzer.objectifySessions(scheduleData, talkData);
let timeline     = analyzer.analyzeTimeline(days);

import Core from './com/core.jsx';

for (let dom of document.querySelectorAll('.widget-schedule')) {
    ReactDOM.render(<Core timeline={ timeline } rooms={ roomData } />, dom);
}

for (let targetSelector of ['.schedule__day', '.schedule']) {
    let targets = document.querySelectorAll(targetSelector);

    if (!targets) {
        continue;
    }

    targets.remove();
}
