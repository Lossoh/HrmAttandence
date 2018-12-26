'use strict';
//chake req is valid or not
// Timezone

module.exports = function (app, tfa, passport, login) {
    // app.get('/atten/', require('../../routes/atten/index').html);
    // app.get('/', require('../../routes/atten/login').html);
    app.get('/atten/login', require('../../routes/atten/login').html);
    /*app.post('/api/getHtml', require('../../routes/ghtml/getHtml').ghtml);*/



};
/**/


