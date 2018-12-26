/*om*/
/**/
frm1 = [
    {spn:"i_role",op:1,inpara:"in_id",frmname:'' ,val: "sjfhuzsjhaku1" },
    {spn:"i_role",op:2,inpara:"in_name",frmname:"name"},
    {spn:"i_role",op:3,inpara:"in_exportPermission",frmname:"exportPermission"},
    {spn:"i_role",op:4,inpara:"in_assignment_permission",frmname:"assignmentPermission"},
    {spn:"i_role",op:5,inpara:"in_user_permission",frmname:"userPermission"},
    {spn:"i_role",op:6,inpara:"in_portal_permission",frmname:"portalPermission"},
    {spn:"i_role",op:7,inpara:"in_group_email_account_permission",frmname:"groupEmailAccountPermission"},
    {spn:"i_role",op:8,inpara:"in_data_privacy_permission",frmname:"dataPrivacyPermission"},
    {spn:"i_role",op:9,inpara:"in_data",frmname:""},
    {spn:"i_role",op:10,inpara:"in_field_data",frmname:""},
    {spn:"i_role",op:11,inpara:"in_is_on",frmname:""},
    {spn:"i_role",op:12,inpara:"in_utdate",frmname:""},
    {spn:"i_role",op:13,inpara:"in_transaction_id",frmname: '',val: "khisedfse2"},
    {spn:"i_role",op:14,inpara:"in_user_id",frmname:"dG4UVsHzeJtB9O0yEJ"},
    {spn:"i_role",op:15,inpara:"in_organisation_id",frmname:"Mk0OBFm8IldriyDeZc"},
    {spn:"i_role",op:16,inpara:"in_pcdate",frmname:""}
];
frm2 =[
    {ram:1,val:'8',spn:''},
    {ram:3,val:'5',spn:''},
    {ram:8,val:'9',spn:''},
    {ram:16,val:'2',spn:''},
    {ram:17,val:'10',spn:''}
];

/**
 * Cb = callback
 * arr = [] Array
 * o|O|obj|Obj = Object {}
 * arrO = []|{k:v}
 * arrObj|Ma = [{}]
 * objO = {{}}
 * objArr = {[{}]}
 * objOarr = {{[{}]}}
 *
 * filgerr|mapr|findr|selectr = cb(val,i,arrO)
 * mapA = [] array ko map karega
 * mapO = {} obj ko map karega
 * mapAis = array [] ki val ko mep karna Is ke base pe
 * mapOis = obj {} ki val ko mep karna Is  ke base pe
 *
 */

var Arrjg = Arrjg || {};
Arrjg = (function(){ 
    /**
     * Arr.addArrO({t1:'ram',t2:'siya'},test);
     * @param kvObj
     * @param rowObj
     * @returns {{}}
     */
    function addArrO(kvObj,rowObj){
        var r = {},ok;
        r = rowObj;
        for(ok in kvObj){
            r[ok] = kvObj[ok];
        }
        return r;
    }
    function addArrObjId(arrObj){
        var r = [],ak,ok,ork,orki,obj={},objn;
        Rutil.sram(arguments);
        objn = Rutil.uniqidr(6);
        for(ak in arrObj){
            for(ork in arrObj[ak]){
                orki = `${objn}.${ak}.${ork}`;
                obj[orki] = arrObj[ak][ork];
            }
            r.push(obj);
        }
        return r;
    }
    /**
     * array to object convert
     * @param arr
     * @returns {*}
     */
    function arrTobj (arr) {
        try {
            return Object.assign({}, arr);
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    function objTarr(obj){
        return Object.values(obj);
    }
    function arrObjTarr(key,arrObj){
        var r = [],ak;
        for(ak in arrObj){
            r.push(arrObj[ak][key]);
        }
       return r;
    }
    function arrObjTarrCb(key,arrObj,callback){
        var r = [],ak,cval;
        for(ak in arrObj){
            cval = callback(arrObj[ak][key],ak,arrObj);
            r.push(cval);
        }
       return r;
    }
    function arrObjAllK(arrObj){
        if(arrObj[0]){
            return Object.keys(arrObj);
        }
        return false;
    }

    /**
     *
     * @param arrObj
     * @returns {*} {k:k}
     */
    function arrObjAllKk(arrObj){
        var r = {},cobj={},ok;
        if(arrObj[0]){
            cobj = arrObj[0];
            for(ok in cobj){
                r[ok] = ok;
            }
            return r;
        }
        return false;
    }

    /**
     * it vill return All Key of arrObj
     * Arr.arrObjAllKkCb(frm1,(key)=>{ return key+' Jay siya ram';  });
     * @param arrObj
     * @param callback
     * @returns {*}
     */
    function arrObjAllKkCb(arrObj,callback){
        var r = {},cobj={},ok,cok;
        if(arrObj[0]){
            cobj = arrObj[0];
            for(ok in cobj){
                cok = callback(ok,arrObj);
                r[ok] = cok;
            }
            return r;
        }
        return false;
    }

    /**
     * Arr.arrOcb(obj,(key)=>{ return key+' Jay siya ram';  });
     * @param arrO
     * @param callback
     * @param callbackKD
     * @returns {*}
     */
    function arrOcb(arrO,callback,callbackKD){
        if(Is.rtype(arrO)==='Array'){
            var r = [],ak,cval;
            for(ak in arrO){
                cval = callback(arrO[ak],ak,arrO);
                r.push(cval);
            }
            return r;
        }else {
            var r = {},ok,cval,cok;
            for(ok in arrO){
                cval = callback(arrO[ok],ok,arrO);
                cok = ok;
                if(callbackKD){
                    cok = callbackKD(ok,arrO[ok],arrO);
                }
                r[cok] = cval;
            }
            return r;
        }
        return false;
    }
    function copyO(obj){
        var r = {}, ok;
        for( ok in obj){
            r[ok] = obj[ok];
        }
        return r;
    }
    function copyA(arr){
        var r = [], ak;
        for(ak in arr){
            r.push(arr[ak]);
        }
        return r;
    }

    function deletArrOk(arrO,key){
        delete arrO[key];
        return arrO;
    }

    function maxLenthA(arr){
        return arr.sort(Sortr.maxLenth)[0];
    }
    /**
     * Merge one or more arrays recursively
     * merge_recursiver([1,2],[8,9],['ram'],['om','maruti']);
     * @returns {Array.<*>}
     */
    function merge_recursiver(){
        return [].concat.apply([],Object.values(arguments));
    }
    /**
     * Merge one or more arrays
     */
    function merger(baseArr,addArr){
        return baseArr.concat(addArr);
    }

    /**
     * Removes duplicate values from an array
     */
    function uniquer(arr) {
        var r = [];
        r = arr.filter(function (a) {
            return !this[a] && (this[a] = true);
        }, Object.create(null));
        return r;
    }
    function uniqueAobj(arrObj, propertyName) {
        return arrObj.filter((e, i) => arrObj.findIndex(a => a[propertyName] === e[propertyName]) === i);
    }
    function uniqueAobj1(arrObj, propertyName) {
        var subject = `${propertyName}: zval`;
        var ok;
        var r = [];
        for(ok in arrObj){
            if(!new RegExp(`${propertyName}: ${arrObj[ok][propertyName]}`).test(subject)){
                r.push(arrObj[ok]);
                subject += `,${propertyName}: ${arrObj[ok][propertyName]}`;
            }
        }
        return r;

    }
//map val
    /**/
    /**
     * Arr.mapA(Arr.objTarr(obj),(key)=>{ return key+' Jay siya ram';  });
     * @param arr
     * @param callback
     * @returns {Array}
     */
    function mapA(arr,callback){
        var r= [],ak;
        for(ak in arr){
            r.push(callback(arr[ak],ak,arr));
        }
        return r;
    }

    /**
     * Arr.mapO(obj,(val,key)=>{ return key+' Jay siya ram';  });
     * @param obj
     * @param callback
     * @returns {{}}
     */
    function mapO(obj,callback){
        var r= {},ok;
        for(ok in obj){
            r[ok] = callback(obj[ok],ok,obj);
        }
        return r;
    }
    function mapOk(obj,callback){
        var r= {},ok,nok;
        for(ok in obj){
            nok = callback(ok,obj[ok],obj);
            r[nok] = obj[ok];
        }
        return r;
    }
//arr base on arr
    /**
     * Arr.mapAis(obj,(val,key)=>{ return val+' Jay siya ram';  });
     * @param arr
     * @param callback
     * @param iscbD
     * @returns {Array}
     */
    function mapAis(arr,callback,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'rat' ;console.log(iscbD);
        for(ak in arr){
            // singal val
            if(Is[iscbD]()){
                r.push(callback(arr[ak],ak,arr));
            }else {
                r.push(arr[ak]);
            }

        }
        return r;
    }

    /**
     * Arr.mapAis1(obj,(val,key)=>{ return val+' Jay siya ram';  });
     * @param arr
     * @param callback
     * @param iscbD
     * @returns {Array}
     */
    function mapAis1(arr,callback,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'rempt' ;
        for(ak in arr){
            // singal val
            if(Is[iscbD](arr[ak])){
                r.push(callback(arr[ak],ak,arr));
            }else {
                r.push(arr[ak]);
            }
        }
        return r;
    }

    /**
     * Arr.mapAis2('in_id',obj,(val,key)=>{ return val+' Jay siya ram';  });
     * @param strArrOis
     * @param arr
     * @param callback
     * @param iscbD
     * @returns {Array}
     */
    function mapAis2(strArrOis,arr,callback,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'reqt' ;
        for(ak in arr){
            // singal val
            if(Is[iscbD](arr[ak],strArrOis)){
                r.push(callback(arr[ak],ak,arr));
            }else {
                r.push(arr[ak]);
            }

        }
        return r;
    }

    /**
     * Arr.mapAis2k('spn',obj,(val,key)=>{ return val+' Jay siya ram';  });
     * @param strArrOis
     * @param arr
     * @param callback
     * @param iscbD
     * @returns {Array}
     */
    function mapAis2k(strArrOis,arr,callback,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'reqt' ;
        for(ak in arr){
            // singal val
            if(Is[iscbD](ak,strArrOis)){
                r.push(callback(arr[ak],ak,arr));
            }else {
                r.push(arr[ak]);
            }

        }
        return r;
    }

    /**
     * Arr.mapAis3({'frmname':''},obj,(val,key)=>{ return val+' Jay siya ram';  });
     * @param arrOis
     * @param arr
     * @param callback
     * @param iscbD
     * @returns {Array}
     */
    function mapAis3(arrOis,arr,callback,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'rinkv' ;
        for(ak in arr){
            // singal val
            if(Is[iscbD](ak,arr[ak],arrOis)){
                r.push(callback(arr[ak],ak,arr));
            }else {
                r.push(arr[ak]);
            }

        }
        return r;
    }
//obj base
    function mapOis(arrO,callback,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'rat' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD]()){
                r[ok] = callback(arrO[ok],ok,arrO);
            }else {
                r[ok] = arrO[ok];
            }
        }
        return r;
    }

    function mapOis1(arrO,callback,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'rempt' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD](arrO[ok])){
                r[ok] = callback(arrO[ok],ok,arrO);
            }else {
                r[ok] = arrO[ok];
            }

        }
        return r;
    }
    function mapOis2(strArrOis,arrO,callback,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'reqp' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD](arrO[ok],strArrOis)){
                r[ok] = callback(arrO[ok],ok,arrO);
            }else {
                r[ok] = arrO[ok];
            }

        }
        return r;
    }
    function mapOis2k(strArrOis,arrO,callback,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'rink' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD](ok,strArrOis)){
                r[ok] = callback(arrO[ok],ok,arrO);
            }else {
                r[ok] = arrO[ok];
            }

        }
        return r;
    }
    function mapOis2kCb(strArrOis,arrO,callbackK,iscbD){
        var r= {},ok,nok,
            iscbD = iscbD || 'rinkt' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD](ok,strArrOis)){
                nok = callbackK(arrO[ok],ok,arrO);
                r[nok] = arrO[ok];
            }else {
                r[ok] = arrO[ok];
            }

        }
        return r;
    }
    function mapOis2vCb(strArrOis,arrO,callbackK,iscbD){
        var r= {},ok,nok,
            iscbD = iscbD || 'rinp' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD](arrO[ok],strArrOis)){
                nok = callbackK(arrO[ok],ok,arrO);
                r[nok] = arrO[ok];
            }else {
                r[ok] = arrO[ok];
            }

        }
        return r;
    }
    function mapOis3(arrOis,arrO,callback,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'rninkvp' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD](ok,arrO[ok],arrOis)){
                r[ok] = callback(arrO[ok],ok,arrO);
            }else {
                r.push(arrO[ok]);
            }

        }
        return r;
    }
//filter
    /**/
    /**
     * Arr.filterA(obj,Is.rnempt);
     * @param arr
     * @param callback
     * @returns {Array}
     */
    function filterA(arr,callback){
        var r= [],ak;
        for(ak in arr){
            if(callback(arr[ak],ak,arr)){
                r.push(arr[ak]);
            }
        }
        return r;
    }
    function filterAk(arr,callback){
        var r= [],ak,nak;
        for(ak in arr){
            nak = callback(ak,arr[ak],arr);
            if(nak){
                r.push(arr[ak]);
            }
        }
        return r;
    }

    /**
     * Arr.filterO(obj,Is.rnempt);
     * @param obj
     * @param callback
     * @returns {{}}
     */
    function filterO(obj,callback){
        var r= {},ok;
        for(ok in obj){
            if(callback(obj[ok],ok,obj)){
                r[ok] = obj[ok];
            }
        }
        return r;
    }
   function filterOk(obj,callback){
        var r= {},ok,nok;
        for(ok in obj){
            nok = callback(ok,obj[ok],obj);
            if(nok){
                r[ok] = obj[ok];
            }
        }
        return r;
    }
//filter Is
    function filterAis(arr,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'rat' ;
        for(ak in arr){
            // singal val
            if(Is[iscbD]()){
                r.push(arr[ak]);
            }

        }
        return r;
    }

    function filterAis1(arr,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'rat' ;
        for(ak in arr){
            if(Is[iscbD](arr[ak])){
                r.push(arr[ak]);
            }

        }
        return r;
    }
    function filterAis2(strArrOis,arr,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'reqp' ;
        for(ak in arr){
            // singal val
            if(Is[iscbD](arr[ak],strArrOis)){
                r.push(arr[ak]);
            }

        }
        return r;
    }
    function filterAis2k(strArrOis,arr,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'reqt' ;
        for(ak in arr){
            if(Is[iscbD](ak,strArrOis)){
                r.push(arr[ak]);
            }
        }
        return r;
    }
    function filterAis3(arrOis,arr,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'rinp' ;
        for(ak in arr){
            if(Is[iscbD](ak,arr[ak],arrOis)){
                r.push(arr[ak]);
            }
        }
        return r;
    }
//filter obj
    function filterOis(arrO,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'rat' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD]()){
                r[ok] = arrO[ok];
            }
        }
        return r;
    }

    function filterOis1(arrO,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'rnempt' ;
        for(ok in arrO){
            if(Is[iscbD](arrO[ok])){
                r[ok] = arrO[ok];
            }

        }
        return r;
    }
    function filterOis2(strArrOis,arrO,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'reqp' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD](arrO[ok],strArrOis)){
                r[ok] = arrO[ok];
            }

        }
        return r;
    }
    function filterOis2k(strArrOis,arrO,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'reqt' ;
        for(ok in arrO){
            if(Is[iscbD](ok,strArrOis)){
                r[ok] = arrO[ok];
            }
        }
        return r;
    }
    function filterOis3(arrOis,arrO,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'rinp' ;
        for(ok in arrO){
            if(Is[iscbD](ok,arrO[ok],arrOis)){
                r[ok] = arrO[ok];
            }
        }
        return r;
    }
//filter Is with callback
    function filterAisCb(arr,callback,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'rat' ;
        for(ak in arr){
            // singal val
            if(Is[iscbD]()){
                r.push(callback(arr[ak],ak,arr));
            }

        }
        return r;
    }

    function filterAis1Cb(arr,callback,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'rnempt' ;
        for(ak in arr){
            if(Is[iscbD](arr[ak])){
                r.push(callback(arr[ak],ak,arr));
            }

        }
        return r;
    }
    function filterAis2Cb(strArrOis,arr,callback,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'reqp' ;
        for(ak in arr){
            // singal val
            if(Is[iscbD](arr[ak],strArrOis)){
                r.push(callback(arr[ak],ak,arr));
            }

        }
        return r;
    }
    function filterAis2kCb(strArrOis,arr,callback,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'reqt' ;
        for(ak in arr){
            if(Is[iscbD](ak,strArrOis)){
                r.push(callback(arr[ak],ak,arr));
            }
        }
        return r;
    }
    function filterAis3Cb(arrOis,arr,callback,iscbD){
        var r= [],ak,
            iscbD = iscbD || 'rinp' ;
        for(ak in arr){
            if(Is[iscbD](ak,arr[ak],arrOis)){
                r.push(callback(arr[ak],ak,arr));
            }
        }
        return r;
    }
//filter obj callback
    function filterOisCb(arrO,callback,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'rat' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD]()){
                r[ok] = callback(arrO[ok],ok,arrO);
            }
        }
        return r;
    }

    function filterOis1Cb(arrO,callback,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'rnempt' ;
        for(ok in arrO){
            if(Is[iscbD](arrO[ok])){
                r[ok] = callback(arrO[ok],ok,arrO);
            }

        }
        return r;
    }
    function filterOis2Cb(strArrOis,arrO,callback,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'reqp' ;
        for(ok in arrO){
            // singal val
            if(Is[iscbD](arrO[ok],strArrOis)){
                r[ok] = callback(arrO[ok],ok,arrO);
            }

        }
        return r;
    }
    function filterOis2kCb(strArrOis,arrO,callback,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'reqt' ;
        for(ok in arrO){
            if(Is[iscbD](ok,strArrOis)){
                r[ok] = callback(arrO[ok],ok,arrO);
            }
        }
        return r;
    }
    function filterOis3Cb(arrOis,arrO,callback,iscbD){
        var r= {},ok,
            iscbD = iscbD || 'rinp' ;
        for(ok in arrO){
            if(Is[iscbD](ok,arrO[ok],arrOis)){
                r[ok] = callback(arrO[ok],ok,arrO);
            }
        }
        return r;
    }
//map multidimention Array
    /**
     * Arr.mapMa(frm1,(row)=>{ row['frmname'] = row['spn'].toUpperCase() ;return row; });
     * @param prop
     * @param arrObj
     * @param callback
     * @returns {Array}
     */
    function mapMa(arrObj,callback){
        var r= [],ak;
        for(ak in arrObj){
            r.push(callback(arrObj[ak],ak,arrObj));
        }
        return r;
    }
    function filterMa(arrObj,callback){
        var r= [],ak;
        for(ak in arrObj){
            if(callback(arrObj[ak],ak,arrObj)){
                r.push(arrObj[ak]);
            }
        }
        return r;
    }
    function filterMaCb(arrObj,callbackf,callback){
        var r= [],ak,nrow={};
        for(ak in arrObj){
            if(callbackf(arrObj[ak],ak,arrObj)){
                nrow = callback(prop,arrObj[ak],ak,arrObj);
                r.push(nrow);
            }
        }
        return r;
    }
//map multidimention Arr [{}] Is

    /**
     * Arr.mapMaIs(frm1,(row)=>{ row['frmname'] = row['spn'] ;return row; });
     * @param arrObj
     * @param callback
     * @param iscbD
     * @returns {Array}
     */
    function mapMaIs(arrObj,callback,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.mapOis(arrObj[ak],callback,iscbD);
            r[ak] = crow;
        }
        return r;
    }

    /**
     * callback(arrObj[ok],i,arrObj)
     * Arr.mapMais1(frm1,(val)=>{ return 'jay siya ram';  },'rempt');
     * @param arrObj
     * @param callback
     * @param iscbD
     * @returns {Array}
     */
    function mapMais1(arrObj,callback,iscbD){
        var r = [],ak,crow;
            iscbD = iscbD || 'rnempt' ;
        for(ak in arrObj){
            crow = this.mapOis1(arrObj[ak],callback,iscbD);
            r[ak] = crow;
        }
        return r;
    }

    /**
     * Arr.mapMais2('i_ro',frm1,(val)=>{ return val+' jay siya ram';  },'reqp');
     * @param strArrOis
     * @param arrObj
     * @param callback
     * @param iscbD
     * @returns {Array}
     */
    function mapMais2(strArrOis,arrObj,callback,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.mapOis2(strArrOis,arrObj[ak],callback,iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function mapMais2k(strArrOis,arrObj,callback,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.mapOis2k(strArrOis,arrObj[ak],callback,iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function mapMais2kCb(strArrOis,arrObj,callbackK,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.mapOis2kCb(strArrOis,arrObj[ak],callbackK,iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function mapMais2vCb(strArrOis,arrObj,callbackK,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.mapOis2vCb(strArrOis,arrObj[ak],callbackK,iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function mapMais3(arrOis,arrObj,callback,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.mapOis3(arrOis,arrObj[ak],callback,iscbD);
            r[ak] = crow;
        }
        return r;
    }




//filter multidimention array obj [{}]
    function filterRoMais(arrObj,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.filterOis(arrObj[ak],iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function filterRoMais1(arrObj,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.filterOis1(arrObj[ak],iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function filterRoMais2(strArrOis,arrObj,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.filterOis2(strArrOis,arrObj[ak],iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function filterRoMais2k(strArrOis,arrObj,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.filterOis2k(strArrOis,arrObj[ak],iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function filterRoMais3(arrOis,arrObj,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.filterOis3(arrOis,arrObj[ak],iscbD);
            r[ak] = crow;
        }
        return r;
    }

    function filterRoMaisCb(arrObj,callback,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.filterOisCb(arrObj[ak],callback,iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function filterroMais1Cb(arrObj,callback,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.filterOis1Cb(arrObj[ak],callback,iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function filterRoMais2Cb(strArrOis,arrObj,callback,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.filterOis2Cb(strArrOis,arrObj[ak],callback,iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function filterRoMais2kCb(strArrOis,arrObj,callback,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.filterOis2kCb(strArrOis,arrObj[ak],callback,iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function filterRoMais3Cb(arrOis,arrObj,callback,iscbD){
        var r = [],ak,crow;
        for(ak in arrObj){
            crow = this.filterOis3Cb(arrOis,arrObj[ak],callback,iscbD);
            r[ak] = crow;
        }
        return r;
    }
    function getrowByVal(prop,val,arrObj){
        var r = [];
        r = arrObj.filter((row)=>{ return row[prop] === val; });
        return r;
    }

    /**
     * it jst like AND && oprator
     * var testObj = [
     {k:'om',k1:'parvati'},
     {k:'',k1:'siya'},
     {k:'ram',k1:'siya'},
     {k:'',k1:1},
     {k:null,k1:1}
     ];
     Rutil.filterMultiCnAnd({k:'[^\\W]',k1:'[^1]'},testObj)
     result-> [ { k: 'om', k1: 'parvati' }, { k: 'ram', k1: 'siya' } ]
     * filter by multi or single colum with and condition
     * ek bhi condition agr false hogi to false return karega
     * sabhi condition true hone par hi true retun karega
     *
     * is cn me ye value hona chaiye
     * @param cnPattObj {cn: patt,cn2:patt2}
     * @param arrObj
     */
    function filterMultiCnAnd(cnPattObj, arrObj) {
        var r = arrObj.filter((row)=>{
            var ok;
            for(ok in cnPattObj){
                if(new RegExp(cnPattObj[ok]).test(row[ok])){
                    continue;
                }else {
                    return false;
                }
            }
            return true;
        });
        return r;
    }

    /**
     * it jst like ! true ane par false return karega or false ane par ture
     * @param cnPattObj
     * @param arrObj
     */
    function filterMultiCnNotAnd(cnPattObj, arrObj) {
        var r = arrObj.filter((row)=>{
            var ok;
            for(ok in cnPattObj){
                if(new RegExp(cnPattObj[ok]).test(row[ok])){
                    continue;
                }else {
                    return true;
                }
            }
            return false;
        });
        return r;
    }

    /**
     * it jst like OR condition
     * ek bhi tur hone par true riturn karega
     * filter multiple row column by OR condition
     * @param cnPattObj {cn1: patt,cn2:patt}
     * @param arrObj
     */
    function filterMultiCnOr(cnPattObj, arrObj) {
        var r = arrObj.filter((row)=>{
            var ok;
            for(ok in cnPattObj){
                if(new RegExp(cnPattObj[ok]).test(row[ok])){
                    return true;
                }else {
                    continue;
                }
            }
            return false;
        });
        return r;
    }

    /**
     * it jst like ! oprator ture ane par false tatha fase ane par true return karega
     * @param cnPattObj
     * @param arrObj
     */
    function filterMultiCnNotOr(cnPattObj, arrObj) {
        var r = arrObj.filter((row)=>{
            var ok;
            for(ok in cnPattObj){
                if(new RegExp(cnPattObj[ok]).test(row[ok])){
                    return false;
                }else {
                    continue;
                }
            }
            return true;
        });
        return r;
    }





	return{
	/*returnObj*/
	addArrO : addArrO,
	addArrObjId : addArrObjId,
	arrTobj : arrTobj,
	objTarr : objTarr,
	arrObjTarr : arrObjTarr,
	arrObjTarrCb : arrObjTarrCb,
	arrObjAllK : arrObjAllK,
	arrObjAllKk : arrObjAllKk,
	arrObjAllKkCb : arrObjAllKkCb,
	arrOcb : arrOcb,
	copyO : copyO,
	copyA : copyA,
	deletArrOk : deletArrOk,
	maxLenthA : maxLenthA,
	merge_recursiver : merge_recursiver,
	merger : merger,
	uniquer : uniquer,
	uniqueAobj : uniqueAobj,
	uniqueAobj1 : uniqueAobj1,
	mapA : mapA,
	mapO : mapO,
	mapOk : mapOk,
	mapAis : mapAis,
	mapAis1 : mapAis1,
	mapAis2 : mapAis2,
	mapAis2k : mapAis2k,
	mapAis3 : mapAis3,
	mapOis : mapOis,
	mapOis1 : mapOis1,
	mapOis2 : mapOis2,
	mapOis2k : mapOis2k,
	mapOis2kCb : mapOis2kCb,
	mapOis2vCb : mapOis2vCb,
	mapOis3 : mapOis3,
	filterA : filterA,
	filterAk : filterAk,
	filterO : filterO,
	filterOk : filterOk,
	filterAis : filterAis,
	filterAis1 : filterAis1,
	filterAis2 : filterAis2,
	filterAis2k : filterAis2k,
	filterAis3 : filterAis3,
	filterOis : filterOis,
	filterOis1 : filterOis1,
	filterOis2 : filterOis2,
	filterOis2k : filterOis2k,
	filterOis3 : filterOis3,
	filterAisCb : filterAisCb,
	filterAis1Cb : filterAis1Cb,
	filterAis2Cb : filterAis2Cb,
	filterAis2kCb : filterAis2kCb,
	filterAis3Cb : filterAis3Cb,
	filterOisCb : filterOisCb,
	filterOis1Cb : filterOis1Cb,
	filterOis2Cb : filterOis2Cb,
	filterOis2kCb : filterOis2kCb,
	filterOis3Cb : filterOis3Cb,
	mapMa : mapMa,
	filterMa : filterMa,
	filterMaCb : filterMaCb,
	mapMaIs : mapMaIs,
	mapMais1 : mapMais1,
	mapMais2 : mapMais2,
	mapMais2k : mapMais2k,
	mapMais2kCb : mapMais2kCb,
	mapMais2vCb : mapMais2vCb,
	mapMais3 : mapMais3,
	filterRoMais : filterRoMais,
	filterRoMais1 : filterRoMais1,
	filterRoMais2 : filterRoMais2,
	filterRoMais2k : filterRoMais2k,
	filterRoMais3 : filterRoMais3,
	filterRoMaisCb : filterRoMaisCb,
	filterroMais1Cb : filterroMais1Cb,
	filterRoMais2Cb : filterRoMais2Cb,
	filterRoMais2kCb : filterRoMais2kCb,
	filterRoMais3Cb : filterRoMais3Cb,
	getrowByVal : getrowByVal,
	filterMultiCnAnd : filterMultiCnAnd,
	filterMultiCnNotAnd : filterMultiCnNotAnd,
	filterMultiCnOr : filterMultiCnOr,
	filterMultiCnNotOr : filterMultiCnNotOr

	}
}());




/*om*/


/**/
/*rrep: comment*/

var Data_Parserjg = Data_Parserjg || {};
Data_Parserjg = (function(){ 


    /**
     * read yaml as text file
     * replace variable &ram jay siya ram with *ram
     * patt /(&)(\w+)(\s)(.*)/g ,
     */
    /**
     *
     * read yaml as text file
     * replace variable &ram jay siya ram with *ram
     * patt /(&)(\w+)(\s)(.*)/g ,
     * @param yamalText
     * @returns {*}
     */
    function ymlVar(yamalText){

        var variablPattern = /(&)(\w+)(\s)(.*)/g;
        var foundVarVal = [];
        var curFind;
        while ((curFind = variablPattern.exec(yamalText.toString())) !== null) {
            var curObj = {};
            curObj[`*${curFind[2]}`] = curFind[4];
            foundVarVal.push(curObj);
            // sram(curFind);
        }
        // var nd;
        foundVarVal.map((val)=>{
            var ok = Object.keys(val);
            // sram(ok);
            yamalText = yamalText.replace(new RegExp(Ram1.escapeRegExp(ok[0]),'g'),val[ok[0]]);
        });
        return yamalText;

    }
    /**
     * str|filetext me jha parbhi *key* milegi usko replace karega valu se
     * @param strText file content whith hav ki *k
     * @param starValObj {*k*: val}
     * @returns {*}
     */
    function starRep(strText,starValObj){
        for(var ok in starValObj){
            strText = strText.replace(new RegExp(Ram1.escapeRegExp(ok),'g'),starValObj[ok]);
        }
        return strText;
    }

	return{
	/*returnObj*/
	ymlVar : ymlVar,
	starRep : starRep

	}
}());


/*om*/
/**
 * rtype Get the type of a variable Returns 'Function', 'Object', 'Array','String', 'Number', 'Boolean', or 'Undefined'
 * rt , 1 , allves true
 * rf , 0 , allves false
 * rsosb , -1 , alves sift one stap back
 * rn , null , allves return null
 * rtt , true , allves return true
 * rft , false , allves return false
 * rempt , '' , variable is empty
 * rnempt , '' , variable is empty
 * req ,  == , equal to
 * reqt ,  === , equal value and equal type
 * rneq ,  != , not equal
 * rneqt ,  !== , not equal value or not equal type
 * rgt ,  > , greater than
 * rlt ,  < , less than
 * rgteq ,  >= , greater than or equal to
 * rlteq ,  <= , less than or equal to
 * rin , [] , match in multiple value [15,2,1]
 * rnin , [] , match not in multiple value [15,2,1]
 * rto ,  ? , ternary oprator
 * rand ,  && , logical and
 * ror ,  || , logical or
 * rln ,  ! , logical not
 * band ,  & , and
 * bor ,  | , or
 * bn ,  ~ , not
 * bxor ,  ^ , xor
 * bzfls ,  << , zero file left shift
 * brs ,  >> , signed right shift
 * bzfrs ,  >>> , zero fil right shift
 * single 1 Paramiter | arguments function name
 * rop|rat|raf|ran|ratt|raft|rasosb|raempt|roprator
 *
 * duble 2 Paramiter | arguments function name
 * req|ror|rin|rto|rgt|rlt|rink|rneq|rgtl|rint|rltl|rinp|reql|reqt|reqp|rorp|rork|rort|rand|rnin|rlteq|reqpt|rinpt|rorkp|rinkp|rorkv|rninp|rnint|rneqt|rorkt|rinkt|rneqp|rneql|rgteq|reqtl|randt|randk|randp|rnink|rorkvt|randkv|randkp|rgteql|randkt|rninkp|rninkt|rneqpt|rneqtl|rorkvp|rlteql|randkvt|randkvp|rinInfo|rnininfo|rinkinfo|rinpinfo|rintinfo|rinptinfo|rinktinfo|rinkpinfo
 *
 * treiple 3 Paramiter | arguments function name
 * rinkv|rinkvt|rinkvp|rninkv|rninkvt|rninkvp|rinkpvp|rinkvinfo|rinkvtinfo|rinkvpinfo|rinkpvpinfo
 *
 *
 */

/**/
/*rrep: comment*/

var Isjg = Isjg || {};
Isjg = (function(){ 

    /*0.val rin 1.val*/
    /**
     * rat , 1 , allves true
     */
    function rat(){
        return 1;
    }

    /**
     * raf , 0 , allves false
     */
    function raf(){
        return 0;
    }

    /**
     * rasosb , -1 , alves sift one stap back
     */
    function rasosb(){
        return -1;
    }

    /**
     * ran , null , allves return null
     */
    function ran(){
        return null;
    }

    /**
     * ratt , true , allves return true ===
     */
    function ratt(){
        return true;
    }

    /**
     * raft , false , allves return false ===
     */
    function raft(){
        return false;
    }

    /**
     * raempt , '' , allves return is empty
     */
    function raempt(){
        return '';
    }


    /**
     * rtype , var_, Get the type of a variable Returns 'Function', 'Object', 'Array','String', 'Number', 'Boolean', or 'Undefined'
     * Get the type of a variable
     * Returns 'Function', 'Object', 'Array','String', 'Number',
     * 'Boolean', or 'Undefined'
     * @param var_
     * @returns {*}
     */
    function rtype(var_){
        // return typeof strObj;
        try {
            if (undefined === var_) {
                return 'Undefined';
            }
            if (var_ === null) {
                return 'Null';
            }
            return {}.toString.call(var_).slice(8, -1);

        } catch (e) {
            console.log(e);
            return false;
        }
    }


    /**
     * rempt , val , '' , variable is empty true
     * @param val
     * @returns {boolean}
     */
    function rempt(val){
        return (val === undefined || val === null || val.length <= 0);
    }

    /**
     * rnempt ,val , 'ram' , variable is empty true
     */
    function rnempt(val){
        return (!(val === undefined || val === null || val.length <= 0));
    }

    /**
     * req , val , == , equal to true
     * @param val1 (taken from loop)
     * @param val2 (provid as argument)
     * @returns {boolean}
     */
    function req(val1,val2){
        return val1 == val2;
    }

    function reqp(val1,valPatt){
        return new RegExp(valPatt).test(val1);
    }
    function rneqp(val1,valPatt){
        return (!new RegExp(valPatt).test(val1));
    }

    function reqpt(val1,valPatt){
        return new RegExp('\\b'+valPatt+'\\b').test(val1);
    }
    function rneqpt(val1,valPatt){
        return (!new RegExp('\\b'+valPatt+'\\b').test(val1));
    }

    /**
     * reqt , val ,  === , equal value and equal type true
     */
    function reqt(val1,val2){
        return val1 === val2;
    }

    /**
     * rneq , val , != , not equal
     */
    function rneq(val1,val2){
        return val1 != val2;
    }

    /**
     * rneqt , val ,  !== , not equal value or not equal type
     */
    function rneqt(val1,val2){
        return val1 !== val2;
    }

    /**
     * rgt , val , > , greater than
     */
    function rgt(val1,val2){
        return val1 > val2;
    }

    /**
     * rlt , val , < , less than
     */
    function rlt(val1,val2){
        return val1 < val2;
    }

    /**
     * rgteq , val,  >= , greater than or equal to
     */
    function rgteq(val1,val2){
        return val1 >= val2;
    }

    /**
     * rlteq , val,  <= , less than or equal to
     */
    function rlteq(val1,val2){
        return val1 <= val2;
    }

    /**
     * rto ,val ,  ? , ternary oprator if val is epty or null return givin val
     */
    function rto(val1,val2){
        return val1 || val2;
    }

    /**
     * rln ,val ,  ! , logical not if val is true return false
     */
    function rln(val){
        return (!val);
    }




    /**
     * rin , val , == []|{} arrO, match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rin(val,arrO){
        var ok ;
        for(ok in arrO){
            if(val == arrO[ok]){
                return true;
            }
        }
        return false;
    }
    function rininfo(val,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(val == arrO[ok]){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }

    /**
     * rint , val , === []|{} match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rint(val,arrO){
        var ok ;
        for(ok in arrO){
            if(val === arrO[ok]){
                return true;
            }
        }
        return false;
    }
    function rintinfo(val,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(val === arrO[ok]){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;

            }
        }
        return false;
    }


    /**
     * rnin , val , != []|{} arrO, (aposit of rin) match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rnin(val,arrO){
        var ok ;
        for(ok in arrO){
            if(val != arrO[ok]){
                return true;
            }
        }
        return false;
    }
    function rnininfo(val,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(val != arrO[ok]){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }

    /**
     * rnink , key , == []|{} arrO, match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rnink(key,arrO){
        var r = Is.rink(key,arrO);
        return (!r);
    }

    /**
     * rinp , val , == []|{} arrO, match in multiple value [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rinp(val,arrO){
        var ok ;
        for(ok in arrO){
            if(new RegExp(val).test(arrO[ok])){
                return true;
            }
        }
        return false;
    }
    function rinpinfo(val,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(new RegExp(arrO[ok]).test(val)){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }

    /**
     * rinpt , val , === []|{} arrO, match in multiple value [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rinpt(val,arrO){
        var ok ;
        for(ok in arrO){
            if(new RegExp('\\b'+arrO[ok]+'\\b').test(val)){
                return true;
            }
        }
        return false;
    }
    function rinptinfo(val,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(new RegExp('\\b'+arrO[ok]+'\\b').test(val)){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }

    /**
     * rinkp , key , == []|{} arrO, match in multiple value [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rinkp(key,arrO){
        var ok ;
        for(ok in arrO){
            if(new RegExp(key).test(arrO[ok])){
                return true;
            }
        }
        return false;
    }
    function rinkpinfo(key,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(new RegExp(arrO[ok]).test(key)){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }

    /**
     * rninp , val , == []|{} arrO, (aposit of rinp) match in multiple value [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rninp(val,arrO){
        var r = Is.rinp(val,arrO);
        return (!r);
    }

    /**
     * rnint ,  val , !== []|{} arrO, (aposit of rin) match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rnint(val,arrO){
        var r = Is.rint(val,arrO);
        return (!r);
    }

    /**
     * rink , key , == []|{} arrO, match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rink(key,arrO){
        var ok ;
        for(ok in arrO){
            if(key == ok){
                return true;
            }
        }
        return false;
    }
    function rinkinfo(key,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(key == ok){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }

    /**
     * rinkt ,key , === []|{} arrO, match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rinkt(key,arrO){
        var ok ;
        for(ok in arrO){
            if(key === ok){
                return true;
            }
        }
        return false;
    }
    function rinktinfo(key,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(key === ok){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }


    /**
     * rninkt ,key , !== []|{} arrO, match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rninkt(key,arrO){
        var r = Is.rinkt(key,arrO);
        return (!r);
    }

    /**
     * rninkp ,key , == []|{} arrO, match in multiple value [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rninkp(key,arrO){
        var r = Is.rinkp(key,arrO);
        return (!r);
    }


    /**
     * rinkv ,key , val , == []|{} arrO, match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rinkv(key,val,arrO){
        var ok ;
        for(ok in arrO){
            if(key == ok && val == arrO[ok]){
                return true;
            }
        }
        return false;
    }
    function rinkvinfo(key,val,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(key == ok && val == arrO[ok]){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }

    /**
     * rinkvt ,key , val , === []|{} arrO, match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rinkvt(key,val,arrO){
        var ok ;
        for(ok in arrO){
            if(key === ok && val === arrO[ok]){
                return true;
            }
        }
        return false;
    }
    function rinkvtinfo(key,val,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(key === ok && val === arrO[ok]){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }

    /**
     * rinkvp ,key , val , == []|{} arrO, match in multiple value [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rinkvp(key,val,arrO){
        var ok ;
        for(ok in arrO){
            if(key == ok && new RegExp(arrO[ok]).test(val)){
                return true;
            }
        }
        return false;
    }
    function rinkvpinfo(key,val,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(key == ok && new RegExp(arrO[ok]).test(val)){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }

    /**
     * rninkv ,key , val , != []|{} arrO, match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rninkv(key,val,arrO){
        var r = Is.rinkv(key,val,arrO);
        return (!r);
    }

    /**
     * rninkvp ,key , val , == []|{} arrO, match in multiple value [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rninkvp(key,val,arrO){
        var r = Is.rinkvp(key,val,arrO);
        return (!r);
    }

    /**
     * rinkpvp ,key , val , == []|{} arrO, match in multiple value [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rinkpvp(key,val,arrO){
        var ok ;
        for(ok in arrO){
            if(new RegExp(ok).test(key) && new RegExp(arrO[ok]).test(val)){
                return true;
            }
        }
        return false;
    }
    function rinkpvpinfo(key,val,arrO){
        var ok ,r=[];
        for(ok in arrO){
            if(new RegExp(ok).test(key) && new RegExp(arrO[ok]).test(val)){
                r[0] = ok;
                r[1] = arrO[ok];
                r[3] = arrO;
                return r;
            }
        }
        return false;
    }

    /**
     * rninkvt ,key , val , !== []|{} arrO, match in multiple value [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rninkvt(key,val,arrO){
        var r = Is.rinkvt(key,val,arrO);
        return (!r);
    }

    /**
     * rand , carrO , == && []|{} , logical and not allow false [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rand(carr,arrO){
        var ak;
        for(ak in carr){
            if(Is.rnin(carr[ak],arrO)){
                return false;
            }
        }
        return true;
    }
    /**
     * randt , carrO , === && []|{} , logical and not allow false [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function randt(carr,arrO){
        var ak;
        for(ak in carr){
            if(Is.rnint(carr[ak],arrO)){
                return false;
            }
        }
        return true;
    }

    /**
     * randk , cKarrO , == && []|{} , logical and not allow false [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function randk(kcarr,arrO){
        var ak;
        for(ak in kcarr){
            if(Is.rnink(ak,arrO)){
                return false;
            }
        }
        return true;
    }

    /**
     * randp ,carrO , == && []|{} , logical and not allow false [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function randp(carr,arrO){
        var ak;
        for(ak in carr){
            if(Is.rninp(carr[ak],arrO)){
                return false;
            }
        }
        return true;
    }

    /**
     * randkt,carrO , == && []|{} , logical and not allow false [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function randkt(kcarr,arrO){
        var ak;
        for(ak in kcarr){
            if(Is.rninkt(ak,arrO)){
                return false;
            }
        }
        return true;
    }

    /**
     * randkv,carrO , == && []|{} , logical and not allow false [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function randkv(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( Is.rninkv(ak,kvcarrO[ak],arrO)  ){
                return false;
            }
        }
        return true;
    }

    /**
     * randkvt,carrO , == && []|{} , logical and not allow false [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function randkvt(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( Is.rninkvt(ak,kvcarrO[ak],arrO)  ){
                return false;
            }
        }
        return true;
    }

    /**
     * randkp,carrO , == && []|{} , logical and not allow false [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function randkp(kpcarr,arrO){
        var ak;
        for(ak in kpcarr){
            if(Is.rninkp(ak,arrO)){
                return false;
            }
        }
        return true;
    }

    /**
     * randkvp,carrO , == && []|{} , logical and not allow false [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function randkvp(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( Is.rninkvp(ak,kvcarrO[ak],arrO)  ){
                return false;
            }
        }
        return true;
    }



    /**
     * ror , carrO , == || []|{} , logical or  prefer true [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function ror(carr,arrO){
        var ak;
        for(ak in carr){
            if(Is.rin(carr[ak],arrO)){
                return true;
            }
        }
        return false;
    }

    /**
     * rort, carrO , === || []|{} , logical or  prefer true [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rort(carr,arrO){
        var ak;
        for(ak in carr){
            if(Is.rint(carr[ak],arrO)){
                return true;
            }
        }
        return false;
    }

    /**
     * rork, cKarrO , == || []|{} , logical or  prefer true [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rork(kcarr,arrO){
        var ak;
        for(ak in kcarr){
            if(Is.rink(ak,arrO)){
                return true;
            }
        }
        return false;
    }

    /**
     * rorp, carrO , == || []|{} , logical or not prefer true [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rorp(pcarr,arrO){
        var ak;
        for(ak in pcarr){
            if(Is.rinp(pcarr[ak],arrO)){
                return true;
            }
        }
        return false;
    }

    /**
     * rorkt, cKarrO , === || []|{} , logical or not prefer true [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rorkt(kcarr,arrO){
        var ak;
        for(ak in kcarr){
            if(Is.rinkt(ak,arrO)){
                return true;
            }
        }
        return false;
    }

    /**
     * rorkv, cKarrO , == || []|{} , logical or not prefer true [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rorkv(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( Is.rinkv(ak,kvcarrO[ak],arrO)  ){
                return true;
            }
        }
        return false;
    }
    /**
     * rorkvt, cKarrO , === || []|{} , logical or not prefer true [15,2,1,ram,siya] {1:15,2:2,4:1,r:ram,s:siya}
     */
    function rorkvt(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( Is.rinkvt(ak,kvcarrO[ak],arrO)  ){
                return true;
            }
        }
        return false;
    }

    /**
     * rorkp, carrO , == || []|{} , logical or not prefer true [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rorkp(kpcarr,arrO){
        var ak;
        for(ak in kpcarr){
            if(Is.rinkp(ak,arrO)){
                return true;
            }
        }
        return false;
    }

    /**
     * rorkvp, carrO , == || []|{} , logical or not prefer true [\\d,\\w,1] {1:\\d,2:\\w,4:1}
     */
    function rorkvp(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( Is.rinkvp(ak,kvcarrO[ak],arrO)  ){
                return true;
            }
        }
        return false;
    }



    /**
     * band ,  & , and
     */
    function band(){

    }

    /**
     * bor ,  | , or
     */
    function bor(){

    }

    /**
     * bn ,  ~ , not
     */
    function bn(){

    }

    /**
     * bxor ,  ^ , xor
     */
    function bxor(){

    }

    /**
     * bzfls ,  << , zero file left shift
     */
    function bzfls(){

    }

    /**
     * brs ,  >> , signed right shift
     */
    function brs(){

    }

    /**
     * bzfrs ,  >>> , zero fil right shift
     */
    function bzfrs(){

    }
    /**
     * reql (length)  ,  == , equal to
     */
    function reql(val,vlength){
        return val.length == vlength;
    }

    /**
     * reqtl (length)  ,  === , equal value and equal type
     */
    function reqtl(val,vlength){
        return val.length === vlength;
    }

    /**
     * rneql (length)  ,  != , not equal
     */
    function rneql(val,vlength){
        return val.length != vlength;
    }

    /**
     * rneqtl (length)  ,  !== , not equal value or not equal type
     */
    function rneqtl(val,vlength){
        return val.length !== vlength;
    }

    /**
     * rgtl (length)  ,  > , greater than
     */
    function rgtl(val,vlength){
        return val.length > vlength;
    }

    /**
     * rltl (length)  ,  < , less than
     */
    function rltl(val,vlength){
        return val.length < vlength;
    }

    /**
     * rgteql (length)  ,  >= , greater than or equal to
     */
    function rgteql(val,vlength){
        return val.length >= vlength;
    }

    /**
     * rlteql (length)  ,  <= , less than or equal to
     */
    function rlteql(val,vlength){
        return val.length <= vlength;
    }
    /**
     * it will trit String & Number is value true
     * @param strNum
     * @returns {boolean}
     */
    function rval(strNum) {
        try {
            if (Is.rtype(strNum)==='String' || Is.rtype(strNum)==='Number') {
                return true
            }
            return false;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    function arrObj(obj){
        try {
            if (Is.rarr(obj)) {
                if (Is.rtype(obj[0]) === 'Object') {
                    return true;
                }
            }
        } catch (e) {
            console.log(e);
            return false;
        }
        return false;
    }
    function rarr (myArray){
        try {
            return myArray.constructor === Array;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    function rdate(myDate) {
        try {
            return myDate.constructor === Date;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    function rnum(str) {
        try {
            return (typeof str == 'string' || typeof str == 'number') && !isNaN(str - 0) && str !== '';
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    function rwordOnly(str){
        return (/\s|\W/g.test(str))?'':str;
    }
    function rarrObjV(prop,val,arrObj) {
        var ok;
        for(ok in arrObj){
            if(val===arrObj[ok][prop]){
                return true;
            }
        }
        return false;
    }
    function rarrObjVpa(prop,valPtt,arrObj) {
        var ok;
        for(ok in arrObj){
            if(new RegExp(valPtt).test(arrObj[ok][prop])){
                return true;
            }
        }
        return false;
    }
    function remptAo(arrO){
        var ok;
        try {
            for (ok in arrO) {
                if (arrO[ok]) {
                    return false;
                }
            }
        } catch (e) {
            return true;
        }
        return true;
    }
    function rnemptAo(arrO){
        return (! this.remptAo(arrO));
    }




    return{
	/*returnObj*/
	rat : rat,
	raf : raf,
	rasosb : rasosb,
	ran : ran,
	ratt : ratt,
	raft : raft,
	raempt : raempt,
	rtype : rtype,
	rempt : rempt,
	rnempt : rnempt,
	req : req,
	reqp : reqp,
	rneqp : rneqp,
	reqpt : reqpt,
	rneqpt : rneqpt,
	reqt : reqt,
	rneq : rneq,
	rneqt : rneqt,
	rgt : rgt,
	rlt : rlt,
	rgteq : rgteq,
	rlteq : rlteq,
	rto : rto,
	rln : rln,
	rin : rin,
	rininfo : rininfo,
	rint : rint,
	rintinfo : rintinfo,
	rnin : rnin,
	rnininfo : rnininfo,
	rnink : rnink,
	rinp : rinp,
	rinpinfo : rinpinfo,
	rinpt : rinpt,
	rinptinfo : rinptinfo,
	rinkp : rinkp,
	rinkpinfo : rinkpinfo,
	rninp : rninp,
	rnint : rnint,
	rink : rink,
	rinkinfo : rinkinfo,
	rinkt : rinkt,
	rinktinfo : rinktinfo,
	rninkt : rninkt,
	rninkp : rninkp,
	rinkv : rinkv,
	rinkvinfo : rinkvinfo,
	rinkvt : rinkvt,
	rinkvtinfo : rinkvtinfo,
	rinkvp : rinkvp,
	rinkvpinfo : rinkvpinfo,
	rninkv : rninkv,
	rninkvp : rninkvp,
	rinkpvp : rinkpvp,
	rinkpvpinfo : rinkpvpinfo,
	rninkvt : rninkvt,
	rand : rand,
	randt : randt,
	randk : randk,
	randp : randp,
	randkt : randkt,
	randkv : randkv,
	randkvt : randkvt,
	randkp : randkp,
	randkvp : randkvp,
	ror : ror,
	rort : rort,
	rork : rork,
	rorp : rorp,
	rorkt : rorkt,
	rorkv : rorkv,
	rorkvt : rorkvt,
	rorkp : rorkp,
	rorkvp : rorkvp,
	band : band,
	bor : bor,
	bn : bn,
	bxor : bxor,
	bzfls : bzfls,
	brs : brs,
	bzfrs : bzfrs,
	reql : reql,
	reqtl : reqtl,
	rneql : rneql,
	rneqtl : rneqtl,
	rgtl : rgtl,
	rltl : rltl,
	rgteql : rgteql,
	rlteql : rlteql,
	rval : rval,
	arrObj : arrObj,
	rarr : rarr,
	rdate : rdate,
	rnum : rnum,
	rwordOnly : rwordOnly,
	rarrObjV : rarrObjV,
	rarrObjVpa : rarrObjVpa,
        remptAo:remptAo,
        rnemptAo:rnemptAo

	}
}());



/*om*/


/**/
/*rrep: comment*/

var Jsonrjg = Jsonrjg || {};
Jsonrjg = (function(){ 

     /**
     * Decodes a JSON string
     */
    function decoder(jsonStr){
            try {
                return JSON.parse(jsonStr);
            } catch (e) {
                console.log(e);
                return false;
            }
    }
    /**
     * Returns the JSON representation of a value
     */
    function encoder(jobj){
        try {
            return JSON.stringify(jobj);
        } catch (e) {
            console.log(e);
            return false;
        }
    }



	return{
	/*returnObj*/
	decoder : decoder,
	encoder : encoder

	}
}());


/*om*/
/*const Is = require('./Is');
const Arr = require('./Arr');*/
/**/
var i_user_register = [],i_emailebr = [],frmData = [],i_user_sp,i_emailebr_sp;
//get data from ui
frmData = {"i_user_register":
    [{"name":"firstName","value":"Ram"},
        {"name":"lastName","value":"Jat"},
        {"name":"inputPassword","value":"ramram"},
        {"name":"confirmPassword","value":"ramram"}],
    "i_emailebr":[{"name":"inputEmail","value":"ram@geointime.com"}]};
//get data from ui
i_user_register  = [
    {riclass:"i_user",rindex:6,name:"confirmPassword",val:"",vel:{rempt:'',rltl:5},msg:{rempt:'Plise Provide Requer val',rltl:'Value lenth is not sfisent',rgtl:'Vale lenth is more then requer'},errOnOff:{} },
    {riclass:"i_user",rindex:8,name:"firstName",val:"",vel:{rempt:'',rgtl:50},msg:{rempt:'Plise Provide Requer val',rgtl:'Vale lenth is more then requer'},errOnOff:{} },
    {riclass:"i_user",rindex:9,name:"lastName",val:"",vel:{rempt:''},msg:{rempt:'Plise Provide Requer val'},errOnOff:{} }
];
//get data from ui
i_emailebr  = [
    {riclass:"i_emailebr",rindex:3,name:"inputEmail",val:"",vel:{},msg:{},errOnOff:{} }
];

i_user_sp =
    [
        {spn:"i_user",pn:"in_id",op:1,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_name",op:2,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_u_acccount",op:3,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_is_admin",op:4,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_user_name",op:5,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_password",op:6,name:"confirmPassword",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_salutation_name",op:7,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_first_name",op:8,name:"firstName",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_last_name",op:9,name:"lastName",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_mother_name",op:10,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_father_name",op:11,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_aadhaar_num",op:12,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_date_of_birth",op:13,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_gender",op:14,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_u_logo",op:15,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_u_title",op:16,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_u_category",op:17,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_is_active",op:18,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_is_portal_user",op:19,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_is_super_admin",op:20,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_title",op:21,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_created_at",op:22,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_default_team_id",op:23,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_contact_id",op:24,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_avatar_id",op:25,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_udate",op:26,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_last_login",op:27,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_last_update",op:28,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_created_by_id",op:29,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_reference_by_id",op:30,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_modified_by_id",op:31,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_is_on",op:32,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_utdate",op:33,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_transaction_id",op:34,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_user_id",op:35,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_organisation_id",op:36,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_user",pn:"in_pcdate",op:37,name:"",val:"",vel:{},msg:{},errOnOff:{} }
    ];
//data for maching and save data to db using sp
i_emailebr_sp =
    [
        {spn:"i_emailebr",pn:"in_id",op:1,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_name",op:2,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_email_ac",op:3,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_email_type",op:4,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_is_prime",op:5,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_hint",op:6,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_ebr_type",op:7,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_ebr_id",op:8,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_is_on",op:9,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_utdate",op:10,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_transaction_id",op:11,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_user_id",op:12,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_organisation_id",op:13,name:"",val:"",vel:{},msg:{},errOnOff:{} },
        {spn:"i_emailebr",pn:"in_pcdate",op:14,name:"",val:"",vel:{},msg:{},errOnOff:{} }
    ];
/**/
/**
 * [{}]
 * def = function not return value
 */

var Majg = Majg || {};
Majg = (function(){ 
    function sval(key,val,arrObj,rowD){
        try {
            var rowD = rowD || 0;
            return arrObj[rowD][key] = val;
        } catch (e) {
            console.log(e);
        }
    }
    function svalBfind(fkey,fval,skey,sval,arrObj,rinkvtD){
        var ak,
            rinkvt = rinkvtD || 'rinkvt';
        for(ak in arrObj){
            if(Isjg[rinkvt](fkey,fval,arrObj[ak])){
                arrObj[ak][skey] = sval;
            }
        }
    }

    /**
     * [{}],[{}]
     * r = Ma.ljoinK(i_user_sp,frmData.i_user_register,['name','name','value']);
     * @param arrObj1
     * @param arrObj2
     * @param onA [findk1,findk2,addk2]
     */
    function ljoinK(arrObj1,arrObj2,onA){
        var r = [],
            ak1,
            offset=0,
            cr = false;
        for(ak1 in arrObj1){
            r.push(arrObj1[ak1]);
            cr = this.filter3Info(onA[1],arrObj1[ak1][onA[0]],arrObj2);
            if(cr){
                r[ak1][onA[2]] = cr[1][onA[2]];
            }
        }
        return r;
    }

    /**
     * Ma.ljoinAddk(i_user_sp,frmData.i_user_register,['name','name','val','value']);2
     * @param arrObj1
     * @param arrObj2
     * @param onA [findk1,findk2,addk1,addk2]
     * @returns {Array}
     */
    function ljoinAddk(arrObj1,arrObj2,onA){
        var r = [],
            ak1,
            offset=0,
            cr = false;
        for(ak1 in arrObj1){
            r.push(arrObj1[ak1]);
            cr = this.filter3Info(onA[1],arrObj1[ak1][onA[0]],arrObj2);
            if(cr){
                r[ak1][onA[2]] = cr[1][onA[3]];
            }
        }
        return r;
    }

    /**
     * Ma.arrObjDef(i_user_sp,[['in_u_acccount','Ram','name']]);
     * @param arrObj
     * @param onMa [[findval,addv,addk]]
     */
    function arrObjDef(arrObj,onMa,rintD){
        var onk,fobj,
            rinpD = rintD || 'rint';
        for(onk in onMa){
            fobj = this.filter2Info(onMa[onk][0],arrObj,rinpD);
            if(fobj){
                var _z = onMa[onk][2] || '_z';
                arrObj[fobj[0]][_z] = onMa[onk][1];
            }
        }
        return arrObj;
    }
    /**
     * get vall from object
     */
    function gval(key,arrObj,rowD){
        rowD = rowD || 0;
        return arrObj[rowD][key];
    }
    function gobj(arrObj,rowD){
        rowD = rowD || 0;
        return arrObj[rowD];
    }
    function gobjBval(val,arrObj,rint){
        var ok,
            rint = rint || 'rint';
        for(ok in arrObj){
            if(Isjg[rint](val,arrObj[ok])){
                return arrObj[ok];
            }
        }
        return {};
    }
    function gobjBKv(key,val,arrObj,rinkvtD){
        var ok,
            rinkvt = rinkvtD || 'rinkvt';
        for(ok in arrObj){
            if(Isjg[rinkvt](key,val,arrObj[ok])){
                return arrObj[ok];
            }
        }
        return {};
    }
    function mapr(arrObj,callback){
        var r = [],
            ak;
        for(ak in arrObj){
            r[ak] = callback(arrObj[ak],ak,arrObj);
        }
        return r;
    }
    function maprDef(arrObj,callback){
        var ak;
        for(ak in arrObj){
            arrObj[ak] = callback(arrObj[ak],ak,arrObj);
        }
    }
    function filter3Info(key,val,arrObj,rinkvtD){
        var ak,
            isd = rinkvtD || 'rinkvt' ;
        for(ak in arrObj){
            if(Isjg[isd](key,val,arrObj[ak])){
                return [ak,arrObj[ak],key,val,isd];
            }
        }
        return false;
    }
    function filter2Info(keyVal,arrObj,rintD){
        var ak,
            isd = rintD || 'rint' ;
        for(ak in arrObj){
            if(Isjg[isd](keyVal,arrObj[ak])){
                return [ak,arrObj[ak],keyVal,isd];
            }
        }
        return false;
    }
    function filterr(arrObj,callback){
        var r = [],
            ak ,testIs;
        for(ak in arrObj){
            testIs = callback(arrObj[ak],ak,arrObj);
            if(testIs){
                r.push(arrObj[ak]);
            }
        }
        return r;
    }
    function filterIsKv(key,val,arrObj,rinkvtD){
        var r = [],
            ak,
            isd = rinkvtD || 'rinkvt';
        for(ak in arrObj){
            if(Isjg[isd](key,val,arrObj[ak])){
                r.push(arrObj[ak]);
            }
        }
        return r;
    }
    function filterIsK(key,arrObj,rinktD){
        var r = [],
            ak,
            isd = rinktD || 'rinkt';
        for(ak in arrObj){
            if(Isjg[isd](key,arrObj[ak])){
                r.push(arrObj[ak]);
            }
        }
        return r;
    }
    function filterIsV(val,arrObj,rintD){
        var r = [],
            ak,
            isd = rintD || 'rint';
        for(ak in arrObj){
            if(Isjg[isd](val,arrObj[ak])){
                r.push(arrObj[ak]);
            }
        }
        return r;
    }
    //cb
    function filterIsKvCb(key,val,arrObj,callback,rinkvtD){
        var r = [],
            ak,cobj,
            isd = rinkvtD || 'rinkvt';
        for(ak in arrObj){
            if(Isjg[isd](key,val,arrObj[ak])){
                cobj = callback(arrObj[ak],ak,arrObj);
                r.push(cobj);
            }
        }
        return r;
    }
    function filterIsKCb(key,arrObj,callback,rinktD){
        var r = [],
            ak,cobj,
            isd = rinktD || 'rinkt';
        for(ak in arrObj){
            if(Isjg[isd](key,arrObj[ak])){
                cobj = callback(arrObj[ak],ak,arrObj);
                r.push(cobj);
            }
        }
        return r;
    }
    function filterIsVCb(val,arrObj,callback,rintD){
        var r = [],
            ak,cobj,
            isd = rintD || 'rint';
        for(ak in arrObj){
            if(Isjg[isd](val,arrObj[ak])){
                cobj = callback(arrObj[ak],ak,arrObj);
                r.push(cobj);
            }
        }
        return r;
    }




	return{
	/*returnObj*/
	sval : sval,
	svalBfind : svalBfind,
	ljoinK : ljoinK,
	ljoinAddk : ljoinAddk,
	arrObjDef : arrObjDef,
	gval : gval,
	gobj : gobj,
	gobjBval : gobjBval,
	gobjBKv : gobjBKv,
	mapr : mapr,
	maprDef : maprDef,
	filter3Info : filter3Info,
	filter2Info : filter2Info,
	filterr : filterr,
	filterIsKv : filterIsKv,
	filterIsK : filterIsK,
	filterIsV : filterIsV,
	filterIsKvCb : filterIsKvCb,
	filterIsKCb : filterIsKCb,
	filterIsVCb : filterIsVCb

	}
}());

/**/

/*

var r;

r = Ma.arrObjDef(i_user_sp,[['in_u_acccount','Ram','name']],'rint');

console.log(i_user_sp);
*/



/*om*/


/**/
/*rrep: comment*/

var Miscjg = Miscjg || {};
Miscjg = (function(){ 

    /**
     * Generate a unique ID
     * @param idlengthD
     * @returns {string}
     */
    function uniqidr(idlengthD){
        var idlength = idlengthD || 18;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < idlength; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    function uniqidGroupr(idlengthD,addSufixD){
        addSufixD = addSufixD || '';
        return this.uniqidr(idlengthD)+addSufixD;
    }

	return{
	/*returnObj*/
	uniqidr : uniqidr,
	uniqidGroupr : uniqidGroupr

	}
}());


/*om*/


/**/
/**
* Node.js v10.13.0 Documentation
* Table of Contents
* Query String
* querystring.escape(str)
* querystring.parse(str[, sep[, eq[, options]]])
* querystring.stringify(obj[, sep[, eq[, options]]])
* querystring.unescape(str)
*/


var Query_Stringsjg = Query_Stringsjg || {};
Query_Stringsjg = (function(){ 

    /*rfix: Methodes*/

	return{
	/*returnObj*/
	

	}
}());


/*om*/



var Regxjg = Regxjg || {};
Regxjg = (function(){ 
    /**
     *
     * @param subject
     * @param findStr
     * @param strCallbck
     * @param modD
     * @returns {*}
     */
    function replaceStr(subject,findStr,strCallback,modD){
        var pat = Regx.strTnstr(findStr),
            modD = modD || 'g',
            r = '';
        pat = Regx.escapeChc(pat);
        subject = Regx.strTnstr(subject);
        if(typeof strCallback === 'function'){
            r = subject.replace(new RegExp(pat,modD),function(){
                arguments['pat'] = findStr;
                arguments['len'] = arguments.length;
                // console.log(arguments);
                return strCallback(arguments)
            });
            return Regx.nstrTstr(r);
        }else{
            r = subject.replace(new RegExp(findStr,modD),strCallback);
            return Regx.nstrTstr(r);
        }

    }
    function replaceStrP(subject,strPat,strCallback,modD){
        var modD = modD || 'g',
            r = '';
        // pat = Regx.escapeChc(pat);
        subject = Regx.strTnstr(subject);
        if(typeof strCallback === 'function'){
            return subject.replace(new RegExp(strPat,modD),function () {
                arguments['pat'] = strPat;
                arguments['len'] = arguments.length;
                // console.log(arguments);
                return strCallback(arguments);
            });
        }else{
            r = subject.replace(new RegExp(strPat,modD),strCallback);
            return Regx.nstrTstr(r);
        }

    }

    /**
     * Regx.replacer(`siya ram jay ram ram jay`,'\\w+',console.log)
     * Regx.replacer(`siya ram jay ram ram jay`,'\\w+','jay siya ram')
     * Regx.replacer(`siya ram jay ram ram jay`,'\\w+',(val)=>{ return val[0].toUpperCase() })
     * @param subject
     * @param patt
     * @param strCallback
     * @param modD
     * @returns {void|*|XML|string} pat & len
     */
    function replacer(subject,patt,strCallback,modD){
        modD = modD || 'g';
        if(typeof strCallback === 'function'){
            return subject.replace(new RegExp(patt,modD),function () {
                arguments['pat'] = patt;
                arguments['len'] = arguments.length;
                return strCallback(arguments)
            });
        }else {
            return subject.replace(new RegExp(patt,modD),strCallback);
        }

    }
    /**
     * Regx.escapeCh(`ram ~!@#$%^&*()_+}{[]{}":'/.,<>?`)
     * @param str
     * @returns {void|*|XML|string}
     */
    function escapeChc(str) {
        str = str.replace(/[\/.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
        return str.toString();
    }
    function escapeChcN(str) {
        str = Regx.strTnstr(str);
        str = str.replace(/[\/.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
        return str.toString();
    }
    function escapeChcNotBac(str) {
        str = str.replace(/[\/.*+?^${}()|[\]]/g, '\\$&'); // $& means the whole matched string
        return str.toString();
    }
    function pattr(pattS,modD) {
        modD = modD || 'g';
        return new RegExp(pattS,modD);
    }
    /**
     * Regx.escapeQueat(`ram' jay ' ' asdkfj '`)
     * @param str
     * @param quoteD ' | " | `
     * @returns {void|*|XML|string}
     */
    function escapeQueat(str,quoteD) {
        quoteD = quoteD || `'`;
        return str.replace(new RegExp(quoteD,'g'), '\\$&');

    }
    function strTnstr(str){
        str = str.replace(/(\r\n|\n|\r)/g,`\\r\\n`);
        return str;
    }
    function nstrTstr(str){
        str = str.replace(/\\r\\n/g,`
`);
        return str;
    }
    function strTnjstr(str){
        str = str.replace(/(\r\n|\n|\r)/g,`\\r\\n`);
        str =str.replace(/[\/]/g,'\\$&');
        return str;
    }
    function njstrTstr(str){
        str = str.replace(/\\r\\n/g,`
`);
        str = str.replace(/\//g,'/');
        return str;
    }

    function forwardSlash(str){
        return str.replace(/[\/]/g,'\\$&');
    }
    function backSlash(str){
        return str.replace(/[\\]/g,'\\$&');
    }
    /**
     * var t = createStringFromTemplate(
     "I would like to receive email updates from {{list_name}} {{var1}} {{var2}} {{var3}}.",
     {
         list_name : "this store",
         var1      : "FOO",
         var2      : "BAR",
         var3      : "BAZ"
     }
     );
     * return -> I would like to receive email updates from this store FOO BAR BAZ.
     * @param template
     * @param variables
     */
    function createStringFromTemplate(template, variables) {
        return template.replace(new RegExp("\{\{([^\{]+)\}\}", "g"), function(_unused, varName){
            return variables[varName];
        });
    }
    function gattrObj(str){
        try {
            var r = {};
            str.replace(/\s(.*?)="(.*?)"/g, (match, p1, p2) => {
                r[p1] = p2;
            });
            return r;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    function gattr(attrName,str){
        try {
            var r = '';
            str.replace(new RegExp(`\\s(${attrName})="(.*?)"`), (match, p1, p2) => {
                r = p2;
            });
            return r;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    function execr(patt,subject){
        var patt = new RegExp(patt,'g');
        // var subject = 'table football, foosball';
        var array1;
        var r = [];
        while ((array1 = patt.exec(subject)) !== null) {
            // console.log(`Found ${array1[0]}. Next starts at ${patt.lastIndex}.`);
            // expected output: "Found foo. Next starts at 9."
            // expected output: "Found foo. Next starts at 19."
            r.push(array1);
        }
        return r;
    }

    /**
     * Regx.replaceA(['xxx','yyy'],['ram siya','siya ram'],'xxx om om yyy parvati xxx')
     * @param pattA
     * @param repA
     * @param subject
     * @param modD
     * @returns {*}
     */
    function replaceA(pattA,repA,subject,modD){
        var r = subject,modD = modD || 'g';
        for(var ak in pattA){
            r = r.replace(new RegExp(pattA[ak],modD),repA[ak]);
        }
        return r;
    }
    /**
     *  Regx.replaceO({'xxx':'ram siya','yyy':'siya ram'},'xxx om om yyy parvati xxx')
     * replace by given obj {pattk: 'val'}
     * @param pattObj {pattk:val}
     * @param subject
     * @returns {*}
     */
    function replaceO(pattObj,subject){
        var rsub = subject;
        for(var ok in pattObj){
            if(rsub){
                rsub = rsub.replace(new RegExp(ok,'g'),pattObj[ok]);
            }

            // sram(subject);
        }
        return rsub;
    }
    function replaceRN(patt,rep,subjectRN,callbackD,modD){
        var r = '',modD = modD || 'g';

        patt = this.strTnstr(patt);
        rep = this.strTnstr(rep);
        r = subjectRN.replace(new RegExp(patt,modD),rep);
        if(typeof callbackD === 'function') callbackD(r,pat,rep,subjectRN);
        return r;
    }
    function replaceRN_O(pattObj,subjectRN,callbackD,modD){
        var r = subjectRN || '',modD = modD || 'g',ok;
        for(ok in pattObj){

            r = r.replace(new RegExp(this.strTnstr(ok),modD),this.strTnstr(pattObj[ok]));
        }
        if(typeof callbackD==='function') callbackD(r,pattObj,subjectRN);
        return r;
    }
    function replaceStrO(pattObj,subject,modD){
        var rsub = subject;
        rsub = this.strTnstr(subject);
        for(var ok in pattObj){
            rsub = rsub.replace(new RegExp(this.strTnstr(ok),modD),this.strTnstr(pattObj[ok]));
            // sram(subject);
        }
        rsub = this.nstrTstr(rsub);
        return rsub;
    }







    /**/
    function sram(){
        try {
            // console.log('sram->');
            for (var opro in arguments) {
                console.log(
                    `sram${opro}\n`,
                    arguments[opro]
                );
            }
        } catch (ex) {
            console.log(ex);
        }
    }


	return{
	/*returnObj*/
	replaceStr : replaceStr,
	replaceStrP : replaceStrP,
	replacer : replacer,
	escapeChc : escapeChc,
	escapeChcN : escapeChcN,
	escapeChcNotBac : escapeChcNotBac,
	pattr : pattr,
	escapeQueat : escapeQueat,
	strTnstr : strTnstr,
	nstrTstr : nstrTstr,
	strTnjstr : strTnjstr,
	njstrTstr : njstrTstr,
	forwardSlash : forwardSlash,
	backSlash : backSlash,
	createStringFromTemplate : createStringFromTemplate,
	gattrObj : gattrObj,
	gattr : gattr,
	execr : execr,
	replaceA : replaceA,
	replaceO : replaceO,
	replaceRN : replaceRN,
	replaceRN_O : replaceRN_O,
	replaceStrO : replaceStrO,
	sram : sram

	}
}());






/*om*/


/**/
/*rrep: comment*/

var Sortrjg = Sortrjg || {};
Sortrjg = (function(){ 

    /**
     * sort [{}] to asending order
     * Sort1.ascM('order',menMenu);
     * @param prop
     * @param arrObj
     */
    function asendingMa(prop, arrObj) {
        arrObj.sort(function (a, b) {
            if (a[prop] < b[prop]) {
                return -1;
            } else if (a[prop] > b[prop]) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    function maxLenth(a,b){
        return function (a, b) { return b.length - a.length; }
        //return arr.sort(function (a, b) { return b.length - a.length; })[0];
    }



	return{
	/*returnObj*/
	asendingMa : asendingMa,
	maxLenth : maxLenth

	}
}());


/*om*/


/**/
/*rrep: comment*/

var Strjg = Strjg || {};
Strjg = (function(){ 

    /**
     * creat name
     * @param str
     * @returns {string|*|XML|void}
     */
    function add_underscore(str) {
        str = str.trim();
        return str.replace(/\W/g, '_');
    }
    function camlTunderscore(strName){
        return strName.split(/(?=[A-Z])/).join('_').toLowerCase();
    }
    function jsUcfirst(str){
        try {
            return str.charAt(0).toUpperCase() + str.slice(1);
        } catch (e) {
            console.log(e);
        }
    }
    function arrDump(arr,addSpaceD){
        addSpaceD = addSpaceD || '';
        return "[ '"+arr.join(`',${addSpaceD}'`)+"' ]";
    }
    /**
     * Convert a string to an array
     */
    function splitr(str,pattD){
        pattD = pattD || ',';
        return str.split(pattD);
    }
    function rtcTarr(rtcStr){
        var r = rtcStr.split('-');
        r.shift();
        return r;
    }


	return{
	/*returnObj*/
	add_underscore : add_underscore,
	camlTunderscore : camlTunderscore,
	jsUcfirst : jsUcfirst,
	arrDump : arrDump,
	splitr : splitr,
	rtcTarr : rtcTarr

	}
}());


