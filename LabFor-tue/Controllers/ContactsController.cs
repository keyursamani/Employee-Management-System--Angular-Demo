using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LabFor_tue.Controllers;


namespace LabFor_tue.APIControllers
{
    public class ContactsController : ApiController
    {

        private static List<Contact> contacts = new List<Contact>
{
        new Contact("John",
            "Lennon",
            "123 Strawberry Fields",
            "Forever",
            "UK",
            12344,
            "2121112221",
            "2121112222",
            "2121112223"
        ),
        new Contact("Paul",
            "McCartney",
            "456 Penny Lane",
            "London",
            "UK",
            55423,
            "2122222221",
            "2122222222",
            "2122222223"
        ),
        new Contact("George",
            "Harrison",
            "141 Something",
            "London",
            "UK",
            55627,
            "2123332221",
            "2123332222",
            "2123332223"
        ),
        new Contact("Ringo",
            "Starr",
            "1669 Octopus' Garden",
            "New York",
            "NY",
            12345,
            "2124442221",
            "2124442222",
            "2124442223"
        )
};

     
        // GET api/<controller>
        public IEnumerable<Contact> Get()
        {
            return contacts;
        }

        // GET api/<controller>/5
        public Contact Get(int id)
        {

            if (id > contacts.Count)
                return default(Contact);

            else if(id<0)
                return default(Contact);
                
            return contacts[id];
        }

        // POST api/<controller>
        public void Post([FromBody]Contact value)
        {
            if (validateContact(value))
            {
                contacts.Add(value);
            
            }
           
        }

        private bool validateContact(Contact value)
        {
            return !string.IsNullOrWhiteSpace(value.firstName);
        }


        // PUT api/<controller>/5
        public void Put(int id, [FromBody]Contact value)
        {
            if (validateContact(value))
            {
                contacts[id] = value;
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {

            contacts.Remove(Get(id));
        }
    }
}