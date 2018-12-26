/*om*/

var AJAX_Databasej = AJAX_Databasej || {};
AJAX_Databasej = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var AJAX_Reqj = AJAX_Reqj || {};
AJAX_Reqj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/
    //Send a Request To a Server
    /**
     * loadDocG('rapp/ram/rdata/Uidj.js',console.log);
     * @param url
     * @param callback
     */
    function loadDocG(url,callback) {
        var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(xmlhttp.responseText);
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    function sendDataG(url,sdataStr,callback) {
        var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(xmlhttp.responseText);
            }
        };

        xmlhttp.open("GET", url+'?'+sdataStr, true);
        xmlhttp.send();
    }
    function sendDataB64G(url,sdataStr,callback) {
        var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(atob(xmlhttp.responseText));
            }
        };
        sdataStr = btoa(sdataStr);
        xmlhttp.open("GET", url+'?b64='+sdataStr, true);
        xmlhttp.send();
    }

    function sendDataB64P(url,sdataStr,callback) {
        var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(atob(xmlhttp.responseText));
            }
        };
        sdataStr = btoa(sdataStr);
        xmlhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send('b64='+sdataStr);
    }

    /**
     * Server Response Properties
     * responseText	get the response data as a string
     * responseXML	get the response data as XML data
     * @param fileName
     * @param callback
     */
    function loadDocGthis(url,callback) {
        var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(xmlhttp);
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    //The getAllResponseHeaders() Method
    function jqAjaxP(url,dataObj,callback,dataTypeD,methodD) {
        var request = $.ajax({
            url: url,
            type: methodD || "POST",
            data: dataObj || {k: 'v'},
            dataType: dataTypeD || "text"
        });

        request.done(function(resData) {
            callback(resData);
        });

        request.fail(function(xhr, status, errorThrown) {
            alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status +"\nxhr->");
            console.dir( xhr );

        });
        request.always(function( xhr, status ) {
            console.log( "The request is complete!" );
        });

    }

    /**
     * Rutilj.jqAjaxG('rapp/ram/rdata/Uidj.js',console.log);
     * @param url
     * @param callback
     * @param dataObjD
     * @param dataTypeD
     * @param methodD
     */
    function jqAjaxG(url,dataObjD,callback,dataTypeD,methodD) {
        var request = $.ajax({
            url: url,
            type: methodD || "GET",
            data: dataObjD || {k: 'v'},
            dataType: dataTypeD || "text"
        });

        request.done(function(resData) {
            callback(resData);
        });

        request.fail(function(xhr, status, errorThrown) {
            alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status +"\nxhr->");
            console.dir( xhr );
        });
        request.always(function( xhr, status ) {
            console.log( "The request is complete!" );
        });
    }

    /**
     * Rutilj.execJq('alert("Ram");');
     * @param jsStr
     * @param qselectD
     */
    function execJq(jsStr,qselectD) {
        jsStr = '<script>'+jsStr+'</script>';
        qselectD = qselectD || 'body';
        $(qselectD).append(jsStr);
    }



    return{
        /*rfix: returnObj*/
        loadDocG:loadDocG,
        loadDocGthis:loadDocGthis,
        sendDataB64G:sendDataB64G,
        sendDataG:sendDataG,
        sendDataB64P:sendDataB64P,
        jqAjaxP:jqAjaxP,
        jqAjaxG:jqAjaxG,

        execJq:execJq
    }
}());




/*om*/

var AJAX_Resj = AJAX_Resj || {};
AJAX_Resj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var AJAX_XMLHttpj = AJAX_XMLHttpj || {};
AJAX_XMLHttpj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var AJAX_XML_Filej = AJAX_XML_Filej || {};
AJAX_XML_Filej = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Appj = Appj || {};
Appj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/

    /**
     * send form data on click
     * Appj.sendFrmDataOnClickP('[data-action="save"]');
     * click button must have thie attribute
     * [{select:'[data-action="save"]',send:'/geo/role-add',cbf:'sram'}]
     * @param rselectClick
     */
    function sendFrmDataOnClickP(rselectClick) {
        var rselect = rselectClick || '[data-action="save"]',
            dataAttr =  'data-rfrm',
            dataSend =  'data-send',
            dataCbf =  'data-cbf';
        $(rselect).on('click', function (e) {
            e.preventDefault();
            var sobj = {html:'',data:{}},rtf= '',url='',callback='';
            sobj.html = this.outerHTML;
            $('[data-rfrm]').map(function () {
                rtf = $(this).attr(dataAttr);
                sobj.data[rtf] = Rutilj.gdataRfrmAttrInput(rtf);

            });
            url = Rutilj.gattr(dataSend,sobj.html);
            callback = Rutilj.gattr(dataCbf,sobj.html);
            Rutilj.jqAjaxP(url,sobj,window[callback]);
       //sram(sobj);

        });
    }

    return{
        /*rfix: returnObj*/
        sendFrmDataOnClickP:sendFrmDataOnClickP

    }
}());




/*om*/

var Best_Practicesj = Best_Practicesj || {};
Best_Practicesj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Browsersj = Browsersj || {};
Browsersj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Cookiesj = Cookiesj || {};
Cookiesj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Datesj = Datesj || {};
Datesj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Debuggingj = Debuggingj || {};
Debuggingj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var DOM_Animationsj = DOM_Animationsj || {};
DOM_Animationsj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var DOM_Collectionsj = DOM_Collectionsj || {};
DOM_Collectionsj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var DOM_CSSj = DOM_CSSj || {};
DOM_CSSj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var DOM_HTMLj = DOM_HTMLj || {};
DOM_HTMLj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/
    function showMyModal() {
        $('body').addClass('modal-open');
        $('body').attr( 'style',"display: block; padding-right: 17px;");
        $('#myModal').addClass('in');
        $('#myModal').attr( 'style',"display: block; padding-right: 17px;");
        $('body').append('<div class="modal-backdrop in"></div>');
    }
    function hideMyModal() {
        $('body').removeClass('modal-open');
        $('body').removeAttr( 'style',"display: block; padding-right: 17px;");
        $('#myModal').removeClass('in');
        $('#myModal').removeAttr( 'style',"display: block; padding-right: 17px;");
        $('[class="modal-backdrop in"]').remove();
    }
    function setMyModal(heading,modalBodyContent) {
        $('[data-rname="modal-h4"]').html(heading)
        $('[data-rname="modal-body"]').html(modalBodyContent);
    }
    function selectr(cssSelector) {
        return document.querySelectorAll(cssSelector);
    }
    function outerHtmljq(rselect) {
        return $(rselect).parent().html();
    }
    function cbDatalistResObj(resObj) {
        //sram(resObj);
        try {
            resObj = JSON.parse(resObj);
            //sram(resObj);
            var option = '', rselect = 'body', ok = [];
            resObj.data.forEach(function (row) {
                ok = Object.keys(row);
                option += Huidj.datalistOption(row[ok[0]]);
            });
            $(rselect).append(Huidj.datalist(resObj.attr.list, option));
        } catch (e) {
            sram('Some erroe ocure');
        }
    }
    function inputList(locali) {
        var locali = locali || rlocali.inputList;
        locali.forEach(function (row) {
            var selec = row.select;
            $(selec).attr('list',row.id);
            $(selec).attr('data-rtc',row.rtc);
        });

    }
    function required(locali) {
        var locali = locali || rlocali.required;
        locali.forEach(function (row) {
            var selec = row.select;
            $(selec).attr('required','required');
        });
    }
    function autofocus(locali) {
        var locali = locali || rlocali.autofocus;
        locali.forEach(function (row) {
            $(row.select).attr('autofocus',true);
        });
    }
    function placeholder(locali) {
        var locali = locali || rlocali.placeholder;
        locali.forEach(function (row) {
            var selec = row.select;
            var pval = $(selec).closest(row.closest).find(row.find).text();
            $(selec).attr('placeholder',pval);
        });
    }
    function frm(locali) {
        var locali = locali || rlocali.frm;
        locali.forEach(function (row) {
            var selec = row.select;
            $(selec).attr('data-send',row.send);
            $(selec).attr('data-cbf',row.cbf);
        });
    }
    function addFrmInfoTsubmitB(rselect,daction,drfrm,dsend,dcbf){
        $(rselect).attr('data-action',daction || 'r');
        $(rselect).attr('data-drfrm',drfrm || 'r');
        $(rselect).attr('data-dsend',dsend || 'r');
        $(rselect).attr('data-dcbf',dcbf || 'console.log');
    }
    return{
        /*rfix: returnObj*/
        showMyModal:showMyModal,
        hideMyModal:hideMyModal,
        setMyModal:setMyModal,
        outerHtmljq:outerHtmljq,
        cbDatalistResObj:cbDatalistResObj,
        inputList:inputList,
        required:required,
        autofocus:autofocus,
        placeholder:placeholder,
        frm:frm,
        selectr:selectr,
        addFrmInfoTsubmitB:addFrmInfoTsubmitB
    }
}());




/*om*/

var DOM_Nodesj = DOM_Nodesj || {};
DOM_Nodesj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var DOM_Node_Listsj = DOM_Node_Listsj || {};
DOM_Node_Listsj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Errorsj = Errorsj || {};
Errorsj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/
    function msg(errKey) {
        var msgObj = {
            rempt: 'You shoud provide some value',
            rltl: 'Plesh provid suficent Lenth Data',
            rgtl: 'Provide value lent is esid'
        };
        if(msgObj[errKey]){
            return msgObj[errKey];
        }else{
            return '';
        }
    }

    return{
        /*rfix: returnObj*/
        msg:msg
    }
}());




/*om*/

var Error_Handlingj = Error_Handlingj || {};
Error_Handlingj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Eventsj = Eventsj || {};
Eventsj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/
    function getObj(evntName) {
        var evntObj = {
          'frm-user-register':{ rselect:'frm-user-register',velObj:['i_user_register','i_emailebr'],rclass:['.i_user_register','.i_emailebr'],url:'/geo/register',cbf:'sram' },
          'evnt-key':{ rselect:'',rclass:'',url:'',cbf:'' },
          'evnt-key':{ rselect:'',rclass:'',url:'',cbf:'' }
        };
        if(evntObj[evntName]){
            return evntObj[evntName];
        }
    }

    return{
        /*rfix: returnObj*/
        getObj:getObj
    }
}());




/*om*/

var Formsj = Formsj || {};
Formsj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/
    function gdataRfrmAttrInput(rtf) {
        return $('[data-rfrm="'+rtf+'"] :input').serializeArray();
    }
    function getSerializeData(rselect) {
        return $(rselect+' :input').serializeArray();
    }
    function getMultiFrmData(selectA) {
        var r = {};
        selectA.map((aval)=>{
           r[aval] = this.getSerializeData(aval);
        });
        return r;
    }
    function getMultiFrmDataStr(selectA) {
        var r = '';
        r = this.getMultiFrmData(selectA);
        return JSON.stringify(r);
    }
    return{
        /*rfix: returnObj*/
        gdataRfrmAttrInput:gdataRfrmAttrInput,
        getSerializeData:getSerializeData,
        getMultiFrmData:getMultiFrmData,
        getMultiFrmDataStr:getMultiFrmDataStr
    }
}());




/*om*/

var Func_Applyj = Func_Applyj || {};
Func_Applyj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/
/**
 * How to execute a JavaScript function when I have its name as a string
 * window["functionName"](arguments);
 * Rutilj.jqAjaxP(url,sobj,window[callback]);
 * window["My"]["Namespace"]["functionName"](arguments); // succeeds
 * this['fun'+'ctionName']();
 * window[namefunction]('hello','hello again'); // something...
   eval[namefunction] = 'hello'; // use string or something, but its eval just one argument and not exist multiple
 * @type {{executeFunctionByName, fnCall}|*|{}}
 */
var Func_Callj = Func_Callj || {};
Func_Callj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/
    function executeFunctionByName(str, args)
    {
        var arr = str.split('.');
        var fn = window[ arr[0] ];

        for (var i = 1; i < arr.length; i++)
        { fn = fn[ arr[i] ]; }
        fn.apply(window, args);
    }

    /**
     * fnCall("example2", "test_2", "test3");
     * @param fn
     * @param args
     */
    function fnCall(fn, ...args)
    {
        let func = (typeof fn =="string")?window[fn]:fn;
        if (typeof func == "function") func(...args)
        else console.error(`${fn} is Not a function!`);
    }
    return{
        /*rfix: returnObj*/
        executeFunctionByName:executeFunctionByName,
        fnCall:fnCall
    }
}());




/*om*/

var Func_Closuresj = Func_Closuresj || {};
Func_Closuresj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Helpj = Helpj || {};
Helpj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/
    function msg(helpKey) {
        var msgObj = {
            ram:'Jay Shri Ram'
        };
        if(msgObj[helpKey]){
            return msgObj[helpKey];
        }else {
            return '';
        }
    }

    return{
        /*rfix: returnObj*/
        msg:msg
    }
}());




/*om*/

var Historyj = Historyj || {};
Historyj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Image_Mapj = Image_Mapj || {};
Image_Mapj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Iterationj = Iterationj || {};
Iterationj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var JSONj = JSONj || {};
JSONj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var JSON_Parsej = JSON_Parsej || {};
JSON_Parsej = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Locationj = Locationj || {};
Locationj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Mathj = Mathj || {};
Mathj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Navigatorj = Navigatorj || {};
Navigatorj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Performancej = Performancej || {};
Performancej = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Popup_Alertj = Popup_Alertj || {};
Popup_Alertj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Screenj = Screenj || {};
Screenj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Timingj = Timingj || {};
Timingj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Validatej = Validatej || {};
Validatej = (function () {
    /*rfix: properties*/

    /*rfix: methods*/
    function formInputObj(frmObj,errMsgObjD) {
        var r = [],
            errMsgObjD = errMsgObjD || Errorsj; //sram('msgTest->',errMsgObjD.msg('rempt'));
       // $('.rsave-register').on('click',function (e) {
            //var regFrm = Formsj.getSerializeData('form');
            frmObj.map(function (rrow) {
                var testVelK = Object.keys(rrow.vel);
                if(testVelK.length > 0){
                    sram('testVelK->',testVelK);
                    testVelK.map(function (iscb) {
                        var inputV = $('[name="'+rrow.name+'"]').val();
                        //if param1
                        if(Isjg.reqpt(iscb,'rempt|rnempt|rop|rat|raf|ran|ratt|raft|rasosb|raempt|roprator')){
                            if( Isjg[iscb](inputV) ){
                                rrow.errOnOff[iscb] = 1;
                                rrow.val = inputV;
                            }
                        }else if(Isjg.reqpt(iscb,'req|ror|rin|rto|rgt|rlt|rink|rneq|rgtl|rint|rltl|rinp|reql|reqt|reqp|rorp|rork|rort|rand|rnin|rlteq|reqpt|rinpt|rorkp|rinkp|rorkv|rninp|rnint|rneqt|rorkt|rinkt|rneqp|rneql|rgteq|reqtl|randt|randk|randp|rnink|rorkvt|randkv|randkp|rgteql|randkt|rninkp|rninkt|rneqpt|rneqtl|rorkvp|rlteql|randkvt|randkvp|rinInfo|rnininfo|rinkinfo|rinpinfo|rintinfo|rinptinfo|rinktinfo|rinkpinfo')){
                            if( Isjg[iscb](inputV,rrow.vel[iscb]) ){
                                rrow.errOnOff[iscb] = 1;
                                rrow.val = inputV;
                            }
                        }

                    });

                }


            }) ;
            /*error msg*/
            sram(frmObj);
            frmObj.map(function (mrow) {
                var errFound = Object.keys(mrow.errOnOff);
                if(errFound.length>0){
                    sram('errFound->',errFound);
                    errFound.map(function (errMsgK) {
                        var dmsg = mrow.msg[errMsgK] +' -> '+ mrow.name;
                        r.push(mrow);
                        alert(dmsg);
                        //sram(dmsg,errMsgObjD.msg(errMsgK));
                        //ram: errMsgObjD.msg(errMsgK);
                        delete mrow.errOnOff[errMsgK] ;

                    });


                }

            });

        return r;
        //});
    }
    function isError(errArrObj) {
        if(errArrObj.length > 0){
            return true;
        }else {
            return false;
        }

    }
    return{
        /*rfix: returnObj*/
        formInputObj:formInputObj,
        isError:isError
    }
}());




/*om*/

var Variable_hendlingj = Variable_hendlingj || {};
Variable_hendlingj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/
    function xRexec(str) {
        return eval(str);
    }


    return{
        /*rfix: returnObj*/
        xRexec:xRexec
    }
}());




/*om*/

var Versionsj = Versionsj || {};
Versionsj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




/*om*/

var Windowj = Windowj || {};
Windowj = (function () {
    /*rfix: properties*/

    /*rfix: methods*/


    return{
        /*rfix: returnObj*/

    }
}());




