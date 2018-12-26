/*om*/

var Rutil = Rutil || {};
Rutil = (function () {

    /**/
    /**
     * if input hase any space \s then it add class to input
     * @param inputSelect
     */
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

    /**
     * apply single class on difrent selectListA []
     * @param selectListA
     * @param classNameD
     */
    function applyClass(selectListA,classNameD) {
        classNameD = classNameD || 'border-danger';
        selectListA.map(function (val) {
            $(val).addClass(classNameD);
        });
    }

    /**
     * genret form validation object by form id|class|select
     * @param selectForm
     */
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

    /**
     * if it find some error on validation then it add err obj and return|set ne obj
     * @param frmArrObj
     * @returns {*}
     */
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

    /**
     * if form object hase any err the you apply callback
     * @param frmArrObj
     * @param callback
     */
    function ifFrmArrObjIsErrThen(frmArrObj,callback) {
        frmArrObj.map(function (row,i) {
            if(Isjg.rnemptAo(row.err)){
                //$('[name="'+row.name+'"]').addClass('border-danger');
                callback(row,i,frmArrObj);
            }
        });

    }

    /**
     * if form object hase error then it add difault danger class to all err input
     * @param frmArrObj
     * @param addClassNameD
     * @returns {boolean}
     */
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