
// var names = ['Viktar', "Rider", 'Mike'];
//
// names.forEach(function (name) {
//     console.log('forEch', name);
// });
//
// names.forEach((name) => {
//     console.log('arrowFunc', name);
//     console.log('asmgElse');
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

var person = {
    name: "Andrew",
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name)
        });
    }
};

person.greet();
