var log=(function($c){
 var c=$c,f=function(p){var o=c;return o[p].bind(o);},e=f('log');
 [
	'clear','time','timeEnd','profile','profileEnd','group','groupCollapsed','groupEnd',
	'info','warn','error','count','assert','dirxml','dir','table'
 ].forEach(function(p){e[p]=f(p);});
 e.markTimeline=f('timeStamp');
 return e;
})(console);
//
log.clear();
log([
'The first parameter you pass to log() may contain format specifiers:',
'%s		» string',
'%d	» integer',
'%f		» a floating point',
'%o		» expandable DOM element',
'%O	» expandable JavaScript object',
'%c		»Applies CSS style rules to the output string as specified by the second parameter'
].join('\n'));
log("text %cblue ,%cred", "font-size:x-large;color: blue;","color: red;" );

log.info('identical to log(), but additionally shows an info icon next to the output.');
log.warn("User limit reached!(%d)(%d)",666,333,444);//User limit reached!(666)(333)\t444
log.error("Error: %s (%i)", "Server is  not responding", 500);

log.count("imcalled");//imcalled: 1
log.count("imcalled");//imcalled: 2

log.assert(document.querySelector('html').length < 2, "htmlnode is >= 1");

log.group("Authenticating user '%s'", {user:'name'});//'Object'
log("User authenticated");
log.groupEnd();

log.groupCollapsed("Authenticating user", {user:'name'});//Object {user: "name"}
log("User authenticated");
log.groupEnd();

log.time("ProcessId");
log.profile("Processing");
log.profileEnd();
log.timeEnd("ProcessId");

log.markTimeline("Adding result");

log.dir({});
log.dirxml({});
log.dirxml(document.querySelector("html"));


var testmatrix_array = [
    { name: "JavaScript", fileExtension: ".js" , blabla:1},
    { name: "TypeScript", fileExtension: ".ts", blabla:2},
    { name: "CoffeeScript", fileExtension: ".coffee", blabla:3}
];
var testmatrix_obj = {
    csharp: { name: "C#", paradigm: "object-oriented" },
    fsharp: { name: "F#", paradigm: "functional" }
};

log.table(testmatrix_array);
log.table(testmatrix_array,['name','blabla']);
log.table(testmatrix_obj);
log.table(testmatrix_obj,['paradigm']);
