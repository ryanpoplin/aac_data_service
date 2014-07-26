// why is the R.E.P.L. doing everything twice???...
"use strict";
// I.I.F.E. Ø∏“
(function() {
    /*// node testing...
    // no sleep, just idle...
    setTimeout(function() {
        console.log("world...");
    }, 2000); // ˆπˆ
    console.log("hello...");*/
    var http = require('http');
    var s = http.createServer(function(req, res) {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        // config the Jade and Stylus shit...
        res.end("ExcepApps, Inc | The Autism Data Company");
        console.log("port 8000 is served...");
        var testObj = {
            // no comma needed at the end...
            // props. that hold data...
            'objects_are_badass': 'it\'s an easy way to package data...',
            'an_array': ["I'm", "here", "to", "kick", "ass"],
            // a method that does something with the data...
            'a_function_to_log_the_contents_of_an_array': function() {
                var i;
                // always include the .length to the array...
                for (i = 0; i < this.an_array.length; i += 1) {
                    console.log(this.an_array[i]);
                } // no semicolons needed...
                return undefined; // just like void in Objective-C...
            },
        };
        console.log(testObj.objects_are_badass);
        console.log(testObj.an_array);
        // if an error occurs the app will crash, so you must handle the errors and spawn a child process...
        testObj.a_function_to_log_the_contents_of_an_array();
    });
    // what's a port, how many are there?
    s.listen(8000);
    return undefined;
}());