
import moment from "moment";

const helpers = {

    /**
     * 
     * @param {*} prmDate 
     */
    getWeekDay: function (prmDate) {

        const currDate = new Date(prmDate);
        var weekDayName = moment(currDate).format('dddd');
        return weekDayName;
    },
    /**
     * 
     */
    checkIfDayTime: function () {

        let currDate = new Date();
        let isDay = false;
        var hours = currDate.getHours();

        if (hours >= 6 && hours <= 18) {
            isDay = true;
        } else {
            isDay = false;
        }
        return isDay;

    },

    getLocationInfo: function (prmUrlStr) {

        let outObj = {
            city: '',
            country: '',
        }

        const arrUrlData = prmUrlStr.split('/');
        outObj.city = arrUrlData[5].replace(/-/g, ' ');
        outObj.country = arrUrlData[4];

        return outObj;

    },
    getWeatherFilteredDataObj: function (prmProps) {
        const isDayTime = this.checkIfDayTime();
        let weatherIcon = '';
        const currWeatherObj = prmProps;

        let weatherDataObj = {
            icon: '',
            city: '',
            iconPhrase: '',
            country: '',
            minTemp: '',
            maxTemp: '',
            currDate: '',
        };


        if (currWeatherObj.hasOwnProperty('DailyForecasts')) {
            let weatherInfo = {};
            let titleDataObj = {};

            if (!!isDayTime) {
                weatherInfo = currWeatherObj.DailyForecasts[0].Day;
            } else {
                weatherInfo = currWeatherObj.DailyForecasts[0].Night;
            }

            weatherIcon = weatherInfo.Icon.toString();
            if (weatherIcon.length < 2) {
                weatherIcon = 0 + weatherIcon;
            }

            if (currWeatherObj.hasOwnProperty('Headline')) {
                const linkStr = currWeatherObj.Headline.Link.toString();
                titleDataObj = this.getLocationInfo(linkStr);

            }
            weatherDataObj.icon = weatherIcon;
            weatherDataObj.iconPhrase = weatherInfo.IconPhrase
            weatherDataObj.minTemp = currWeatherObj.DailyForecasts[0].Temperature.Minimum.Value;
            weatherDataObj.maxTemp = currWeatherObj.DailyForecasts[0].Temperature.Maximum.Value;
            weatherDataObj.currDate = currWeatherObj.DailyForecasts[0].Date;
            weatherDataObj.city = titleDataObj.city;
            weatherDataObj.country = titleDataObj.country;


        }

        return weatherDataObj;
    },

    // helper3: function(param1, param2){

    // }
}



export default helpers;