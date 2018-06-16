using LabFor_tue.APIControllers;
using LabFor_tue.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace ServerSideTests
{
    public class ContactsControllerTests
    {

        [Fact]
        public void GetReturnFourDefaultContacts()
        {
            // Arrange:
            var undertest = new ContactsController();

            // Act:
            var result = undertest.Get();

            // Assert:
            Assert.Equal(4, result.Count());
        }


        [Fact]
        public void RetrieveASingleContactReturnsTheProperIndex()
        {
            // Arrange:
            var undertest = new ContactsController();

            // Act:
            var result = undertest.Get(3);

            // Assert:
            Assert.Equal(3, result.id);

        }


        [Fact]
        public void GettingAnInvalidIndexReturnsNull()
        {
            // Arrange:
            var undertest = new ContactsController();

            // Act:
            var result = undertest.Get(6);

            // Assert:
            Assert.Null(result);
        }

        [Fact]
        public void GettingANegativeReturnsNull()
        {
            // Arrange:
            var undertest = new ContactsController();

            // Act:
            var result = undertest.Get(-3);

            // Assert:
            Assert.Null(result);
        }
        [Fact]
        public void PostWithValidContactAddsToList()
        {
            // Arrange:
            var undertest = new ContactsController();
            var currentLength = undertest.Get().Count();

            // Act:
            var addition = new Contact(
                "Pete",
                "Best",
                "326 Sticks Lane",
                "LIverpool",
                "UK",
                83567);
            undertest.Post(addition);

            // Assert:
            var newCollection = undertest.Get();

            Assert.Equal(currentLength + 1, newCollection.Count());
            Assert.Equal(1, newCollection.Where(c => c == addition).Count());
        }


        [Fact]
        public void PutUpdatesAContact()
        {
            // Arrange:
            var undertest = new ContactsController();
            var target = undertest.Get(0);

            // Act:
           // target.last = "Ono Lennon";
           // undertest.Put(0, target);

            undertest.Put(0, new Contact(
                target.firstName,
                "Ono Lennon",
                target.address,
                target.city,
                target.state,
                target.zip,
                target.homePhone,
                target.workPhone,
                target.cellPhone
                ));
            
            // Assert:
            var updatedContact = undertest.Get(0);

            Assert.Equal("Ono Lennon", updatedContact.lastName);
        }



    }
}
