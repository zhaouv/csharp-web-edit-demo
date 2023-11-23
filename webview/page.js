if (localStorage.getItem('EventDSL')!=null) {
    try {
        document.querySelector('#blocklyinput').value=localStorage.getItem('EventDSL')
    } catch (error) {
    }
}

window.buildBlocks=function(params) {
    // console.log('buildBlocks')
    try {
        EventDSLFunctions.parse(eval('('+document.querySelector('#blocklyinput').value.replace(/[<>&]/g, function (c) {
            return {'<': '&lt;', '>': '&gt;', '&': '&amp;'}[c];
        })+')'))
        buildOnce();
    } catch (error) {
        if(error.message!=='EventDSLFunctions is not defined')console.error(error)
    }
}
window.buildBlocks()

var lastvalue = ['']
window.trigger = function(params) {
    if (params[1]==lastvalue[0]) {
        return
    }
    lastvalue[0]=params[1]
    try {
        if(params[1])localStorage.setItem('EventDSL',document.querySelector('#blocklyinput').value)
    } catch (error) {
    }
    // console.log(params[1])
    buildOnce();
}

function buildOnce(params) {
    eventdslraw.value=json2dsl(eval('('+document.querySelector('#blocklyinput').value+')'));
}

function importOnce(params) {
    document.querySelector('#blocklyinput').value=JSON.stringify( dsl2json(eventdslraw.value),null,4)
    window.trigger([0,lastvalue[0]+' '])
    window.buildBlocks()
}

// document.getElementById('blocklyDiv').onmousewheel = function(e){
//     var workspace=EventDSLFunctions.workspace()
//     //console.log(e);
//     e.preventDefault();
//     var hvScroll = e.shiftKey?'hScroll':'vScroll';
//     var mousewheelOffsetValue=20/380*workspace.scrollbar[hvScroll].handleLength_*3;
//     workspace.scrollbar[hvScroll].handlePosition_+=( ((e.deltaY||0)+(e.detail||0)) >0?mousewheelOffsetValue:-mousewheelOffsetValue);
//     workspace.scrollbar[hvScroll].onScroll_();
//     workspace.setScale(workspace.scale);
// }

///////////////////////////////////////////////////////////////////

function dsl2json(dsl) {
    var statements= dsl.split('<>').map(event1=>{
        var info=event1.split('/')
        if (info[0] in EventDSLBlocks) {
            var block=EventDSLBlocks[info[0]]
            var ret={type:info[0]}
            block.args.forEach((k,i)=>{
                ret[k]=info[i+1]
            })
            return ret
        } else {
            return {type:'undef',content:event1}
        }
    })
    return {"type": "eventDSL","statement": statements}
}

function json2dsl(jsonobj) {
    return jsonobj.statement.map(event2=>{
        if (event2.type=='undef') {
            return event2.content
        } else {
            
            return [event2.type].concat(EventDSLBlocks[event2.type].args.map(k=>event2[k])).join('/')
        }
    }).join('<>')
}
