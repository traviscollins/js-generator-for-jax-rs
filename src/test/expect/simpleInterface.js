// auto generated by jp.co.worksap.jax_rs.ApiScriptGenerator
define(['jquery', 'exports'], function($, exports) {
  'use strict';
  var baseURL = $('meta[name="app-data"]').data('context-path') + '/resources';
  exports.get = function (message) {
    return $.ajax({
        cache: false,
        url: baseURL + '/foo/',
        type: 'get',
        data: {}
    }).promise();
  };
});