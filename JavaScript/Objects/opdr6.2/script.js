//opdr 1

// opdr 2 not working properly yet


       class ContactInfo {
            constructor(addres, phonenumber, contactperson) {
                this.addres = addres
                this.phonenumber = phonenumber
                this.contactperson = contactperson
            }
        }
 
 const contInfo = new ContactInfo()  

class Club {
    constructor(name, type, members) {
        this.name = name
        this.type = type
        this.members = members
        this.contInfo = new ContactInfo()
    };
}

console.log(Club);
console.log(contInfo);




//opdr 3
// reference vs value
