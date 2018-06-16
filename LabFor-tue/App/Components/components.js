
new angular.module("components", []).directive("editcontent", function () {

    return {
        restrict:"E",
        transclude: false,
        scope: {
            contactToEdit: "=contact",
            saveAction: "=save",
            saveArgs: "=args",
            inactiveText: "@buttontext"

        },
        controller: function ($scope, $element) {
            $scope.getEditText = function () {

                return $scope.activeEditing ? "Save" : $scope.inactiveText;
            };

            $scope.save = function () {
                $scope.activeEditing = !$scope.activeEditing;
                $scope.saveAction($scope.saveArgs);

                if ($scope.activeEditing) {
                    $scope.editForm.$setDirty();
                }
                else {

                    $scope.editForm.$setPristine();
                }

            };

            


        },
        templateUrl: "/App/Components/editForm.html"

    };




});