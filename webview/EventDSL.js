// Generated from EventDSL.g4 by antlr-blockly
// 语句集合和表达式集合
EventDSLBlocks = {
    "statements": [
        "gg",
        "monster",
        "bonus",
        "door",
        "item",
        "shop",
        "npc",
        "lava",
        "up",
        "down",
        "move",
        "var",
        "erase",
        "back",
        "ending",
        "switch",
        "undef"
    ]
}


// 所有域的默认行为
Object.assign(EventDSLBlocks,{
    "Side_List": {
        "type": "field_dropdown",
        "options": [
            ["⇖","ul"],
            ["⇗","ur"],
            ["⇘","dr"],
            ["⇙","dl"]
        ],
        "default": "ul"
    },
    "IdStr": {
        "type": "field_input",
        "text": "IdStr_default"
    },
    "NormalStr": {
        "type": "field_input",
        "text": "NormalStr_default"
    },
    "TryIntStr": {
        "type": "field_input",
        "text": "TryIntStr_default"
    },
    "IntStr": {
        "type": "field_input",
        "text": "IntStr_default"
    },
    "Evalstr": {
        "type": "field_input",
        "text": "Evalstr_default"
    },
    "Int": {
        "type": "field_number",
        "value": 0,
        "min": 0,
        "precision": 1
    },
    "Bool": {
        "type": "field_checkbox",
        "checked": true
    },
    "Colour": {
        "type": "field_colour",
        "colour": "#ff0000"
    },
    "BGNL": {
        "type": "input_dummy"
    }
});


// 所有方块的实际内容
Object.assign(EventDSLBlocks,{
    "eventDSL": {
        "type": "statement",
        "json": {
            "type": "eventDSL",
            "message0": "%1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "statement",
                    "check": EventDSLBlocks.statements
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 260
        },
        "generFunc": function(block) {
            var statement = Blockly.JavaScript.statementToCode(block, 'statement');
            var code = EventDSLFunctions.defaultCode('eventDSL',eval('['+EventDSLBlocks['eventDSL'].args.join(',')+']'),block);
            return code;
        },
        "args": ["statement"],
        "argsType": ["statement"],
        "argsGrammarName": ["statements"],
        "omitted": [true],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('eventDSL',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('eventDSL',inputs,next,isShadow,comment,attribute);
        }
    },
    "undef": {
        "type": "statement",
        "json": {
            "type": "undef",
            "message0": "未识别的类型 %1",
            "args0": [
                Object.assign({},EventDSLBlocks.NormalStr,{
                    "name": "content",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "undef",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var content = block.getFieldValue('content');
            content = EventDSLFunctions.pre('NormalStr')(content,block,'content','undef');
            var code = EventDSLFunctions.defaultCode('undef',eval('['+EventDSLBlocks['undef'].args.join(',')+']'),block);
            return code;
        },
        "args": ["content"],
        "argsType": ["field"],
        "argsGrammarName": ["NormalStr"],
        "omitted": [true],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('undef',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('undef',inputs,next,isShadow,comment,attribute);
        }
    },
    "gg": {
        "type": "statement",
        "json": {
            "type": "gg",
            "message0": "gg",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "gg",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('gg',eval('['+EventDSLBlocks['gg'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('gg',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('gg',inputs,next,isShadow,comment,attribute);
        }
    },
    "monster": {
        "type": "statement",
        "json": {
            "type": "monster",
            "message0": "monster %1",
            "args0": [
                Object.assign({},EventDSLBlocks.Int,{
                    "name": "id",
                    "value": 123
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "monster",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            id = EventDSLFunctions.pre('Int')(id,block,'id','monster');
            var code = EventDSLFunctions.defaultCode('monster',eval('['+EventDSLBlocks['monster'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["Int"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('monster',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('monster',inputs,next,isShadow,comment,attribute);
        }
    },
    "bonus": {
        "type": "statement",
        "json": {
            "type": "bonus",
            "message0": "bonus kind %1 val %2",
            "args0": [
                Object.assign({},EventDSLBlocks.Int,{
                    "name": "kind",
                    "value": 123
                }),
                Object.assign({},EventDSLBlocks.Int,{
                    "name": "val",
                    "value": 456
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "bonus",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var kind = block.getFieldValue('kind');
            kind = EventDSLFunctions.pre('Int')(kind,block,'kind','bonus');
            var val = block.getFieldValue('val');
            val = EventDSLFunctions.pre('Int')(val,block,'val','bonus');
            var code = EventDSLFunctions.defaultCode('bonus',eval('['+EventDSLBlocks['bonus'].args.join(',')+']'),block);
            return code;
        },
        "args": ["kind","val"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Int","Int"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('bonus',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('bonus',inputs,next,isShadow,comment,attribute);
        }
    },
    "door": {
        "type": "statement",
        "json": {
            "type": "door",
            "message0": "door %1",
            "args0": [
                Object.assign({},EventDSLBlocks.Int,{
                    "name": "id",
                    "value": 111
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "door",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            id = EventDSLFunctions.pre('Int')(id,block,'id','door');
            var code = EventDSLFunctions.defaultCode('door',eval('['+EventDSLBlocks['door'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["Int"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('door',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('door',inputs,next,isShadow,comment,attribute);
        }
    },
    "item": {
        "type": "statement",
        "json": {
            "type": "item",
            "message0": "item kind %1 val %2",
            "args0": [
                Object.assign({},EventDSLBlocks.Int,{
                    "name": "kind",
                    "value": 123
                }),
                Object.assign({},EventDSLBlocks.Int,{
                    "name": "val",
                    "value": 456
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "item",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var kind = block.getFieldValue('kind');
            kind = EventDSLFunctions.pre('Int')(kind,block,'kind','item');
            var val = block.getFieldValue('val');
            val = EventDSLFunctions.pre('Int')(val,block,'val','item');
            var code = EventDSLFunctions.defaultCode('item',eval('['+EventDSLBlocks['item'].args.join(',')+']'),block);
            return code;
        },
        "args": ["kind","val"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Int","Int"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('item',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('item',inputs,next,isShadow,comment,attribute);
        }
    },
    "shop": {
        "type": "statement",
        "json": {
            "type": "shop",
            "message0": "shop shopType %1 addPower %2 initPrice %3 rise %4",
            "args0": [
                Object.assign({},EventDSLBlocks.Int,{
                    "name": "shopType",
                    "value": 123
                }),
                Object.assign({},EventDSLBlocks.NormalStr,{
                    "name": "addPower",
                    "text": "1&1"
                }),
                Object.assign({},EventDSLBlocks.IntStr,{
                    "name": "initPrice",
                    "text": "0"
                }),
                Object.assign({},EventDSLBlocks.IntStr,{
                    "name": "rise",
                    "text": "0"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "shop",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var shopType = block.getFieldValue('shopType');
            shopType = EventDSLFunctions.pre('Int')(shopType,block,'shopType','shop');
            var addPower = block.getFieldValue('addPower');
            if (addPower==='') {
                throw new OmitedError(block,'addPower','shop');
            }
            addPower = EventDSLFunctions.pre('NormalStr')(addPower,block,'addPower','shop');
            var initPrice = block.getFieldValue('initPrice');
            if (initPrice==='') {
                throw new OmitedError(block,'initPrice','shop');
            }
            initPrice = EventDSLFunctions.pre('IntStr')(initPrice,block,'initPrice','shop');
            var rise = block.getFieldValue('rise');
            if (rise==='') {
                throw new OmitedError(block,'rise','shop');
            }
            rise = EventDSLFunctions.pre('IntStr')(rise,block,'rise','shop');
            var code = EventDSLFunctions.defaultCode('shop',eval('['+EventDSLBlocks['shop'].args.join(',')+']'),block);
            return code;
        },
        "args": ["shopType","addPower","initPrice","rise"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Int","NormalStr","IntStr","IntStr"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('shop',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('shop',inputs,next,isShadow,comment,attribute);
        }
    },
    "npc": {
        "type": "statement",
        "json": {
            "type": "npc",
            "message0": "npc",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "npc",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('npc',eval('['+EventDSLBlocks['npc'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('npc',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('npc',inputs,next,isShadow,comment,attribute);
        }
    },
    "lava": {
        "type": "statement",
        "json": {
            "type": "lava",
            "message0": "lava",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "lava",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('lava',eval('['+EventDSLBlocks['lava'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('lava',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('lava',inputs,next,isShadow,comment,attribute);
        }
    },
    "up": {
        "type": "statement",
        "json": {
            "type": "up",
            "message0": "up",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "up",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('up',eval('['+EventDSLBlocks['up'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('up',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('up',inputs,next,isShadow,comment,attribute);
        }
    },
    "down": {
        "type": "statement",
        "json": {
            "type": "down",
            "message0": "down",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "down",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('down',eval('['+EventDSLBlocks['down'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('down',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('down',inputs,next,isShadow,comment,attribute);
        }
    },
    "move": {
        "type": "statement",
        "json": {
            "type": "move",
            "message0": "move",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "move",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('move',eval('['+EventDSLBlocks['move'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('move',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('move',inputs,next,isShadow,comment,attribute);
        }
    },
    "var": {
        "type": "statement",
        "json": {
            "type": "var",
            "message0": "var",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "var",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('var',eval('['+EventDSLBlocks['var'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('var',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('var',inputs,next,isShadow,comment,attribute);
        }
    },
    "erase": {
        "type": "statement",
        "json": {
            "type": "erase",
            "message0": "erase",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "erase",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('erase',eval('['+EventDSLBlocks['erase'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('erase',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('erase',inputs,next,isShadow,comment,attribute);
        }
    },
    "back": {
        "type": "statement",
        "json": {
            "type": "back",
            "message0": "back",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "back",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('back',eval('['+EventDSLBlocks['back'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('back',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('back',inputs,next,isShadow,comment,attribute);
        }
    },
    "ending": {
        "type": "statement",
        "json": {
            "type": "ending",
            "message0": "ending",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "ending",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('ending',eval('['+EventDSLBlocks['ending'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('ending',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('ending',inputs,next,isShadow,comment,attribute);
        }
    },
    "switch": {
        "type": "statement",
        "json": {
            "type": "switch",
            "message0": "switch",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 160,
            "previousStatement": "switch",
            "nextStatement": EventDSLBlocks.statements
        },
        "generFunc": function(block) {
            var code = EventDSLFunctions.defaultCode('switch',eval('['+EventDSLBlocks['switch'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return EventDSLFunctions.fieldDefault('switch',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return EventDSLFunctions.xmlText('switch',inputs,next,isShadow,comment,attribute);
        }
    }
});



//生成代码中,当一个不允许省略的值或块省略时,会抛出这个错误
function OmitedError(block, var_, rule, fileName, lineNumber) {
    var message = 'no omitted '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'OmitedError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, OmitedError);
    }
    return instance;
}

OmitedError.prototype = Object.create(Error.prototype);
OmitedError.prototype.constructor = OmitedError;
//处理此错误的omitedcheckUpdateFunction定义在下面

//生成代码中,当一个不允许多个语句输入的块放入多语句时,会抛出这个错误
function MultiStatementError(block, var_, rule, fileName, lineNumber) {
    var message = 'no multi-Statement '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'MultiStatementError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, MultiStatementError);
    }
    return instance;
}

MultiStatementError.prototype = Object.create(Error.prototype);
MultiStatementError.prototype.constructor = MultiStatementError;
//处理此错误的omitedcheckUpdateFunction定义在下面


EventDSLFunctions={}

EventDSLFunctions.Evalstr_pre = function(str) {
    if (parseFloat(str)+''===str) {
        return parseFloat(str)
    } 
    return str;
}

EventDSLFunctions.TryIntStr_pre = function(str) {
    if (parseInt(str)+''===str) {
        return parseInt(str)
    } 
    return str;
}

// EventDSLBlocks.shapes.forEach(blockname => {
//     EventDSLBlocks[blockname].json.nextStatement=undefined
// })
EventDSLFunctions.Int_pre = function(intstr) {
    return parseInt(intstr);
}

EventDSLFunctions.Number_pre = function(intstr) {
    return parseFloat(intstr);
}

//返回各LexerRule文本域的预处理函数,方便用来统一转义等等
EventDSLFunctions.pre = function(LexerId) {
    if (EventDSLFunctions.hasOwnProperty(LexerId+'_pre')) {
        return EventDSLFunctions[LexerId+'_pre'];
    }
    return function(obj,block,fieldName,blockType){return obj}
}



// EventDSLFunctions.fieldDefault
// 根据输入是整数字符串或null
// 第index个或者名字为key的域的默认值, null时返回所有field默认值的数组
EventDSLFunctions.fieldDefault = function (ruleName,keyOrIndex) {
    var rule = EventDSLBlocks[ruleName];
    var iskey=typeof keyOrIndex==typeof '';
    var isindex=typeof keyOrIndex==typeof 0;
    function args0_content_to_default(cnt) {
        var key = ({
            'field_input':'text',
            'field_multilinetext':'text',
            'field_number':'value',
            'field_dropdown':'default',
            'field_checkbox':'checked',
            'field_colour':'colour',
            'field_angle':'angle',
            // 'field_image':'src'
        })[cnt.type];
        return cnt[key];
    }
    var allDefault=[];
    for(var ii=0,index=-1,cnt;cnt=rule.json.args0[ii];ii++){
        if (!cnt.name || cnt.type.slice(0,5)!='field' || cnt.type=='field_image') continue;
        index++;
        if (iskey && cnt.name==keyOrIndex)return args0_content_to_default(cnt);
        if (isindex && index==keyOrIndex)return args0_content_to_default(cnt);
        allDefault.push(args0_content_to_default(cnt))
    }
    if (iskey || isindex) return undefined;
    return allDefault;
}



// EventDSLFunctions.defaultCode_TEXT
EventDSLFunctions.defaultCode_TEXT = function (ruleName,args,block) {
    var rule = EventDSLBlocks[ruleName];
    var message=rule.json.message0;
    var args0=rule.json.args0;
    for(var ii=0,jj=0;ii<args0.length;ii++){
        message=message.split(new RegExp('%'+(ii+1)+'\\b'));
        var content='\n';
        if (args0[ii].type==='input_dummy') {
            message[1]=message[1].slice(1);
        } else if(args0[ii].type==='field_image') {
            content=args0[ii].alt;
        } else {
            content=args[jj++];
        }
        if (args0[ii].type=="input_statement") {
            message[0]=message[0]+'\n';
            message[1]=message[1].slice(1);
        }
        message=message.join(content);
    }
    if (rule.type=='statement') {
        message=message+'\n';
    }
    return message;
}

EventDSLFunctions.defaultCode_JSON_TYPE='type'

EventDSLFunctions.parserPre={}
EventDSLFunctions.parserPre.pre = function(LexerId) {
    if (EventDSLFunctions.parserPre.hasOwnProperty(LexerId+'_pre')) {
        return EventDSLFunctions.parserPre[LexerId+'_pre'];
    }
    return function(obj,blockObj,fieldName,blockType,index){return obj}
}
/** @class */
EventDSLFunctions.parserClass = function (params) {
}
EventDSLFunctions.parserClass.prototype.parse = function (obj,next) {
    var blockType = obj[EventDSLFunctions.defaultCode_JSON_TYPE]
    var rule = EventDSLBlocks[blockType]
    if (EventDSLFunctions.parserPre.hasOwnProperty(blockType+'_pre')) {
        obj = EventDSLFunctions.parserPre[blockType+'_pre'](obj)
    }
    var input = []
    for (var index = 0; index < rule.args.length; index++) {
        var dobj = obj[rule.args[index]];
        if (rule.argsType[index]==='statement') {
            if (!rule.multi[index])dobj=[dobj];
            var snext=null
            while (dobj.length) {
                var ds=dobj.pop()
                snext=this.parse(ds,snext)
            }
            input.push(snext)
        } else if (rule.argsType[index]==='value') {
            input.push(this.parse(dobj))
        } else {
            var LexerId = rule.argsGrammarName[index]
            input.push(EventDSLFunctions.parserPre.pre(LexerId)(dobj,obj,rule.args[index],blockType,index))
        }
    }
    return rule.xmlText(input,next)
}
EventDSLFunctions.parser=new EventDSLFunctions.parserClass()
EventDSLFunctions.parse=function(obj){
    var xml_text = EventDSLFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    EventDSLFunctions.workspace().clear();
    Blockly.Xml.domToWorkspace(xml, EventDSLFunctions.workspace());
}

// EventDSLFunctions.defaultCode_JSON
EventDSLFunctions.defaultCode_JSON = function (ruleName,args,block) {
    var rule = EventDSLBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[EventDSLFunctions.defaultCode_JSON_TYPE]=rule.json.type
        ret=block.getNextBlock()==null?'':','
    }
    for (var index = 0; index < values.length; index++) {
        var value = values[index];
        if (rule.argsType[index]==='statement') {
            output[rule.args[index]]=eval('['+value+']')
            if (!rule.multi[index]) output[rule.args[index]]=output[rule.args[index]][0];
        } else if (rule.argsType[index]==='value') {
            output[rule.args[index]]=eval('('+value+')')
        } else {
            output[rule.args[index]]=value
        }
    }
    ret=JSON.stringify(output,null,4)+ret
    return ret
}

// EventDSLFunctions.defaultCode
EventDSLFunctions.defaultCode=EventDSLFunctions.defaultCode_JSON



// EventDSLFunctions.xmlText
// 构造这个方法是为了能够不借助workspace,从语法树直接构造图块结构
// inputs的第i个元素是第i个args的xmlText,null或undefined表示空
// next是其下一个语句的xmlText
EventDSLFunctions.xmlText = function (ruleName,inputs,next,isShadow,comment,attribute) {
    var rule = EventDSLBlocks[ruleName];
    var blocktext = isShadow?'shadow':'block';
    var xmlText = [];
    xmlText.push('<'+blocktext+' type="'+ruleName+'"');
    for (var attr in attribute) {
        xmlText.push(' '+attr+'="'+attribute[attr]+'"');
    }
    xmlText.push('>');
    if(!inputs)inputs=[];
    var inputIsArray = inputs instanceof Array;
    for (var ii=0,inputType;inputType=rule.argsType[ii];ii++) {
        var input = inputIsArray?inputs[ii]:inputs[rule.args[ii]];
        var _input = '';
        var noinput = input==null;
        if(noinput && inputType==='field' && EventDSLBlocks[rule.argsGrammarName[ii]].type!=='field_dropdown') continue;
        if(noinput && inputType==='field') {
            noinput = false;
            input = rule.fieldDefault(rule.args[ii])
        }
        if(noinput) input = '';
        if(inputType==='field' && EventDSLBlocks[rule.argsGrammarName[ii]].type==='field_checkbox')input=input?'TRUE':'FALSE';
        if(inputType!=='field') {
            var subList = false;
            var subrulename = rule.argsGrammarName[ii];
            var subrule = EventDSLBlocks[subrulename];
            if (subrule instanceof Array) {
                subrulename=subrule[subrule.length-1];
                subrule = EventDSLBlocks[subrulename];
                subList = true;
            }
            _input = subrule.xmlText([],null,true);
            if(noinput && !subList && !isShadow) {
                //无输入的默认行为是: 如果语句块的备选方块只有一个,直接代入方块
                input = subrule.xmlText();
            }
        }
        xmlText.push('<'+inputType+' name="'+rule.args[ii]+'">');
        xmlText.push(_input+input);
        xmlText.push('</'+inputType+'>');
    }
    if(comment){
        xmlText.push('<comment><![CDATA[');
        xmlText.push(comment.replace(/]]>/g,'] ] >'));
        xmlText.push(']]></comment>');
    }
    if (next) {
        xmlText.push('<next>');
        xmlText.push(next);
        xmlText.push('</next>');
    }
    xmlText.push('</'+blocktext+'>');
    return xmlText.join('');
}



// EventDSLFunctions.blocksIniter
// 把各方块的信息注册到Blockly中
EventDSLFunctions.blocksIniter = function(){
    var blocksobj = EventDSLBlocks;
    for(var key in blocksobj) {
        var value = blocksobj[key];
        if(value instanceof Array)continue;
        if(/^[A-Z].*$/.exec(key))continue;
        (function(key,value){
            if (value.menu && value.menu.length) {
                var menuRegisterMixin={
                    customContextMenu: function(options) {
                        for(var ii=0,op;op=value.menu[ii];ii++){
                            var option = {enabled: true};
                            option.text = op[0];
                            var check = 'function('
                            if (option.text.slice(0,check.length)==check){
                                option.text=eval('('+option.text+')(this)');
                            }
                            (function(block,fstr){
                                option.callback = function(){
                                    eval(fstr)
                                }
                            })(this,op[1]);
                            options.push(option);
                        }
                    }
                };
                value.json.extensions=value.json.extensions||[];
                var mixinName = 'contextMenu_EventDSL_'+value.json.type
                value.json.extensions.push(mixinName)
                Blockly.Extensions.registerMixin(mixinName,menuRegisterMixin);
            }
            Blockly.Blocks[key] = {
                init: function() {this.jsonInit(value.json);}
            }
            Blockly.JavaScript[key] = value.generFunc;
        })(key,value);
    }
}


EventDSLFunctions.blocksIniter();


var toolbox = (function(){

    var toolboxXml=document.createElement('xml')

    // 调整这个obj来更改侧边栏和其中的方块
    // 可以直接填 '<block type="xxx">...</block>'
    // 标签 '<label text="标签文本"></label>'
    var toolboxObj = {
        // 每个键值对作为一页
        "statement": [
            // 所有语句块
            EventDSLBlocks["eventDSL"].xmlText(),
            EventDSLBlocks["undef"].xmlText(),
            EventDSLBlocks["gg"].xmlText(),
            EventDSLBlocks["monster"].xmlText(),
            EventDSLBlocks["bonus"].xmlText(),
            EventDSLBlocks["door"].xmlText(),
            EventDSLBlocks["item"].xmlText(),
            EventDSLBlocks["shop"].xmlText(),
            EventDSLBlocks["npc"].xmlText(),
            EventDSLBlocks["lava"].xmlText(),
            EventDSLBlocks["up"].xmlText(),
            EventDSLBlocks["down"].xmlText(),
            EventDSLBlocks["move"].xmlText(),
            EventDSLBlocks["var"].xmlText(),
            EventDSLBlocks["erase"].xmlText(),
            EventDSLBlocks["back"].xmlText(),
            EventDSLBlocks["ending"].xmlText(),
            EventDSLBlocks["switch"].xmlText(),
        ],
        "value": [
            // 所有值块
        ]
    }

    var getCategory = function(toolboxXml,name,custom){
        var node = document.createElement('category');
        node.setAttribute('name',name);
        if(custom)node.setAttribute('custom',custom);
        toolboxXml.appendChild(node);
        return node;
    }

    var toolboxGap = '<sep gap="5"></sep>'

    for (var name in toolboxObj){
        var custom = null;
        if(name=='xxxxxx')custom='xxxxxx';
        if(name=='zzzzzz')custom='zzzzzz';
        getCategory(toolboxXml,name,custom).innerHTML = toolboxObj[name].join(toolboxGap);
        var node = document.createElement('sep');
        node.setAttribute('gap',5*3);
        toolboxXml.appendChild(node);
    }

    return toolboxXml;
})();



    var workspace = Blockly.inject('blocklyDiv',{
        media: './media/',
        toolbox: toolbox,
        zoom:{
            controls: true,
            wheel: false,//false
            startScale: 0.5,
            maxScale: 1.2,
            minScale: 0.2,
            scaleSpeed: 1.08
        },
        trashcan: false,
    });
    EventDSLFunctions.workspace = function(){return workspace}
    
    function omitedcheckUpdateFunction(event) {
        var codeAreaFunc = function(err,data){blocklyinput.value=err?String(err):data;window?.trigger?.call(null,[err,data])}
        try {
            if (["delete","create","move","finished_loading"].indexOf(event.type)!==-1) return;
            var code = Blockly.JavaScript.workspaceToCode(workspace);
            codeAreaFunc(null,code);
        } catch (error) {
            codeAreaFunc(error,null);
            if (error instanceof OmitedError ||error instanceof MultiStatementError){
                var blockName = error.blockName;
                var varName = error.varName;
                var block = error.block;
            }
            console.log(error);
        }
    }
    
    workspace.addChangeListener(omitedcheckUpdateFunction);
    
//自动禁用任何未连接到根块的块
workspace.addChangeListener(Blockly.Events.disableOrphans);


// debugFunctions
function showXML() {
    xml = Blockly.Xml.workspaceToDom(workspace);
    xml_text = Blockly.Xml.domToPrettyText(xml);
    console.log(xml_text);
    xml_text = Blockly.Xml.domToText(xml);
    console.log(xml_text);
    console.log(xml);
}

function runCode() {
    // Generate JavaScript code and run it.
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval('obj=' + code);
        console.log(obj);
    } catch (e) {
        alert(e);
    }
}

    window.buildBlocks&&window.buildBlocks()
    