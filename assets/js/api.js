/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright YashChincholi 2023 All rights reserved
 * @author YashChincholi <yashchincholi18@gmail.com>
 */

"use strict";

/**
 *@param {string} URL api url
 *@param {Function} callback callback
 */

const api_key = "e56a67c15c619e1b6eb035e4cc2ce270";

export const fetchData = function (URL, callback) {
  fetch(`${URL}&&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  reverseGeo(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },

  /**
   *
   * @param {string} query search query e.h : "New York" "London"
   */
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
