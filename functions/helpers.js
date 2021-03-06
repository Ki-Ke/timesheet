/**
 Copyright 2017 KiKe. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 **/
'use strict';
const timeToWords = require('humanize-duration');
const moment = require('moment');

//Help list
const helpList = [{
    "key": "Create a project",
    "value": "to create a project"
}, {
    "key": "Log me in",
    "value": "to check into a project"
}, {
    "key": "Check out",
    "value": "to check out from a project"
}, {
    "key": "List projects",
    "value": "to list your latest 30 projects"
}, {
    "key": "Switch",
    "value": "to change the current logged in project to new one"
}, {
    "key": "Change default time out",
    "value": "to change the default checkout time"
}, {
    "key": "Show my logs",
    "value": "to list your latest 30 logs"
}];

/**
 * Method to convert time to read able test
 * @param checkInTime - time in the form millisecond
 * @param checkOutTime - time in the form millisecond
 */
function timeToTTS(checkInTime, checkOutTime) {
    return timeToWords(checkInTime - checkOutTime, {round: true});
}

/**
 * Method to convert minutes to hours
 * @param min
 * @returns {string} - ex: 8.0
 */
function convertMinToHrs(min) {
    let hours = Math.trunc(min / 60);
    let minutes = min % 60;
    return (hours + '.' + minutes);
}

function toTitleCase(string) {
    if (!string) return '';

    return string.replace(/\w\S*/g, (text) => {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
}

function getRandomHelp() {
    return helpList[Math.floor(Math.random()*helpList.length)];
}

function getFullDate(date) {
    if (!date) {
        return 'N/A'
    }
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

module.exports = {
    timeToTTS,
    convertMinToHrs,
    toTitleCase,
    getRandomHelp,
    getFullDate
};