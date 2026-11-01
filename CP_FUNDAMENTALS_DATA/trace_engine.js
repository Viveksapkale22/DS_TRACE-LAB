/* DS_TRACE LAB - shared step-by-step tracer used by CP_MODULE_1 ... CP_MODULE_6 */
const H='#include <stdio.h>',M='int main() {';
const inp=v=>'<b class="in">'+v+'</b>\n';
function B(){const st=[],v={};return{v,add(ln,msg,out,set){Object.entries(set||{}).forEach(([k,x])=>{if(x===null)delete v[k];else v[k]=x});st.push({ln,msg,out:out||'',v:{...v}})},st}}
const S=a=>{const b=B();a.forEach(x=>b.add(x[0],x[1],x[2],x[3]));return b.st};
const I=(id,l,d)=>({id,l,d});
const TR=(()=>{
const CSS=`:root{--bg:#f3f5f2;--panel:#fff;--ink:#17211b;--mute:#5d6b62;--line:#d5dcd6;--acc:#0f7a55;--accsoft:#dff3ea;--hl:#fff1b8;--con:#0e1512;--conink:#b8f5d3;--inp:#ffd479;--code:#f7f9f7}
@media(prefers-color-scheme:dark){:root{--bg:#0d1310;--panel:#151d18;--ink:#e6efe9;--mute:#93a39a;--line:#26332b;--acc:#3ddc97;--accsoft:#173326;--hl:#4a4217;--con:#070b09;--conink:#9ff0c4;--inp:#ffd479;--code:#101712}}
*{box-sizing:border-box}html,body{margin:0}
body{background:var(--bg);color:var(--ink);font:16px/1.6 Georgia,'Times New Roman',serif;padding:env(safe-area-inset-top,0) 0 env(safe-area-inset-bottom,0)}
code,.code,.console,.vars{font-family:'Cascadia Code',Consolas,Menlo,monospace}
header{padding:22px 20px 14px;max-width:1100px;margin:0 auto}
.back{color:var(--acc);font-size:14px;text-decoration:none}
.brand{font:700 15px 'Cascadia Code',Consolas,monospace;color:var(--acc);margin-top:6px}
h1{margin:4px 0 2px;font-size:clamp(24px,5vw,38px);line-height:1.15}
.sub{color:var(--mute);margin:0}
main{max-width:1100px;margin:0 auto;padding:0 20px 40px}
.chapters{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 16px}
.chip{border:1px solid var(--line);background:var(--panel);color:var(--mute);padding:5px 12px;border-radius:99px;font-size:13px;text-decoration:none}
.chip.on{background:var(--acc);color:#fff;border-color:var(--acc);font-weight:700}
.list{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}
.list button{width:46px;height:46px;border-radius:10px;border:2px solid var(--line);background:var(--panel);color:var(--ink);font:700 17px 'Cascadia Code',Consolas,monospace;cursor:pointer}
.list button.on{background:var(--acc);border-color:var(--acc);color:#fff}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid var(--acc);outline-offset:2px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:16px 18px;margin-bottom:14px}
h2{margin:0 0 6px;font-size:21px}h3{margin:0 0 6px;font-size:16px;color:var(--acc)}
.card p{margin:4px 0}.card ul{margin:4px 0;padding-left:20px}
.grid{display:grid;grid-template-columns:1.15fr 1fr;gap:14px}
@media(max-width:820px){.grid{grid-template-columns:1fr}}
.code{background:var(--code);border:1px solid var(--line);border-radius:8px;padding:8px 0;font-size:13.5px;overflow-x:auto}
.ln{display:flex;white-space:pre;padding:0 12px;border-left:4px solid transparent;min-height:1.6em}
.ln i{color:var(--mute);width:28px;flex:none;font-style:normal;user-select:none}
.ln.on{background:var(--hl);border-left-color:var(--acc)}
.console{background:var(--con);color:var(--conink);border-radius:8px;padding:12px;min-height:130px;font-size:14px;white-space:pre-wrap;overflow-x:auto}
.console .in{color:var(--inp);font-weight:700}
.cur{display:inline-block;width:8px;height:15px;background:var(--conink);vertical-align:-2px}
@media(prefers-reduced-motion:no-preference){.cur{animation:b 1s steps(2) infinite}@keyframes b{50%{opacity:0}}}
.vars{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;min-height:30px}
.vars span{background:var(--accsoft);border-radius:6px;padding:2px 9px;font-size:13px}
.what{background:var(--accsoft);border-radius:8px;padding:10px 12px;margin-top:8px;min-height:62px}
.ctrl{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px}
.ctrl button{padding:9px 16px;border-radius:8px;border:1px solid var(--acc);background:var(--panel);color:var(--acc);font:700 14px Georgia,serif;cursor:pointer}
.ctrl button.p{background:var(--acc);color:#fff}
.ctrl button:disabled{opacity:.4;cursor:not-allowed}
.ctrl select,.inputs input{padding:7px;border-radius:6px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:14px 'Cascadia Code',Consolas,monospace}
.inputs{display:flex;gap:12px;flex-wrap:wrap;align-items:end;margin-bottom:6px}
.inputs label{font-size:13px;color:var(--mute);display:flex;flex-direction:column;gap:2px}
.inputs input{width:100px}
.bar{height:6px;background:var(--line);border-radius:4px;margin-top:10px;overflow:hidden}
.bar div{height:100%;background:var(--acc);width:0;transition:width .2s}
.note{font-size:13px;color:var(--mute)}`;
const $=id=>document.getElementById(id);
let EX=[],cur=0,steps=[],k=-1,timer=null;
function stop(){clearInterval(timer);timer=null;$('auto').textContent='Auto play'}
function build(){
 const e=EX[cur];$('title').textContent=e.t;$('aim').textContent=e.aim;$('concept').innerHTML=e.concept;
 $('inputs').innerHTML=e.inputs.map(f=>'<label>'+f.l+'<input type="number" id="in_'+f.id+'" value="'+f.d+'"></label>').join('');
 e.inputs.forEach(f=>$('in_'+f.id).addEventListener('change',()=>{stop();load()}));
 $('code').innerHTML=e.code.map((l,i)=>'<div class="ln" id="l'+i+'"><i>'+(i+1)+'</i><span></span></div>').join('');
 e.code.forEach((l,i)=>document.querySelector('#l'+i+' span').textContent=l);
 load()}
function load(){const e=EX[cur],x={};e.inputs.forEach(f=>x[f.id]=$('in_'+f.id).value);steps=e.run(x);k=-1;draw()}
function draw(){
 document.querySelectorAll('.ln').forEach(n=>n.classList.remove('on'));
 let out='';for(let i=0;i<=k;i++)out+=steps[i].out;
 $('con').innerHTML=out+'<span class="cur"></span>';
 if(k<0){$('msg').textContent='Press Next or Auto play to start running the program.';$('vars').innerHTML='';}
 else{const s=steps[k],el=$('l'+s.ln);if(el){el.classList.add('on');el.scrollIntoView({block:'nearest'})}$('msg').textContent=s.msg;
  $('vars').innerHTML=Object.entries(s.v).map(([a,b])=>'<span>'+a+' = '+b+'</span>').join('')}
 $('prog').style.width=((k+1)/steps.length*100)+'%';$('cnt').textContent='Step '+(k+1)+' / '+steps.length;
 $('back').disabled=k<0;$('next').disabled=k>=steps.length-1;
 if(k>=steps.length-1&&timer)stop()}
function next(){if(k<steps.length-1){k++;draw()}}
function mount(o){
 EX=o.ex;
 const st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
 document.title='CP_MODULE '+o.n+' - '+o.title;
 let nav='';for(let m=1;m<=6;m++)nav+='<a class="chip'+(m===o.n?' on':'')+'" href="CP_MODULE_'+m+'.html">Module '+m+'</a>';
 $('app').innerHTML='<header><a class="back" href="../CP_FUNDAMENTALS.html">&larr; CP_FUNDAMENTALS (all modules)</a><div class="brand">DS_TRACE LAB &middot; CP_MODULE '+o.n+'</div><h1>'+o.title+'</h1><p class="sub">'+o.sub+'</p></header><main>'
 +'<div class="chapters" aria-label="Modules">'+nav+'</div>'
 +'<section class="card"><h3>Syllabus topics covered here</h3><ul>'+o.topics.map(t=>'<li>'+t+'</li>').join('')+'</ul></section>'
 +'<div class="list" id="list" aria-label="Programs in this module"></div>'
 +'<section class="card"><h2 id="title"></h2><p id="aim"></p></section>'
 +'<section class="card"><h3>Basic concept</h3><div id="concept"></div></section>'
 +'<section class="card"><div class="inputs" id="inputs"></div><div class="grid"><div><h3>Code</h3><div class="code" id="code"></div></div><div><h3>Console output</h3><div class="console" id="con" aria-live="polite"></div><div class="vars" id="vars"></div></div></div>'
 +'<div class="what"><b>What happened:</b> <span id="msg"></span></div><div class="bar"><div id="prog"></div></div>'
 +'<div class="ctrl"><button id="back">Back</button><button id="next" class="p">Next</button><button id="auto">Auto play</button><button id="reset">Reset</button>'
 +'<label class="note">Speed <select id="spd"><option value="1800">Slow</option><option value="1100" selected>Normal</option><option value="500">Fast</option></select></label><span class="note" id="cnt"></span></div></section>'
 +'<p class="note">Output is simulated step by step in the browser. Yellow text in the console is what the user types.</p></main>';
 $('next').onclick=()=>{stop();next()};
 $('back').onclick=()=>{stop();if(k>-1){k--;draw()}};
 $('reset').onclick=()=>{stop();k=-1;draw()};
 $('auto').onclick=()=>{if(timer){stop();return}if(k>=steps.length-1)k=-1;$('auto').textContent='Pause';next();timer=setInterval(next,+$('spd').value)};
 $('spd').onchange=()=>{if(timer){clearInterval(timer);timer=setInterval(next,+$('spd').value)}};
 EX.forEach((e,i)=>{const b=document.createElement('button');b.textContent=i+1;b.title=e.t;b.setAttribute('aria-label','Program '+(i+1));
  b.onclick=()=>{stop();cur=i;document.querySelectorAll('#list button').forEach((x,j)=>x.classList.toggle('on',j===i));build()};$('list').appendChild(b)});
 $('list').firstChild.classList.add('on');build();
}
return{mount};
})();
