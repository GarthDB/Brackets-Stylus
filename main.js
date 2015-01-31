/*jslint vars: true, plusplus: true, nomen: true, regexp: true, maxerr: 50 */
/*global define, brackets, CodeMirror */

define(function (require, exports, module) {
    "use strict";

    var CodeMirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror"),
        LanguageManager = brackets.getModule("language/LanguageManager");

    require("stylus");

    LanguageManager.defineLanguage("stylus", {
        name: "Stylus",
        mode: "stylus",
        fileExtensions: ["styl", "stylus"],
        blockComment: ["/*", "*/"],
        lineComment: "//"
    });
});
