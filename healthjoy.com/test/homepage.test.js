"use strict";

var expect = require('expect.js');
var homepage = "https://healthjoy.com/";


describe('Navigating to the homepage', function(){
    // before(function(){
    // 	browser.timeouts('page load', 20000);
    //     browser.url(homepage);
    // });

    it('Waiting for CTA',function(){
        browser.timeouts('page load', 20000);
        browser.url(homepage);
        browser.waitForExist(".btn.btn-primary.btn-lg", 10000);
        return expect(browser.isExisting('.btn.btn-primary.btn-lg')).to.equal(true);
    });

    it('Calling the feedback form', function(){
        browser.click('.btn.btn-primary.btn-lg');
        browser.pause(5000);
        return expect(browser.isExisting('.modal-content.container')).to.equal(true);
    });

});