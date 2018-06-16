/* global contactsApp */
contactsApp.controller("contactsController",
    function ($scope, $window, ContactsDataService)
    {
        $scope.sortOrder = "lastName";
       
        $scope.toggleAddMode = function () {
            $scope.addMode = !$scope.addMode;
            if ($scope.addMode === false) {
                $scope.contacts.push($scope.newContact);
                ContactsDataService.createContact($scope.newContact);
                $scope.newContact = new Contact();

            }
        };

        $scope.toggleShowDetails = function (contact) {
            contact.showDetails = !contact.showDetails;
        };

        $scope.deleteContact = function (contact) {
            var index = $scope.contacts.indexOf(contact);
            if ($window.confirm("Are you sure you want to delete?"))
                $scope.contacts.splice(index, 1);
            ContactsDataService.deleteContact(contact);
        };


        $scope.toggleEditMode = function (contact) {
            contact.isEditing = !contact.isEditing;
            if (contact.isEditing) {

                contact.editTmpContact = {

                    firstName: contact.firstName,
                    lastName: contact.lastName,
                    address:contact.address,
                    city: contact.city,
                    state: contact.state,
                    zip: contact.zip,
                    homePhone: contact.homePhone,
                    cellPhone: contact.cellPhone,
                    workPhone: contact.workPhone
                };
            }
        else{
                contact.firstName = contact.editTmpContact.firstName;
                contact.lastName = contact.editTmpContact.lastName;
                contact.address = contact.editTmpContact.address;
                contact.city = contact.editTmpContact.city;
                contact.state = contact.editTmpContact.state;
                contact.zip = contact.editTmpContact.zip;
                contact.homePhone = contact.editTmpContact.homePhone;
                contact.cellPhone = contact.editTmpContact.cellPhone;
                contact.workPhone = contact.editTmpContact.workPhone;
                ContactsDataService.saveContact(contact.id, contact);
            
            }

        };

        $scope.getEditText = function (contact) {
            return contact.isEditing ? "Save" : "Edit";
        };
        $scope.activeEditing = function (contact) {
            return contact.isEditing;
        };


        $scope.contacts = ContactsDataService.getAllContacts();
            //[
            //    new Contact({
            //    firstName: "John",
            //    lastName: "Lennon",
            //    address: "123 Strawberry Fields",
            //    city: "Forever",
            //    state: "UK",
            //    zip: 12344,
            //    homePhone: 2121112221,
            //    cellPhone: 2121112222,
            //    workPhone: 2121112223
            //}),
              
            //    new Contact({
            //        firstName: "Paul",
            //        lastName: "McCartney",
            //        address: "456 Penny Lane",
            //        city: "London",
            //        state: "UK",
            //        zip: 55423,
            //        homePhone: 2122222221,
            //        cellPhone: 2122222222,
            //        workPhone: 2122222223
            //    }),


            //    new Contact( {
            //        firstName: "George",
            //        lastName: "Harrison",
            //        address: "141 Something",
            //        city: "London",
            //        state: "UK",
            //        zip: 55627,
            //        homePhone: 2123332221,
            //        cellPhone: 2123332222,
            //        workPhone: 2123332223
            //    }),
            //    new Contact({
            //        firstName: "Ringo",
            //        lastName: "Starr",
            //        address: "1669 Octopus' Garden",
            //        city: "New York",
            //        state: "NY",
            //        zip: 12345,
            //        homePhone: 2124442221,
            //        cellPhone: 2124442222,
            //        workPhone: 2124442223
            //    })

                
            //];
    }
);
