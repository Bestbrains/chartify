'use strict'
$(document).ready(function() {
    function getCurrentTabUrl(callback) {
      let queryInfo = {
        active: true,
        currentWindow: true
      };

      chrome.tabs.query(queryInfo, function(tabs) {
        let tab = tabs[0];
        let url = tab.url;
        console.assert(typeof url == 'string', 'tab.url should be a string');

        callback(url);
      });
    }

    function generateChart() {
        getCurrentTabUrl(function(url) {
            console.log("Fetching for: ", url);
            $.getJSON(url, undefined, buildChartFromData);
        });
    }

    function buildChartFromData(data) {
        let layout = DataCrawler.getLayoutFor(data)
        console.log(layout)
        if(layout === "undecidable") {
            $("#content").text("Result is not a supported timeseries format. Sorry.");
        } else {
            let xName, sampleLocation
            let xSplit = layout.x.split('.')
            let keyNames = []
            $("#debug").text(layout.x + " " + layout.keys + " " + layout.type);

            sampleLocation = data

            // Fast forward sample location to the data array.
            for(let i = 0; i < xSplit.length -2; i++) {
              sampleLocation = sampleLocation[xSplit[i]]
            }
            // Use the last name as the key for the x axis.
            xName = xSplit[xSplit.length - 1]

            // Go through each of the keys and extract their names for c3
            layout.keys.forEach((key) => {
                let locSplit = key.split('.')
                let keyName = locSplit[locSplit.length - 1]
                keyNames.push(keyName)
            })

            let samples = sampleLocation.map((sample) => {
              // Translate dates to javascript date objects (Helps c3)
              if(layout.type === "timeseries") {
                sample[xName] = new Date(sample[xName])
              }
              return sample
            })

            let chartConfig = {
                data: {
                    x: 'x',
                    keys: {
                        x: xName,
                        value: keyNames
                    },
                    json: samples
                },
                axis: {
                    x: {
                        type: layout.type,
                        tick: {
                            format: '%Y-%m-%d'
                        }
                    }
                },
                bindto: $("#content")[0]
            }
            $("#debug").text("xName: " + xName + " keyNames : " + keyNames);

            let chart = c3.generate(chartConfig);
      }
    }

    generateChart();
});
