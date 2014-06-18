"use strict";
require.config({
    paths: {
        'QUnit': 'references/qunit',
        "knockout-amd-helpers": "../Scripts/knockout-amd-helpers",
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions',
        'knockout': '../Scripts/knockout-3.1.0',
        'jquery': '../Scripts/jquery-2.1.1',
        'knockout.mapping': '../Scripts/knockout.mapping-latest.debug'
    },
    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});

// require the unit tests.
// It is likely that once we get Chutzpah working this file will not be needed.
// (see: http://chutzpah.codeplex.com/wikipage?title=requirejs&referringTitle=Home)
// I think the paths will be in the chutzpah.json file but at this time I think
// the version of chutzpah we are using is not working with requirejs.
// (see: http://chutzpah.codeplex.com/discussions/547722#post1253529 and 
// https://chutzpah.codeplex.com/discussions/545270)
require(
    ['QUnit', 'CADTests'],
    function (QUnit, CADTests) {
        // run the tests.
        CADTests.run();
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);
