
/// <reference path="../../Scripts/angular.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Scripts/angular-resource.js" />
/// <reference path="../../App/Components/components.js" />
/// <reference path="../../App/app.js" />
/// <reference path="../../App/Models/Contact.js" />
/// <reference path="../../App/Factories/ContactsDataService.js" />
/// <reference path="../../App/Controllers/ContactsController.js" />



/* global beforeEach, describe, it, expect, inject, module */

describe("Contacts Controller", function () {

    beforeEach(module("contactsApp"));

    mockDataService = function () {
        return {
            getAllContacts: function () {
                return [
                    new Contact("John",
                        "Lennon",
                        "123 Strawberry Fields",
                        "Forever",
                        "UK",
                        12344,
                        2121112221,
                        2121112222,
                        2121112223
                        ),
                        new Contact("Paul",
                            "McCartney",
                            "456 Penny Lane",
                            "London",
                                "UK",
                                55423,
                                2122222221,
                                2122222222,
                                2122222223
                            ),
                            new Contact("George",
                                "Harrison",
                                "141 Something",
                                "London",
                                "UK",
                                55627,
                                2123332221,
                                2123332222,
                                2123332223
                            ),
                            new Contact("Ringo",
                                "Starr",
                                "1669 Octopus' Garden",
                                "New York",
                                "NY",
                                12345,
                                2124442221,
                                2124442222,
                                2124442223
                            )
                ]
            }
        };
    }

    beforeEach(function () {
        module(function ($provide) {
            $provide.service('ContactsDataService', mockDataService);
        });

        inject(function ($injector) {
            ContactsDataService = $injector.get('ContactsDataService');
        });
    });


   

    describe("sort order", function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("default should be last name", function () {
            controller("contactsController", { $scope: scope });
            expect(scope.sortOrder).toBe("lastName");

        });

    });


    //describe("delete Button", function () {
    //    var scope, controller, window;

    //    beforeEach(inject(function ($rootScope, $controller,$window) {
    //        scope = $rootScope.$new();
    //        controller = $controller;
    //        window = $window;
    //    }));

    //    //it("delete removes a contact", function () {
    //    //    controller("contactsController", { $scope: scope, $window: window });
    //    //    var length = scope.contacts.length;
    //    //    var contactToDelete = scope.contacts[length - 2];
    //    //    window.confirm = function () {
    //    //        return true;
    //    //    };

    //    //    scope.deleteContact(contactToDelete);
    //    //    expect(scope.contacts.length).toBe(length - 1);
    //    //    expect(scope.contacts.indexOf(contactToDelete)).toBe(-1);
    //    //});

    //    //it("delete and cancel does nothing contact", function () {
    //    //    controller("contactsController", { $scope: scope, $window: window });
    //    //    window.confirm = function () {
    //    //        return false;
    //    //    };
    //    //    var length = scope.contacts.length;
    //    //    var contactToDelete = scope.contacts[length - 2];
    //    //    scope.deleteContact(contactToDelete);
    //    //    expect(scope.contacts.length).toBe(length);
    //    //    expect(scope.contacts.indexOf(contactToDelete)).toBe(length - 2);
    //    //});


    //});


});
