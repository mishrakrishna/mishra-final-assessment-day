(function() {
    'use strict';

    angular
        .module('app')
        .factory('mockService', mockService);
    
    mockService.$inject = [];

    function mockService() {
        var service = {
            generateTomatoes: generateTomatoes,
            getFarms: getFarms,
            generateAnnouncements: generateAnnouncements
        };

        return service;

        function generateTomatoes(limit) {
            var tomatoes = [];
            var tomato = {};
            var colors = [
                { ID: 1, Title: "Green", ColorCode: "#2c973e", Ordinal: 1 }, 
                { ID: 2, Title: "Yellow", ColorCode: "#ffe102", Ordinal: 2 }, 
                { ID: 3, Title: "Red", ColorCode: "#ff6347", Ordinal: 3 }, 
                { ID: 4, Title: "Brown", ColorCode: "#8b4513", Ordinal: 4 } 
            ];
            var seasons = [
                { ID: 1, Title: "Spring", Ordinal: 1 }, 
                { ID: 2, Title: "Summer", Ordinal: 2 }, 
                { ID: 3, Title: "Fall", Ordinal: 3 }, 
                { ID: 4, Title: "Winter", Ordinal: 4 }
            ];
            var ounces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var picked = [true, false];

            for (var i= 0; i < limit; i++) {
                tomato = {
                    "ID": parseInt(_.uniqueId()),
                    "season": _.sample(seasons),
                    "picked": _.sample(picked),
                    "color": _.sample(colors),
                    "ounces": _.sample(ounces),
                    "cost": costOfTomato(tomato.ounces),
                    "farm": _.sample(getFarms())
                };

                tomatoes.push(tomato);
            }
            
            return JSON.stringify(tomatoes);
        }

        function generateAnnouncements(limit) {
            var announcements = [];
            var announcement = {};
            var types = [
                { ID: 1, Title: "Information", Icon: "fa fa-info"},
                { ID: 2, Title: "Weather", Icon: "fa fa-sun-o"},
                { ID: 3, Title: "Event", Icon: "fa fa-calendar"},
                { ID: 4, Title: "News", Icon: "fa fa-newspaper-o"},
            ];

            var owners = [ { ID: 1}, { ID: 2}, { ID: 3}, { ID: 4}, { ID: 5}, { ID: 6}, { ID: 7}, { ID: 8}, 
                           { ID: 9}, { ID: 10}, { ID: 11}, { ID: 12}, { ID: 13}, { ID: 14}, { ID: 15}, 
                           { ID: 16}, { ID: 17}, { ID: 18}, { ID: 19}, { ID: 20}];

            function generateLorem(words) {
                var string = "";
                var lorem = [
                    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
                    'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
                    'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
                    'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
                    'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 
                    'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
                    'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
                    'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
                    'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
                    'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
                    'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
                    'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
                    'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 
                    'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
                    'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
                    'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
                    'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
                    'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
                    'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
                    'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
                    'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
                    'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
                    'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
                    'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
                    'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
                    'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
                    'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
                    'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
                    'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
                    'elementum', 'tempor', 'risus', 'cras'
                ];
    
                for (var i = 0; i < words; i++) {
                    var position = Math.floor(Math.random() * lorem.length);
                    var word = lorem[position];
                    if (string.length < 1) {
                        string = word.charAt(0).toUpperCase() + word.slice(1);
                    } else {
                        string += " " + word;
                    }
                }
                return string + ".";
            }

            function randomDate(start, end) {
                return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            }

            for (var i = 0; i < limit; i++) {
                announcement = {
                    "ID": parseInt(_.uniqueId()),
                    "Title": generateLorem(Math.floor(Math.random()*10) + 1),
                    "Description": generateLorem(Math.floor(Math.random()*150) + 1),
                    "Type": _.sample(types),
                    "OwnerID": Math.floor(Math.random()*20)+1,
                    "Date": randomDate(new Date(2018, 12, 1), new Date())
                };

                announcements.push(announcement);
            }

            return JSON.stringify(announcements);
        }


        function costOfTomato(ounces) {
            // Average cost of a tomato per pound is $3-4
            return _.round((ounces / 16) * _.sample([3, 4]), 2); 
        }

        function getFarms() {
            var farms = [
                {
                    "ID": parseInt(_.uniqueId()),
                    "Title": "Diavola House Orchard",
                    "Owner": {
                        "ID": parseInt(_.uniqueId()),
                        "Title": "Frank Purple"
                    },
                    "Location": "Manor, GA",
                    "Established": "1952"
                }, 
                {
                    "ID": parseInt(_.uniqueId()),
                    "Title": "Tomato Plains",
                    "Owner": {
                        "ID": parseInt(_.uniqueId()),
                        "Title": "Scott Phoenix"
                    },
                    "Location": "Murrayville, GA",
                    "Established": "1940"
                }, 
                {
                    "ID": parseInt(_.uniqueId()),
                    "Title": "Perry Family Farm",
                    "Owner": {
                        "ID": parseInt(_.uniqueId()),
                        "Title": "Doug Perry"
                    },
                    "Location": "Sacramento, CA",
                    "Established": "1947"
                },
                {
                    "ID": parseInt(_.uniqueId()),
                    "Title": "Fresh Tomato Farm",
                    "Owner": {
                        "ID": parseInt(_.uniqueId()),
                        "Title": "Lorraine Green"
                    },
                    "Location": "Palmetto, FL",
                    "Established": "1920"
                },
                {
                    "ID": parseInt(_.uniqueId()),
                    "Title": "Pacific Growers",
                    "Owner": {
                        "ID": parseInt(_.uniqueId()),
                        "Title": "Sandy Lively"
                    },
                    "Location": "Fort Myers, FL",
                    "Established": "1931"
                }
            ];
                        
            return farms;
        }
    }
})(); 