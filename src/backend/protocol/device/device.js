var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var events = require('events');
var fs = require('fs');
var env = require('../../generic/env');
var funcVar = require('../../generic/FunctionVariates');
var evtType = require('../../generic/EventVariates').EventTypes;
//var HID = require('node-hid');

'use strict';

var DeviceApi = (function (_super) {
    __extends(DeviceApi, _super);
    var _this;
    function DeviceApi() {
    	try{
    		_this = this;
            _super.call(this);
	        env.log(env.level.INFO,'device','DeviceApi','New DeviceApi INSTANCE.');
	    }catch(ex){
            env.log(env.level.DEBUG,System,'DeviceApi','[DeviceApi Error]',ex.message);
        }
    }

    DeviceApi.prototype.RunFunction = function (Obj,callback) {
    	try{
            //env.log(env.level.INFO,'device','RunFunction',JSON.stringify(Obj))
	    	if (Obj.Type !== funcVar.Types.Device)
	    		throw new Error('Type must be Device.');

	    	var fn = _this[Obj.Func];

	    	if (fn === undefined || !funcVar.Names.hasOwnProperty(Obj.Func))
	    		throw new Error(`Func error of ${Obj.Func}`);
	    	fn(Obj.Param, callback);
	    }catch(ex){
            env.log(env.level.DEBUG,'device','RunFunction',`DeviceApi.RunFunction error : ${ex.message}.`);
	    	callback(errCode.ValidateError, ex);
	    }
    };

    //初始化，get所有supported的Mouse.
    DeviceApi.prototype.InitDevice = function (models) {		
		env.log(env.level.DEBUG,'device','InitDevice',` Begin.`);
    	return new Promise(function (resolve, reject) {
	    	try{ 
	    		if (models !== undefined)
		    		_this.SupportModels = models;
                //_this.GetAllSupportMouse().then(resolve, reject);
                resolve();
			}catch(ex){ 
				env.log(env.level.ERROR,'Mouse','InitDevice',ex.message);
	            reject();
	        }
	    });
    };

    DeviceApi.prototype.setcommand  = function (p, callback) {
        env.log(env.level.INFO,'device','setcommand',JSON.stringify(p));
        // if(p.PlugType == 1){
        //     var VID = "0x"+p.VID//Number(parseInt(p.VID , 16));
        //     var PID = "0x"+p.PID//Number(parseInt(p.PID , 16));
        //     //var device = new HID.HID('3141','29955');
        //     var devices = HID.devices();
        //     env.log('222','222','222',JSON.stringify(devices));
        //     // for(var m of devices)
        //     // {
        //     //     if(m.vendorId.toString(16) == p.VID && m.productId.toString(16) == p.PID)
        //     //     {
        //     //         try{
        //     //             env.log('888','888','888',JSON.stringify(m));
        //     //             var hid = new HID.HID(m.vendorId,m.productId);
        //     //             hid.write(0x00,0x00,0x80,0x00,0x00,0x00,0x00);
        //     //             hid.read(function(data){
        //     //                 env.log('999','999','999',JSON.stringify(data));
        //     //             })
        //     //             hid.close();
        //     //             break;
        //     //         }catch(e){

        //     //         }
        //     //     }
        //     // }

        //     var hid = new HID.HID('1112','400')
        //     env.log('888','888','888',JSON.stringify(hid))
        //     hid.write(0x00,0x00,0x80,0x00,0x00,0x00,0x00);
        //     hid.read(function(data){
        //         env.log('999','999','999',JSON.stringify(data));
        //         hid.close();
        //     })

        // }
        // callback('success','setcommand');
    };
    
    return DeviceApi;
})(events.EventEmitter);

exports.DeviceApi = DeviceApi;