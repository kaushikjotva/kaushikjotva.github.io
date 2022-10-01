//============================start other code=========================================================================================
// // var mymodal = function(fname1, lname2) {
// //     this.fname = ko.observable(fname1);
// //     this.lname = ko.observable(lname2);
// //     this.fullname = ko.pureComputed(function() {
// //         return this.fname() + " " + this.lname();
// //     }, this);
// // };

// // function Friend(name) {
// //     this.name = name;
// //     this.Knowjs = ko.observable(false);
// //     this.fevlib = ko.observable("");
// //     this.removeFriend = function() {
// //         obj.friends.remove(this);
// //     }
// // }
// // var obj = {
// //     friends: ko.observableArray([new Friend("Kaushik"), new Friend("Jashu"), new Friend("Akki"), new Friend("Sagar"), new Friend("Dinesh")])
// // };

// // obj.addFriend = function() {
// //     var nm = document.getElementById("txtnm").value;
// //     if (nm == "") {
// //         alert("Blank");
// //     } else {
// //         obj.friends.push(new Friend(nm));
// //     }
// // }
// //key up show in console value
// // obj.fname.subscribe(function(val) {
// //     console.log(val);
// // });
// // ko.applyBindings(new mymodal("", ""));
// // ko.applyBindings(obj);

//==============================end other code==============================================================

var id = 1;
var emp;
var ViewModel = function() {
    // debugger;
    var self = this;
    self.agreeFlag = ko.observable(false);
    self.employees = ko.observableArray([{ id: 0, valfname: 'jotva', vallname: 'kaushik', valtxtaddress: 'Ghatlodiya', valgender: 'Male', valcity: 'Ahmedabad', valdate: '2022-01-01', valemail: 'kau@yy.com' }]);
    self.fname = ko.observable("");
    self.lname = ko.observable("");
    self.txtaddress = ko.observable("");
    self.gender = ko.observable("");
    self.city = ko.observable("");
    self.date = ko.observable("");
    self.email = ko.observable("");
    self.errormsg = ko.observable("");

    self.addemployee = function() {
        if (self.fname() == "" || self.lname() == "" || self.txtaddress() == "" || self.gender() == "" || self.city() == "" || self.date() == "" || self.email() == "") {
            self.errormsg("All Field Are Required");
        } else {
            self.employees.push({ id: id, valfname: self.fname(), vallname: self.lname(), valtxtaddress: self.txtaddress(), valgender: self.gender(), valcity: self.city(), valdate: self.date(), valemail: self.email() });
            id += 1;

            swal("Good job!", "Data Added Success!", "success", {
                button: "Ok!",
            });

            self.clearfieldadd();

            $("#user-form-modal").modal('hide');
        }

    };
    self.clearfieldadd = function() {
        self.fname("");
        self.lname("");
        self.txtaddress("");
        self.gender("");
        self.city("Select City");
        self.date("");
        self.email("");
        self.errormsg("");
    };
    self.clearfieldupdate = function() {
        self.up_fname("");
        self.up_lname("");
        self.up_txtaddress("");
        self.up_gender("");
        self.up_city("");
        self.up_date("");
        self.up_email("");
        self.up_errormsg("");
    };

    self.deleteemp = function(obj) {
        // debugger;
        swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    self.employees.remove(obj);
                    swal("Poof! Your imaginary data has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary data is safe!");
                }
            });
    };

    self.up_fname = ko.observable("");
    self.up_lname = ko.observable("");
    self.up_txtaddress = ko.observable("");
    self.up_gender = ko.observable("");
    self.up_city = ko.observable("");
    self.up_date = ko.observable("");
    self.up_email = ko.observable("");
    self.up_errormsg = ko.observable("");

    self.getemp = function(obj) {
        // debugger;
        self.up_errormsg("");
        self.up_fname(obj.id);
        self.up_fname(obj.valfname);
        self.up_lname(obj.vallname);
        self.up_txtaddress(obj.valtxtaddress);
        self.up_gender(obj.valgender);
        self.up_city(obj.valcity);
        self.up_date(obj.valdate);
        self.up_email(obj.valemail);

        emp = obj;
    };
    self.mydelfun = function(obj) {
        self.employees.remove(obj);
    };
    self.updateemployee = function() {
         debugger;
        if (self.up_fname() == "" || self.up_lname() == "" || self.up_txtaddress() == "" || self.up_gender() == "" || self.up_city() == "" || self.up_date() == "" || self.up_email() == "") {
            self.up_errormsg("All Field Are Required");
        } else {
            self.employees.push({ id: id, valfname: self.up_fname(), vallname: self.up_lname(), valtxtaddress: self.up_txtaddress(), valgender: self.up_gender(), valcity: self.up_city(), valdate: self.up_date(), valemail: self.up_email() });

            self.mydelfun(emp);

            self.clearfieldupdate();

            swal("Good job!", "Data Updated Success!", "success", {
                button: "Ok!",
            });

            $("#user-form-update-modal").modal("hide");
        }
    };
}
ko.applyBindings(new ViewModel());