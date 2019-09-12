const dataApi = {
    getCurrWeekForeCast: function () {
        
        return {
            "Headline": {
                "EffectiveDate": "2019-09-07T08:00:00+03:00",
                "EffectiveEpochDate": 1567832400,
                "Severity": 4,
                "Text": "Pleasant this weekend",
                "Category": "",
                "EndDate": null,
                "EndEpochDate": null,
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
            },
            "DailyForecasts": [{
                "Date": "2019-09-06T07:00:00+03:00",
                "EpochDate": 1567742400,
                "Temperature": {
                    "Minimum": {
                        "Value": 23.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 31.0,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 34,
                    "IconPhrase": "Mostly clear",
                    "HasPrecipitation": false
                },
                "Sources": ["AccuWeather"],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
            }, {
                "Date": "2019-09-07T07:00:00+03:00",
                "EpochDate": 1567828800,
                "Temperature": {
                    "Minimum": {
                        "Value": 26.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 30.8,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 3,
                    "IconPhrase": "Partly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 36,
                    "IconPhrase": "Intermittent clouds",
                    "HasPrecipitation": false
                },
                "Sources": ["AccuWeather"],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
            }, {
                "Date": "2019-09-08T07:00:00+03:00",
                "EpochDate": 1567915200,
                "Temperature": {
                    "Minimum": {
                        "Value": 24.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 30.7,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 3,
                    "IconPhrase": "Partly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 35,
                    "IconPhrase": "Partly cloudy",
                    "HasPrecipitation": false
                },
                "Sources": ["AccuWeather"],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
            }, {
                "Date": "2019-09-09T07:00:00+03:00",
                "EpochDate": 1568001600,
                "Temperature": {
                    "Minimum": {
                        "Value": 23.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 30.6,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 2,
                    "IconPhrase": "Mostly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 34,
                    "IconPhrase": "Mostly clear",
                    "HasPrecipitation": false
                },
                "Sources": ["AccuWeather"],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
            }, {
                "Date": "2019-09-10T07:00:00+03:00",
                "EpochDate": 1568088000,
                "Temperature": {
                    "Minimum": {
                        "Value": 23.4,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 30.5,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 35,
                    "IconPhrase": "Partly cloudy",
                    "HasPrecipitation": false
                },
                "Sources": ["AccuWeather"],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
            }]
        }
    },

    getCurrAutoCompleteData: function () {
        return [{
                "Version": 1,
                "Key": "328328",
                "Type": "City",
                "Rank": 10,
                "LocalizedName": "London",
                "Country": {
                    "ID": "GB",
                    "LocalizedName": "United Kingdom"
                },
                "AdministrativeArea": {
                    "ID": "LND",
                    "LocalizedName": "London"
                }
            },
            {
                "Version": 1,
                "Key": "59411",
                "Type": "City",
                "Rank": 13,
                "LocalizedName": "Loudi",
                "Country": {
                    "ID": "CN",
                    "LocalizedName": "China"
                },
                "AdministrativeArea": {
                    "ID": "HN",
                    "LocalizedName": "Hunan"
                }
            },
            {
                "Version": 1,
                "Key": "347625",
                "Type": "City",
                "Rank": 15,
                "LocalizedName": "Los Angeles",
                "Country": {
                    "ID": "US",
                    "LocalizedName": "United States"
                },
                "AdministrativeArea": {
                    "ID": "CA",
                    "LocalizedName": "California"
                }
            },
            {
                "Version": 1,
                "Key": "319242",
                "Type": "City",
                "Rank": 20,
                "LocalizedName": "Lome",
                "Country": {
                    "ID": "TG",
                    "LocalizedName": "Togo"
                },
                "AdministrativeArea": {
                    "ID": "M",
                    "LocalizedName": "Maritime"
                }
            },
            {
                "Version": 1,
                "Key": "57911",
                "Type": "City",
                "Rank": 23,
                "LocalizedName": "Longyan",
                "Country": {
                    "ID": "CN",
                    "LocalizedName": "China"
                },
                "AdministrativeArea": {
                    "ID": "FJ",
                    "LocalizedName": "Fujian"
                }
            },
            {
                "Version": 1,
                "Key": "77666",
                "Type": "City",
                "Rank": 25,
                "LocalizedName": "Longgang District",
                "Country": {
                    "ID": "CN",
                    "LocalizedName": "China"
                },
                "AdministrativeArea": {
                    "ID": "GD",
                    "LocalizedName": "Guangdong"
                }
            },
            {
                "Version": 1,
                "Key": "2580116",
                "Type": "City",
                "Rank": 25,
                "LocalizedName": "Longhua District",
                "Country": {
                    "ID": "CN",
                    "LocalizedName": "China"
                },
                "AdministrativeArea": {
                    "ID": "GD",
                    "LocalizedName": "Guangdong"
                }
            },
            {
                "Version": 1,
                "Key": "2332564",
                "Type": "City",
                "Rank": 25,
                "LocalizedName": "Longnan",
                "Country": {
                    "ID": "CN",
                    "LocalizedName": "China"
                },
                "AdministrativeArea": {
                    "ID": "GS",
                    "LocalizedName": "Gansu"
                }
            },
            {
                "Version": 1,
                "Key": "2332955",
                "Type": "City",
                "Rank": 25,
                "LocalizedName": "Longhui County",
                "Country": {
                    "ID": "CN",
                    "LocalizedName": "China"
                },
                "AdministrativeArea": {
                    "ID": "HN",
                    "LocalizedName": "Hunan"
                }
            },
            {
                "Version": 1,
                "Key": "2333548",
                "Type": "City",
                "Rank": 25,
                "LocalizedName": "Longyang District",
                "Country": {
                    "ID": "CN",
                    "LocalizedName": "China"
                },
                "AdministrativeArea": {
                    "ID": "YN",
                    "LocalizedName": "Yunnan"
                }
            }
        ];
    },
    getCurrDayForeCast: function () {
        return [
            {
              "LocalObservationDateTime": "2019-09-12T00:00:00+03:00",
              "EpochTime": 1568235600,
              "WeatherText": "Clear",
              "WeatherIcon": 33,
              "HasPrecipitation": false,
              "PrecipitationType": null,
              "IsDayTime": false,
              "Temperature": {
                "Metric": {
                  "Value": 25.4,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Imperial": {
                  "Value": 78,
                  "Unit": "F",
                  "UnitType": 18
                }
              },
              "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
              "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
            }
          ]

    }



}
export default dataApi;