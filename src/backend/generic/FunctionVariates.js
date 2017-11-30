'use strict';

var FuncName = {
	//设备初始化
    InitDevice : "InitDevice",
    
    abctest:"abctest",
    setcommand:"setcommand"  
};

var FuncType = {
    System : 0x01,
    Mouse : 0x02,
    Keyboard :0x03,
    Device : 0x04
};

exports.Names = FuncName;
exports.Types = FuncType;