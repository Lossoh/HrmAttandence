/*om*/
const fs = require('fs');
/**
 * full path|absolut pat of project
 * @type {string}
 */
// global.Droot = __dirname.replace(/\\/g,'/');
global.Broot = function (addPathD) {
    addPathD = addPathD || '';
    return __dirname+addPathD;
};

/*global.Drootf = function (pathD) {
    pathD = pathD || '';
    return Droot+pathD;
};*/
global.sram = function () {
    try{
        // console.log('sram->');
        for (var opro in arguments) {
            console.log(
                `sram${opro}\n`,
                arguments[opro]
            );
        }
    }catch (ex){
        console.log(ex);
    }
};
/**
 * provid th deteail info
 * print multiple object on console sramd->
 */
global.sramd = function () {
    const util = require('util')
    try{
        console.log('sramd-->');
        for (var opro in arguments) {
            console.log(
                util.inspect(arguments[opro], false, null, true /* enable colors */)
            );
        }
    }catch (ex){
        console.log(ex);
    }
};
global.allTrue = function(val){ val = val || ''; return true; };

/**/
const CCloadr = require('../RamLib/rapp/src/ram/util_lib/Cloadr');
const Cloadr = new CCloadr(Broot());
const Rutil = require('../RamLib/rapp/src/ram/util_lib/Rutil');
/**/
/**
* path last se pura dena rehta he
* @param lastFileName
* @returns {boolean}
*/
global.filePath = function (lastFileName) {
    var str = Cloadr.projectFileListStr;
    var fname = str.match(new RegExp(`.*RamLib/.*${lastFileName}`));
    return (fname)?fname[0]:false;
};
global.dirPath = function (lastFileName,addNameD) {
    var addName = addNameD || '';
    var str = Cloadr.projectDirListStr;
    var fname = str.match(new RegExp(`.*RamLib/.*${lastFileName}`));
    return (fname)?fname[0]+addName:false;
};
/*? user|Client Globle Setting Cg*/
global.Cg = Rutil.fileTobj('./config/userConfig.txt');
Cg.in_user_id = 'dG4UVsHzeJtB9O0yEJ';
Cg.in_organisation_id = 'Mk0OBFm8IldriyDeZc';
Cg.role_id='adfedxdds';



/*
const Com = require('./rapp/src/siyaRam/siya/Om');
const Om = new Com(Broot());
const Ram = require('./rapp/src/siyaRam/siya/Ram');
const Ryml = require('./rapp/src/siyaRam/siya/Ryml');
const Rfile = require('./rapp/src/siyaRam/siya/Rfile');*/
// sram(Om.projectFileList,Om.libFile);
/*
/!**
 * sram(srcPath('ram/Rapp'));
 * @param lastFileName
 * @returns {boolean}
 *!/
global.srcPath = function (lastFileName) {
    var str = Om.projectFileListStr;
    var fname = str.match(new RegExp(`.*rapp/src.*${lastFileName}\.js`));
    return (fname)?fname[0]:false;
};*/
/*


//

//creat project information
/!*
global.cur_file = function () {
  return fs.readFileSync('./config/base/projectFileList.txt','utf8');
};
global.cur_dir = function () {
  return fs.readFileSync('./config/base/projectDirList.txt','utf8');
};
*!/


/!*? user|Client Globle Setting Cg*!/
global.Cg = Ram.fileTobj(filePath('userConfig.txt'));

/!*send ui data to javascript *!/

var jsGlobFile = Rfile.findFilesRecurCb('./public',(val)=>{
    return /ramSiya\/siya|rapp\/ramSiya\/ram/.test(val);
});
jsGlobFile = jsGlobFile.map((val)=>{ return val.replace(/^\.\/public\//,''); });
var uiomy = Ram.fileStr(filePath('Uidj.omy'));
uiomy = uiomy.replace(/(jsGlobFile:)(.*)/g,(mat,p1,p2)=>{
            return p1 +' '+  Ram.inspectr(jsGlobFile);
        });
// Rfile.writer('test.txt',uiomy);
Ram.writer('./public/rapp/ramSiya/om/Uid.js','var UId = '+Ram.ramS(Ryml.ryml(uiomy)));
/!**!/

*/



/**/
/*rdelStart:*/
//?ram this code is removed when project is uploded


const JoinFile = require('../RamLib/rapp/src/ram/app/JoinFile');
JoinFile('E:\\Project\\nodejs\\RamLib\\public\\rapp\\ram\\jsBase','E:/Project/nodejs/HrmAttandence/public/rapp/rinc/incjsBasej.js',1);
JoinFile('E:\\Project\\nodejs\\RamLib\\public\\rapp\\ram\\core_lib','E:/Project/nodejs/HrmAttandence/public/rapp/rinc/incCore_libj.js',1);
JoinFile('E:\\Project\\nodejs\\HrmAttandence\\public\\rapp\\rdata','E:/Project/nodejs/HrmAttandence/public/rapp/rinc/incrdata.js',1);
JoinFile('E:\\Project\\nodejs\\HrmAttandence\\public\\rapp\\rlib','E:/Project/nodejs/HrmAttandence/public/rapp/rinc/incrlib.js',1);




//?ram add ymal data to js file
var yuidj = Rutil.docTidObj('./rapp/Uidj.omy');
if(yuidj){
yuidj = Rutil.encoder(yuidj);

    Rutil.put_contentsr('./public/rapp/rdata/Uidj.js',`var Uidj = ${yuidj} ;`);
}


/*rdelEnd:*/