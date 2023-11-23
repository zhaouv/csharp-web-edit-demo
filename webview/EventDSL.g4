grammar EventDSL;

// 更新此文件后`node g4tojs.js`得到新的EventDSL.js

eventDSL:   
    statement=statements* 
;


statements
    :   gg
    |   monster
    |   bonus
    |   door
    |   item
    |   shop
    |   npc
    |   lava
    |   up
    |   down
    |   move
    |   var
    |   erase
    |   back
    |   ending
    |   switch
    |   undef
    ;

undef
    :   '未识别的类型' content=NormalStr?
    ;
/* undef
defaultMap : {content:''}
*/

gg  :   'gg';

monster
    :   'monster' id=Int
    ;
/* monster
defaultMap : {id:123}
*/

bonus
    :   'bonus' 'kind' kind=Int 'val' val=Int
    ;
/* bonus
defaultMap : {kind:123,val:456}
*/

door
    :   'door' id=Int
    ;
/* door
defaultMap : {id:111}
*/

item
    :   'item' 'kind' kind=Int 'val' val=Int
    ;
/* item
defaultMap : {kind:123,val:456}
*/

// 类似于addpower默认值写什么不清楚, 后面的先不填了
shop
    :   'shop' 'shopType' shopType=Int 'addPower' addPower=NormalStr 'initPrice' initPrice=IntStr 'rise' rise=IntStr
    ;
/* shop
defaultMap : {shopType:123,addPower:'1&1',initPrice:'0',rise:'0'}
*/



npc     :   'npc';
lava    :   'lava';
up      :   'up';
down    :   'down';
move    :   'move';
var     :   'var';
erase   :   'erase';
back    :   'back';
ending  :   'ending';
switch  :   'switch';




statExprSplit : '=== statement ^ === expression v ===' ;

Side_List : '⇖'|'⇗'|'⇘'|'⇙' /*Side_List ['ul','ur','dr','dl']*/ ;

IdStr
    :   'varfas'+ ;
NormalStr
    :   'varfass'+ ;
TryIntStr
    :   'varfass'+ ;
IntStr
    :   'varfass'+ ;
Evalstr
    :   'varfass'+ ;

Int :   [0-9]+ ;
Bool:   'true'|'false' ;
Colour:   'asdfgdh'* ;
BGNL:   'asfvaswvr'? 'asdvaswvr'? ;

MeaningfulSplit : '=== meaningful ^ ===' ;

NEWLINE:'\r'? '\n' ; 
        // return newlines to parser (is end-statement signal)
WS  :   [ \t]+ -> skip ;         // toss out whitespace


/* Call_BeforeType
//this.evisitor.recieveOrder='ORDER_NONE';
// this.evisitor.eventColor=220;
// this.evisitor.soundColor=20;
*/

/* Call_BeforeBlock
// this.block('prog').inputsInline=true;
// this.block('idString_1_e').output='idString_e';
// this.block('idString_2_e').output='idString_e';
*/

/* Insert_FunctionStart

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

*/