//   function loadClient() {
//     gapi.client.setApiKey(" AIzaSyBKVbMzDox2ybB35auAv_wp5sB5Lmar7xE ");
//     return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded before calling this method.
//   function execute() {
//     return gapi.client.search.cse.list({
//       "imgColorType": "mono",
//       "imgDominantColor": "teal",
//       "imgSize": "MEDIUM",
//       "imgType": "lineart",
//       "safe": "active",
//       "searchType": "image",
//       "siteSearchFilter": "siteSearchFilterUndefined"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client");
