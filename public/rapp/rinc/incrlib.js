/*om*/

var Rutil = Rutil || {};
Rutil = (function () {

    /**/
    function inputSpaceNotAlow(inputSelect){
        // $('[name="Username"]').on('keyup',function (e) {
        $(inputSelect).on('keyup',function (e) {
            //console.log($(this).val());
            if(/\s/.test($(this).val())){
                $(this).addClass('border-danger');
                $(this).removeClass('border-success');
            }else{
                $(this).removeClass('border-danger');
                $(this).addClass('border-success');
            }
        });
    }
    function applyClass(selectListA,classNameD) {
        classNameD = classNameD || 'border-danger';
        selectListA.map(function (val) {
            $(val).addClass(classNameD);
        });
    }
    function genValidateObj(selectForm) {

        var allIn = $(selectForm+' :input').serializeArray();
        allIn.map(function(row,i){
            row.vel = {};
            row.ord = '';
            row.msg = {};
            row.errOnOff = {};
            //console.log(row.name);
        });
        console.log(JSON.stringify(allIn));
        return JSON.stringify(allIn);
    }
    function setErrOnAo(frmArrObj) {
        frmArrObj.map(function (row, i) {
            //console.log(Isjg.rnemptAo(row.vel));
            if(Isjg.rnemptAo(row.vel)) {
                Arrjg.mapO(row.vel,function (val,k) { //console.log(val,k);

                    var cr = Isjg[k](row.value,val);
                    console.log(cr+k);
                    if(cr){
                        //frmArrObj[i]['err'][k] = 1;
                        row.err[k] = 1;
                    }
                }) ;
                //console.log(row);
            }

        });
        //console.log(frmArrObj,'\n',JSON.stringify(frmArrObj));
        return frmArrObj;
    }
    function ifFrmArrObjIsErrThen(frmArrObj,callback) {
        frmArrObj.map(function (row,i) {
            if(Isjg.rnemptAo(row.err)){
                //$('[name="'+row.name+'"]').addClass('border-danger');
                callback(row,i,frmArrObj);
            }
        });

    }
    function ifFrmArrObjIsErrThenAddInputClass(frmArrObj,addClassNameD) {
        addClassNameD = addClassNameD || 'border-danger';
        var r = false;
        this.ifFrmArrObjIsErrThen(frmArrObj,function(row){
            $('[name="'+row.name+'"]').addClass(addClassNameD);
            r = true;
        });
        return r;
    }
    /**/
    return{
        inputSpaceNotAlow:inputSpaceNotAlow,
        applyClass:applyClass,
        genValidateObj:genValidateObj,
        setErrOnAo:setErrOnAo,
        ifFrmArrObjIsErrThen:ifFrmArrObjIsErrThen,
        ifFrmArrObjIsErrThenAddInputClass:ifFrmArrObjIsErrThenAddInputClass
    }
}());





