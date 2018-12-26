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
 *
 */

/**/
/*rrep: comment*/
class  Is{

    /*rfix: constructor*/
    constructor(){
        /*rfix: Property*/
    }
    /**
     * Get the type of a variable
     * Returns 'Function', 'Object', 'Array','String', 'Number',
     * 'Boolean', or 'Undefined'
     * @param rvar
     * @returns {string}
     */
    static  rtype(rvar){
        // return typeof strObj;
        try {
            if (undefined === rvar) {
                return 'Undefined';
            }
            if (rvar === null) {
                return 'Null';
            }
            return {}.toString.call(rvar).slice(8, -1);

        } catch (e) {
            console.log(e);
            return false;
        }
    }

    /**
     * empt , '' , variable is empty
     * @param val
     * @returns {boolean}
     */
    static rempt(val){
        return (val === undefined || val === null || val.length <= 0);
    }

    static rnempt(val){
        return (!(val === undefined || val === null || val.length <= 0));
    }
    static rpatt(patt,val){
        return (new RegExp(patt).test(val));
    }
    static rpattt(pattType,val){
        pattType = '\\b'+pattType+'\\b';
        return (new RegExp(pattType).test(val));
    }

    /**
     * rin , [] , find value in given arr[val] or obj {k:v}
     * @param val
     * @param arrO
     * @returns {boolean}
     */
    static rin(val,arrO){
        var ok ;
        for(ok in arrO){
            if(val == arrO[ok]){
                return true;
            }
        }
        return false;
    }

    /**
     * rinkv , [] , find key & value in given arr[val] or obj {k:v}
     * @param key
     * @param val
     * @param arrO
     * @returns {boolean}
     */
    static rinkv(key,val,arrO){
        var ok ;
        for(ok in arrO){
            if(key == ok && val == arrO[ok]){
                return true;
            }
        }
        return false;
    }
    /**
     * rinkvp , [] , find key & valPatt pattern in given arr[val] or obj {k:v}
     * @param key
     * @param valPatt
     * @param arrO
     * @returns {boolean}
     */
    static rinkvp(key,valPatt,arrO){
        var ok ;
        for(ok in arrO){
            if(key == ok && new RegExp(valPatt).test(arrO[ok])){
                return true;
            }
        }
        return false;
    }
    /**
     * rninkvp , [] , find not in key & valPatt pattern in given arr[val] or obj {k:v}
     * @param key
     * @param valPatt
     * @param arrO
     * @returns {boolean}
     */
    static rninkvp(key,valPatt,arrO){
        var r = this.rinkvp(key,valPatt,arrO);
        return (!r);
    }
    /**
     * rinkvp , [] , find key & value pattern in given arr[val] or obj {k:v}
     * @param keyPatt
     * @param valPatt
     * @param arrO
     * @returns {boolean}
     */
    static rinkpvp(keyPatt,valPatt,arrO){
        var ok ;
        for(ok in arrO){
            if(new RegExp(keyPatt).test(ok) && new RegExp(valPatt).test(arrO[ok])){
                return true;
            }
        }
        return false;
    }
    /**
     * rninkv , [] , find not in key & value in given arr[val] or obj {k:v}
     * @param key
     * @param val
     * @param arrO
     * @returns {boolean}
     */
    static rninkv(key,val,arrO){
        var r = this.rinkv(key,val,arrO);
        return (!r);
    }
    /**
     * rninkvt , [] , find not in key & value in given arr[val] or obj {k:v}
     * @param key
     * @param val
     * @param arrO
     * @returns {boolean}
     */
    static rninkvt(key,val,arrO){
        var r = rinkvt(key,val,arrO);
        return (!r);
    }
    /**
     * rinkvt , [] , find key & value in given arr[val] or obj {k:v}
     * @param key
     * @param val
     * @param arrO
     * @returns {boolean}
     */
    static rinkvt(key,val,arrO){
        var ok ;
        for(ok in arrO){
            if(key === ok && val === arrO[ok]){
                return true;
            }
        }
        return false;
    }
    /**
     * rint , [val]|{k:v} , find value in given arr[val] or obj {k:v}
     * @param val
     * @param arrO
     * @returns {boolean}
     */
    static rint(val,arrO){
        var ok ;
        for(ok in arrO){
            if(val === arrO[ok]){
                return true;
            }
        }
        return false;
    }

    /**
     * rnint , [val]|{k:v} , find value not in given arr[val] or obj {k:v}
     * @param val
     * @param arrO
     * @returns {boolean}
     */
    static rnint(val,arrO){
        var r = this.rint(val,arrO);
        return (!r);
    }

    /**
     * rin , [val]|{k:v} , find value in given arr[val] or obj {k:v}
     * @param val
     * @param arrO
     * @returns {boolean}
     */
    static rnin(val,arrO){
        var r = this.rin(val,arrO);
        return (!r);
    }

    /**
     * rinp , [val]|{k:v} , find value pattern in given arr[val] or obj {k:v}
     * @param valPatt
     * @param arrO
     * @returns {boolean}
     */
    static rinp(valPatt,arrO){
        var ok ;
        for(ok in arrO){
            if(new RegExp(valPatt).test(arrO[ok])){
                return true;
            }
        }
        return false;
    }

    /**
     * rinpt , [val]|{k:v} , find value pattern in given arr[val] or obj {k:v}
     * @param valPatt
     * @param arrO
     * @returns {boolean}
     */
    static rinpt(valPatt,arrO){
        var ok ;
        valPatt = '\\b'+valPatt+'\\b';
        for(ok in arrO){
            if(new RegExp(valPatt).test(arrO[ok])){
                return true;
            }
        }
        return false;
    }

    /**
     * rninp , [val]|{k:v} , find value not in pattern in given arr[val] or obj {k:v}
     * @param valPatt
     * @param arrO
     * @returns {boolean}
     */
    static rninp(valPatt,arrO){
        var r = this.rinp(valPatt,arrO);
        return (!r);
    }
    static rinkp(keyPatt,arrO){
        var ok ;
        for(ok in arrO){
            if(new RegExp(keyPatt).test(ok)){
                return true;
            }
        }
        return false;
    }
    static rink(key,arrO){
        var ok ;
        for(ok in arrO){
            if(key == ok){
                return true;
            }
        }
        return false;
    }
    static rinkt(key,arrO){
        var ok ;
        for(ok in arrO){
            if(key === ok){
                return true;
            }
        }
        return false;
    }
    static rnink(key,arrO){
        var r = this.rink(key,arrO);
        return (!r);
    }
    static rninkt(key,arrO){
        var r = this.rinkt(key,arrO);
        return (!r);
    }
    static rninkp(keyPatt,arrO){
        var r = rinkp(keyPatt,arrO);
        return (!r);
    }
    /**
     * rt , 1 , allves true
     */
    static rt(){
        return 1;
    }
    static rtt(){
        return true;
    }
    /**
     * rt , 0 , allves false
     */
    static rf(){
        return 0;
    }
    static rft(){
        return false;
    }
    /**
     * rsosb , -1 , alves sift one stap back
     */
    static rsosb(){
        return -1;
    }
    /**
     * rn , -1 , allves null
     */
    static rn(){
        return null;
    }
    /**
     * req ,  == , equal to
     */
    static req(val1,val2){
        return val1 == val2;
    }

    /**
     * reqt ,  === , equal value and equal type
     */
    static reqt(val1,val2){
        return val1 === val2;
    }

    /**
     * rneq ,  != , not equal
     */
    static rneq(val1,val2){
        return val1 != val2;
    }

    /**
     * rneqt ,  !== , not equal value or not equal type
     */
    static rneqt(val1,val2){
        return val1 !== val2;
    }

    /**
     * rgt ,  > , greater than
     */
    static rgt(val1,val2){
        return val1 > val2;
    }

    /**
     * rlt ,  < , less than
     */
    static rlt(val1,val2){
        return val1 < val2;
    }

    /**
     * rgteq ,  >= , greater than or equal to
     */
    static rgteq(val1,val2){
        return val1 >= val2;
    }

    /**
     * rlteq ,  <= , less than or equal to
     */
    static rlteq(val1,val2){
        return val1 <= val2;
    }

    /**
     * rto ,  ? , ternary oprator
     */
    static rto(){

    }

    /**
     * rand ,  && , logical and
     * all condition test on value
     * ek bhi condition false hone par false return karega
     * @param carr (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static rand(carr,arrO){
        var ak;
        for(ak in carr){
            if(this.rnin(carr[ak],arrO)){
                return false;
            }
        }
        return true;
    }
    /**
     * rand ,  && , logical and
     * all condition test on value
     * ek bhi condition false hone par false return karega
     * @param carr (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static randt(carr,arrO){
        var ak;
        for(ak in carr){
            if(this.rnint(carr[ak],arrO)){
                return false;
            }
        }
        return true;
    }
    /**
     * rand ,  && , logical and
     * all condition test on key
     * ek bhi condition false hone par false return karega
     * @param kcarr (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static randk(kcarr,arrO){
        var ak;
        for(ak in kcarr){
            if(this.rnink(ak,arrO)){
                return false;
            }
        }
        return true;
    }
    /**
     * rand ,  && , logical and
     * all condition test on key
     * ek bhi condition false hone par false return karega
     * @param kcarr (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static randkt(kcarr,arrO){
        var ak;
        for(ak in kcarr){
            if(this.rninkt(ak,arrO)){
                return false;
            }
        }
        return true;
    }
    /**
     * rand ,  && , logical and
     * all condition test on key value
     * ek bhi condition false hone par false return karega
     * @param kvcarrO (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static randkv(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( this.rninkv(ak,kvcarrO[ak],arrO)  ){
                return false;
            }
        }
        return true;
    }
    /**
     * rand ,  && , logical and
     * all condition test on key value
     * ek bhi condition false hone par false return karega
     * @param kvcarrO (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static randkvt(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( this.rninkvt(ak,kvcarrO[ak],arrO)  ){
                return false;
            }
        }
        return true;
    }
    /**
     * rand ,  && , logical and
     * all condition test on value
     * ek bhi condition false hone par false return karega
     * @param pcarr (pattern condition arr) [\\d,'\\w',5]
     * @param arrO
     * @returns {boolean}
     */
    static randp(pcarr,arrO){
        var ak;
        for(ak in pcarr){
            if(this.rninp(pcarr[ak],arrO)){
                return false;
            }
        }
        return true;
    }
    /**
     * rand ,  && , logical and
     * all condition test on key
     * ek bhi condition false hone par false return karega
     * @param kpcarr (pattern condition arr) [\\d,'\\w',5]
     * @param arrO
     * @returns {boolean}
     */
    static randkp(kpcarr,arrO){
        var ak;
        for(ak in kpcarr){
            if(this.rninkp(ak,arrO)){
                return false;
            }
        }
        return true;
    }
    /**
     * rand ,  && , logical and
     * all condition test on key value
     * ek bhi condition false hone par false return karega
     * @param kvcarrO (condition arr) [\\d,'ram','\\s',5]
     * @param arrO
     * @returns {boolean}
     */
    static randkvp(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( this.rninkvp(ak,kvcarrO[ak],arrO)  ){
                return false;
            }
        }
        return true;
    }
    /**
     * ror ,  || , logical or
     * all condition test on value
     * ek bhi condition false hone par false return karega
     * @param carr (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static ror(carr,arrO){
        var ak;
        for(ak in carr){
            if(this.rin(carr[ak],arrO)){
                return true;
            }
        }
        return false;
    }
    /**
     * ror ,  || , logical or
     * all condition test on value
     * ek bhi condition false hone par false return karega
     * @param carr (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static rort(carr,arrO){
        var ak;
        for(ak in carr){
            if(this.rint(carr[ak],arrO)){
                return true;
            }
        }
        return false;
    }
    /**
     * ror ,  || , logical or
     * all condition test on key
     * ek bhi condition false hone par false return karega
     * @param kcarr (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static rork(kcarr,arrO){
        var ak;
        for(ak in kcarr){
            if(this.rink(ak,arrO)){
                return true;
            }
        }
        return false;
    }
    /**
     * ror ,  || , logical or
     * all condition test on key
     * ek bhi condition false hone par false return karega
     * @param kcarr (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static rorkt(kcarr,arrO){
        var ak;
        for(ak in kcarr){
            if(this.rinkt(ak,arrO)){
                return true;
            }
        }
        return false;
    }
    /**
     * ror ,  || , logical or
     * all condition test on key value
     * ek bhi condition false hone par false return karega
     * @param kvcarrO (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static rorkv(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( this.rinkv(ak,kvcarrO[ak],arrO)  ){
                return true;
            }
        }
        return false;
    }
    /**
     * ror ,  || , logical or
     * all condition test on key value
     * ek bhi condition false hone par false return karega
     * @param kvcarrO (condition arr) [1,'ram',5]
     * @param arrO
     * @returns {boolean}
     */
    static rorkvt(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( this.rinkvt(ak,kvcarrO[ak],arrO)  ){
                return true;
            }
        }
        return false;
    }
    /**
     * ror ,  || , logical or
     * all condition test on value
     * ek bhi condition false hone par false return karega
     * @param pcarr (pattern condition arr) [\\d,'\\w',5]
     * @param arrO
     * @returns {boolean}
     */
    static rorp(pcarr,arrO){
        var ak;
        for(ak in pcarr){
            if(this.rinp(pcarr[ak],arrO)){
                return true;
            }
        }
        return false;
    }
    /**
     * ror ,  || , logical or
     * all condition test on key
     * ek bhi condition false hone par false return karega
     * @param kpcarr (pattern condition arr) [\\d,'\\w',5]
     * @param arrO
     * @returns {boolean}
     */
    static rorkp(kpcarr,arrO){
        var ak;
        for(ak in kpcarr){
            if(this.rinkp(ak,arrO)){
                return true;
            }
        }
        return false;
    }
    /**
     * ror ,  || , logical or
     * all condition test on key value
     * ek bhi condition false hone par false return karega
     * @param kvcarrO (condition arr) [\\d,'ram','\\s',5]
     * @param arrO
     * @returns {boolean}
     */
    static rorkvp(kvcarrO,arrO){
        var ak;
        for(ak in kvcarrO){
            if( this.rinkvp(ak,kvcarrO[ak],arrO)  ){
                return true;
            }
        }
        return false;
    }

    /**
     * rln ,  ! , logical not
     */
    static rln(){

    }

    /**
     * band ,  & , and
     */
    static band(){

    }

    /**
     * bor ,  | , or
     */
    static bor(){

    }

    /**
     * bn ,  ~ , not
     */
    static bn(){

    }

    /**
     * bxor ,  ^ , xor
     */
    static bxor(){

    }

    /**
     * bzfls ,  << , zero file left shift
     */
    static bzfls(){

    }

    /**
     * brs ,  >> , signed right shift
     */
    static brs(){

    }

    /**
     * bzfrs ,  >>> , zero fil right shift
     */
    static bzfrs(){

    }
    /**
     * reql (length)  ,  == , equal to
     */
    static reql(val,vlength){
        return val.length == vlength;
    }

    /**
     * reqtl (length)  ,  === , equal value and equal type
     */
    static reqtl(val,vlength){
        return val.length === vlength;
    }

    /**
     * rneql (length)  ,  != , not equal
     */
    static rneql(val,vlength){
        return val.length != vlength;
    }

    /**
     * rneqtl (length)  ,  !== , not equal value or not equal type
     */
    static rneqtl(val,vlength){
        return val.length !== vlength;
    }

    /**
     * rgtl (length)  ,  > , greater than
     */
    static rgtl(val,vlength){
        return val.length > vlength;
    }

    /**
     * rltl (length)  ,  < , less than
     */
    static rltl(val,vlength){
        return val.length < vlength;
    }

    /**
     * rgteql (length)  ,  >= , greater than or equal to
     */
    static rgteql(val,vlength){
        return val.length >= vlength;
    }

    /**
     * rlteql (length)  ,  <= , less than or equal to
     */
    static rlteql(val,vlength){
        return val.length <= vlength;
    }

    /**
     * rtl (length)  ,  ? , ternary oprator
     */
    static rtl(){

    }

    /**
     * randl (length)  ,  && , logical and
     */
    static randl(){

    }

    /**
     * rorl (length)  ,  || , logical or
     */
    static rorl(){

    }

    /**
     * rnl (length)  ,  ! , logical not
     */
    static rnl(){

    }

    /**
     * bandl (length)  ,  & , and
     */
    static bandl(){

    }

    /**
     * borl (length)  ,  | , or
     */
    static borl(){

    }

    /**
     * bnl (length)  ,  ~ , not
     */
    static bnl(){

    }

    /**
     * bxorl (length)  ,  ^ , xor
     */
    static bxorl(){

    }

    /**
     * bzflsl (length)  ,  << , zero file left shift
     */
    static bzflsl(){

    }

    /**
     * brsl (length)  ,  >> , signed right shift
     */
    static brsl(){

    }

    /**
     * bzfrsl (length)  ,  >>> , zero fil right shift
     */
    static bzfrsl(){

    }
    /**/
    /**
     * it will trit String & Number is value true
     * @param data
     * @returns {boolean}
     */
    static rval(data) {
        try {
            if (this.rtype(data)==='String' || this.rtype(data)==='Number') {
                return true
            }
            return false;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    static arrObj(obj){
        try {
            if (this.rarr(obj)) {
                if (this.rtype(obj[0]) === 'Object') {
                    return true;
                }
            }
        } catch (e) {
            console.log(e);
            return false;
        }
        return false;
    }
    static rarr (myArray){
        try {
            return myArray.constructor === Array;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    static rdate(myDate) {
        try {
            return myDate.constructor === Date;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    static rnum(str) {
        try {
            return (typeof str == 'string' || typeof str == 'number') && !isNaN(str - 0) && str !== '';
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    static rwordOnly(str){
        return (/\s|\W/g.test(str))?'':str;
    }



}
/**/
module.exports = Is;