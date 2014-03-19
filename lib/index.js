var path = require('path');

var createPattern = function (path) {
    return {pattern: path, included: true, served: true, watched: false};
};

var initMocha = function (config) {

    //patch config into config.client
    if (config.mocha) {  config.client.mocha = config.mocha; }

    var files = config.files;
    var mochaPath = path.dirname(require.resolve('mocha'));
    files.unshift(createPattern(__dirname + '/adapter.js'));
    files.unshift(createPattern(mochaPath + '/mocha.js'));
};

initMocha.$inject = ['config'];

module.exports = {
    'framework:mocha': ['factory', initMocha]
};
