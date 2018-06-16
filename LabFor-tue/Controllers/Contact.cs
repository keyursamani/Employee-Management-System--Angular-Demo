using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LabFor_tue.Controllers
{
    public class Contact
    {


        private static int currentID = 0;
        private int thisID = currentID++;
        public int id { get { return thisID; } set { } }

        public string firstName { get; set; }
        public string lastName { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public int? zip { get; set; }
        public string homePhone { get; set; }
        public string workPhone { get; set; }
        public string cellPhone { get; set; }


        public Contact(string first = "",
        string last = "",
        string address = "",
        string city = "",
        string state = "",
        int? zip = default(int?),
        string homePhone = "",
        string workPhone = "",
        string cellPhone = "")
        {


            this.firstName = first;
            this.lastName = last;
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.homePhone = homePhone;
            this.workPhone = workPhone;
            this.cellPhone = cellPhone;

        }


    }
}