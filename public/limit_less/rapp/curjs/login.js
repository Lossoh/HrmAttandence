/*om*/
// Rutil.genValidateObj('#login-tab1');
var loginObj = [
    {"name": "Username", "value": "ram1254789456", "vel": {rempt:'',reqp:'\\s',rgtl:10}, "ord": "", "msg": {}, "err": {}},
    {"name": "Password", "value": "", "vel": {rempt:'',rltl:6,rgtl:30}, "ord": "", "msg": {}, "err": {}},
    {"name": "remember", "value": "on", "vel": {}, "ord": "", "msg": {}, "err": {}}
];
Rutil.setErrOnAo(loginObj);
var rtest = Rutil.ifFrmArrObjIsErrThenAddInputClass(loginObj);
console.log('rtest'+ rtest);
/*

loginObj.map(function (row,i) {
   if(Isjg.rnemptAo(row.err)){
       $('[name="'+row.name+'"]').addClass('border-danger');
   }
});
*/

/**/
Rutil.inputSpaceNotAlow('[name="Username"]');
//Rutil.applyClass(['[name="Username"]','[name="Password"]']);


$('[type="submit"]').on('click',function(e){
    // code
    e.preventDefault();
    console.log(this);
});

