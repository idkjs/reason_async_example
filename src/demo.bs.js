// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var Reason_async = require("reason_async/./src/Reason_async.js");

function getThing() {
  return new Promise((function (resolve, _) {
                return resolve(20);
              }));
}

function getOtherThing() {
  return new Promise((function (resolve, _) {
                return resolve(40);
              }));
}

function doSomething() {
  return Reason_async.Promise[/* bind */2](Reason_async.Promise[/* join2 */4](Promise.resolve(10), getThing(/* () */0)), (function (param) {
                var y = param[1];
                var x = param[0];
                return Reason_async.Promise[/* map */1](getOtherThing(/* () */0), (function (z) {
                              return ((x + y | 0) + z | 0) + 3 | 0;
                            }));
              }));
}

Reason_async.Promise[/* consume */3](doSomething(/* () */0), (function (result) {
        console.log(result);
        return /* () */0;
      }));

var Let_syntax = 0;

exports.getThing      = getThing;
exports.getOtherThing = getOtherThing;
exports.Let_syntax    = Let_syntax;
exports.doSomething   = doSomething;
/*  Not a pure module */
