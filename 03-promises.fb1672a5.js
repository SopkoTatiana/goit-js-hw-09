var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");function r(e,t){return new Promise(((o,n)=>{const i=Math.random()>.5;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget,{elements:{delay:o,step:n,amount:l}}=t,u={delay:Number(o.value),step:Number(n.value),amount:Number(l.value)};let a=u.delay;if(u.delay<0||u.step<0||u.amount<=0)return void i.Notify.failure("Please input positive values");!function(e){for(const t of e)t.value=""}(t.elements);for(let e=1;e<u.amount;e+=1)r(e,a).then((({position:e,delay:t})=>{i.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`Rejected promise ${e} in ${t}ms`)})),a+=u.step}));
//# sourceMappingURL=03-promises.fb1672a5.js.map