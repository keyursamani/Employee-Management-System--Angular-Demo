/// <reference path="Contact.js" />
/* exported Contact */

var Contact = (function () {
    function Contact(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                this[prop] = obj[prop];
            }
        }
    }

    return Contact;
})();
