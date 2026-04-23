!function(){let e,t,r,n,o,i,a,s,c,l,u,d,f,p,g,h,m,v,w,A,y,b,x,C,k,T,S,F,U,O,E,I,B,N,D,V,z,L,P,W,j,M,R,H,$,Y,G,Z,J,X,Q,q,_,K,ee,te,re,ne,oe,ie,ae,se,ce,le,ue,de,fe,pe,ge,he,me,ve,we,Ae,ye,be,xe,Ce,ke,Te,Se,Fe,Ue,Oe,Ee,Ie,Be,Ne,De,Ve,ze,Le,Pe,We,je,Me,Re,He,$e,Ye,Ge,Ze,Je,Xe,Qe,qe,_e,Ke,et,tt,rt,nt,ot,it,at,st,ct,lt,ut,dt,ft,pt,gt,ht,mt,vt,wt,At,yt,bt,xt,Ct,kt,Tt,St,Ft,Ut,Ot,Et,It,Bt,Nt,Dt,Vt,zt,Lt,Pt,Wt,jt,Mt,Rt,Ht,$t,Yt,Gt,Zt,Jt,Xt,Qt,qt,_t,Kt,er,tr,rr,nr,or,ir,ar,sr=e=>e;function cr(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function lr(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){cr(i,n,o,a,s,"next",e)}function s(e){cr(i,n,o,a,s,"throw",e)}a(void 0)})}}function ur(e,t,r){return r(hr(e,t))}function dr(e,t,r){return e.set(hr(e,t),r),r}function fr(e,t,r){pr(e,t),t.set(e,r)}function pr(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function gr(e,t){return e.get(hr(e,t))}function hr(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}function mr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function vr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?mr(Object(r),!0).forEach(function(t){wr(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):mr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function wr(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register([],function(cr,mr){"use strict";return{execute:function(){var cr=document.createElement("style");cr.textContent='@font-face{font-family:CustomFont;src:url(/assets/Technology-Bold-BXWa7YfV.ttf) format("truetype")}body{font-family:Roboto,sans-serif;user-select:none;margin:0;background-color:var(--bg-color);color:var(--text-color)}:root{--bg-color: #ffffff;--text-color: #000000;--secondary-text: #666666;--tertiary-text: #333333;--secondary-bg: #f5f5f5;--border-color: #cccccc;--accent-color: #f60;--battery-good: linear-gradient(90deg, #4CAF50, #81C784);--battery-medium: linear-gradient(90deg, #FF9800, #FFB74D);--battery-low: linear-gradient(90deg, #F44336, #E57373);--battery-charging: linear-gradient(90deg, #f60, #ff8533);--heating-color: #ff6600;--reached-color: #00ff66}.dark-mode{--bg-color: #181a1b;--text-color: #ffffff;--secondary-text: #cccccc;--tertiary-text: #aaaaaa;--secondary-bg: #2a2c2e;--border-color: #444444;--accent-color: #f60;--battery-good: linear-gradient(90deg, #4CAF50, #81C784);--battery-medium: linear-gradient(90deg, #FF9800, #FFB74D);--battery-low: linear-gradient(90deg, #F44336, #E57373);--battery-charging: linear-gradient(90deg, #f60, #ff8533);--heating-color: #ff6600;--reached-color: #00ff66}@font-face{font-family:Roboto;font-style:normal;font-display:swap;font-weight:400;src:url(/assets/roboto-cyrillic-ext-400-normal-DzMWdK87.woff2) format("woff2"),url(/assets/roboto-cyrillic-ext-400-normal-DtZHuW6i.woff) format("woff");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Roboto;font-style:normal;font-display:swap;font-weight:400;src:url(/assets/roboto-cyrillic-400-normal-DAIM1_dR.woff2) format("woff2"),url(/assets/roboto-cyrillic-400-normal-DZJji7Rx.woff) format("woff");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Roboto;font-style:normal;font-display:swap;font-weight:400;src:url(data:font/woff2;base64,d09GMgABAAAAAA5cABIAAAAAGtgAAA38AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhQbHhw0BmA/U1RBVF4AXgiBfgmfBhEMCoJ0gnQLFAABNgIkAyQEIAWEeAcgDIVOG4kZIxHmlLUCwF8V2MbMoa4AxWgkRCthOLSyMZeTQC5uuOJg8u6E3LDs4xbJUqAc5hwClMNy/OePZYQksz9fV/beV6lD19AduEZiD8BOMgHVE619Io7rU3LbKR6I/eb7XiLXiZBIeONoXDeJWimViYW8pUXLJnW3vOum0Jq2rJBTxgHxjUABglAv/FCYGVNlZkz8z7H9YZ5Md+9lxCLcImIaGnXUht+bapJuld5NR8rgTTqoPbsVUTVFbb0AnQKIkp093FLP6ze5XT5S6dxqfBzN+b2dJM29HAELQ0qeMZ3ZbpvZTQo53PYR9R3muDnMU+QOPrARxCzkl19oC6hLwh3l21mn+wJJmOo2nHRQZhKIQpC1L6cDArD4Mkg2C+sAqvWrjvWohAxGMZYzTBMAJA52zcLTbez1tDbA2lFrZX02Z17a3iR4U3Kvz6I6PIQDvktCADCXT9A7qAoBADrABjHUV2d0Ozk6vOamloB5qrIzIejwSPFzlbgDgI7C+pO0Xp57L77IuqK9BhGga1TTjgD4X2E+BBIg3K0kUAQJPFuFmIVTBB7aRy7xaDUPqOACUrCgMT+ViTMLybwW25kL6C7lEludwgFeYb7gp7n522s+z8ckSQFWJA7LoRfvWATMvzvmvfmc4xV1418A8Ia3nT+nvuqk9njVJ73uLvpcZ3zpsdPBb3AivLPbgQajHrhkv+NecdsqR7n1++xz2S8t5z3TxNcecAUxfusd6qNmnbHXfuRLh51232NvBp/g//pNtFNdwgby/sXqGTiMmLDPsZqfqp5plRTlug0YY/hQz6/zige+8kvgDn1mHHXedU/iAxaX406fOnlianJifGx0ZHhocKC/r7enu6uzo72ttaXZ1tTYUF9XW1NdVdmEzKpp8F9/9eUXN6Wzz66fTsbDweefffpJv9fttFsfvpNtrOdp1AJXfDXfaORJVIOlv3mdkkIYSIRPg2RDMIZW90e2aCqtnWINAwwF7A0zKSf6roOTzghCzXP1x9wflpYKKQmIDptgJE9pny5Lh0BMbRBlHldfIDqVrJhUKMayPCMTYCL2WQQnuC5DRSy8Mjc/5yLZOEaZYc12rm+IsmyVJv7qOcbyTCm1QQzVi5NpPFo94xpDQ2mh+1vX6egCBwBOG9fQ5G/LH8hDr4ggwNOBFSfghRVu6sjys1+VOLEm52rznez2DbFu5JHIZXRJ71Ojkd6nl7ZenEC/z7C/ELVw5S9ddOWzDOiOYTsoEcIuLk3i0/7I9rU7VRtyZ9h2affpqmoUvOODBw8lQ4KYMdsdWYtkWLErYbGMnLGupyXbi095AIdKcMt9RRF659XON5bP187Xz7cWthdURDT/cj3tXyiJopJfLWo7pWDYGbXXaOf0dVWjwOXTsvQAm3+PI3K1Mt8ducYPedqKCzNL+6tFtpXKoUpdfj1MIy8iGRke2tl4CAQEYKd3ilFAmbwTxtjyd3ilXfjcrtnICTAhy3PFLi5/SZoLJBuOpSvveyMDjYbXIc4OdwIU3YpbnsuAIXAXbqiuyaPMm7KDspZIqnoVJL4SxCNxvhfR9V56mpxGdKxsQdXzS2j6kjrjLDmzBUjNwLivf+GCC3rtuZTzlAjGwN6pWxegVzA4gOlLFZlcau1eSxs5FRFGptnI+8NofG4GNxYFXEJib9LA0vuhCuczmlqxFvJ9XZpNJ+UXXnech8qrvMIJlczEK0ZyoBmMIRgIMOcyKku5zzIprVgePOOxjca5lFIVFFVOSW7l5/ZmI08DJEOW1ySZ1MJMN6huk9NrPZl6niLvGLq/jXgX+FaZihH3TIq8g3WJ42KmIuiHmaBmZDXNHOf9y4CJnbu0I3YRKAy0yuIjjIt44b4Dcdylpm9UCy71YHgiUkRSfoVGnUKDM2zPFjA8JdEzPuSMUGC1oc28SAxXAQQQ4w9Bq3c+2anSDoxelFGH10FGa7dHk1H7LEzAhdUgaFIjhgfkHXnPwLSsVW7xKt2GAUaLrRq0CdOppSUTJL0/gu3M6YC0sOJDc9YI4bXzLfUOmX8nPcDcAjJiZ3GkWzC0GhIETgh2s7gTzYbDHLq36etG8igNxEOksV8VrB2Ji/xJzuusiUwz31UlLoFQ6A049mSp6AeS8wDHLAFjde0Na8qoRd1dCQqZJ3rW7XZHjZzZUyB0CHAF0Whi4ep72FzYZzMC42SeTYCZRQqbliLwWIsBSewLyAGn4Ky0YJ0VgbKUu74XjEgrDV0Esoghe6mueKiwwDJCuS9b5+vsaNKwFsCxgAJye5MBa5UsSmpSXq8o708xckDDlkbgIHMhUW0eekSVYf7K/QhSI2DcCSMwfBZVm29PLAzPMHKuClo2RlJCvZYzNZoeo8vuIGoB2JruNiNF0mrUUr2Rl80axp1f8GCtNt/2njjLG1FbKF7MTDn3oBJqgplkuLKKG6Jq16ga7mM03FitWa8qwiKnB0K6kfL2BS88G/RWCKwuo7TFSQs8JSCeAHQnzbQnOnCWQbwpTfAvRFIf71/Bf3IkahUYX5CeJ9veknKWcj/7eY4PLKCjjmlyCCiW8uxEp2HAwi6rJXfxBRp0datmjpjyCVl8g6LkTSWHJgHuSCBAUI7C6GuSt4B9zSDIWgNKCWJFugmuPYPFTqr1wLLBgnbuRYo0ryOxL2/VWLgzS42Fe1z8EVQcQIpUU+GfgX4DmJjXMlZco4ltTKh1XQWbJGd6/ffwRsiSQGjFSTdTm+bvLiWkI3DQB7dkkRroraTIbqoWZH+rVsjNJhxgIZBe+QsmQKE4CEOJFdKPfcBaJaYc0V9rYpfUsoNKykBx6FOfnyxhZdkhmuh93+ZAWsW++RtA6fADiJHsUt4hbAX5eGDANHKxr4WpI65R9PZJ9nRpO08EOSUGVAPN7MNw0CplEJzxBBw//b/uXIPBOTa/Biil9TXIax+oB2xG3iVUuTWDx6kT+xN5y/wPkltY5dSQ1b9PWBTjfL/N7N7yT9oIoyox25LoeQAzKUclvmz0QB24xUJnxB4IFYq5gxf/tRn1R/vEzzMuLWeUHifHh0AhH12cYAkMlkgeOOClNv/Irlm0RWjD2ER0yvboRtEfAa+YMNNlmvFHmSDIiRW+9omdl1qQ2FqQ+DEYj8P8jckbs3BYdcOnDIsiHUmgruHD32p/xGo48XeaijF0+sJKnwHwh+GbTux0KpdjqH3XNkcMgFCpKu32ZwoykBvOSAj9BnGk19q862Vtu+kHX1EqyiO7dv+eAkbeZzmwV2n+rg5AVwZhaT8uBZLHmgUMzsZb1kngYGHNwdwftvTsgAiZ/E+LfI1TeEt5Ki+Dd4y3kGexKJiwHUGAacZPs3KlUPtgYaD1pLwock9d6evO/V707fbB8OtXX6n2529+QBz5+PZbbd/T199n3P6zZRn/8ZgDMPyUNf/FGvswX4OcLmqv8u4MzfmBxx1b7FvWAU8xhlcPE3T0MnHP6wVutvYdoxX4ovT0KWei4FoqPX3+TfHEiPWfe5pJr4FzMsjZC29k4q/4zLM08ub/6qj1o8qpI5GFeYciq6a2fjS6Orb145rpQ5F5RYcjK6ZDPl62xnV8SVvoeyt+2d3zf+bN5BivzXMx24Xv0uzSBeCONwEzEH8+0jCY35h/8xT+jaF4iPVLaKtQWsEnH7wkJDDoGecLJEIkCCgELP4iOCAw6CVK/JcALO2AT9EKCICGSbMvPr26tmjXc59HBgCA97/3cgAAvz8SmwX9bQ9pcgE8T5rPW2TAbxUe5BA2/bWREu1XYR/+wATf6oqcoLkspDXqfWe+hF0YYrEAZwD5WtSBUNh6oQcojJWWR8Hq50pkCSxMdO78SirY5yuZ9RwrOXd2FpzbtGKhLbadgQAWvnElgsqZibkrQ2GPguXhquxZPTNAGptGpZokVbq1fLhBrPZnvVa57MUVGNdUXFlztal2iGvtZm12CGCbxys1qWLLwnZ5wnLb0P76dbVFLotWO/shXIlzh55LFZzl3Nqha7UYXUgnB55mu52IH7wwDrdq2YWeljLRks+7Hm2n3TQmza3DW8U9jGy1rAcHnUaXgULlYDXiFDc2dawul6mF6vCWtrXtjnWenqtWq+VC7UAZf+X9QRT8MjbVq1TpU27jhre2RpXXHIdu83aXF+prT2YdVHja/RgcrNyL/j3sa45eb+vP0NPcgasWdrW04qKqRUcT25s2cdo4jpNGttSxuaFma2BT/Sr262uvof5/b319Fjv1TmxXWFNidalWVWZlkRUFlhd+cStsYiPHktwTznkW5SUcsyzIMD/NvFQtN8WclA7ZSWYlmBmPYCaexXR0FVNRpkZ/MYkxOfaEUYSJ4TRGwr/ohxkXnsVgOI2BEKMDjAqcoDfIiOAJusEwv4Sen4aPe73c3Sx1/O9qrqCpqsf2uhM01I2jvi6EuqqEeqkDxcIJ8rkhpFMdiLtUcI8mEC17XMsRtxlhtXvNcshFp0ArAg1O+zKcWfgd3GDnersW68ou75KzYvcuuc+243fH5mqzfyxaimZhKhqFecG4oLNaBLcyYclluZtUa4wsYkPsP0YXFS3M1KyqkKxCYBBk6nPVXJE7JDBAjAuboHvFmhgSFFxehgFgk/2HKlZZUCsRci7J3aRYI2QRGSL/EUoNg+PL6SFkpIf/JHM27FBS8h04Dbd57pMak3kOMQ0Qi/k5c4iz7v3AAfBVhx2H0ucfUXi+o4U5QsJTc+YYnXWn7eDDJ5/+wFjtAJ8zJUmUuKHyjR5KfpkKPvCQLwrpIo5UlOT8TQZbNvimnA==) format("woff2"),url(data:font/woff;base64,d09GRgABAAAAAAYcAA8AAAAABwQAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABHREVGAAABWAAAABQAAAAUAA8ACEdQT1MAAAFsAAAAHgAAAB5EdEx1R1NVQgAAAYwAAAA0AAAANJMNggJPUy8yAAABwAAAAGAAAABgl4LQ2VNUQVQAAAIgAAAAXgAAAF5e+0M1Y21hcAAAAoAAAABUAAAAVADNH/FnYXNwAAAC1AAAAAwAAAAMAAgAGWdseWYAAALgAAABNgAAATZng0GjaGVhZAAABBgAAAA2AAAANglAYTFoaGVhAAAEUAAAACQAAAAkCroFqWhtdHgAAAR0AAAAIAAAACAX6f/DbG9jYQAABJQAAAASAAAAEgGEAVltYXhwAAAEqAAAACAAAAAgACgBIW5hbWUAAATIAAABMwAAAng3dGTWcG9zdAAABfwAAAAgAAAAIP9tAGQAAQAAAAwAAAAAAAAAAQAHAAEAAQABAAAACgAcABwAAURGTFQACAAEAAAAAP//AAAAAAAAAAEAAAAKADIAMgAEREZMVAAeY3lybAAaZ3JlawAabGF0bgAaAAAAAAAEAAAAAP//AAAAAAAEBIcBkAAFAAAFmgUzAAABHwWaBTMAAAPRAGYCAAAAAgAAAAAAAAAAAOAAAv9QACBbAAAAIAAAAABHT09HAEAAAB9NBgD+AABmB5oCACAAAZ8AAAAABDoFsAAAACAAAwABAAEACAADAAAAFAADAAAALAACd2R0aAEBAAB3Z2h0AQAAAWl0YWwBAgACAAYAEgAiAAEAAAACAScAZAAAAAMAAQACAQYBkAAAArwAAAADAAIAAgEoAAAAAAABAAAAAAAAAAIAAAADAAAAFAADAAEAAAAUAAQAQAAAAAwACAACAAQAAAANACAAoB9N//8AAAAAAA0AIACgH03//wAB//X/4/9m4LoAAQAAAAAAAAAAAAAAAAABAAIACAAI//8ADwAFAGQAAAMoBbAAAwAGAAkADAAPAAABESERBQEBJQkDIQkCAyj9PAKO/u8BEf2oAQ3+8wEq/v4CA/39AQIBAQWw+lAFsFT9fP18DAJ4Anj9RP2iBUT9ogJeAAACAHf/7AUKBcQAFQArAAABFRQCBgYjIiYmAjU1NBI2NjMyFhYSAzU0LgIjIg4CFRUUHgIzMj4CBQpSmteFgdedVlWc14GF15tTvzVmk11akWc4OGmRWl6SZTQDBlyk/vy2YGC2AQSkXKQBA7dgYLf+/f8AXoLIiEZGiMiCXoPJiUZGickAAAIAcARxAskF1wAFAA8AAAE1EzMVAyU1MxUUFhcHJiYBknTD3/6GpyoqSVZcBIQRAUIV/sL+VU9IaC06LY////54/+wFUAXWACYABEYAAAcABf4I//8AAAABAAAAAwJO30PFVF8PPPUAGwgAAAAAAMTwES4AAAAA4dQCb/oa/dUJMQhzAAAACQACAAAAAAAAAAEAAAds/gwAAAlK+hr+SgkxAAEAAAAAAAAAAAAAAAAAAAAIA4wAZAAAAAAB/AAAAfwAAAWBAHcDIQBwAfwAAAXH/ngAAAAtAC0ALQAtAHAAjwCPAJsAAAABAAAACACpABUAdgAHAAEAAAAAAAAAAAAAAAAAAwABeJx9kU0vA1EUht/bVhNN06VYWEwsqISiRJSVWDQ2iAjrGmNU6MjMdOEv+DEifoffJJ45vfRDIif3znPee857P0ZSQ28qy1XmJX24Rc9OdVf3XKLmy3NZbX16rmhJ757ntKJXz1X0geeG9rQ/YifVte7ZqaZlzyX0Bc/V8V5uFb3muQlJF0r0pB7up1Bq/KgT5fbtK9Q18y35PRTBMZTbyPWsTAfaJBI4wuUOGrAy6i2UjLll3rHtdsPIGRtkEdqQ2h6rV2Qp1X1zCLRD1xbR0SFZG2prd8ohmHGY7OjqjOhC/+05m40rj+1GL6g/Nx6dYZsIdIkS2f6TpzmnOtEDK6HVH+FcvFRi9wrU/PNqMe5FxRCXFl3FvyjUhIg5VfT7nhl6OnWT0E6d2YuFWvsGFBtciwAAAwAAAAAAAP9qAGQAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:Roboto;font-style:normal;font-display:swap;font-weight:400;src:url(/assets/roboto-greek-400-normal-jFM2czAU.woff2) format("woff2"),url(/assets/roboto-greek-400-normal-CcizSnRP.woff) format("woff");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Roboto;font-style:normal;font-display:swap;font-weight:400;src:url(/assets/roboto-math-400-normal-B3wgz80t.woff2) format("woff2"),url(/assets/roboto-math-400-normal-rzxYvyVt.woff) format("woff");unicode-range:U+0302-0303,U+0305,U+0307-0308,U+0310,U+0312,U+0315,U+031A,U+0326-0327,U+032C,U+032F-0330,U+0332-0333,U+0338,U+033A,U+0346,U+034D,U+0391-03A1,U+03A3-03A9,U+03B1-03C9,U+03D1,U+03D5-03D6,U+03F0-03F1,U+03F4-03F5,U+2016-2017,U+2034-2038,U+203C,U+2040,U+2043,U+2047,U+2050,U+2057,U+205F,U+2070-2071,U+2074-208E,U+2090-209C,U+20D0-20DC,U+20E1,U+20E5-20EF,U+2100-2112,U+2114-2115,U+2117-2121,U+2123-214F,U+2190,U+2192,U+2194-21AE,U+21B0-21E5,U+21F1-21F2,U+21F4-2211,U+2213-2214,U+2216-22FF,U+2308-230B,U+2310,U+2319,U+231C-2321,U+2336-237A,U+237C,U+2395,U+239B-23B7,U+23D0,U+23DC-23E1,U+2474-2475,U+25AF,U+25B3,U+25B7,U+25BD,U+25C1,U+25CA,U+25CC,U+25FB,U+266D-266F,U+27C0-27FF,U+2900-2AFF,U+2B0E-2B11,U+2B30-2B4C,U+2BFE,U+3030,U+FF5B,U+FF5D,U+1D400-1D7FF,U+1EE00-1EEFF}@font-face{font-family:Roboto;font-style:normal;font-display:swap;font-weight:400;src:url(/assets/roboto-symbols-400-normal-fF1SLJBj.woff2) format("woff2"),url(/assets/roboto-symbols-400-normal-Tzuungub.woff) format("woff");unicode-range:U+0001-000C,U+000E-001F,U+007F-009F,U+20DD-20E0,U+20E2-20E4,U+2150-218F,U+2190,U+2192,U+2194-2199,U+21AF,U+21E6-21F0,U+21F3,U+2218-2219,U+2299,U+22C4-22C6,U+2300-243F,U+2440-244A,U+2460-24FF,U+25A0-27BF,U+2800-28FF,U+2921-2922,U+2981,U+29BF,U+29EB,U+2B00-2BFF,U+4DC0-4DFF,U+FFF9-FFFB,U+10140-1018E,U+10190-1019C,U+101A0,U+101D0-101FD,U+102E0-102FB,U+10E60-10E7E,U+1D2C0-1D2D3,U+1D2E0-1D37F,U+1F000-1F0FF,U+1F100-1F1AD,U+1F1E6-1F1FF,U+1F30D-1F30F,U+1F315,U+1F31C,U+1F31E,U+1F320-1F32C,U+1F336,U+1F378,U+1F37D,U+1F382,U+1F393-1F39F,U+1F3A7-1F3A8,U+1F3AC-1F3AF,U+1F3C2,U+1F3C4-1F3C6,U+1F3CA-1F3CE,U+1F3D4-1F3E0,U+1F3ED,U+1F3F1-1F3F3,U+1F3F5-1F3F7,U+1F408,U+1F415,U+1F41F,U+1F426,U+1F43F,U+1F441-1F442,U+1F444,U+1F446-1F449,U+1F44C-1F44E,U+1F453,U+1F46A,U+1F47D,U+1F4A3,U+1F4B0,U+1F4B3,U+1F4B9,U+1F4BB,U+1F4BF,U+1F4C8-1F4CB,U+1F4D6,U+1F4DA,U+1F4DF,U+1F4E3-1F4E6,U+1F4EA-1F4ED,U+1F4F7,U+1F4F9-1F4FB,U+1F4FD-1F4FE,U+1F503,U+1F507-1F50B,U+1F50D,U+1F512-1F513,U+1F53E-1F54A,U+1F54F-1F5FA,U+1F610,U+1F650-1F67F,U+1F687,U+1F68D,U+1F691,U+1F694,U+1F698,U+1F6AD,U+1F6B2,U+1F6B9-1F6BA,U+1F6BC,U+1F6C6-1F6CF,U+1F6D3-1F6D7,U+1F6E0-1F6EA,U+1F6F0-1F6F3,U+1F6F7-1F6FC,U+1F700-1F7FF,U+1F800-1F80B,U+1F810-1F847,U+1F850-1F859,U+1F860-1F887,U+1F890-1F8AD,U+1F8B0-1F8BB,U+1F8C0-1F8C1,U+1F900-1F90B,U+1F93B,U+1F946,U+1F984,U+1F996,U+1F9E9,U+1FA00-1FA6F,U+1FA70-1FA7C,U+1FA80-1FA89,U+1FA8F-1FAC6,U+1FACE-1FADC,U+1FADF-1FAE9,U+1FAF0-1FAF8,U+1FB00-1FBFF}@font-face{font-family:Roboto;font-style:normal;font-display:swap;font-weight:400;src:url(/assets/roboto-vietnamese-400-normal-CDDxGrUb.woff2) format("woff2"),url(/assets/roboto-vietnamese-400-normal-DmXaN3yE.woff) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Roboto;font-style:normal;font-display:swap;font-weight:400;src:url(/assets/roboto-latin-ext-400-normal-ZYmyxeOy.woff2) format("woff2"),url(/assets/roboto-latin-ext-400-normal-eTRLN0Nt.woff) format("woff");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Roboto;font-style:normal;font-display:swap;font-weight:400;src:url(/assets/roboto-latin-400-normal-CNwBRw8h.woff2) format("woff2"),url(/assets/roboto-latin-400-normal-068yxgMN.woff) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.dark-mode{background-color:#181a1b;color:#fff}\n/*$vite$:1*/',document.head.appendChild(cr);const mr=Symbol("solid-proxy"),Ar="function"==typeof Proxy,yr=Symbol("solid-track"),br={equals:(e,t)=>e===t};let xr=en;const Cr=1,kr=2,Tr={owned:null,cleanups:null,context:null,owner:null};var Sr=null;let Fr=null,Ur=null,Or=null,Er=null,Ir=0;function Br(e,t){const r=Ur,n=Sr,o=0===e.length,i=void 0===t?n:t,a=o?Tr:{owned:null,cleanups:null,context:i?i.context:null,owner:i},s=o?e:()=>e(()=>Lr(()=>on(a)));Sr=a,Ur=null;try{return Kr(s,!0)}finally{Ur=r,Sr=n}}function Nr(e,t){const r={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},br,t):br).equals||void 0};return[Jr.bind(r),e=>("function"==typeof e&&(e=e(r.value)),Xr(r,e))]}function Dr(e,t,r){Qr(qr(e,t,!1,Cr))}function Vr(e,t,r){xr=tn;const n=qr(e,t,!1,Cr);n.user=!0,Er?Er.push(n):Qr(n)}function zr(e,t,r){r=r?Object.assign({},br,r):br;const n=qr(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=r.equals||void 0,Qr(n),Jr.bind(n)}function Lr(e){if(null===Ur)return e();const t=Ur;Ur=null;try{return e()}finally{Ur=t}}function Pr(e,t,r){const n=Array.isArray(e);let o,i=r&&r.defer;return r=>{let a;if(n){a=Array(e.length);for(let t=0;t<e.length;t++)a[t]=e[t]()}else a=e();if(i)return i=!1,r;const s=Lr(()=>t(a,o,r));return o=a,s}}function Wr(e){Vr(()=>Lr(e))}function jr(e){return null===Sr||(null===Sr.cleanups?Sr.cleanups=[e]:Sr.cleanups.push(e)),e}function Mr(){return Sr}function Rr(e,t){const r=Sr,n=Ur;Sr=e,Ur=null;try{return Kr(t,!0)}catch(o){an(o)}finally{Sr=r,Ur=n}}const[Hr,$r]=Nr(!1);function Yr(e,t){const r=Symbol("context");return{id:r,Provider:cn(r),defaultValue:e}}function Gr(e){let t;return Sr&&Sr.context&&void 0!==(t=Sr.context[e.id])?t:e.defaultValue}function Zr(e){const t=zr(e),r=zr(()=>sn(t()));return r.toArray=()=>{const e=r();return Array.isArray(e)?e:null!=e?[e]:[]},r}function Jr(){if(this.sources&&this.state)if(this.state===Cr)Qr(this);else{const e=Or;Or=null,Kr(()=>rn(this),!1),Or=e}if(Ur){const e=this.observers?this.observers.length:0;Ur.sources?(Ur.sources.push(this),Ur.sourceSlots.push(e)):(Ur.sources=[this],Ur.sourceSlots=[e]),this.observers?(this.observers.push(Ur),this.observerSlots.push(Ur.sources.length-1)):(this.observers=[Ur],this.observerSlots=[Ur.sources.length-1])}return this.value}function Xr(e,t,r){let n=e.value;return e.comparator&&e.comparator(n,t)||(e.value=t,e.observers&&e.observers.length&&Kr(()=>{for(let t=0;t<e.observers.length;t+=1){const r=e.observers[t],n=Fr&&Fr.running;n&&Fr.disposed.has(r),(n?r.tState:r.state)||(r.pure?Or.push(r):Er.push(r),r.observers&&nn(r)),n||(r.state=Cr)}if(Or.length>1e6)throw Or=[],new Error},!1)),t}function Qr(e){if(!e.fn)return;on(e);const t=Ir;!function(e,t,r){let n;const o=Sr,i=Ur;Ur=Sr=e;try{n=e.fn(t)}catch(a){return e.pure&&(e.state=Cr,e.owned&&e.owned.forEach(on),e.owned=null),e.updatedAt=r+1,an(a)}finally{Ur=i,Sr=o}(!e.updatedAt||e.updatedAt<=r)&&(null!=e.updatedAt&&"observers"in e?Xr(e,n):e.value=n,e.updatedAt=r)}(e,e.value,t)}function qr(e,t,r,n=Cr,o){const i={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Sr,context:Sr?Sr.context:null,pure:r};return null===Sr||Sr!==Tr&&(Sr.owned?Sr.owned.push(i):Sr.owned=[i]),i}function _r(e){if(0===e.state)return;if(e.state===kr)return rn(e);if(e.suspense&&Lr(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ir);)e.state&&t.push(e);for(let r=t.length-1;r>=0;r--)if((e=t[r]).state===Cr)Qr(e);else if(e.state===kr){const r=Or;Or=null,Kr(()=>rn(e,t[0]),!1),Or=r}}function Kr(e,t){if(Or)return e();let r=!1;t||(Or=[]),Er?r=!0:Er=[],Ir++;try{const t=e();return function(e){Or&&(en(Or),Or=null);if(e)return;const t=Er;Er=null,t.length&&Kr(()=>xr(t),!1)}(r),t}catch(n){r||(Er=null),Or=null,an(n)}}function en(e){for(let t=0;t<e.length;t++)_r(e[t])}function tn(e){let t,r=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[r++]=n:_r(n)}for(t=0;t<r;t++)_r(e[t])}function rn(e,t){e.state=0;for(let r=0;r<e.sources.length;r+=1){const n=e.sources[r];if(n.sources){const e=n.state;e===Cr?n!==t&&(!n.updatedAt||n.updatedAt<Ir)&&_r(n):e===kr&&rn(n,t)}}}function nn(e){for(let t=0;t<e.observers.length;t+=1){const r=e.observers[t];r.state||(r.state=kr,r.pure?Or.push(r):Er.push(r),r.observers&&nn(r))}}function on(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),r=e.sourceSlots.pop(),n=t.observers;if(n&&n.length){const e=n.pop(),o=t.observerSlots.pop();r<n.length&&(e.sourceSlots[o]=r,n[r]=e,t.observerSlots[r]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)on(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)on(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function an(e,t=Sr){const r=function(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}(e);throw r}function sn(e){if("function"==typeof e&&!e.length)return sn(e());if(Array.isArray(e)){const t=[];for(let r=0;r<e.length;r++){const n=sn(e[r]);Array.isArray(n)?t.push.apply(t,n):t.push(n)}return t}return e}function cn(e,t){return function(t){let r;return Dr(()=>r=Lr(()=>(Sr.context=vr(vr({},Sr.context),{},{[e]:t.value}),Zr(()=>t.children))),void 0),r}}const ln=Symbol("fallback");function un(e){for(let t=0;t<e.length;t++)e[t]()}function dn(e,t){return Lr(()=>e(t||{}))}function fn(){return!0}const pn={get:(e,t,r)=>t===mr?r:e.get(t),has:(e,t)=>t===mr||e.has(t),set:fn,deleteProperty:fn,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:fn,deleteProperty:fn}),ownKeys:e=>e.keys()};function gn(e){return(e="function"==typeof e?e():e)?e:{}}function hn(){for(let e=0,t=this.length;e<t;++e){const t=this[e]();if(void 0!==t)return t}}function mn(...e){let t=!1;for(let a=0;a<e.length;a++){const r=e[a];t=t||!!r&&mr in r,e[a]="function"==typeof r?(t=!0,zr(r)):r}if(Ar&&t)return new Proxy({get(t){for(let r=e.length-1;r>=0;r--){const n=gn(e[r])[t];if(void 0!==n)return n}},has(t){for(let r=e.length-1;r>=0;r--)if(t in gn(e[r]))return!0;return!1},keys(){const t=[];for(let r=0;r<e.length;r++)t.push(...Object.keys(gn(e[r])));return[...new Set(t)]}},pn);const r={},n=Object.create(null);for(let a=e.length-1;a>=0;a--){const t=e[a];if(!t)continue;const o=Object.getOwnPropertyNames(t);for(let e=o.length-1;e>=0;e--){const i=o[e];if("__proto__"===i||"constructor"===i)continue;const a=Object.getOwnPropertyDescriptor(t,i);if(n[i]){const e=r[i];e&&(a.get?e.push(a.get.bind(t)):void 0!==a.value&&e.push(()=>a.value))}else n[i]=a.get?{enumerable:!0,configurable:!0,get:hn.bind(r[i]=[a.get.bind(t)])}:void 0!==a.value?a:void 0}}const o={},i=Object.keys(n);for(let a=i.length-1;a>=0;a--){const e=i[a],t=n[e];t&&t.get?Object.defineProperty(o,e,t):o[e]=t?t.value:void 0}return o}function vn(e,...t){const r=t.length;if(Ar&&mr in e){const n=r>1?t.flat():t[0],o=t.map(t=>new Proxy({get:r=>t.includes(r)?e[r]:void 0,has:r=>t.includes(r)&&r in e,keys:()=>t.filter(t=>t in e)},pn));return o.push(new Proxy({get:t=>n.includes(t)?void 0:e[t],has:t=>!n.includes(t)&&t in e,keys:()=>Object.keys(e).filter(e=>!n.includes(e))},pn)),o}const n=[];for(let o=0;o<=r;o++)n[o]={};for(const o of Object.getOwnPropertyNames(e)){let i=r;for(let e=0;e<t.length;e++)if(t[e].includes(o)){i=e;break}const a=Object.getOwnPropertyDescriptor(e,o);!a.get&&!a.set&&a.enumerable&&a.writable&&a.configurable?n[i][o]=a.value:Object.defineProperty(n[i],o,a)}return n}function wn(e){const t="fallback"in e&&{fallback:()=>e.fallback};return zr(function(e,t,r={}){let n=[],o=[],i=[],a=0,s=t.length>1?[]:null;return jr(()=>un(i)),()=>{let c,l,u=e()||[],d=u.length;return u[yr],Lr(()=>{let e,t,p,g,h,m,v,w,A;if(0===d)0!==a&&(un(i),i=[],n=[],o=[],a=0,s&&(s=[])),r.fallback&&(n=[ln],o[0]=Br(e=>(i[0]=e,r.fallback())),a=1);else if(0===a){for(o=new Array(d),l=0;l<d;l++)n[l]=u[l],o[l]=Br(f);a=d}else{for(p=new Array(d),g=new Array(d),s&&(h=new Array(d)),m=0,v=Math.min(a,d);m<v&&n[m]===u[m];m++);for(v=a-1,w=d-1;v>=m&&w>=m&&n[v]===u[w];v--,w--)p[w]=o[v],g[w]=i[v],s&&(h[w]=s[v]);for(e=new Map,t=new Array(w+1),l=w;l>=m;l--)A=u[l],c=e.get(A),t[l]=void 0===c?-1:c,e.set(A,l);for(c=m;c<=v;c++)A=n[c],l=e.get(A),void 0!==l&&-1!==l?(p[l]=o[c],g[l]=i[c],s&&(h[l]=s[c]),l=t[l],e.set(A,l)):i[c]();for(l=m;l<d;l++)l in p?(o[l]=p[l],i[l]=g[l],s&&(s[l]=h[l],s[l](l))):o[l]=Br(f);o=o.slice(0,a=d),n=u.slice(0)}return o});function f(e){if(i[l]=e,s){const[e,r]=Nr(l);return s[l]=r,t(u[l],e)}return t(u[l])}}}(()=>e.each,e.children,t||void 0))}function An(e){const t=e.keyed,r=zr(()=>e.when,void 0,void 0),n=t?r:zr(r,void 0,{equals:(e,t)=>!e==!t});return zr(()=>{const o=n();if(o){const i=e.children;return"function"==typeof i&&i.length>0?Lr(()=>i(t?o:()=>{if(!Lr(n))throw`Stale read from <${"Show"}>.`;return r()})):i}return e.fallback},void 0,void 0)}const yn=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable","allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"]),bn=new Set(["innerHTML","textContent","innerText","children"]),xn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Cn=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});const kn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Tn=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Sn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Fn=e=>zr(()=>e());const Un="_$DX_DELEGATE";function On(e,t,r,n){let o;const i=()=>(o||(o=(()=>{const t=document.createElement("template");return t.innerHTML=e,t.content.firstChild})())).cloneNode(!0);return i.cloneNode=i,i}function En(e,t=window.document){const r=t[Un]||(t[Un]=new Set);for(let n=0,o=e.length;n<o;n++){const o=e[n];r.has(o)||(r.add(o),t.addEventListener(o,zn))}}function In(e,t,r){null==r?e.removeAttribute(t):e.setAttribute(t,r)}function Bn(e,t={},r,n){const o={};return n||Dr(()=>o.children=Ln(e,t.children,o.children)),Dr(()=>{return"function"==typeof t.ref&&(r=t.ref,n=e,Lr(()=>r(n,o)));var r,n,o}),Dr(()=>function(e,t,r,n,o={},i=!1){t||(t={});for(const a in o)if(!(a in t)){if("children"===a)continue;o[a]=Vn(e,a,null,o[a],r,i,t)}for(const a in t){if("children"===a)continue;const n=t[a];o[a]=Vn(e,a,n,o[a],r,i,t)}}(e,t,r,0,o,!0)),o}function Nn(e,t,r,n){if(void 0===r||n||(n=[]),"function"!=typeof t)return Ln(e,t,n,r);Dr(n=>Ln(e,t(),n,r),n)}function Dn(e,t,r){const n=t.trim().split(/\s+/);for(let o=0,i=n.length;o<i;o++)e.classList.toggle(n[o],r)}function Vn(e,t,r,n,o,i,a){let s,c,l,u,d;if("style"===t)return function(e,t,r){if(!t)return r?In(e,"style"):t;const n=e.style;if("string"==typeof t)return n.cssText=t;let o,i;for(i in"string"==typeof r&&(n.cssText=r=void 0),r||(r={}),t||(t={}),r)null==t[i]&&n.removeProperty(i),delete r[i];for(i in t)o=t[i],o!==r[i]&&(n.setProperty(i,o),r[i]=o);return r}(e,r,n);if("classList"===t)return function(e,t,r={}){const n=Object.keys(t||{}),o=Object.keys(r);let i,a;for(i=0,a=o.length;i<a;i++){const n=o[i];n&&"undefined"!==n&&!t[n]&&(Dn(e,n,!1),delete r[n])}for(i=0,a=n.length;i<a;i++){const o=n[i],a=!!t[o];o&&"undefined"!==o&&r[o]!==a&&a&&(Dn(e,o,!0),r[o]=a)}return r}(e,r,n);if(r===n)return n;if("ref"===t)i||r(e);else if("on:"===t.slice(0,3)){const o=t.slice(3);n&&e.removeEventListener(o,n,"function"!=typeof n&&n),r&&e.addEventListener(o,r,"function"!=typeof r&&r)}else if("oncapture:"===t.slice(0,10)){const o=t.slice(10);n&&e.removeEventListener(o,n,!0),r&&e.addEventListener(o,r,!0)}else if("on"===t.slice(0,2)){const o=t.slice(2).toLowerCase(),i=kn.has(o);if(!i&&n){const t=Array.isArray(n)?n[0]:n;e.removeEventListener(o,t)}(i||r)&&(!function(e,t,r,n){if(n)Array.isArray(r)?(e[`$$${t}`]=r[0],e[`$$${t}Data`]=r[1]):e[`$$${t}`]=r;else if(Array.isArray(r)){const n=r[0];e.addEventListener(t,r[0]=t=>n.call(e,r[1],t))}else e.addEventListener(t,r,"function"!=typeof r&&r)}(e,o,r,i),i&&En([o]))}else if("attr:"===t.slice(0,5))In(e,t.slice(5),r);else if("bool:"===t.slice(0,5))!function(e,t,r){r?e.setAttribute(t,""):e.removeAttribute(t)}(e,t.slice(5),r);else if((d="prop:"===t.slice(0,5))||(l=bn.has(t))||!o&&((u=function(e,t){const r=Cn[e];return"object"==typeof r?r[t]?r.$:void 0:r}(t,e.tagName))||(c=yn.has(t)))||(s=e.nodeName.includes("-")||"is"in a))d&&(t=t.slice(5),c=!0),"class"===t||"className"===t?function(e,t){null==t?e.removeAttribute("class"):e.className=t}(e,r):!s||c||l?e[u||t]=r:e[(f=t,f.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase()))]=r;else{const n=o&&t.indexOf(":")>-1&&Sn[t.split(":")[0]];n?function(e,t,r,n){null==n?e.removeAttributeNS(t,r):e.setAttributeNS(t,r,n)}(e,n,t,r):In(e,xn[t]||t,r)}var f;return r}function zn(e){let t=e.target;const r=`$$${e.type}`,n=e.target,o=e.currentTarget,i=t=>Object.defineProperty(e,"target",{configurable:!0,value:t}),a=()=>{const n=t[r];if(n&&!t.disabled){const o=t[`${r}Data`];if(void 0!==o?n.call(t,o,e):n.call(t,e),e.cancelBubble)return}return t.host&&"string"!=typeof t.host&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},s=()=>{for(;a()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>t||document}),e.composedPath){const r=e.composedPath();i(r[0]);for(let e=0;e<r.length-2&&(t=r[e],a());e++){if(t._$host){t=t._$host,s();break}if(t.parentNode===o)break}}else s();i(n)}function Ln(e,t,r,n,o){for(;"function"==typeof r;)r=r();if(t===r)return r;const i=typeof t,a=void 0!==n;if(e=a&&r[0]&&r[0].parentNode||e,"string"===i||"number"===i){if("number"===i&&(t=t.toString())===r)return r;if(a){let o=r[0];o&&3===o.nodeType?o.data!==t&&(o.data=t):o=document.createTextNode(t),r=jn(e,r,n,o)}else r=""!==r&&"string"==typeof r?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===i)r=jn(e,r,n);else{if("function"===i)return Dr(()=>{let o=t();for(;"function"==typeof o;)o=o();r=Ln(e,o,r,n)}),()=>r;if(Array.isArray(t)){const i=[],s=r&&Array.isArray(r);if(Pn(i,t,r,o))return Dr(()=>r=Ln(e,i,r,n,!0)),()=>r;if(0===i.length){if(r=jn(e,r,n),a)return r}else s?0===r.length?Wn(e,i,n):function(e,t,r){let n=r.length,o=t.length,i=n,a=0,s=0,c=t[o-1].nextSibling,l=null;for(;a<o||s<i;)if(t[a]!==r[s]){for(;t[o-1]===r[i-1];)o--,i--;if(o===a){const t=i<n?s?r[s-1].nextSibling:r[i-s]:c;for(;s<i;)e.insertBefore(r[s++],t)}else if(i===s)for(;a<o;)l&&l.has(t[a])||t[a].remove(),a++;else if(t[a]===r[i-1]&&r[s]===t[o-1]){const n=t[--o].nextSibling;e.insertBefore(r[s++],t[a++].nextSibling),e.insertBefore(r[--i],n),t[o]=r[i]}else{if(!l){l=new Map;let e=s;for(;e<i;)l.set(r[e],e++)}const n=l.get(t[a]);if(null!=n)if(s<n&&n<i){let c,u=a,d=1;for(;++u<o&&u<i&&null!=(c=l.get(t[u]))&&c===n+d;)d++;if(d>n-s){const o=t[a];for(;s<n;)e.insertBefore(r[s++],o)}else e.replaceChild(r[s++],t[a++])}else a++;else t[a++].remove()}}else a++,s++}(e,r,i):(r&&jn(e),Wn(e,i));r=i}else if(t.nodeType){if(Array.isArray(r)){if(a)return r=jn(e,r,n,t);jn(e,r,null,t)}else null!=r&&""!==r&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);r=t}}return r}function Pn(e,t,r,n){let o=!1;for(let i=0,a=t.length;i<a;i++){let a,s=t[i],c=r&&r[e.length];if(null==s||!0===s||!1===s);else if("object"==(a=typeof s)&&s.nodeType)e.push(s);else if(Array.isArray(s))o=Pn(e,s,c)||o;else if("function"===a)if(n){for(;"function"==typeof s;)s=s();o=Pn(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||o}else e.push(s),o=!0;else{const t=String(s);c&&3===c.nodeType&&c.data===t?e.push(c):e.push(document.createTextNode(t))}}return o}function Wn(e,t,r=null){for(let n=0,o=t.length;n<o;n++)e.insertBefore(t[n],r)}function jn(e,t,r,n){if(void 0===r)return e.textContent="";const o=n||document.createTextNode("");if(t.length){let n=!1;for(let i=t.length-1;i>=0;i--){const a=t[i];if(o!==a){const t=a.parentNode===e;n||i?t&&a.remove():t?e.replaceChild(o,a):e.insertBefore(o,r)}else n=!0}}else e.insertBefore(o,r);return[o]}const Mn=!1;function Rn(e,t){const r=zr(e);return zr(()=>{const e=r();switch(typeof e){case"function":return Lr(()=>e(t));case"string":const r=Tn.has(e),n=function(e,t=!1,r){return t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e,{is:r})}(e,r,Lr(()=>t.is));return Bn(n,t,r),n}})}var Hn=(e=>(e[e.HEIZUNG_ENA=32]="HEIZUNG_ENA",e[e.ENABLE_AUTOBLESHUTDOWN=512]="ENABLE_AUTOBLESHUTDOWN",e[e.PUMPE_FET_ENABLE=8192]="PUMPE_FET_ENABLE",e[e.FAHRENHEIT_ENA=512]="FAHRENHEIT_ENA",e[e.DISPLAY_ON_COOLING=4096]="DISPLAY_ON_COOLING",e[e.VIBRATION=1024]="VIBRATION",e))(Hn||{}),$n=(e=>(e.display="1010000d-5354-4f52-5a26-4249434b454c",e.targetTemperature="10110003-5354-4f52-5a26-4249434b454c",e.currentTemperature="10110001-5354-4f52-5a26-4249434b454c",e.heaterOn="1011000f-5354-4f52-5a26-4249434b454c",e.heaterOff="10110010-5354-4f52-5a26-4249434b454c",e.pumpOff="10110014-5354-4f52-5a26-4249434b454c",e.pumpOn="10110013-5354-4f52-5a26-4249434b454c",e.serialNumber="10100008-5354-4f52-5a26-4249434b454c",e.firmwareVersion="10100003-5354-4f52-5a26-4249434b454c",e.firmwareBLEVersion="10100004-5354-4f52-5a26-4249434b454c",e.currentAutoOffValue="1011000c-5354-4f52-5a26-4249434b454c",e.hoursOfHeating="10110015-5354-4f52-5a26-4249434b454c",e.minutesOfHeating="10110016-5354-4f52-5a26-4249434b454c",e.activity="1010000c-5354-4f52-5a26-4249434b454c",e.vibration="1010000e-5354-4f52-5a26-4249434b454c",e.shutoffTime="1011000d-5354-4f52-5a26-4249434b454c",e.brightness="10110005-5354-4f52-5a26-4249434b454c",e))($n||{}),Yn=(e=>(e.control="00000001-5354-4f52-5a26-4249434b454c",e.deviceName="00002a00-0000-1000-8000-00805f9b34fb",e))(Yn||{}),Gn=(e=>(e.writeTemp="00000021-4c45-4b43-4942-265a524f5453",e.currTemperatureChanged="00000011-4c45-4b43-4942-265a524f5453",e.writeBoostTemp="00000031-4c45-4b43-4942-265a524f5453",e.firmwareVersion="00000032-4c45-4b43-4942-265a524f5453",e.firmwareBLEVersion="00000072-4c45-4b43-4942-265a524f5453",e.statusRegister2="000001c3-4c45-4b43-4942-265a524f5453",e.useHoursCharacteristic="00000023-4c45-4b43-4942-265a524f5453",e.useMinutesCharacteristic="000001e3-4c45-4b43-4942-265a524f5453",e.ledBrightness="00000051-4c45-4b43-4942-265a524f5453",e.autoOffCountdown="00000061-4c45-4b43-4942-265a524f5453",e.autoOffCurrentValue="00000071-4c45-4b43-4942-265a524f5453",e.powerChanged="00000041-4c45-4b43-4942-265a524f5453",e.heaterOn="00000081-4c45-4b43-4942-265a524f5453",e.heaterOff="00000091-4c45-4b43-4942-265a524f5453",e.handleProjectRegister="00000093-4c45-4b43-4942-265a524f5453",e.sicherheitscode="000001b3-4c45-4b43-4942-265a524f5453",e.systemStatusCharacteristic="00000083-4c45-4b43-4942-265a524f5453",e.akkuStatusCharacteristic="00000063-4c45-4b43-4942-265a524f5453",e.akkuStatusCharacteristic2="00000073-4c45-4b43-4942-265a524f5453",e.factoryResetCharacteristic="000001d3-4c45-4b43-4942-265a524f5453",e))(Gn||{});const Zn="10100000-5354-4f52-5a26-4249434b454c",Jn="10110000-5354-4f52-5a26-4249434b454c",Xn="00000000-5354-4f52-5a26-4249434b454c",Qn="00001800-0000-1000-8000-00805f9b34fb",qn="00000001-4c45-4b43-4942-265a524f5453",_n="00000002-4c45-4b43-4942-265a524f5453",Kn="00000003-4c45-4b43-4942-265a524f5453";vr(vr(vr({},$n),Yn),Gn);var eo=(e=>(e.NOT_CONNECTED="NOT_CONNECTED",e.CONNECTING="CONNECTING",e.CONNECTED="CONNECTED",e.CONNECTION_FAILED="CONNECTION_FAILED",e))(eo||{}),to=(e=>(e.VOLCANO="VOLCANO",e.VEAZY="VEAZY",e.VENTY="VENTY",e.UNKNOWN="UNKNOWN",e.CRAFTY="CRAFTY",e))(to||{});function ro(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var no,oo={exports:{}};var io=(no||(no=1,function(e){var t=Object.prototype.hasOwnProperty,r="~";function n(){}function o(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function i(e,t,n,i,a){if("function"!=typeof n)throw new TypeError("The listener must be a function");var s=new o(n,i||e,a),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function a(e,t){0===--e._eventsCount?e._events=new n:delete e._events[t]}function s(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),s.prototype.eventNames=function(){var e,n,o=[];if(0===this._eventsCount)return o;for(n in e=this._events)t.call(e,n)&&o.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},s.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var o=0,i=n.length,a=new Array(i);o<i;o++)a[o]=n[o].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,o,i,a){var s=r?r+e:e;if(!this._events[s])return!1;var c,l,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,o),!0;case 5:return u.fn.call(u.context,t,n,o,i),!0;case 6:return u.fn.call(u.context,t,n,o,i,a),!0}for(l=1,c=new Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var f,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,n);break;case 4:u[l].fn.call(u[l].context,t,n,o);break;default:if(!c)for(f=1,c=new Array(d-1);f<d;f++)c[f-1]=arguments[f];u[l].fn.apply(u[l].context,c)}}return!0},s.prototype.on=function(e,t,r){return i(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return i(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,n,o){var i=r?r+e:e;if(!this._events[i])return this;if(!t)return a(this,i),this;var s=this._events[i];if(s.fn)s.fn!==t||o&&!s.once||n&&s.context!==n||a(this,i);else{for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==t||o&&!s[c].once||n&&s[c].context!==n)&&l.push(s[c]);l.length?this._events[i]=1===l.length?l[0]:l:a(this,i)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s}(oo)),oo.exports);const ao=ro(io);class so extends Error{constructor(e,t){var r;super(e,t),wr(this,"name","TimeoutError"),null===(r=Error.captureStackTrace)||void 0===r||r.call(Error,this,so)}}const co=e=>{var t;return null!==(t=e.reason)&&void 0!==t?t:new DOMException("This operation was aborted.","AbortError")};var lo=new WeakMap;class uo{constructor(){fr(this,lo,[])}enqueue(e,t){const{priority:r=0,id:n}=null!=t?t:{},o={priority:r,id:n,run:e};if(0===this.size||gr(lo,this)[this.size-1].priority>=r)return void gr(lo,this).push(o);const i=function(e,t,r){let n=0,o=e.length;for(;o>0;){const i=Math.trunc(o/2);let a=n+i;r(e[a],t)<=0?(n=++a,o-=i+1):o=i}return n}(gr(lo,this),o,(e,t)=>t.priority-e.priority);gr(lo,this).splice(i,0,o)}setPriority(e,t){const r=gr(lo,this).findIndex(t=>t.id===e);if(-1===r)throw new ReferenceError(`No promise function with the id "${e}" exists in the queue.`);const[n]=gr(lo,this).splice(r,1);this.enqueue(n.run,{priority:t,id:e})}dequeue(){const e=gr(lo,this).shift();return null==e?void 0:e.run}filter(e){return gr(lo,this).filter(t=>t.priority===e.priority).map(e=>e.run)}get size(){return gr(lo,this).length}}var fo=new WeakMap,po=new WeakMap,go=new WeakMap,ho=new WeakMap,mo=new WeakMap,vo=new WeakMap,wo=new WeakMap,Ao=new WeakMap,yo=new WeakMap,bo=new WeakMap,xo=new WeakMap,Co=new WeakMap,ko=new WeakMap,To=new WeakMap,So=new WeakMap,Fo=new WeakMap,Uo=new WeakMap,Oo=new WeakMap,Eo=new WeakMap,Io=new WeakMap,Bo=new WeakMap,No=new WeakSet;function Do(e){for(;gr(To,this)<gr(ko,this).length;){const r=gr(ko,this)[gr(To,this)];if(!(void 0!==r&&e-r>=gr(wo,this)))break;var t;dr(To,this,(t=gr(To,this),t++,t))}(gr(To,this)>100&&gr(To,this)>gr(ko,this).length/2||gr(To,this)===gr(ko,this).length)&&(dr(ko,this,gr(ko,this).slice(gr(To,this))),dr(To,this,0))}function Vo(e){var t;gr(Co,this)?gr(ko,this).push(e):dr(go,this,(t=gr(go,this),t++,t))}function zo(){if(gr(Co,this))gr(ko,this).length>gr(To,this)&&gr(ko,this).pop();else if(gr(go,this)>0){var e;dr(go,this,(e=gr(go,this),e--,e))}}function Lo(){return gr(ko,this).length-gr(To,this)}function Po(e){return!!gr(po,e)||(gr(Co,e)?hr(No,e,Lo).call(e)<gr(ho,e):gr(go,e)<gr(ho,e))}function Wo(e){return gr(Uo,e)<gr(Oo,e)}function jo(){var e;dr(Uo,this,(e=gr(Uo,this),e--,e)),0===gr(Uo,this)&&this.emit("pendingZero"),hr(No,this,Go).call(this),this.emit("next")}function Mo(){dr(xo,this,void 0),hr(No,this,Jo).call(this),hr(No,this,Zo).call(this)}function Ro(e){if(gr(Co,this)){hr(No,this,Do).call(this,e);if(hr(No,this,Lo).call(this)>=gr(ho,this)){const t=gr(ko,this)[gr(To,this)],r=gr(wo,this)-(e-t);return hr(No,this,Ho).call(this,r),!0}return!1}if(void 0===gr(bo,this)){const t=gr(Ao,this)-e;if(!(t<0))return hr(No,this,Ho).call(this,t),!0;if(gr(yo,this)>0){const t=e-gr(yo,this);if(t<gr(wo,this))return hr(No,this,Ho).call(this,gr(wo,this)-t),!0}dr(go,this,gr(fo,this)?gr(Uo,this):0)}return!1}function Ho(e){void 0===gr(xo,this)&&dr(xo,this,setTimeout(()=>{hr(No,this,Mo).call(this)},e))}function $o(){gr(bo,this)&&(clearInterval(gr(bo,this)),dr(bo,this,void 0))}function Yo(){gr(xo,this)&&(clearTimeout(gr(xo,this)),dr(xo,this,void 0))}function Go(){if(0===gr(So,this).size){if(hr(No,this,$o).call(this),this.emit("empty"),0===gr(Uo,this)){if(hr(No,this,Yo).call(this),gr(Co,this)&&gr(To,this)>0){const e=Date.now();hr(No,this,Do).call(this,e)}this.emit("idle")}return!1}let e=!1;if(!gr(Eo,this)){const t=Date.now(),r=!hr(No,this,Ro).call(this,t);if(ur(No,this,Po)&&ur(No,this,Wo)){const n=gr(So,this).dequeue();gr(po,this)||(hr(No,this,Vo).call(this,t),hr(No,this,Ko).call(this)),this.emit("active"),n(),r&&hr(No,this,Zo).call(this),e=!0}}return e}function Zo(){gr(po,this)||void 0!==gr(bo,this)||gr(Co,this)||(dr(bo,this,setInterval(()=>{hr(No,this,Jo).call(this)},gr(wo,this))),dr(Ao,this,Date.now()+gr(wo,this)))}function Jo(){gr(Co,this)||(0===gr(go,this)&&0===gr(Uo,this)&&gr(bo,this)&&hr(No,this,$o).call(this),dr(go,this,gr(fo,this)?gr(Uo,this):0)),hr(No,this,Xo).call(this),hr(No,this,Ko).call(this)}function Xo(){for(;hr(No,this,Go).call(this););}function Qo(e,t){return qo.apply(this,arguments)}function qo(){return(qo=lr(function*(e,t){return new Promise(r=>{const n=()=>{t&&!t()||(this.off(e,n),r())};this.on(e,n)})})).apply(this,arguments)}function _o(){gr(po,this)||(this.on("add",()=>{gr(So,this).size>0&&hr(No,this,Ko).call(this)}),this.on("next",()=>{hr(No,this,Ko).call(this)}))}function Ko(){gr(po,this)||gr(vo,this)||(dr(vo,this,!0),queueMicrotask(()=>{dr(vo,this,!1),hr(No,this,ti).call(this)}))}function ei(){gr(po,this)||(hr(No,this,zo).call(this),hr(No,this,Ko).call(this))}function ti(){const e=gr(mo,this);if(gr(po,this)||0===gr(So,this).size)return void(e&&(dr(mo,this,!1),this.emit("rateLimitCleared")));let t;if(gr(Co,this)){const e=Date.now();hr(No,this,Do).call(this,e),t=hr(No,this,Lo).call(this)}else t=gr(go,this);const r=t>=gr(ho,this);r!==e&&(dr(mo,this,r),this.emit(r?"rateLimit":"rateLimitCleared"))}const ri=new class extends ao{constructor(e){var t,r,n,o,i,a;if(super(),function(e,t){pr(e,t),t.add(e)}(this,No),fr(this,fo,void 0),fr(this,po,void 0),fr(this,go,0),fr(this,ho,void 0),fr(this,mo,!1),fr(this,vo,!1),fr(this,wo,void 0),fr(this,Ao,0),fr(this,yo,0),fr(this,bo,void 0),fr(this,xo,void 0),fr(this,Co,void 0),fr(this,ko,[]),fr(this,To,0),fr(this,So,void 0),fr(this,Fo,void 0),fr(this,Uo,0),fr(this,Oo,void 0),fr(this,Eo,void 0),fr(this,Io,1n),fr(this,Bo,new Map),wr(this,"timeout",void 0),!("number"==typeof(e=vr({carryoverIntervalCount:!1,intervalCap:Number.POSITIVE_INFINITY,interval:0,concurrency:Number.POSITIVE_INFINITY,autoStart:!0,queueClass:uo,strict:!1},e)).intervalCap&&e.intervalCap>=1))throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${null!==(n=null===(o=e.intervalCap)||void 0===o?void 0:o.toString())&&void 0!==n?n:""}\` (${typeof e.intervalCap})`);if(void 0===e.interval||!(Number.isFinite(e.interval)&&e.interval>=0))throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${null!==(i=null===(a=e.interval)||void 0===a?void 0:a.toString())&&void 0!==i?i:""}\` (${typeof e.interval})`);if(e.strict&&0===e.interval)throw new TypeError("The `strict` option requires a non-zero `interval`");if(e.strict&&e.intervalCap===Number.POSITIVE_INFINITY)throw new TypeError("The `strict` option requires a finite `intervalCap`");if(dr(fo,this,null!==(t=null!==(r=e.carryoverIntervalCount)&&void 0!==r?r:e.carryoverConcurrencyCount)&&void 0!==t&&t),dr(po,this,e.intervalCap===Number.POSITIVE_INFINITY||0===e.interval),dr(ho,this,e.intervalCap),dr(wo,this,e.interval),dr(Co,this,e.strict),dr(So,this,new e.queueClass),dr(Fo,this,e.queueClass),this.concurrency=e.concurrency,void 0!==e.timeout&&!(Number.isFinite(e.timeout)&&e.timeout>0))throw new TypeError(`Expected \`timeout\` to be a positive finite number, got \`${e.timeout}\` (${typeof e.timeout})`);this.timeout=e.timeout,dr(Eo,this,!1===e.autoStart),hr(No,this,_o).call(this)}get concurrency(){return gr(Oo,this)}set concurrency(e){if(!("number"==typeof e&&e>=1))throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);dr(Oo,this,e),hr(No,this,Xo).call(this)}setPriority(e,t){if("number"!=typeof t||!Number.isFinite(t))throw new TypeError(`Expected \`priority\` to be a finite number, got \`${t}\` (${typeof t})`);gr(So,this).setPriority(e,t)}add(e){return lr(function*(e,t={}){var r,n,o,i=this;return t=vr(vr({timeout:i.timeout},t),{},{id:null!==(r=t.id)&&void 0!==r?r:(dr(Io,i,(n=gr(Io,i),o=n++,n)),o).toString()}),new Promise((r,n)=>{const o=Symbol(`task-${t.id}`);gr(So,i).enqueue(lr(function*(){var a,s;let c;dr(Uo,i,(a=gr(Uo,i),a++,a)),gr(Bo,i).set(o,{id:t.id,priority:null!==(s=t.priority)&&void 0!==s?s:0,startTime:Date.now(),timeout:t.timeout});try{try{var l;null===(l=t.signal)||void 0===l||l.throwIfAborted()}catch(d){throw hr(No,i,ei).call(i),gr(Bo,i).delete(o),d}dr(yo,i,Date.now());let n=e({signal:t.signal});if(t.timeout&&(n=function(e,t){const{milliseconds:r,fallback:n,message:o,customTimers:i={setTimeout:setTimeout,clearTimeout:clearTimeout},signal:a}=t;let s,c;const l=new Promise((t,l)=>{if("number"!=typeof r||1!==Math.sign(r))throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${r}\``);if(null!=a&&a.aborted)return void l(co(a));if(a&&(c=()=>{l(co(a))},a.addEventListener("abort",c,{once:!0})),e.then(t,l),r===Number.POSITIVE_INFINITY)return;const u=new so;s=i.setTimeout.call(void 0,()=>{if(n)try{t(n())}catch(d){l(d)}else"function"==typeof e.cancel&&e.cancel(),!1===o?t():o instanceof Error?l(o):(u.message=null!=o?o:`Promise timed out after ${r} milliseconds`,l(u))},r)}).finally(()=>{l.clear(),c&&a&&a.removeEventListener("abort",c)});return l.clear=()=>{i.clearTimeout.call(void 0,s),s=void 0},l}(Promise.resolve(n),{milliseconds:t.timeout,message:`Task timed out after ${t.timeout}ms (queue has ${gr(Uo,i)} running, ${gr(So,i).size} waiting)`})),t.signal){const{signal:e}=t;n=Promise.race([n,new Promise((t,r)=>{c=()=>{r(e.reason)},e.addEventListener("abort",c,{once:!0})})])}const a=yield n;r(a),i.emit("completed",a)}catch(d){n(d),i.emit("error",d)}finally{var u;if(c)null===(u=t.signal)||void 0===u||u.removeEventListener("abort",c);gr(Bo,i).delete(o),queueMicrotask(()=>{hr(No,i,jo).call(i)})}}),t),i.emit("add"),hr(No,i,Go).call(i)})}).apply(this,arguments)}addAll(e,t){var r=this;return lr(function*(){return Promise.all(e.map(function(){var e=lr(function*(e){return r.add(e,t)});return function(t){return e.apply(this,arguments)}}()))})()}start(){return gr(Eo,this)?(dr(Eo,this,!1),hr(No,this,Xo).call(this),this):this}pause(){dr(Eo,this,!0)}clear(){dr(So,this,new(gr(Fo,this))),hr(No,this,$o).call(this),hr(No,this,ti).call(this),this.emit("empty"),0===gr(Uo,this)&&(hr(No,this,Yo).call(this),this.emit("idle")),this.emit("next")}onEmpty(){var e=this;return lr(function*(){0!==gr(So,e).size&&(yield hr(No,e,Qo).call(e,"empty"))})()}onSizeLessThan(e){var t=this;return lr(function*(){gr(So,t).size<e||(yield hr(No,t,Qo).call(t,"next",()=>gr(So,t).size<e))})()}onIdle(){var e=this;return lr(function*(){0===gr(Uo,e)&&0===gr(So,e).size||(yield hr(No,e,Qo).call(e,"idle"))})()}onPendingZero(){var e=this;return lr(function*(){0!==gr(Uo,e)&&(yield hr(No,e,Qo).call(e,"pendingZero"))})()}onRateLimit(){var e=this;return lr(function*(){e.isRateLimited||(yield hr(No,e,Qo).call(e,"rateLimit"))})()}onRateLimitCleared(){var e=this;return lr(function*(){e.isRateLimited&&(yield hr(No,e,Qo).call(e,"rateLimitCleared"))})()}onError(){return new Promise((e,t)=>{const r=e=>{this.off("error",r),t(e)};this.on("error",r)})}get size(){return gr(So,this).size}sizeBy(e){return gr(So,this).filter(e).length}get pending(){return gr(Uo,this)}get isPaused(){return gr(Eo,this)}get isRateLimited(){return gr(mo,this)}get isSaturated(){return gr(Uo,this)===gr(Oo,this)&&gr(So,this).size>0||this.isRateLimited&&gr(So,this).size>0}get runningTasks(){return[...gr(Bo,this).values()].map(e=>vr({},e))}}({concurrency:1}),ni=Yr(),oi=()=>{const[e,t]=Nr(),[r,n]=Nr(),[o,i]=Nr(),[a,s]=Nr(),[c,l]=Nr(),[u,d]=Nr(),[f,p]=Nr(),[g,h]=Nr(),[m,v]=Nr({}),[w,A]=Nr(eo.NOT_CONNECTED),[y,b]=Nr({type:to.UNKNOWN,name:""}),x=e=>{console.log("🔌 Device disconnected unexpectedly:",e),A(eo.NOT_CONNECTED),i(void 0),s(void 0),l(void 0),d(void 0),p(void 0),h(void 0),v({}),b({type:to.UNKNOWN,name:""}),n(void 0),t(void 0)},C=function(){var o=lr(function*(){const o=m();if(o.control)try{console.log("🛑 Stopping notifications on control characteristic"),yield o.control.stopNotifications()}catch(u){console.error("Error stopping notifications:",u)}const a=e();if(a)try{a.removeEventListener("gattserverdisconnected",x)}catch(u){console.error("Error removing disconnect listener:",u)}const c=r();if(c)try{yield c.disconnect()}catch(u){console.error("Error during disconnect:",u)}A(eo.NOT_CONNECTED),i(void 0),s(void 0),l(void 0),d(void 0),p(void 0),h(void 0),v({}),b({type:to.UNKNOWN,name:""}),n(void 0),t(void 0)});return function(){return o.apply(this,arguments)}}(),k=function(){var e=lr(function*(e){try{const r=yield e.getPrimaryService(Xn);l(r);try{const e=yield r.getCharacteristic(Yn.control);yield e.startNotifications(),yield ri.add(lr(function*(){const t=new ArrayBuffer(20);new DataView(t).setUint8(0,2),yield e.writeValue(t);const r=new ArrayBuffer(20);new DataView(r).setUint8(0,29),yield e.writeValue(r);const n=new ArrayBuffer(20);new DataView(n).setUint8(0,1),yield e.writeValue(n);const o=new ArrayBuffer(20);new DataView(o).setUint8(0,4),yield e.writeValue(o),console.log("Veazy/Venty initialization commands sent (0x02, 0x1D, 0x01, 0x04)")})),v({control:e})}catch(t){console.error("Failed to get Veazy/Venty control characteristic:",t)}}catch(r){throw console.error("Failed to connect to Veazy/Venty service:",r),r}});return function(t){return e.apply(this,arguments)}}(),T=function(){var e=lr(function*(e){console.log("Crafty: Connecting to Crafty device...");const t=yield e.getPrimaryService(qn);console.log("Crafty: Got Crafty1 service",t),p(t);const r=yield e.getPrimaryService(_n);console.log("Crafty: Got Crafty2 service",r),d(r);const n=yield e.getPrimaryService(Kn);console.log("Crafty: Got Crafty3 service",n),h(n),console.log("Crafty: Crafty services connected successfully")});return function(t){return e.apply(this,arguments)}}(),S=function(){var e=lr(function*(e){const t=yield e.getPrimaryService(Zn);i(t);const r=yield e.getPrimaryService(Jn);s(r)});return function(t){return e.apply(this,arguments)}}(),F=function(){var e=lr(function*(e){if(!e.gatt)throw new Error("Device does not support GATT");t(e),e.addEventListener("gattserverdisconnected",x);const r=e.name||"",o=(e=>e.includes("S&B VOLCANO")?to.VOLCANO:e.includes("S&B VY")?to.VENTY:e.includes("S&B VZ")?to.VEAZY:to.CRAFTY)(r);b({type:o,name:r});const i=yield e.gatt.connect();n(i),o===to.VEAZY||o===to.VENTY?yield k(i):o===to.CRAFTY?(console.log("Crafty: Detected Crafty device, connecting..."),yield T(i)):yield S(i)});return function(t){return e.apply(this,arguments)}}(),U=()=>{if(navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("WebBLE/1"))return[{namePrefix:"STORZ&BICKEL"},{namePrefix:"Storz&Bickel"},{namePrefix:"S&B"}];return[{namePrefix:"STORZ&BICKEL"},{namePrefix:"Storz&Bickel"},{namePrefix:"S&B"},{services:[qn,_n,Kn]},{services:[Zn,Jn]},{services:[Xn]}]},O=function(){var e=lr(function*(){return navigator.bluetooth.requestDevice({filters:U(),acceptAllDevices:!1,optionalServices:["generic_access",Qn]})});return function(){return e.apply(this,arguments)}}(),E=function(){var r=lr(function*(){A(eo.CONNECTING);try{const e=yield O();yield F(e),A(eo.CONNECTED)}catch(r){console.error("Connection failed:",r),A(eo.CONNECTION_FAILED);const n=e();n&&(n.removeEventListener("gattserverdisconnected",x),t(void 0)),r instanceof Error&&alert(r.message)}});return function(){return r.apply(this,arguments)}}();return{connect:E,disconnect:C,connectionState:w,deviceInfo:y,getVolcanoStateService:o,getVolcanoControlService:a,getVentyVeazyService:c,getCraftyControlService:f,getCraftyDeviceInfoService:u,getCraftyStatusService:g,getCharacteristics:m,setCharacteristics:v}},ii=e=>{const t=oi();return dn(ni.Provider,{value:t,get children(){return e.children}})},ai=()=>{const e=Gr(ni);if(void 0===e)throw new Error("useStore must be used within a StoreProvider");return e},si=Yr({isDarkMode:()=>!1,toggleDarkMode:()=>{}}),ci=e=>{const[t,r]=Nr(!1);Wr(()=>{const e=localStorage.getItem("isDarkModeVReverse");n(null!==e&&"true"===e)}),Vr(()=>{localStorage.setItem("isDarkModeVReverse",t()?"true":"false")});const n=e=>{r(e),e?document.documentElement.classList.add("dark-mode"):document.documentElement.classList.remove("dark-mode")};return dn(si.Provider,{value:{isDarkMode:t,toggleDarkMode:n},get children(){return e.children}})},li=()=>{if(void 0===Gr(si))throw new Error("useStore must be used within a StoreProvider");return Gr(si)};function ui(){let e=new Set;let t=!1;return{subscribe:function(t){return e.add(t),()=>e.delete(t)},confirm:function(r,n){if(t)return!(t=!1);const o={to:r,options:n,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const i of e)i.listener(vr(vr({},o),{},{from:i.location,retry:e=>{e&&(t=!0),i.navigate(r,vr(vr({},n),{},{resolve:!1}))}}));return!o.defaultPrevented}}}let di;function fi(){window.history.state&&null!=window.history.state._depth||window.history.replaceState(vr(vr({},window.history.state),{},{_depth:window.history.length-1}),""),di=window.history.state._depth}fi();const pi=/^(?:[a-z0-9]+:)?\/\//i,gi=/^\/+|(\/)\/+$/g,hi="http://sr";function mi(e,t=!1){const r=e.replace(gi,"$1");return r?t||/^[?#]/.test(r)?r:"/"+r:""}function vi(e,t,r){if(pi.test(t))return;const n=mi(e),o=r&&mi(r);let i="";return i=!o||t.startsWith("/")?n:0!==o.toLowerCase().indexOf(n.toLowerCase())?n+o:o,(i||"/")+mi(t,!i)}function wi(e,t){return mi(e).replace(/\/*(\*.*)?$/g,"")+mi(t)}function Ai(e){const t={};return e.searchParams.forEach((e,r)=>{r in t?Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]:t[r]=e}),t}function yi(e,t,r){const[n,o]=e.split("/*",2),i=n.split("/").filter(Boolean),a=i.length;return e=>{const n=e.split("/").filter(Boolean),s=n.length-a;if(s<0||s>0&&void 0===o&&!t)return null;const c={path:a?"":"/",params:{}},l=e=>void 0===r?void 0:r[e];for(let t=0;t<a;t++){const e=i[t],r=":"===e[0],o=r?n[t]:n[t].toLowerCase(),a=r?e.slice(1):e.toLowerCase();if(r&&bi(o,l(a)))c.params[a]=o;else if(r||!bi(o,a))return null;c.path+=`/${o}`}if(o){const e=s?n.slice(-s).join("/"):"";if(!bi(e,l(o)))return null;c.params[o]=e}return c}}function bi(e,t){const r=t=>t===e;return void 0===t||("string"==typeof t?r(t):"function"==typeof t?t(e):Array.isArray(t)?t.some(r):t instanceof RegExp&&t.test(e))}function xi(e){const[t,r]=e.pattern.split("/*",2),n=t.split("/").filter(Boolean);return n.reduce((e,t)=>e+(t.startsWith(":")?2:3),n.length-(void 0===r?0:1))}function Ci(e){const t=new Map,r=Mr();return new Proxy({},{get:(n,o)=>(t.has(o)||Rr(r,()=>t.set(o,zr(()=>e()[o]))),t.get(o)()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),ownKeys:()=>Reflect.ownKeys(e()),has:(t,r)=>r in e()})}function ki(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let r=e.slice(0,t.index),n=e.slice(t.index+t[0].length);const o=[r,r+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(n);)o.push(r+=t[1]),n=n.slice(t[0].length);return ki(n).reduce((e,t)=>[...e,...o.map(e=>e+t)],[])}const Ti=Yr(),Si=Yr(),Fi=()=>function(e,t){if(null==e)throw new Error(t);return e}(Gr(Ti),"<A> and 'use' router primitives can be only used inside a Route."),Ui=()=>Fi().navigatorFactory(),Oi=()=>Fi().params;function Ei(e,t=""){const{component:r,preload:n,load:o,children:i,info:a}=e,s=!i||Array.isArray(i)&&!i.length,c={key:e,component:r,preload:n||o,info:a};return Bi(e.path).reduce((r,n)=>{for(const o of ki(n)){const i=wi(t,o);let a=s?i:i.split("/*",1)[0];a=a.split("/").map(e=>e.startsWith(":")||e.startsWith("*")?e:encodeURIComponent(e)).join("/"),r.push(vr(vr({},c),{},{originalPath:n,pattern:a,matcher:yi(a,!s,e.matchFilters)}))}return r},[])}function Ii(e,t=0){return{routes:e,score:1e4*xi(e[e.length-1])-t,matcher(t){const r=[];for(let n=e.length-1;n>=0;n--){const o=e[n],i=o.matcher(t);if(!i)return null;r.unshift(vr(vr({},i),{},{route:o}))}return r}}}function Bi(e){return Array.isArray(e)?e:[e]}function Ni(e,t="",r=[],n=[]){const o=Bi(e);for(let i=0,a=o.length;i<a;i++){const e=o[i];if(e&&"object"==typeof e){e.hasOwnProperty("path")||(e.path="");const o=Ei(e,t);for(const t of o){r.push(t);const o=Array.isArray(e.children)&&0===e.children.length;if(e.children&&!o)Ni(e.children,t.pattern,r,n);else{const e=Ii([...r],n.length);n.push(e)}r.pop()}}}return r.length?n:n.sort((e,t)=>t.score-e.score)}function Di(e,t){for(let r=0,n=e.length;r<n;r++){const n=e[r].matcher(t);if(n)return n}return[]}let Vi;function zi(e,t,r,n={}){const{signal:[o,i],utils:a={}}=e,s=a.parsePath||(e=>e),c=a.renderPath||(e=>e),l=a.beforeLeave||ui(),u=vi("",n.base||"");if(void 0===u)throw new Error(`${u} is not a valid base path`);u&&!o().value&&i({value:u,replace:!0,scroll:!1});const[d,f]=Nr(!1);let p;const g=(e,t)=>{t.value===h()&&t.state===v()||(void 0===p&&f(!0),Vi=e,p=t,function(e){const t=Ur,r=Sr;return Promise.resolve().then(()=>{Ur=t,Sr=r,Kr(e,!1),Ur=Sr=null})}(()=>{p===t&&(m(p.value),w(p.state),b[1](e=>e.filter(e=>e.pending)))}).finally(()=>{p===t&&Kr(()=>{Vi=void 0,"navigate"===e&&function(e){const t=y[0];t&&(i(vr(vr({},e),{},{replace:t.replace,scroll:t.scroll})),y.length=0)}(p),f(!1),p=void 0},!1)}))},[h,m]=Nr(o().value),[v,w]=Nr(o().state),A=function(e,t,r){const n=new URL(hi),o=zr(t=>{const r=e();try{return new URL(r,n)}catch(o){return console.error(`Invalid path ${r}`),t}},n,{equals:(e,t)=>e.href===t.href}),i=zr(()=>o().pathname),a=zr(()=>o().search,!0),s=zr(()=>o().hash),c=Pr(a,()=>Ai(o()));return{get pathname(){return i()},get search(){return a()},get hash(){return s()},get state(){return t()},get key(){return""},query:r?r(c):Ci(c)}}(h,v,a.queryWrapper),y=[],b=Nr([]),x=zr(()=>"function"==typeof n.transformUrl?Di(t(),n.transformUrl(A.pathname)):Di(t(),A.pathname)),C=()=>{const e=x(),t={};for(let r=0;r<e.length;r++)Object.assign(t,e[r].params);return t},k=a.paramsWrapper?a.paramsWrapper(C,t):Ci(C),T={pattern:u,path:()=>u,outlet:()=>null,resolvePath:e=>vi(u,e)};return Dr(Pr(o,e=>g("native",e),{defer:!0})),{base:T,location:A,params:k,isRouting:d,renderPath:c,parsePath:s,navigatorFactory:function(e){return e=e||Gr(Si)||T,(t,r)=>function(e,t,r){Lr(()=>{if("number"==typeof t)return void(t&&(a.go?a.go(t):console.warn("Router integration does not support relative routing")));const n=!t||"?"===t[0],{replace:o,resolve:i,scroll:s,state:c}=vr({replace:!1,resolve:!n,scroll:!0},r),u=i?e.resolvePath(t):vi(n&&A.pathname||"",t);if(void 0===u)throw new Error(`Path '${t}' is not a routable path`);if(y.length>=100)throw new Error("Too many redirects");const d=h();u===d&&c===v()||l.confirm(u,r)&&(y.push({value:d,replace:o,scroll:s,state:v()}),g("navigate",{value:u,state:c}))})}(e,t,r)},matches:x,beforeLeave:l,preloadRoute:function(e,n){const o=Di(t(),e.pathname),i=Vi;Vi="preload";for(let t in o){const{route:i,params:a}=o[t];i.component&&i.component.preload&&i.component.preload();const{preload:s}=i;n&&s&&Rr(r(),()=>s({params:a,location:{pathname:e.pathname,search:e.search,hash:e.hash,query:Ai(e),state:null,key:""},intent:"preload"}))}Vi=i},singleFlight:void 0===n.singleFlight||n.singleFlight,submissions:b}}function Li(e,t,r,n){const{base:o,location:i,params:a}=e,{pattern:s,component:c,preload:l}=n().route,u=zr(()=>n().path);c&&c.preload&&c.preload();const d=l?l({params:a,location:i,intent:Vi||"initial"}):void 0;return{parent:t,pattern:s,path:u,outlet:()=>c?dn(c,{params:a,location:i,data:d,get children(){return r()}}):r(),resolvePath:e=>vi(o.path(),e,u())}}const Pi=e=>t=>{const{base:r}=t,n=Zr(()=>t.children),o=zr(()=>Ni(n(),t.base||""));let i;const a=zi(e,o,()=>i,{base:r,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(a),dn(Ti.Provider,{value:a,get children(){return dn(Wi,{routerState:a,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Fn(()=>(i=Mr())&&null),dn(ji,{routerState:a,get branches(){return o()}})]}})}})};function Wi(e){const t=e.routerState.location,r=e.routerState.params,n=zr(()=>e.preload&&Lr(()=>{e.preload({params:r,location:t,intent:Vi||"initial"})}));return dn(An,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>dn(o,{params:r,location:t,get data(){return n()},get children(){return e.children}})})}function ji(e){const t=[];let r;const n=zr(Pr(e.routerState.matches,(o,i,a)=>{let s=i&&o.length===i.length;const c=[];for(let r=0,l=o.length;r<l;r++){const l=i&&i[r],u=o[r];a&&l&&u.route.key===l.route.key?c[r]=a[r]:(s=!1,t[r]&&t[r](),Br(o=>{t[r]=o,c[r]=Li(e.routerState,c[r-1]||e.routerState.base,Mi(()=>n()[r+1]),()=>{var t;const n=e.routerState.matches();return null!==(t=n[r])&&void 0!==t?t:n[0]})}))}return t.splice(o.length).forEach(e=>e()),a&&s?a:(r=c[0],c)}));return Mi(()=>n()&&r)()}const Mi=e=>()=>dn(An,{get when(){return e()},keyed:!0,children:e=>dn(Si.Provider,{value:e,get children(){return e.outlet()}})}),Ri=e=>{const t=Zr(()=>e.children);return mn(e,{get children(){return t()}})};const Hi=new Map;function $i(e=!0,t=!1,r="/_server",n){return o=>{const i=o.base.path(),a=o.navigatorFactory(o.base);let s,c;function l(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;const r=e.composedPath().find(e=>e instanceof Node&&"A"===e.nodeName.toUpperCase());if(!r||t&&!r.hasAttribute("link"))return;const n="http://www.w3.org/2000/svg"===r.namespaceURI;const o=n?r.href.baseVal:r.href;if((n?r.target.baseVal:r.target)||!o&&!r.hasAttribute("state"))return;const a=(r.getAttribute("rel")||"").split(/\s+/);if(r.hasAttribute("download")||a&&a.includes("external"))return;const s=n?new URL(o,document.baseURI):new URL(o);return s.origin!==window.location.origin||i&&s.pathname&&!s.pathname.toLowerCase().startsWith(i.toLowerCase())?void 0:[r,s]}function u(e){const t=l(e);if(!t)return;const[r,n]=t,i=o.parsePath(n.pathname+n.search+n.hash),s=r.getAttribute("state");e.preventDefault(),a(i,{resolve:!1,replace:r.hasAttribute("replace"),scroll:!r.hasAttribute("noscroll"),state:s?JSON.parse(s):void 0})}function d(e){const t=l(e);if(!t)return;const[r,i]=t;n&&(i.pathname=n(i.pathname)),o.preloadRoute(i,"false"!==r.getAttribute("preload"))}function f(e){clearTimeout(s);const t=l(e);if(!t)return c=null;const[r,i]=t;c!==r&&(n&&(i.pathname=n(i.pathname)),s=setTimeout(()=>{o.preloadRoute(i,"false"!==r.getAttribute("preload")),c=r},20))}function p(e){if(e.defaultPrevented)return;let t=e.submitter&&e.submitter.hasAttribute("formaction")?e.submitter.getAttribute("formaction"):e.target.getAttribute("action");if(!t)return;if(!t.startsWith("https://action/")){const e=new URL(t,hi);if(t=o.parsePath(e.pathname+e.search),!t.startsWith(r))return}if("POST"!==e.target.method.toUpperCase())throw new Error("Only POST forms are supported for Actions");const n=Hi.get(t);if(n){e.preventDefault();const t=new FormData(e.target,e.submitter);n.call({r:o,f:e.target},"multipart/form-data"===e.target.enctype?t:new URLSearchParams(t))}}En(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mousemove",f,{passive:!0}),document.addEventListener("focusin",d,{passive:!0}),document.addEventListener("touchstart",d,{passive:!0})),document.addEventListener("submit",p),jr(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mousemove",f),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",p)})}}function Yi(e){const t=()=>{const e=window.location.pathname.replace(/^\/+/,"/")+window.location.search,t=window.history.state&&window.history.state._depth&&1===Object.keys(window.history.state).length?void 0:window.history.state;return{value:e+window.location.hash,state:t}},r=ui();return function(e){let t=!1;const r=e=>"string"==typeof e?{value:e}:e,n=function([e,t],r,n){return[e,n?e=>t(n(e)):t]}(Nr(r(e.get()),{equals:(e,t)=>e.value===t.value&&e.state===t.state}),0,r=>(!t&&e.set(r),r));return e.init&&jr(e.init((o=e.get())=>{t=!0,n[1](r(o)),t=!1})),Pi({signal:n,create:e.create,utils:e.utils})}({get:t,set({value:e,replace:t,scroll:r,state:n}){t?window.history.replaceState(function(e){return vr(vr({},e),{},{_depth:window.history.state&&window.history.state._depth})}(n),"",e):window.history.pushState(n,"",e),function(e,t){const r=e&&document.getElementById(e);r?r.scrollIntoView():t&&window.scrollTo(0,0)}(decodeURIComponent(window.location.hash.slice(1)),r),fi()},init:e=>{return n=window,o="popstate",i=function(e,t){let r=!1;return()=>{const n=di;fi();const o=null==n?null:di-n;r?r=!1:o&&t(o)?(r=!0,window.history.go(-o)):e()}}(e,e=>{if(e)return!r.confirm(e);{const e=t();return!r.confirm(e.value,{state:e.state})}}),n.addEventListener(o,i),()=>n.removeEventListener(o,i);var n,o,i},create:$i(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:e=>window.history.go(e),beforeLeave:r}})(e)}function Gi(e){const t=Ui(),r=Fi().location,{href:n,state:o}=e;return t("function"==typeof n?n({navigate:t,location:r}):n,{replace:!0,state:o}),null}var Zi=On("<svg stroke-width=0>");function Ji(e,t){const r=mn(e.a,t),[n,o]=vn(r,["src"]),[i,a]=Nr(""),s=zr(()=>t.title?`${e.c}<title>${t.title}</title>`:e.c);return Vr(()=>a(s())),jr(()=>{a("")}),Bn(c=Zi(),mn({get stroke(){var t;return null===(t=e.a)||void 0===t?void 0:t.stroke},get color(){return t.color||"currentColor"},get fill(){return t.color||"currentColor"},get style(){return vr(vr({},t.style),{},{overflow:"visible"})}},o,{get height(){return t.size||"1em"},get width(){return t.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return i()}}),!0,!0),Nn(c,()=>Mn),c;var c}function Xi(e){return Ji({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="m8.543 3.948 1.316 1.316L8.543 6.58V3.948Zm0 8.104 1.316-1.316L8.543 9.42v2.632Zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827L7.133 8.01ZM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01 2 14.344 4.407 16 7.904 16Z"/>'},e)}function Qi(e){return Ji({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"/><path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"/>'},e)}let qi={data:""},_i=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||qi},Ki=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ea=/\/\*[^]*?\*\/|  +/g,ta=/\n+/g,ra=(e,t)=>{let r="",n="",o="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+a+";":n+="f"==i[1]?ra(a,i):i+"{"+ra(a,"k"==i[1]?"":t)+"}":"object"==typeof a?n+=ra(a,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=ra.p?ra.p(i,a):i+":"+a+";")}return r+(t&&o?t+"{"+o+"}":o)+n},na={},oa=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+oa(e[r]);return t}return e},ia=(e,t,r,n,o)=>{let i=oa(e),a=na[i]||(na[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!na[a]){let t=i!==e?e:(e=>{let t,r,n=[{}];for(;t=Ki.exec(e.replace(ea,""));)t[4]?n.shift():t[3]?(r=t[3].replace(ta," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(ta," ").trim();return n[0]})(e);na[a]=ra(o?{["@keyframes "+a]:t}:t,r?"":"."+a)}let s=r&&na.g?na.g:null;return r&&(na.g=na[a]),((e,t,r,n)=>{n?t.data=t.data.replace(n,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(na[a],t,n,s),a};function aa(e){let t=this||{},r=e.call?e(t.p):e;return ia(r.unshift?r.raw?((e,t,r)=>e.reduce((e,n,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":ra(e,""):!1===e?"":e}return e+n+(null==i?"":i)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,_i(t.target),t.g,t.o,t.k)}aa.bind({g:1}),aa.bind({k:1});const sa=Yr();const ca=new Proxy(function(e){let t=this||{};return(...r)=>{const n=n=>{const o=mn(n,{theme:Gr(sa)}),i=mn(o,{get class(){const e=o.class,n="class"in o&&/^go[0-9]+/.test(e);return[e,aa.apply({target:t.target,o:n,p:o,g:t.g},r)].filter(Boolean).join(" ")}}),[a,s]=vn(i,["as","theme"]),c=s,l=a.as||e;let u;return"function"==typeof l?u=l(c):1==t.g?(u=document.createElement(l),Bn(u,c)):u=function(e){const[,t]=vn(e,["component"]);return Rn(()=>e.component,t)}(mn({component:l},c)),u};return n.class=e=>Lr(()=>aa.apply({target:t.target,p:e,g:t.g},r)),n}},{get:(e,t)=>e(t)}),la=ca("div")(e||(e=sr`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff6600 0%, #ff8833 100%);
  border-radius: 8px;
  opacity: 1;
  animation: blink-glow 2s ${0} infinite ease-in-out;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);

  @keyframes blink-glow {
    0% {
      opacity: 1;
      box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(255, 102, 0, 0.8),
        inset 0 2px 4px rgba(255, 255, 255, 0.2);
      transform: scale(1);
    }
    50% {
      opacity: 0.2;
      box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.2),
        0 0 5px rgba(255, 102, 0, 0.2),
        inset 0 1px 2px rgba(255, 255, 255, 0.1);
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(255, 102, 0, 0.8),
        inset 0 2px 4px rgba(255, 255, 255, 0.2);
      transform: scale(1);
    }
  }
`),e=>e.delay),ua=ca("div")(t||(t=sr`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 4px;
`)),da=()=>dn(ua,{get children(){return[dn(la,{delay:"0s"}),dn(la,{delay:"0.5s"}),dn(la,{delay:"1.5s"}),dn(la,{delay:"1s"})]}}),fa="/",pa="/connect",ga={BASE:"/device",VOLCANO:{BASE:"/volcano",ROOT:"/",WORKFLOW:{BASE:"/workflow",LIST:"/list/:workflowListId",FORM:"/form/:workflowListId/:workflowStepId"}},VENTY_VEAZY:"/venty-veazy",CRAFTY:"/crafty"},ha=()=>"/device/volcano",ma=e=>`/device/volcano/workflow/list/${e}`,va=(e,t)=>`/device/volcano/workflow/form/${e}/${t}`,wa=()=>"/device/venty-veazy",Aa=()=>"/device/crafty",ya=()=>"/connect",ba=()=>"/",xa="undefined"!=typeof window&&navigator.language.includes("de")?"de":"en",Ca={en:{socialstudio:"Social Studio",zenstudio:"Zen Studio",settings:"Settings",darkMode:"Dark Mode",standbyLight:"Standby Light",vibration:"Vibration",autoMaticShutdownTime:"Automatic Shutdown Time",deviceBrightness:"Device Brightness",serialNumber:"Serial Number",deviceRuntime:"Device Runtime",hours:"hours",bleFirmwareVersion:"BLE Firmware Version",temperature:"Temperature",holdTime:"Hold Time",pumpTime:"Pump Time",ledBrightness:"LED Brightness",brightness:"Brightness",enableVibration:"Enable vibration",keepBluetoothAlwaysOn:"Keep Bluetooth always on",optimizeChargingCurrent:"Optimize charging current",limitChargingVoltage:"Limit charging voltage",enableBoostLedVisualization:"Enable boost LED visualization",deactivateBoostTimeout:"Deactivate 90 sec. timeout of Boost/Superboost",permanentBluetooth:"Permanent Bluetooth",chargeCurrentOptimization:"Charge Current Optimization (Eco Mode)",chargeVoltageLimit:"Charge Voltage Limit (Eco Mode)",boostSuperboostVisualization:"Boost & Superboost Visualization",permanentBoost:"Permanent Boost",temperatureUnit:"Temperature Unit",celsius:"Celsius (°C)",fahrenheit:"Fahrenheit (°F)",factoryReset:"Factory Reset",factoryResetConfirm:"Are you sure you want to reset all settings to factory defaults? This action cannot be undone.",cancel:"Cancel",reset:"Reset",deviceNotConnected:"Device not connected",connectingToDevice:"Connecting to device...",connectYourDevice:"Connect Storz & Bickle Device",appSupportsDevices:"This app supports Volcano Hybrid, Veazy, Venty and Crafty devices. Click the button below to connect via Bluetooth.",connectDevice:"Connect Device",connectNewDevice:"Connect New Device",connectingTo:"Connecting to",targetTemperature:"Target Temperature",ventyVeazyTemperatureControl:"Venty/Veazy Temperature Control",currentTemperature:"Current Temperature",hybrid:"Volcano Hybrid",deviceWillShutdownIn:"Device will Shutdown in",sec:"sec",step:"Step",steps:"steps",effective:"Effective",editStep:"Edit Step",editWorkflowSteps:"Edit Workflow Steps",noStepsYet:'No steps yet. Click "Add" to add one.',newStep:"New Step",add:"Add",workflows:"Workflows",addWorkflow:"Add Workflow",save:"Save",battery:"Battery",charging:"⚡ Charging",deleteWorkflow:"Delete workflow",exportWorkflow:"Export Workflow",importWorkflow:"Import Single Workflow",importWorkflowDescription:"Import a single workflow from a JSON file",exportWorkflowDescription:"Download this workflow as a JSON file",invalidWorkflowFile:"Invalid workflow file",workflowImported:"Workflow imported successfully",exportAllWorkflows:"Export All Workflows",importAllWorkflows:"Import All Workflows",exportAllWorkflowsDescription:"Download all workflows as a JSON file",importAllWorkflowsDescription:"Import workflows from a JSON file (will replace all existing workflows)",workflowsExported:"All workflows exported successfully",workflowsImported:"All workflows imported successfully",confirmImportAll:"This will replace all existing workflows. Are you sure?"},de:{socialstudio:"Social Studio",zenstudio:"Zen Studio",settings:"Einstellungen",darkMode:"Dunkelmodus",standbyLight:"Standby-Licht",vibration:"Vibration",autoMaticShutdownTime:"Automatische Abschaltzeit",deviceBrightness:"Gerätehelligkeit",serialNumber:"Seriennummer",deviceRuntime:"Geräte-Laufzeit",hours:"Stunden",bleFirmwareVersion:"BLE-Firmware-Version",temperature:"Temperatur",holdTime:"Haltezeit",pumpTime:"Pumpenzeit",ledBrightness:"LED-Helligkeit",brightness:"Helligkeit",enableVibration:"Vibration aktivieren",keepBluetoothAlwaysOn:"Bluetooth immer eingeschaltet lassen",optimizeChargingCurrent:"Ladestrom optimieren",limitChargingVoltage:"Ladespannung begrenzen",enableBoostLedVisualization:"Boost-LED-Visualisierung aktivieren",deactivateBoostTimeout:"90-Sekunden-Timeout von Boost/Superboost deaktivieren",permanentBluetooth:"Permanentes Bluetooth",chargeCurrentOptimization:"Ladestrom-Optimierung (Eco-Modus)",chargeVoltageLimit:"Ladespannungsbegrenzung (Eco-Modus)",boostSuperboostVisualization:"Boost & Superboost Visualisierung",permanentBoost:"Permanenter Boost",temperatureUnit:"Temperatureinheit",celsius:"Celsius (°C)",fahrenheit:"Fahrenheit (°F)",factoryReset:"Werksreset",factoryResetConfirm:"Sind Sie sicher, dass Sie alle Einstellungen auf Werkseinstellungen zurücksetzen möchten? Diese Aktion kann nicht rückgängig gemacht werden.",cancel:"Abbrechen",reset:"Zurücksetzen",deviceNotConnected:"Gerät nicht verbunden",connectingToDevice:"Verbinde mit Gerät...",connectYourDevice:"Verbinden Sie Ihr Gerät",appSupportsDevices:"Diese App unterstützt Volcano Hybrid, Veazy und Venty Geräte. Klicken Sie auf die Schaltfläche unten, um eine Bluetooth-Verbindung herzustellen.",connectDevice:"Gerät verbinden",connectNewDevice:"Neues Gerät verbinden",connectingTo:"Verbinde mit",targetTemperature:"Zieltemperatur",ventyVeazyTemperatureControl:"Venty/Veazy Temperatursteuerung",currentTemperature:"Aktuelle Temperatur",hybrid:"HYBRID",deviceWillShutdownIn:"Gerät schaltet sich ab in",sec:"Sek",step:"Schritt",steps:"Schritte",effective:"Effektiv",editStep:"Schritt bearbeiten",editWorkflowSteps:"Workflow-Schritte bearbeiten",noStepsYet:'Noch keine Schritte. Klicken Sie auf "Hinzufügen", um einen hinzuzufügen.',newStep:"Neuer Schritt",add:"Hinzufügen",workflows:"Workflows",addWorkflow:"Workflow hinzufügen",save:"Speichern",battery:"Akku",charging:"⚡ Lädt",deleteWorkflow:"Workflow löschen",exportWorkflow:"Workflow exportieren",importWorkflow:"Einzelnen Workflow importieren",exportWorkflowDescription:"Dieses Workflow als JSON-Datei herunterladen",importWorkflowDescription:"Ein Workflow aus einer JSON-Datei importieren",invalidWorkflowFile:"Ungültige Workflow-Datei",workflowImported:"Workflow erfolgreich importiert",exportAllWorkflows:"Alle Workflows exportieren",importAllWorkflows:"Alle Workflows importieren",exportAllWorkflowsDescription:"Alle Workflows als JSON-Datei herunterladen",importAllWorkflowsDescription:"Workflows aus einer JSON-Datei importieren (ersetzt alle vorhandenen Workflows)",workflowsExported:"Alle Workflows erfolgreich exportiert",workflowsImported:"Alle Workflows erfolgreich importiert",confirmImportAll:"Dies ersetzt alle vorhandenen Workflows. Sind Sie sicher?"}},ka=()=>e=>Ca[xa][e]||Ca[xa][e],Ta=ca("div")(r||(r=sr`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`)),Sa=ca("button")(n||(n=sr`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
  border: 3px solid var(--accent-color);
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
  color: var(--accent-color);
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
  min-width: 200px;

  &:hover {
    background-color: var(--accent-color);
    color: var(--text-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(246, 96, 0, 0.3);
  }
`)),Fa=ca("h2")(o||(o=sr`
  color: var(--text-color);
  margin-bottom: 10px;
  text-align: center;
`)),Ua=ca("p")(i||(i=sr`
  color: var(--secondary-text);
  text-align: center;
  max-width: 400px;
  line-height: 1.5;
`)),Oa=ca("div")(a||(a=sr`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`)),Ea=ca("p")(s||(s=sr`
  margin-top: 35px;
`)),Ia=()=>{const{connect:e,connectionState:t,deviceInfo:r}=ai(),n=Ui(),o=ka();return Vr(()=>{if(t()===eo.CONNECTED){switch(r().type){case to.VOLCANO:n(ha());break;case to.VENTY:case to.VEAZY:n(wa());break;case to.CRAFTY:n(Aa())}}}),[dn(An,{get when(){return t()===eo.NOT_CONNECTED||t()===eo.CONNECTION_FAILED},get children(){return dn(Ta,{get children(){return[dn(Fa,{get children(){return o("connectYourDevice")}}),dn(Ua,{get children(){return o("appSupportsDevices")}}),dn(Sa,{onClick:e,get children(){return[dn(Xi,{size:"64px"}),Fn(()=>o("connectDevice"))]}})]}})}}),dn(An,{get when(){return t()===eo.CONNECTING},get children(){return dn(Ta,{get children(){return dn(Oa,{get children(){return[dn(da,{}),dn(Ea,{get children(){return[Fn(()=>o("connectingTo"))," ",Fn(()=>(()=>{switch(r().type){case to.VOLCANO:return"Volcano Hybrid";case to.VEAZY:return"Veazy";case to.VENTY:return"Venty";default:return"Storz & Bickel Device"}})()),"..."]}})]}})}})}})]},Ba=e=>0===e.byteLength?0:1===e.byteLength?e.getUint8(0):e.byteLength>=2?e.getUint16(0,!0):0,Na=e=>{const t=new ArrayBuffer(1);return new DataView(t).setUint8(0,e%256),t},Da=e=>{const t=new ArrayBuffer(2);return new DataView(t).setUint16(0,e,!0),t},Va=e=>{const t=new ArrayBuffer(4);return new DataView(t).setUint32(0,e,!0),t},za=function(){var e=lr(function*(e,t){const r=yield e.startNotifications();return r.addEventListener("characteristicvaluechanged",e=>Ra(e,t)),r});return function(t,r){return e.apply(this,arguments)}}(),La=function(){var e=lr(function*(e,t){e.removeEventListener("characteristicvaluechanged",e=>Ra(e,t)),yield e.stopNotifications()});return function(t,r){return e.apply(this,arguments)}}(),Pa=function(){var e=lr(function*(e,t){t(yield e.readValue())});return function(t,r){return e.apply(this,arguments)}}(),Wa=function(){var e=lr(function*(e,t){return ri.add(lr(function*(){var r;return null!==(r=e.device.gatt)&&void 0!==r&&r.connected?yield e.getCharacteristic(t):null}))});return function(t,r){return e.apply(this,arguments)}}(),ja=function(){var e=lr(function*(e,t,r){const n=yield Wa(e,t);if(n)return yield Pa(n,r),za(n,r)});return function(t,r,n){return e.apply(this,arguments)}}(),Ma=function(){var e=lr(function*(e,t,r){const n=yield Wa(e,t);if(n)return yield Pa(n,r),n});return function(t,r,n){return e.apply(this,arguments)}}(),Ra=(e,t)=>{const r=e.target.value;r&&t(r)},Ha=()=>{const{getCharacteristics:e}=ai(),t=function(){var t=lr(function*(t,r,n){const o=e()[t];if(!o)return Promise.reject("Characteristic not found");const i=n(r);return ri.add(()=>o.writeValue(i))});return function(e,r,n){return t.apply(this,arguments)}}();return{writeValueToCharacteristic:t}},$a=()=>{const[e,t]=Nr(0),[r,n]=Nr(0),{getVolcanoControlService:o,getCharacteristics:i,setCharacteristics:a}=ai(),{writeValueToCharacteristic:s}=Ha(),c=function(){var e=lr(function*(){const e=o();if(!e)return;const t=yield ja(e,$n.targetTemperature,u);if(!t)return Promise.reject("targetTemperatureCharacteristic not found");a(e=>vr(vr({},e),{},{targetTemperature:t}));const r=yield ja(e,$n.currentTemperature,d);if(!r)return Promise.reject("currentTemperatureCharacteristic not found");a(e=>vr(vr({},e),{},{currentTemperature:r}))});return function(){return e.apply(this,arguments)}}(),l=function(){var e=lr(function*(e){yield s("targetTemperature",10*e,Va),t(e)});return function(t){return e.apply(this,arguments)}}();Vr(()=>{o()?c():console.log("No service yet, skipping characteristic setup")}),jr(()=>{const{targetTemperature:e,currentTemperature:t}=i();e&&La(e,u),t&&La(t,d)});const u=e=>{const r=Ba(e),n=Math.round(r/10);t(n)},d=e=>{const t=Ba(e),r=Math.round(t/10);n(r)};return{getTargetTemperature:e,getCurrentTemperature:r,setTargetTemperature:l}},Ya=()=>{const[e,t]=Nr(!1),[r,n]=Nr(!1),[o,i]=Nr(!1),{getVolcanoStateService:a,getVolcanoControlService:s,getCharacteristics:c,setCharacteristics:l}=ai(),{writeValueToCharacteristic:u}=Ha(),d=function(){var e=lr(function*(){const e=a();if(!e)return;const t=yield ja(e,$n.activity,v);if(!t)return Promise.reject("activityCharacteristic not found");l(e=>vr(vr({},e),{},{activity:t}))});return function(){return e.apply(this,arguments)}}(),f=function(){var e=lr(function*(){const e=s();if(!e)return;const t=yield Wa(e,$n.heaterOn);if(!t)return Promise.reject("heaterOnCharacteristic not found");l(e=>vr(vr({},e),{},{heaterOn:t}));const r=yield Wa(e,$n.heaterOff);if(!r)return Promise.reject("heaterOffCharacteristic not found");l(e=>vr(vr({},e),{},{heaterOff:r}));const n=yield Wa(e,$n.pumpOff);if(!n)return Promise.reject("pumpOffCharacteristic not found");l(e=>vr(vr({},e),{},{pumpOff:n}));const o=yield Wa(e,$n.pumpOn);if(!o)return Promise.reject("pumpOnCharacteristic not found");l(e=>vr(vr({},e),{},{pumpOn:o}))});return function(){return e.apply(this,arguments)}}(),p=function(){var e=lr(function*(){yield u("pumpOn",0,Na),n(!0)});return function(){return e.apply(this,arguments)}}(),g=function(){var e=lr(function*(){yield u("pumpOff",0,Na),n(!1)});return function(){return e.apply(this,arguments)}}(),h=function(){var e=lr(function*(){yield u("heaterOn",0,Na),t(!0)});return function(){return e.apply(this,arguments)}}(),m=function(){var e=lr(function*(){yield u("heaterOff",0,Na),t(!1)});return function(){return e.apply(this,arguments)}}();Vr(()=>{d(),f()}),jr(()=>{const{activity:e}=c();e&&La(e,v)});const v=e=>{const r=Ba(e),o=0!==(r&Hn.HEIZUNG_ENA);t(o);const a=0!==(r&Hn.PUMPE_FET_ENABLE);n(a);const s=0!==(r&Hn.ENABLE_AUTOBLESHUTDOWN);i(s)};return{isHeatingActive:e,isPumpActive:r,isAutoShutdownActive:o,setPumpOn:p,setPumpOff:g,setHeatOn:h,setHeatOff:m}},Ga=()=>{const[e,t]=Nr(0),{getVolcanoControlService:r,setCharacteristics:n}=ai(),{writeValueToCharacteristic:o}=Ha(),i=function(){var e=lr(function*(){const e=r();if(!e)return;const t=yield Ma(e,$n.brightness,a);if(!t)return Promise.reject("brightnessCharacteristic not found");n(e=>vr(vr({},e),{},{brightness:t}))});return function(){return e.apply(this,arguments)}}();Vr(()=>{i()});const a=e=>{const r=Ba(e);t(r)},s=function(){var e=lr(function*(e){t(e),yield o("brightness",e,Da)});return function(t){return e.apply(this,arguments)}}();return{getBrightness:e,setTargetBrightness:s}},Za=()=>{const[e,t]=Nr(!1),{getVolcanoStateService:r,setCharacteristics:n}=ai(),{writeValueToCharacteristic:o}=Ha(),i=function(){var e=lr(function*(){const e=r();if(!e)return;const t=yield Ma(e,$n.vibration,c);if(!t)return Promise.reject("vibrationCharacteristic not found");n(e=>vr(vr({},e),{},{vibration:t}))});return function(){return e.apply(this,arguments)}}();Vr(()=>{i()});const a=function(){var e=lr(function*(){yield o("vibration",Hn.VIBRATION,Va),t(!0)});return function(){return e.apply(this,arguments)}}(),s=function(){var e=lr(function*(){yield o("vibration",65536+Hn.VIBRATION,Va),t(!1)});return function(){return e.apply(this,arguments)}}(),c=e=>{const r=0===(Ba(e)&Hn.VIBRATION);t(r)};return{isVibrationOn:e,setVibrationOn:a,setVibrationOff:s}},Ja=()=>{const[e,t]=Nr(0),[r,n]=Nr(0),{getVolcanoControlService:o,getCharacteristics:i,setCharacteristics:a}=ai(),{writeValueToCharacteristic:s}=Ha(),c=function(){var e=lr(function*(){const e=o();if(!e)return;const t=yield Ma(e,$n.shutoffTime,d);if(!t)return Promise.reject("shutoffTimeCharacteristic not found");a(e=>vr(vr({},e),{},{shutoffTime:t}));const r=yield ja(e,$n.currentAutoOffValue,u);if(!r)return Promise.reject("currentAutoOffValueCharacteristic not found");a(e=>vr(vr({},e),{},{currentAutoOffValue:r}))});return function(){return e.apply(this,arguments)}}();Vr(()=>{c()}),jr(()=>{const{currentAutoOffValue:e}=i();e&&La(e,u)});const l=function(){var e=lr(function*(e){n(e),yield s("shutoffTime",e,Da)});return function(t){return e.apply(this,arguments)}}(),u=e=>{t(Ba(e))},d=e=>{n(Ba(e))};return{getAutoOffTimeInSec:e,getShutoffTimeInSec:r,setShutOffTime:l}},Xa=()=>{const[e,t]=Nr(!0),[r,n]=Nr(!0),{getVolcanoStateService:o,getCharacteristics:i,setCharacteristics:a}=ai(),{writeValueToCharacteristic:s}=Ha(),c=function(){var e=lr(function*(){const e=o();if(!e)return;const t=yield ja(e,$n.display,d);if(!t)return Promise.reject("displayCharacteristic not found");a(e=>vr(vr({},e),{},{display:t}))});return function(){return e.apply(this,arguments)}}();Vr(()=>{c()}),jr(()=>{const{display:e}=i();e&&La(e,d)});const l=function(){var e=lr(function*(){yield s("display",Hn.DISPLAY_ON_COOLING,Va),n(!0)});return function(){return e.apply(this,arguments)}}(),u=function(){var e=lr(function*(){return yield s("display",65536+Hn.DISPLAY_ON_COOLING,Va)});return function(){return e.apply(this,arguments)}}(),d=e=>{const r=Ba(e),o=0===(r&Hn.FAHRENHEIT_ENA);t(o);const i=0===(r&Hn.DISPLAY_ON_COOLING);n(i)};return{isCelsius:e,isDisplayOnCooling:r,setDisplayOnCoolingOn:l,setDisplayOnCoolingOff:u}},Qa=()=>{const[e,t]=Nr(0),[r,n]=Nr(0),{getVolcanoControlService:o,getCharacteristics:i,setCharacteristics:a}=ai(),s=function(){var e=lr(function*(){const e=o();if(!e)return;const t=yield ja(e,$n.hoursOfHeating,c);if(!t)return Promise.reject("hoursOfHeatingCharacteristic not found");a(e=>vr(vr({},e),{},{hoursOfHeating:t}));const r=yield ja(e,$n.minutesOfHeating,l);if(!r)return Promise.reject("minutesOfHeatingCharacteristic not found");a(e=>vr(vr({},e),{},{minutesOfHeating:r}))});return function(){return e.apply(this,arguments)}}();Vr(()=>{s()}),jr(()=>{const{hoursOfHeating:e,minutesOfHeating:t}=i();e&&La(e,c),t&&La(t,l)});const c=e=>u(e,"HoursOfHeating"),l=e=>u(e,"MinutesOfHeating"),u=(e,r)=>{const o=Ba(e);"HoursOfHeating"===r?t(o):"MinutesOfHeating"===r&&n(o)};return{getHoursOfHeating:e,getMinutesOfHeating:r}};function qa(){const[e,t]=Nr(""),[r,n]=Nr(""),[o,i]=Nr(""),{getVolcanoStateService:a}=ai();Vr(()=>{const e=a();e&&(Ma(e,$n.serialNumber,s),Ma(e,$n.firmwareVersion,c),Ma(e,$n.firmwareBLEVersion,l))});const s=e=>u(e,"serialNumber"),c=e=>u(e,"firmwareVersion"),l=e=>u(e,"bLEFirmwareVersion"),u=(e,r)=>{const o=new TextDecoder("utf-8").decode(e).substring(0,8);"serialNumber"===r&&t(o),"firmwareVersion"===r&&n(o),"bLEFirmwareVersion"===r&&i(o)};return{getSerialNumber:e,getFirmwareVersion:r,getBleFirmwareVersion:o}}const _a=[];for(let e=0;e<256;++e)_a.push((e+256).toString(16).slice(1));let Ka;const es=new Uint8Array(16);const ts={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function rs(e,t,r){var n,o,i,a;const s=null!==(n=null!==(o=(e=e||{}).random)&&void 0!==o?o:null===(i=(a=e).rng)||void 0===i?void 0:i.call(a))&&void 0!==n?n:function(){if(!Ka){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ka=crypto.getRandomValues.bind(crypto)}return Ka(es)}();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=15&s[6]|64,s[8]=63&s[8]|128,function(e,t=0){return(_a[e[t+0]]+_a[e[t+1]]+_a[e[t+2]]+_a[e[t+3]]+"-"+_a[e[t+4]]+_a[e[t+5]]+"-"+_a[e[t+6]]+_a[e[t+7]]+"-"+_a[e[t+8]]+_a[e[t+9]]+"-"+_a[e[t+10]]+_a[e[t+11]]+_a[e[t+12]]+_a[e[t+13]]+_a[e[t+14]]+_a[e[t+15]]).toLowerCase()}(s)}function ns(e,t,r){return ts.randomUUID&&!e?ts.randomUUID():rs(e)}const os=[{id:ns(),temperature:170,holdTimeInSeconds:0,pumpTimeInSeconds:5},{id:ns(),temperature:175,holdTimeInSeconds:0,pumpTimeInSeconds:5},{id:ns(),temperature:180,holdTimeInSeconds:0,pumpTimeInSeconds:5},{id:ns(),temperature:185,holdTimeInSeconds:0,pumpTimeInSeconds:5},{id:ns(),temperature:190,holdTimeInSeconds:0,pumpTimeInSeconds:5},{id:ns(),temperature:195,holdTimeInSeconds:0,pumpTimeInSeconds:5},{id:ns(),temperature:200,holdTimeInSeconds:0,pumpTimeInSeconds:5},{id:ns(),temperature:205,holdTimeInSeconds:0,pumpTimeInSeconds:5},{id:ns(),temperature:210,holdTimeInSeconds:0,pumpTimeInSeconds:5},{id:ns(),temperature:215,holdTimeInSeconds:0,pumpTimeInSeconds:5},{id:ns(),temperature:220,holdTimeInSeconds:0,pumpTimeInSeconds:5}],is=[{id:ns(),temperature:182,holdTimeInSeconds:10,pumpTimeInSeconds:10},{id:ns(),temperature:192,holdTimeInSeconds:7,pumpTimeInSeconds:12},{id:ns(),temperature:201,holdTimeInSeconds:5,pumpTimeInSeconds:10},{id:ns(),temperature:220,holdTimeInSeconds:3,pumpTimeInSeconds:10}],as=[{id:ns(),temperature:175,holdTimeInSeconds:0,pumpTimeInSeconds:7},{id:ns(),temperature:180,holdTimeInSeconds:0,pumpTimeInSeconds:7},{id:ns(),temperature:185,holdTimeInSeconds:0,pumpTimeInSeconds:7},{id:ns(),temperature:190,holdTimeInSeconds:0,pumpTimeInSeconds:7},{id:ns(),temperature:195,holdTimeInSeconds:0,pumpTimeInSeconds:10}],ss=[{id:ns(),temperature:174,holdTimeInSeconds:20,pumpTimeInSeconds:8},{id:ns(),temperature:199,holdTimeInSeconds:0,pumpTimeInSeconds:20},{id:ns(),temperature:213,holdTimeInSeconds:0,pumpTimeInSeconds:10},{id:ns(),temperature:222,holdTimeInSeconds:0,pumpTimeInSeconds:10}],cs=[{name:"Ballon",id:ns(),workflowSteps:os},{name:"workflow2",id:ns(),workflowSteps:is},{name:"workflow3",id:ns(),workflowSteps:as},{name:"workflow4",id:ns(),workflowSteps:ss}],ls="keyValueStore",us=()=>new Promise((e,t)=>{const r=indexedDB.open("VolcanoWorkflowDB",3);r.onerror=()=>t(r.error),r.onsuccess=()=>e(r.result),r.onupgradeneeded=e=>{const t=e.target.result;t.objectStoreNames.contains("workflows")&&t.deleteObjectStore("workflows"),t.objectStoreNames.contains("selectedWorkflow")&&t.deleteObjectStore("selectedWorkflow"),t.objectStoreNames.contains(ls)||t.createObjectStore(ls)}}),ds=function(){var e=lr(function*(e){const t=(yield us()).transaction([ls],"readonly").objectStore(ls).get(e);return new Promise((e,r)=>{t.onsuccess=()=>e(t.result||null),t.onerror=()=>r(t.error)})});return function(t){return e.apply(this,arguments)}}(),fs=function(){var e=lr(function*(e,t){const r=(yield us()).transaction([ls],"readwrite");return r.objectStore(ls).put(t,e),new Promise((e,t)=>{r.oncomplete=()=>e(),r.onerror=()=>t(r.error)})});return function(t,r){return e.apply(this,arguments)}}(),ps=(e,t)=>{const[r,n]=Nr(t);return Wr(lr(function*(){try{const t=yield ds(e);null!==t&&n(t)}catch(t){console.error(`Error loading ${e} from IndexedDB:`,t)}})),Vr(()=>{const n=r();JSON.stringify(n)!==JSON.stringify(t)&&fs(e,n).catch(t=>console.error(`Error saving ${e} to IndexedDB:`,t))}),[r,n]},gs=Yr(),hs=e=>{const t=$a(),r=Ya(),n=Ga(),o=Za(),i=Ja(),a=Xa(),s=Qa(),c=qa(),l=(()=>{const[e,t]=ps("workflowList",cs),[r,n]=ps("selectedWorkflowId",""),o=zr(()=>{const t=e().find(e=>e.id===r());return(null==t?void 0:t.workflowSteps)||[]}),i=t=>e().findIndex(e=>e.id===t);return{workflowSteps:o,selectedWorkflowId:r,setSelectedWorkflowId:n,addWorkflowToList:()=>{const r={id:ns(),name:"New Workflow",workflowSteps:[]};t([...e(),r]),n(r.id)},addWorkflowStepToWorkflow:(r,n)=>{const o=e(),a=i(r);if(-1===a)return void console.log(`Workflow with id ${r} not found`);const s=o[a],c=vr(vr({},s),{},{workflowSteps:[...s.workflowSteps,n]});t([...o.slice(0,a),c,...o.slice(a+1)])},deleteWorkflowFromList:r=>{const n=e(),o=i(r);-1!==o?t([...n.slice(0,o),...n.slice(o+1)]):console.log(`Workflow with id ${r} not found`)},deleteWorkflowStepFromList:(r,n)=>{const o=e(),a=i(r);if(-1===a)return void console.log(`Workflow with id ${r} not found`);const s=o[a],c=s.workflowSteps.findIndex(e=>e.id===n);if(-1===c)return void console.log(`WorkflowStep with id ${n} not found`);const l=vr(vr({},s),{},{workflowSteps:[...s.workflowSteps.slice(0,c),...s.workflowSteps.slice(c+1)]});t([...o.slice(0,a),l,...o.slice(a+1)])},editWorkflowInList:(r,n)=>{const o=e(),a=i(r);if(-1===a)return void console.log(`Workflow with id ${r} not found`);const s=vr({},n);t([...o.slice(0,a),s,...o.slice(a+1)])},editWorkflowStepInList:(r,n,o)=>{const a=e(),s=i(r);if(-1===s)return void console.log(`Workflow with id ${r} not found`);const c=a[s],l=c.workflowSteps.findIndex(e=>e.id===n);if(-1===l)return void console.log(`WorkflowStep with id ${n} not found`);const u=vr(vr({},c),{},{workflowSteps:[...c.workflowSteps.slice(0,l),o,...c.workflowSteps.slice(l+1)]});t([...a.slice(0,s),u,...a.slice(s+1)])},workflowList:e,setWorkflowList:t,updateWorkflowStepsInList:(r,n)=>{const o=e(),a=i(r);if(-1===a)return void console.log(`Workflow with id ${r} not found`);const s=vr(vr({},o[a]),{},{workflowSteps:n});t([...o.slice(0,a),s,...o.slice(a+1)])},addNewWorkflowStep:()=>{const n={id:ns(),temperature:0,holdTimeInSeconds:0,pumpTimeInSeconds:0},o=e(),a=i(r());if(-1===a)return void console.log(`Workflow with id ${r()} not found`);const s=o[a],c=vr(vr({},s),{},{workflowSteps:[...s.workflowSteps,n]});t([...o.slice(0,a),c,...o.slice(a+1)])},renameWorkflow:(r,n)=>{const o=e(),a=i(r);if(-1===a)return void console.log(`Workflow with id ${r} not found`);const s=vr(vr({},o[a]),{},{name:n});t([...o.slice(0,a),s,...o.slice(a+1)])},exportWorkflow:t=>{const r=e().find(e=>e.id===t);if(!r)return void console.error(`Workflow with id ${t} not found`);const n={name:r.name,workflowSteps:r.workflowSteps.map(e=>({temperature:e.temperature,holdTimeInSeconds:e.holdTimeInSeconds,pumpTimeInSeconds:e.pumpTimeInSeconds})),exportedAt:(new Date).toISOString(),version:"1.0"},o=JSON.stringify(n,null,2),i="data:application/json;charset=utf-8,"+encodeURIComponent(o),a=`${r.name.replace(/[^a-z0-9]/gi,"_").toLowerCase()}_workflow.json`,s=document.createElement("a");s.setAttribute("href",i),s.setAttribute("download",a),s.click()},importWorkflow:r=>new Promise((n,o)=>{const i=new FileReader;i.onload=r=>{try{var i;const o=null===(i=r.target)||void 0===i?void 0:i.result,a=JSON.parse(o);if(!a.name||!Array.isArray(a.workflowSteps))throw new Error("Invalid workflow file structure");for(const e of a.workflowSteps)if("number"!=typeof e.temperature||"number"!=typeof e.holdTimeInSeconds||"number"!=typeof e.pumpTimeInSeconds)throw new Error("Invalid workflow step data");const s={id:ns(),name:a.name,workflowSteps:a.workflowSteps.map(e=>({id:ns(),temperature:e.temperature,holdTimeInSeconds:e.holdTimeInSeconds,pumpTimeInSeconds:e.pumpTimeInSeconds}))};t([...e(),s]),n()}catch(a){o(a)}},i.onerror=()=>o(new Error("Failed to read file")),i.readAsText(r)}),exportAllWorkflows:()=>{const t=e(),r={workflows:t.map(e=>({name:e.name,workflowSteps:e.workflowSteps.map(e=>({temperature:e.temperature,holdTimeInSeconds:e.holdTimeInSeconds,pumpTimeInSeconds:e.pumpTimeInSeconds}))})),exportedAt:(new Date).toISOString(),version:"1.0",totalWorkflows:t.length},n=JSON.stringify(r,null,2),o="data:application/json;charset=utf-8,"+encodeURIComponent(n),i=`all_workflows_${(new Date).toISOString().split("T")[0]}.json`,a=document.createElement("a");a.setAttribute("href",o),a.setAttribute("download",i),a.click()},importAllWorkflows:e=>new Promise((r,n)=>{const o=new FileReader;o.onload=e=>{try{var o;const n=null===(o=e.target)||void 0===o?void 0:o.result,i=JSON.parse(n);if(!i.workflows||!Array.isArray(i.workflows))throw new Error("Invalid workflows file structure");const a=[];for(const e of i.workflows){if(!e.name||!Array.isArray(e.workflowSteps))throw new Error("Invalid workflow structure in file");for(const r of e.workflowSteps)if("number"!=typeof r.temperature||"number"!=typeof r.holdTimeInSeconds||"number"!=typeof r.pumpTimeInSeconds)throw new Error("Invalid workflow step data");const t={id:ns(),name:e.name,workflowSteps:e.workflowSteps.map(e=>({id:ns(),temperature:e.temperature,holdTimeInSeconds:e.holdTimeInSeconds,pumpTimeInSeconds:e.pumpTimeInSeconds}))};a.push(t)}t(a),r()}catch(i){n(i)}},o.onerror=()=>n(new Error("Failed to read file")),o.readAsText(e)})}})();return dn(gs.Provider,{value:{temperature:t,deviceStatus:r,brightness:n,vibration:o,shutdowntime:i,deviceSetting:a,heatingTime:s,deviceInformation:c,workflow:l},get children(){return e.children}})},ms=()=>{const e=Gr(gs);if(!e)throw new Error("useVolcanoDeviceContext must be used within a VolcanoDeviceProvider");return e},vs=ca("button")(c||(c=sr`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 12px;
  background: var(--secondary-bg);
  border: 2px solid var(--border-color);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-color);
    background: var(--bg-color);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: var(--bg-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(2px);
    color: var(--accent-color);
  }
`)),ws=ca("button")(l||(l=sr`
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 55px;
  background-color: var(--secondary-bg);
  border: none;
  color: var(--text-color);
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${0};
  box-shadow: ${0};
  transform: ${0};
  color: ${0};
  &:hover {
    background-color: var(--border-color);
  }
  &:active {
    background-color: var(--bg-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(4px);
  }
`),e=>e.isActive?"var(--bg-color)":"var(--secondary-bg)",e=>e.isActive?"0 5px 10px rgba(0, 0, 0, 0.3)":"0 4px 8px rgba(0, 0, 0, 0.2)",e=>e.isActive?"translateY(4px)":"none",e=>e.isActive?"var(--accent-color)":"var(--text-color)");ca(ws)(u||(u=sr`
  &:active {
    background-color: var(--bg-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(4px);
    color: var(--accent-color);
  }
`));const As=ca(vs)(d||(d=sr`
  width: 50px;
  height: 50px;
  font-size: 1rem;

  &:hover {
    border-color: var(--accent-color);
    background: var(--bg-color);
    color: var(--accent-color);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`)),ys=ca(vs)(f||(f=sr`
  width: 50px;
  height: 50px;
  font-size: 1rem;
  background: ${0};
  border: 2px solid
    ${0};
  color: ${0};

  ${0}

  &:hover {
    border-color: var(--accent-color);
    background: ${0};
    color: var(--accent-color);
  }
`),e=>e.isActive?"linear-gradient(135deg, rgba(255, 102, 0, 0.2) 0%, rgba(255, 102, 0, 0.1) 100%)":"var(--secondary-bg)",e=>e.isActive?"#ff6600":"var(--border-color)",e=>e.isActive?"#ff6600":"var(--text-color)",e=>e.isActive?"\n        box-shadow: \n          0 0 15px rgba(255, 102, 0, 0.3),\n          inset 0 0 15px rgba(255, 102, 0, 0.1);\n        animation: active-pulse 2s ease-in-out infinite alternate;\n        \n        @keyframes active-pulse {\n          from {\n            box-shadow: \n              0 0 15px rgba(255, 102, 0, 0.3),\n              inset 0 0 15px rgba(255, 102, 0, 0.1);\n          }\n          to {\n            box-shadow: \n              0 0 25px rgba(255, 102, 0, 0.5),\n              inset 0 0 20px rgba(255, 102, 0, 0.2);\n          }\n        }\n      ":"",e=>e.isActive?"linear-gradient(135deg, rgba(255, 102, 0, 0.3) 0%, rgba(255, 102, 0, 0.2) 100%)":"var(--bg-color)"),bs=ca(vs)(p||(p=sr`
  width: 40px;
  height: 35px;
  font-size: 14px;
`)),xs=ca(vs)(g||(g=sr`
  width: 120px;
  height: 50px;
  font-size: 1rem;
  background: ${0};
  border: 2px solid
    ${0};
  color: ${0};

  ${0}

  &:hover {
    border-color: var(--accent-color);
    background: ${0};
    color: var(--accent-color);
  }

  .icon {
    margin-right: 6px;
    font-size: 1.1rem;
  }
`),e=>e.isHeating?"linear-gradient(135deg, rgba(255, 102, 0, 0.2) 0%, rgba(255, 102, 0, 0.1) 100%)":"var(--secondary-bg)",e=>e.isHeating?"var(--accent-color)":"var(--border-color)",e=>e.isHeating?"var(--accent-color)":"var(--text-color)",e=>e.isHeating?"\n        box-shadow: \n          0 0 15px rgba(255, 102, 0, 0.3),\n          inset 0 0 15px rgba(255, 102, 0, 0.1);\n        animation: heater-pulse 2s ease-in-out infinite alternate;\n        \n        @keyframes heater-pulse {\n          from {\n            box-shadow: \n              0 0 15px rgba(255, 102, 0, 0.3),\n              inset 0 0 15px rgba(255, 102, 0, 0.1);\n          }\n          to {\n            box-shadow: \n              0 0 25px rgba(255, 102, 0, 0.5),\n              inset 0 0 20px rgba(255, 102, 0, 0.2);\n          }\n        }\n      ":"",e=>e.isHeating?"linear-gradient(135deg, rgba(255, 102, 0, 0.3) 0%, rgba(255, 102, 0, 0.2) 100%)":"var(--bg-color)");function Cs(e){return Ji({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M20 6 9 17 4 12"/>'},e)}function ks(e){return Ji({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10 12 15 17 10"/><path d="M12 15 12 3"/>'},e)}function Ts(e){return Ji({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>'},e)}function Ss(e){return Ji({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M5 3 19 12 5 21 5 3z"/>'},e)}function Fs(e){return Ji({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M12 5 12 19"/><path d="M5 12 19 12"/>'},e)}function Us(e){return Ji({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21 17 13 7 13 7 21"/><path d="M7 3 7 8 15 8"/>'},e)}function Os(e){return Ji({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>'},e)}function Es(e){return Ji({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11 10 17"/><path d="M14 11 14 17"/>'},e)}function Is(e){return Ji({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8 12 3 7 8"/><path d="M12 3 12 15"/>'},e)}function Bs(e){return Ji({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M18 6 6 18"/><path d="M6 6 18 18"/>'},e)}const Ns=ca("div")(h||(h=sr`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
`)),Ds=ca("div")(m||(m=sr`
  background: var(--secondary-bg);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--border-color);
  margin-bottom: 20px;
`)),Vs=ca("h2")(v||(v=sr`
  color: var(--accent-color);
  font-size: 1.5rem;
  margin-bottom: 24px;
  text-align: center;
  font-family: CustomFont;
`)),zs=ca("ol")(w||(w=sr`
  list-style: none;
  counter-reset: step-counter;
  padding: 0;
  margin: 0 0 24px 0;
`)),Ls=ca("li")(A||(A=sr`
  counter-increment: step-counter;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: counter(step-counter);
    position: absolute;
    left: 16px;
    top: 16px;
    width: 32px;
    height: 32px;
    background: var(--accent-color);
    color: var(--text-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: CustomFont;
  }

  &:hover {
    border-color: var(--accent-color);
    background: rgba(255, 102, 0, 0.05);
  }
`)),Ps=ca("div")(y||(y=sr`
  margin-left: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`)),Ws=ca("div")(b||(b=sr`
  flex: 1;
  color: var(--secondary-text);
  font-size: 0.95rem;
`)),js=ca("div")(x||(x=sr`
  color: var(--secondary-text);
  font-size: 0.85rem;
  margin-bottom: 4px;
`)),Ms=ca("div")(C||(C=sr`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 600;
  font-family: CustomFont;
`)),Rs=ca("div")(k||(k=sr`
  display: flex;
  gap: 8px;
`)),Hs=ca("button")(T||(T=sr`
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--secondary-text);
  transition: all 0.2s ease;

  &:hover {
    background: var(--secondary-bg);
    color: var(--accent-color);
    border-color: var(--accent-color);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`)),$s=ca("div")(S||(S=sr`
  display: flex;
  gap: 12px;
  justify-content: center;
`)),Ys=ca(ws)(F||(F=sr`
  min-width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
`)),Gs=ca("div")(U||(U=sr`
  text-align: center;
  padding: 40px;
  color: var(--secondary-text);
  font-size: 1rem;
`)),Zs=()=>{const{workflow:e}=ms(),t=ka(),{deleteWorkflowStepFromList:r,workflowSteps:n,updateWorkflowStepsInList:o,addNewWorkflowStep:i}=e,{workflowListId:a}=Oi(),s=Ui();return dn(Ns,{get children(){return dn(Ds,{get children(){return[dn(Vs,{get children(){return t("editWorkflowSteps")}}),dn(An,{get when(){return n().length>0},get fallback(){return dn(Gs,{get children(){return t("noStepsYet")}})},get children(){return dn(zs,{get children(){return dn(wn,{get each(){return n()},children:e=>dn(Ls,{get children(){return dn(Ps,{get children(){return[dn(Ws,{get children(){return[dn(js,{get children(){return t("temperature")}}),dn(Ms,{get children(){return[Fn(()=>e.temperature),"°C"]}})]}}),dn(Ws,{get children(){return[dn(js,{get children(){return t("holdTime")}}),dn(Ms,{get children(){return e.holdTimeInSeconds}})]}}),dn(Ws,{get children(){return[dn(js,{get children(){return t("pumpTime")}}),dn(Ms,{get children(){return e.pumpTimeInSeconds}})]}}),dn(Rs,{get children(){return[dn(Hs,{onClick:()=>a&&s(va(a,e.id)),get children(){return dn(Ts,{size:18})}}),dn(Hs,{onClick:()=>a&&r(a,e.id),get children(){return dn(Es,{size:18})}})]}})]}})}})})}})}}),dn($s,{get children(){return[dn(Ys,{onClick:()=>s(ha()),get children(){return[dn(Bs,{size:20}),Fn(()=>t("cancel"))]}}),dn(Ys,{onClick:()=>i(),get children(){return[dn(Fs,{size:20}),Fn(()=>t("add"))]}}),dn(Ys,{onClick:()=>{a&&o(a,n()),s(ha())},get children(){return[dn(Us,{size:20}),Fn(()=>t("save"))]}})]}})]}})}})},Js=ca("input")(O||(O=sr`
  width: 100%;
  height: 8px;
  -webkit-appearance: none;
  appearance: none;
  background: var(--border-color);
  outline: none;
  border-radius: 4px;
  transition: all 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent-color);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(255, 102, 0, 0.5);
    transition: all 0.2s;

    &:hover {
      background: var(--accent-color);
      box-shadow: 0 2px 12px rgba(255, 102, 0, 0.7);
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent-color);
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px rgba(255, 102, 0, 0.5);
    transition: all 0.2s;

    &:hover {
      background: var(--accent-color);
      box-shadow: 0 2px 12px rgba(255, 102, 0, 0.7);
    }
  }
`)),Xs=ca("div")(E||(E=sr`
  display: flex;
  justify-content: space-between;
`)),Qs=ca("span")(I||(I=sr`
  position: relative;
  margin-top: 15px;
  text-align: center;
  width: 1em;
  font-family: CustomFont;
  margin-left: ${0};
  color: var(--secondary-text);
  font-size: 0.9rem;
`),e=>e.isFirst?"5px":"0px"),qs=ca("div")(B||(B=sr`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 8px;
  background: #555;
  visibility: ${0};
`),e=>e.isVisible?"visible":"hidden"),_s=e=>{const[t,r]=Nr([]);return Vr(()=>{if(void 0===e.min||!e.max)return;const t=[];for(let r=e.min;r<=e.max;r+=null!==(n=e.step)&&void 0!==n?n:1){var n;t.push(r)}r(t)}),dn(Xs,{get children(){return dn(wn,{get each(){return t()},children:(t,r)=>dn(Qs,{get isFirst(){return 0===r()},get children(){return[t,dn(qs,{get isVisible(){return t!==e.value}})]}})})}})},Ks=ca("div")(N||(N=sr`
  margin-top: 20px;
  display: flex;
  align-items: start;
  flex-direction: column;
`)),ec=ca("div")(D||(D=sr`
  margin-bottom: 15px;
  margin-left: 3px;
  display: flex;
  align-items: center;
  color: var(--secondary-text);
  font-size: 1rem;
`)),tc=ca("div")(V||(V=sr`
  display: flex;
  flex-direction: column;
  width: 100%;
`)),rc=e=>dn(Ks,{get children(){return[dn(ec,{get children(){return e.label}}),dn(tc,{get children(){return[dn(Js,{type:"range",get min(){return e.min},get max(){return e.max},get step(){return e.step},get value(){return e.value},onInput:t=>{const r=Number(t.currentTarget.value);e.onInput(r)}}),dn(_s,{get min(){return e.min},get max(){return e.max},get step(){return e.step},get value(){return e.value||e.min}})]}})]}}),nc=ca("div")(z||(z=sr`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
`)),oc=ca("div")(L||(L=sr`
  background: var(--secondary-bg);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--border-color);
`)),ic=ca("h2")(P||(P=sr`
  color: var(--accent-color);
  font-size: 1.5rem;
  margin-bottom: 24px;
  text-align: center;
  font-family: CustomFont;
`)),ac=ca("form")(W||(W=sr`
  display: flex;
  flex-direction: column;
  gap: 20px;
`)),sc=ca("div")(j||(j=sr`
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
`)),cc=ca("div")(M||(M=sr`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
`)),lc=ca(ws)(R||(R=sr`
  min-width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
`)),uc=()=>{const{workflow:e}=ms(),{workflowSteps:t,editWorkflowStepInList:r}=e,{workflowStepId:n,workflowListId:o}=Oi(),i=Ui(),a=zr(()=>t().find(e=>e.id===n)),[s,c]=Nr(0),[l,u]=Nr(0),[d,f]=Nr(0);Vr(()=>{const e=a();e&&(c(e.temperature),u(e.holdTimeInSeconds),f(e.pumpTimeInSeconds))});const p=ka(),g=e=>{e.preventDefault(),o&&n&&(r(o,n,{id:n,temperature:s(),holdTimeInSeconds:l(),pumpTimeInSeconds:d()}),i(ma(o)))};return dn(nc,{get children(){return dn(oc,{get children(){return[dn(ic,{get children(){return p("editStep")}}),dn(ac,{onSubmit:g,get children(){return[dn(sc,{get children(){return dn(rc,{get value(){return s()},get label(){return`${p("temperature")}: ${s()} °C`},min:150,step:5,max:230,onInput:e=>c(e)})}}),dn(sc,{get children(){return dn(rc,{get value(){return l()},get label(){return`${p("holdTime")}: ${l()} ${p("sec")}`},min:0,step:5,max:60,onInput:e=>u(e)})}}),dn(sc,{get children(){return dn(rc,{get value(){return d()},get label(){return`${p("pumpTime")}: ${d()} ${p("sec")}`},min:0,step:5,max:120,onInput:e=>f(e)})}}),dn(cc,{get children(){return[dn(lc,{type:"button",onClick:()=>o&&i(ma(o)),get children(){return[dn(Bs,{size:20}),Fn(()=>p("cancel"))]}}),dn(lc,{type:"submit",get children(){return[dn(Us,{size:20}),Fn(()=>p("save"))]}})]}})]}})]}})}})},dc=e=>{const t=Ui(),{connectionState:r}=ai();return Vr(()=>{const e=r();e!==eo.NOT_CONNECTED&&e!==eo.CONNECTION_FAILED||t(ba())}),dn(hs,{get children(){return e.children}})};function fc(e){return Ji({a:{viewBox:"0 0 384 512"},c:'<path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3 5 7.2 10.2 14.3 15.4 21.4 19.8 27.1 39.7 54.4 49.2 86.2h160zm-80 128c44.2 0 80-35.8 80-80v-16H112v16c0 44.2 35.8 80 80 80zm-80-336c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/>'},e)}function pc(e){return Ji({a:{viewBox:"0 0 448 512"},c:'<path d="M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32z"/>'},e)}function gc(e){return Ji({a:{viewBox:"0 0 448 512"},c:'<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>'},e)}function hc(e){return Ji({a:{viewBox:"0 0 512 512"},c:'<path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c53 0 96-43 96-96S405 0 352 0h-32c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/>'},e)}const mc=ca("div")(H||(H=sr`
  font-family: "CustomFont";
  display: flex;
  line-height: 1;
  justify-content: center;
`)),vc=ca("div")($||($=sr``)),wc=ca("div")(Y||(Y=sr`
  display: flex;
  align-self: flex-start;
  margin-left: 0.05em;
  margin-top: 0.03em;
`)),Ac=ca("div")(G||(G=sr`
  font-size: 0.5em;
`)),yc=ca("div")(Z||(Z=sr`
  font-size: 0.3em;
  margin-right: 0.1em;
`)),bc=ca("div")(J||(J=sr`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  margin-right: 0.1em;
`)),xc=e=>dn(mc,{get children(){return[Fn(()=>Fn(()=>!!e.isOffset)()&&dn(bc,{children:"+"})),dn(vc,{get children(){return e.value}}),dn(wc,{get children(){return[dn(yc,{children:"°"}),dn(Ac,{get children(){return e.unit}})]}})]}}),Cc=ca("div")(X||(X=sr`
  text-align: center;
  margin-bottom: 24px;
`)),kc=ca("span")(Q||(Q=sr`
  display: block;
  font-size: 0.9rem;
  color: #ffffff;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`)),Tc=ca("div")(q||(q=sr`
  margin-bottom: -10px;
  font-family: "CustomFont";
  font-size: 72px;
  line-height: 1;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${0};
  transition: all 0.3s ease;

  ${0}
`),e=>e.isTarget?"var(--text-color)":"#f60",e=>e.isTarget?"":"\n        text-shadow: \n          0 0 10px rgba(255, 102, 0, 0.8),\n          0 0 20px rgba(255, 102, 0, 0.6);\n      "),Sc=ca("div")(_||(_=sr`
  margin-bottom: -10px;
  font-family: "CustomFont";
  font-size: 72px;
  line-height: 1;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${0};
  transition: all 0.3s ease;

  ${0}
`),e=>e.isTarget?"var(--text-color)":"#f60",e=>e.isTarget?"\n        color: gold;      \n        text-shadow: \n          0 0 10px rgba(255, 102, 0, 0.8),\n          0 0 20px rgba(255, 102, 0, 0.6);\n      ":""),Fc=ca("div")(K||(K=sr`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

`)),Uc=ca("div")(ee||(ee=sr`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;

  @media (max-width: 375px) {
    gap: 25px;
  }

  @media (max-width: 320px) {
    gap: 5px;
  }
`)),Oc=()=>{const{temperature:e,deviceSetting:t}=ms(),{getTargetTemperature:r,getCurrentTemperature:n,setTargetTemperature:o}=e,{isCelsius:i}=t,a=ka(),s=()=>{o(r()+1)},c=()=>{o(r()-1)};return dn(Fc,{get children(){return[dn(Cc,{get children(){return[dn(kc,{get children(){return a("currentTemperature")}}),dn(Tc,{get children(){return dn(xc,{get value(){return n()},get unit(){return i()?"C":"F"}})}})]}}),dn(Uc,{get children(){return[dn(As,{onClick:c,get children(){return dn(pc,{size:"24px"})}}),dn(Sc,{isTarget:!0,get children(){return dn(xc,{get value(){return r()},get unit(){return i()?"C":"F"}})}}),dn(As,{onClick:s,get children(){return dn(gc,{size:"24px"})}})]}})]}})};function Ec(e){return Ji({a:{viewBox:"0 0 24 24"},c:'<path d="M9.245.05c-.042-.035-.14-.035-.22-.05-.041.06-.098.113-.113.166a3.114 3.114 0 0 0-.064.416 15.42 15.42 0 0 1-3.742 8.693c-1.258 1.474-2.51 2.982-3.44 4.585-2.293 3.972-.249 8.031 4.763 9.804.163.06.348.087.76.181-1.701-1.534-2.57-3.1-2.28-4.944.284-1.765 1.172-3.337 2.525-4.77a1.043 1.043 0 0 1 .099.549c-.068 1.572.453 2.96 2.063 4.055.741.507 1.41 1.081 2.079 1.644.684.57.884 1.263.688 2.015-.09.366-.227.725-.378 1.171 1.145-.11 2.203-.264 2.914-.9.68-.604 1.183-1.322 1.909-2.154.049.707.15 1.255.113 1.8-.045.566-.22 1.126-.336 1.689 3.477-.525 6.546-3.934 6.682-7.427.098-2.543-2.071-6.274-3.893-6.637l.302.688c.631 1.391.817 2.8.416 4.256-.4 1.448-2.426 3.073-4.214 3.277.06-.144.087-.28.17-.39 1.927-2.596 1.946-5.31.854-8.084C15.44 5.98 12.632 2.88 9.245.053Z"/>'},e)}var Ic=On("<div>");const Bc=ca("div")(te||(te=sr`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 45px;

  @media (max-width: 375px) {
    gap: 25px;
  }

  @media (max-width: 320px) {
    gap: 5px;
  }
`)),Nc=ca("div")(re||(re=sr`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "CustomFont";
  font-size: 25px;
  color: green;
  min-width: 160px;
  margin-bottom: -10px;
`)),Dc=()=>{const{deviceStatus:e}=ms(),t=ka(),{isPumpActive:r,isHeatingActive:n,setHeatOn:o,setHeatOff:i,setPumpOn:a,setPumpOff:s}=e,c=()=>{n()?i():o()},l=()=>{r()?s():a()};return dn(Bc,{get children(){return[(o=Ic(),Nn(o,dn(ys,{get isActive(){return n()},onClick:c,get children(){return dn(Ec,{size:"30px"})}})),o),dn(Nc,{get children(){return t("hybrid")}}),(e=Ic(),Nn(e,dn(ys,{get isActive(){return r()},onClick:l,get children(){return dn(hc,{size:"30px",style:{transform:"rotate(270deg)"}})}})),e)];var e,o}})};var Vc=On("<div> <!> ");const zc=ca("div")(ne||(ne=sr`
  display: ${0};
  align-items: center;
  justify-content: center;
  font-family: Arial;
  background: rgba(255, 102, 0, 0.1);
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  padding: 12px 20px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  min-width: 800px;
`),e=>e.isVisible?"flex":"none"),Lc=()=>{const{deviceStatus:e,shutdowntime:t}=ms(),{isAutoShutdownActive:r}=e,{getAutoOffTimeInSec:n}=t,o=ka();return dn(zc,{get isVisible(){return r()},get children(){var e=Vc(),t=e.firstChild,r=t.nextSibling;return r.nextSibling,Nn(e,()=>o("deviceWillShutdownIn"),t),Nn(e,n,r),Nn(e,()=>o("sec"),null),e}})},Pc=()=>{const e=ka(),{brightness:t}=ms(),{getBrightness:r,setTargetBrightness:n}=t;return dn(rc,{get value(){return r()},get label(){return`${e("deviceBrightness")}: ${r()} %`},min:0,step:10,max:100,onInput:e=>{n(e)}})},Wc=()=>{const e=ka(),{shutdowntime:t}=ms(),{getShutoffTimeInSec:r,setShutOffTime:n}=t;return dn(rc,{get value(){return r()/60},get label(){return`${e("autoMaticShutdownTime")}: ${r()/60} min`},min:1,step:1,max:10,onInput:e=>{n(60*e)}})},jc=ca("div")(oe||(oe=sr`
  display: flex;
  align-items: center;
`)),Mc=ca("div")(ie||(ie=sr`
  width: 72px;
  height: 36px;
  background: var(--secondary-bg);
  border-radius: 36px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
  border: 2px solid var(--border-color);

  &:hover {
    background: var(--bg-color);
    border-color: var(--text-color);
  }
`)),Rc=ca("div")(ae||(ae=sr`
  width: 30px;
  height: 30px;
  color: var(--text-color);
  background: ${0};
  position: absolute;
  top: 3px;
  left: ${0};
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${0};
`),e=>e.isOn?"#f60":"var(--border-color)",e=>e.isOn?"39px":"1px",e=>e.isOn?"0 2px 8px rgba(255, 102, 0, 0.5)":"0 2px 4px rgba(0, 0, 0, 0.3)"),Hc=ca("div")(se||(se=sr`
  margin-left: 10px;
  color: var(--text-color);
  font-size: 1rem;
`)),$c=e=>{const[t,r]=Nr(!1);Vr(()=>{r(!!e.isOn)});const n=()=>{r(!t()),e.onToggle(t())};return dn(jc,{get children(){return[dn(Mc,{onClick:n,get children(){return dn(Rc,{get isOn(){return t()},get children(){return e.icon}})}}),dn(An,{get when(){return e.label},get children(){return dn(Hc,{get children(){return e.label}})}})]}})},Yc=()=>{const e=ka(),{vibration:t}=ms(),{isVibrationOn:r,setVibrationOff:n,setVibrationOn:o}=t;return dn($c,{get label(){return e("vibration")},onToggle:e=>{e?o():n()},get isOn(){return r()},get icon(){return dn(Qi,{size:"18px"})}})};function Gc(e){return Ji({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13V2a6 6 0 1 1 0 12z"/>'},e)}const Zc=()=>{const{toggleDarkMode:e,isDarkMode:t}=li(),r=ka();return dn($c,{get label(){return r("darkMode")},onToggle:e,get isOn(){return t()},get icon(){return dn(Gc,{size:"18px"})}})},Jc=()=>{const e=ka(),{deviceSetting:t}=ms(),{isDisplayOnCooling:r,setDisplayOnCoolingOn:n,setDisplayOnCoolingOff:o}=t;return dn($c,{get label(){return e("standbyLight")},onToggle:e=>{e?n():o()},get isOn(){return r()},get icon(){return dn(fc,{size:"18px"})}})},Xc=e=>new Promise(t=>setTimeout(t,e)),Qc=e=>{const[t,r]=Nr(0),[n,o]=Nr(!1),[i,a]=Nr(!1),{temperature:s,deviceStatus:c}=ms(),{getCurrentTemperature:l,getTargetTemperature:u,setTargetTemperature:d}=s,{isPumpActive:f,isHeatingActive:p,setPumpOn:g,setPumpOff:h,setHeatOn:m,setHeatOff:v}=c;let w=null,A=null,y=null;const b=()=>{w&&clearInterval(w),A&&clearTimeout(A),y&&clearTimeout(y),w=null,A=null,y=null};jr(()=>{b()});const x=function(){var e=lr(function*(e){console.log(`Executing step ${t()+1}:`,e),yield d(e.temperature),yield Xc(750),p()||(yield m()),yield new Promise(e=>{const t=u();w=setInterval(()=>{const r=l();r>=t-1&&r<=t+1&&(w&&clearInterval(w),w=null,console.log(`Temperature reached: ${r}°C (target: ${t}°C)`),e())},1500)}),e.holdTimeInSeconds>0&&(console.log(`Holding for ${e.holdTimeInSeconds} seconds...`),yield Xc(1e3*e.holdTimeInSeconds)),e.pumpTimeInSeconds>0&&(console.log(`Activating pump for ${e.pumpTimeInSeconds} seconds...`),f()||(yield g()),yield Xc(1e3*e.pumpTimeInSeconds),f()&&(yield h()))});return function(t){return e.apply(this,arguments)}}(),C=function(){var n=lr(function*(){const n=e(),o=t();if(o>=n.length)return console.log("Workflow completed!"),void(yield T());yield x(n[o]),r(e=>e+1),t()<n.length?yield C():(console.log("Workflow completed!"),yield T())});return function(){return n.apply(this,arguments)}}(),k=function(){var t=lr(function*(){const t=e();if(t&&0!==t.length){console.log("Starting workflow with",t.length,"steps"),o(!0),a(!1),r(0);try{yield C()}catch(n){console.error("Workflow error:",n),yield T()}}else console.error("No workflow steps defined")});return function(){return t.apply(this,arguments)}}(),T=function(){var e=lr(function*(){console.log("Stopping workflow"),b(),o(!1),a(!1),r(0),p()&&(yield v()),f()&&(yield h())});return function(){return e.apply(this,arguments)}}(),S=function(){var e=lr(function*(){console.log("Resuming workflow"),a(!1),yield C()});return function(){return e.apply(this,arguments)}}();return{startWorkflow:k,stopWorkflow:T,pauseWorkflow:()=>{console.log("Pausing workflow"),b(),a(!0)},resumeWorkflow:S,currentStep:t,isRunning:n,isPaused:i}},qc=ca("div")(ce||(ce=sr`
  background: var(--bg-color);
  border: 2px solid
    ${0};
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: var(--accent-color);
    background: rgba(255, 102, 0, 0.05);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 102, 0, 0.2);
  }
`),e=>e.isActive?"var(--accent-color)":"var(--border-color)"),_c=ca("div")(le||(le=sr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`)),Kc=ca("div")(ue||(ue=sr`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`)),el=ca("input")(de||(de=sr`
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 4px 8px;
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 600;
  font-family: CustomFont;
  flex: 1;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`)),tl=ca("button")(fe||(fe=sr`
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--secondary-text);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: var(--accent-color);
    background: var(--secondary-bg);
  }
`)),rl=ca("div")(pe||(pe=sr`
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 600;
  font-family: CustomFont;
`)),nl=ca("div")(ge||(ge=sr`
  color: var(--tertiary-text);
  font-size: 0.9rem;
  margin-bottom: 12px;
`)),ol=ca("div")(he||(he=sr`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`)),il=ca("button")(me||(me=sr`
  background: ${0};
  border: ${0};
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${0};
  transition: all 0.2s ease;

  &:hover {
    background: ${0};
    color: ${0};
    transform: scale(1.05);
    box-shadow: ${0};
  }

  &:active {
    transform: scale(0.95);
  }
`),e=>"play"===e.variant?"linear-gradient(135deg, #f60 0%, #ff7700 100%)":"stop"===e.variant?"linear-gradient(135deg, #d32f2f 0%, #f44336 100%)":"transparent",e=>"play"===e.variant||"stop"===e.variant?"none":"1px solid var(--border-color)",e=>"play"===e.variant||"stop"===e.variant?"white":"var(--secondary-text)",e=>"play"===e.variant?"linear-gradient(135deg, #ff7700 0%, #ff8800 100%)":"stop"===e.variant?"linear-gradient(135deg, #f44336 0%, #e57373 100%)":"var(--secondary-bg)",e=>"edit"===e.variant||"delete"===e.variant?"var(--accent-color)":"white",e=>"play"===e.variant||"stop"===e.variant?"0 2px 8px rgba(255, 102, 0, 0.4)":"0 2px 8px rgba(0, 0, 0, 0.1)"),al=ca("div")(ve||(ve=sr`
  width: 100%;
  height: 4px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 12px;
`)),sl=ca("div")(we||(we=sr`
  width: ${0}%;
  height: 100%;
  background: linear-gradient(90deg, #f60, #ff7700);
  transition: width 0.3s ease;
`),e=>e.progress),cl=e=>{const{workflow:t}=ms(),{setSelectedWorkflowId:r,deleteWorkflowFromList:n,renameWorkflow:o,exportWorkflow:i}=t,a=Ui(),s=ka(),[c,l]=Nr(!1),[u,d]=Nr(e.workflow.name),f=()=>e.workflow.workflowSteps,{startWorkflow:p,stopWorkflow:g,currentStep:h,isRunning:m}=Qc(()=>f()),v=function(){var t=lr(function*(t){t.stopPropagation(),r(e.workflow.id),yield p()});return function(e){return t.apply(this,arguments)}}(),w=function(){var e=lr(function*(e){e.stopPropagation(),yield g()});return function(t){return e.apply(this,arguments)}}(),A=t=>{t.stopPropagation(),r(e.workflow.id),a(ma(e.workflow.id))},y=t=>{t.stopPropagation(),confirm(`${s("deleteWorkflow")} "${e.workflow.name}"?`)&&n(e.workflow.id)},b=t=>{t.stopPropagation(),i(e.workflow.id)},x=t=>{t.stopPropagation(),d(e.workflow.name),l(!0)},C=t=>{t.stopPropagation();const r=u().trim();r&&r!==e.workflow.name&&o(e.workflow.id,r),l(!1)},k=t=>{t.stopPropagation(),l(!1),d(e.workflow.name)};return dn(qc,{get isActive(){return m()},get children(){return[dn(_c,{get children(){return dn(Kc,{get children(){return dn(An,{get when(){return c()},get fallback(){return[dn(rl,{get children(){return e.workflow.name}}),dn(tl,{onClick:x,get children(){return dn(Ts,{size:14})}})]},get children(){return[dn(el,{get value(){return u()},onInput:e=>d(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&C(e),"Escape"===e.key&&k(e)}}),dn(tl,{onClick:C,get children(){return dn(Cs,{size:14})}}),dn(tl,{onClick:k,get children(){return dn(Bs,{size:14})}})]}})}})}}),dn(nl,{get children(){return[Fn(()=>f().length)," ",Fn(()=>Fn(()=>1===f().length)()?s("step"):s("steps")),dn(An,{get when(){return m()},get children(){return[" ",Fn(()=>s("step"))," ",Fn(()=>h()+1),"/",Fn(()=>f().length)]}})]}}),dn(ol,{get children(){return[dn(An,{get when(){return!m()},get fallback(){return dn(il,{variant:"stop",onClick:w,get children(){return dn(Os,{size:18})}})},get children(){return dn(il,{variant:"play",onClick:v,get children(){return dn(Ss,{size:18})}})}}),dn(il,{variant:"edit",onClick:A,get children(){return dn(Ts,{size:18})}}),dn(il,{variant:"export",onClick:b,get title(){return s("exportWorkflowDescription")},get children(){return dn(ks,{size:18})}}),dn(il,{variant:"delete",onClick:y,get children(){return dn(Es,{size:18})}})]}}),dn(An,{get when(){return m()},get children(){return dn(al,{get children(){return dn(sl,{get progress(){return(()=>{if(!m())return 0;const e=f().length;return 0===e?0:h()/e*100})()}})}})}})]}})};var ll=On("<span>");const ul=ca("div")(Ae||(Ae=sr`
  min-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
`)),dl=ca("h2")(ye||(ye=sr`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 24px;
  text-align: center;
  font-family: CustomFont;
`)),fl=ca("div")(be||(be=sr`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`)),pl=ca("div")(xe||(xe=sr`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`)),gl=ca(ws)(Ce||(Ce=sr`
  width: 100%;
  height: 50px;
  background: var(--secondary-bg);
  border: 2px dashed var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-color);
    background: var(--bg-color);
    color: var(--accent-color);
  }
`)),hl=ca(ws)(ke||(ke=sr`
  width: 100%;
  height: 50px;
  background: var(--secondary-bg);
  border: 2px dashed var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-color);
    background: var(--bg-color);
    color: var(--accent-color);
  }
`)),ml=()=>{const{workflow:e}=ms(),t=ka(),{workflowList:r,addWorkflowToList:n,exportAllWorkflows:o,importAllWorkflows:i,importWorkflow:a}=e,s=()=>{o()},c=()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=function(){var e=lr(function*(e){var r;const n=null===(r=e.target.files)||void 0===r?void 0:r[0];if(n&&confirm(t("confirmImportAll")))try{yield i(n)}catch(o){console.error(`${t("invalidWorkflowFile")}: ${o.message}`)}});return function(t){return e.apply(this,arguments)}}(),e.click()},l=()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=function(){var e=lr(function*(e){var r;const n=null===(r=e.target.files)||void 0===r?void 0:r[0];if(n)try{yield a(n)}catch(o){console.error(`${t("invalidWorkflowFile")}: ${o.message}`)}});return function(t){return e.apply(this,arguments)}}(),e.click()};return dn(ul,{get children(){return[dn(dl,{get children(){return t("workflows")}}),dn(fl,{get children(){return dn(wn,{get each(){return r()},children:e=>dn(cl,{workflow:e})})}}),dn(hl,{onClick:n,get children(){return[dn(Fs,{size:24}),(e=ll(),Nn(e,()=>t("addWorkflow")),e)];var e}}),dn(pl,{get children(){return[dn(gl,{onClick:s,get title(){return t("exportAllWorkflowsDescription")},get children(){return[dn(ks,{size:24}),Fn(()=>t("exportAllWorkflows"))]}}),dn(gl,{onClick:c,get title(){return t("importAllWorkflowsDescription")},get children(){return[dn(Is,{size:24}),Fn(()=>t("importAllWorkflows"))]}}),dn(gl,{onClick:l,get title(){return t("importWorkflowDescription")},get children(){return[dn(Is,{size:24}),Fn(()=>t("importWorkflow"))]}})]}})]}})};var vl=On("<span>h"),wl=On("<span>m");const Al=ca("div")(Te||(Te=sr`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`)),yl=ca("h3")(Se||(Se=sr`
  color: #f60;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-family: CustomFont;
`)),bl=ca("div")(Fe||(Fe=sr`
  font-family: "CustomFont";
  font-size: 1.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
`)),xl=ca("span")(Ue||(Ue=sr`
  margin: 0 4px;
`)),Cl=()=>{const{getHoursOfHeating:e,getMinutesOfHeating:t}=Qa(),r=ka();return dn(Al,{get children(){return[dn(yl,{get children(){return r("deviceRuntime")}}),dn(bl,{get children(){return[dn(xl,{get children(){return e()}}),vl(),dn(xl,{get children(){return t()}}),wl()]}})]}})};var kl=On('<iframe width=800 height=480 src="https://www.youtube.com/embed/2wYtJwDkKIk?si=oNif7cIBLopPzclP?autoplay=1&amp;loop=1"title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy=strict-origin-when-cross-origin allowfullscreen>'),Tl=On('<div style="align:center, min-width:800px"><audio controls src=/sound-1.mp3 loop>'),Sl=On('<div style="align:center, min-width:800px"><audio controls src=/sound.mp3 loop>'),Fl=On('<div style="align:center, min-width:800px"><audio controls src=/sound-2.mp3 loop>'),Ul=On('<iframe width=800 height=480 src="https://www.youtube.com/embed/1zcIUk66HX4?si=_CRmoZZ-756DNcyJ"title="YouTube video player"frameborder=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy=strict-origin-when-cross-origin allowfullscreen>');const Ol=ca("div")(Oe||(Oe=sr`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 24px;
  text-align: center;
  font-family: CustomFont;
`)),El=ca("div")(Ee||(Ee=sr`
  min-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
`)),Il=ca("div")(Ie||(Ie=sr`
  min-width: 700px;
  min-height: 450px;
  padding: 20px;
  margin: 20px auto;
  display: flex;
  align: center;
  justify-content: center; /* center the audio player */

`)),Bl=ca("div")(Be||(Be=sr`
  min-width: 800px;
  min-height: 450px;
  padding: 20px;
  margin: 20px auto;
  display: flex;
  align: center;
  justify-content: center; /* center the audio player */
  border-radius: 16px;
  border: 1px solid var(--border-color);

`)),Nl=ca("div")(Ne||(Ne=sr`
  min-width: 750px;
  min-height: 30px;
  padding: 20px;
  display: flex;
  align: center;
  justify-content: center; /* center the audio player */
  background-color: var(--card-bg-color, transparent); /* optional background */

  audio {
    width: 800px;       /* fixed width */
    max-width: 100%;    /* responsive fallback */
    background-color: black;
    color: white;
    border-radius: 8px;
  }
`)),Dl=ca("div")(De||(De=sr`
  min-width: 750px;
  min-height: 30px;
  padding: 20px;
  display: flex;
  align: center;
  justify-content: center; /* center the audio player */
  background-color: var(--card-bg-color, transparent); /* optional background */

  audio {
    width: 800px;       /* fixed width */
    max-width: 100%;    /* responsive fallback */
    background-color: black;
    color: white;
    border-radius: 8px;
  }
`)),Vl=ca("div")(Ve||(Ve=sr`
  min-width: 750px;
  min-height: 30px;
  padding: 20px;
  display: flex;
  align: center;
  justify-content: center; /* center the audio player */
  background-color: var(--card-bg-color, transparent); /* optional background */

  audio {
    width: 800px;       /* fixed width */
    max-width: 100%;    /* responsive fallback */
    background-color: black;
    color: white;
    border-radius: 8px;
  }
`)),zl=ca("div")(ze||(ze=sr`
  min-width: 800px;
  min-height: 120px;
  background-image: url('/background-1.png');
  background-position: center;
  background-size: 800px;
  background-repeat: no-repeat;
  padding: 20px;
  margin: 20px auto;

`)),Ll=ca("div")(Le||(Le=sr`
  min-width: 800px;
  min-height: 10px;
  background-image: url('/background-2.png');
  background-position: center;
  background-size: 800px;
  background-repeat: no-repeat;
  padding: 20px;
  margin: 20px auto;
  border-radius: 16px;

`)),Pl=ca("div")(Pe||(Pe=sr`
  min-width: 800px;
  min-height: 150px;
  background-image: url('/background-3.png');
  background-position: center;
  background-size: 800px;
  background-repeat: no-repeat;
  padding: 20px;

`)),Wl=ca("div")(We||(We=sr`
  border-radius: 16px;
  padding: 20px;
  margin: 20px auto;
  border: 1px solid var(--border-color);
  min-width: 800px;
`)),jl=ca("div")(je||(je=sr`
  min-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
`)),Ml=ca("h2")(Me||(Me=sr`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 24px;
  text-align: center;
  font-family: CustomFont;
`)),Rl=ca("div")(Re||(Re=sr`
  margin-bottom: 20px;
`)),Hl=ca("div")(He||(He=sr`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`)),$l=ca("div")($e||($e=sr`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 15px;
  }
`)),Yl=()=>{const e=ka(),t=Ui(),{connectionState:r}=ai();return Vr(()=>{const e=r();e!==eo.NOT_CONNECTED&&e!==eo.CONNECTION_FAILED||t(ba())}),[dn(zl,{}),dn(Lc,{}),dn(Wl,{get children(){return[dn(Oc,{}),dn(Dc,{}),dn(Cl,{})]}}),dn(ml,{}),dn(jl,{get children(){return[dn(Ml,{get children(){return e("settings")}}),dn(Rl,{get children(){return dn(Wc,{})}}),dn(Rl,{get children(){return dn(Pc,{})}}),dn(Hl,{get children(){return[dn($l,{get children(){return[dn(Yc,{}),dn(Jc,{})]}}),dn($l,{get children(){return dn(Zc,{})}})]}}),dn(Rl,{})]}}),dn(Ll,{}),dn(El,{get children(){return[dn(Ol,{get children(){return e("zenstudio")}}),dn(Il,{get children(){return kl()}}),dn(Dl,{get children(){return Tl()}}),dn(Vl,{get children(){return Sl()}}),dn(Nl,{get children(){return Fl()}})]}}),dn(Bl,{get children(){return Ul()}}),dn(Pl,{})]};function Gl(e=500){const{getCharacteristics:t,deviceInfo:r}=ai(),[n,o]=Nr(null),i=e=>Math.round(1.8*e+32),a=zr(()=>{const e=n();return e&&null!==e.targetTemp?e.isCelsius?e.targetTemp:i(e.targetTemp):0}),s=zr(()=>{const e=n();return e&&null!==e.boostTemp?e.isCelsius?e.boostTemp:Math.round(i(e.boostTemp)-32):0}),c=zr(()=>{const e=n();return e&&null!==e.superBoostTemp?e.isCelsius?e.superBoostTemp:Math.round(i(e.superBoostTemp)-32):0}),l=zr(()=>{var e,t,r;const o=n();if(!o)return 0;const a=o.heaterMode,s=null!==(e=o.targetTemp)&&void 0!==e?e:0,c=null!==(t=o.boostTemp)&&void 0!==t?t:0,l=null!==(r=o.superBoostTemp)&&void 0!==r?r:0;let u=s;return 2===a?u=s+c:3===a&&(u=s+l),o.isCelsius?u:i(u)}),u=function(){var e=lr(function*(){const e=new ArrayBuffer(20),r=new DataView(e);r.setUint8(0,1),r.setUint8(1,0);const n=t().control;n&&(yield ri.add(()=>n.writeValue(e)))});return function(){return e.apply(this,arguments)}}(),d=e=>{const t=e.target.value;t&&1===t.getUint8(0)&&o((e=>{if(e.byteLength<15)throw console.warn("parseDeviceStatus: Response too short, expected at least 15 bytes, got",e.byteLength),new Error(`Invalid response length: ${e.byteLength} bytes (expected at least 15)`);const t=r(),n=e.getUint8(4),o=e.getUint8(5),i=Math.round((n+256*o)/10),a=e.getUint8(14),s=e.getUint8(11),c=e.getUint8(13),l=e.getUint8(9)+e.getUint8(10),u=e.byteLength>16&&!!(1&e.getUint8(16)),d="VEAZY"===t.type?!(64&a):!!(64&a);return{targetTemp:i,boostTemp:e.getUint8(6),superBoostTemp:e.getUint8(7),batteryLevel:e.getUint8(8),autoShutdownTimer:l,heaterMode:s,isHeating:s>0,isCharging:c>0,isCelsius:!(1&a),setpointReached:!!(2&a),vibration:!!(64&a),chargeCurrentOptimization:!!(8&a),chargeVoltageLimit:!!(32&a),permanentBluetooth:u,boostVisualization:d}})(t))};function f(e,t,r){return p.apply(this,arguments)}function p(){return(p=lr(function*(e,r,n){const o=new ArrayBuffer(20),i=new DataView(o);i.setUint8(0,e),i.setUint8(1,r);for(const[t,s]of Object.entries(n))i.setUint8(Number(t),s);const a=t().control;a&&(yield ri.add(()=>a.writeValue(o)))})).apply(this,arguments)}const g=function(){var e=lr(function*(e){if(o(t=>t?vr(vr({},t),{},{targetTemp:e}):t),null!==e){const t=10*e;yield f(1,2,{4:255&t,5:t>>8&255})}});return function(t){return e.apply(this,arguments)}}(),h=function(){var e=lr(function*(e){o(t=>t?vr(vr({},t),{},{boostTemp:e}):t),null!==e&&(yield f(1,4,{6:e}))});return function(t){return e.apply(this,arguments)}}(),m=function(){var e=lr(function*(e){o(t=>t?vr(vr({},t),{},{superBoostTemp:e}):t),null!==e&&(yield f(1,8,{7:e}))});return function(t){return e.apply(this,arguments)}}(),v=function(){var e=lr(function*(e){o(t=>t?vr(vr({},t),{},{heaterMode:e}):t),null!==e&&(yield f(1,32,{11:e}))});return function(t){return e.apply(this,arguments)}}(),w=function(){var e=lr(function*(e){o(t=>t?vr(vr({},t),{},{isCelsius:e}):t),yield f(1,128,{14:e?0:1,15:1})});return function(t){return e.apply(this,arguments)}}(),A=function(){var e=lr(function*(e){o(t=>t?vr(vr({},t),{},{autoShutdownTimer:e}):t),null!==e&&(yield f(1,16,{9:255&e,10:e>>8&255}))});return function(t){return e.apply(this,arguments)}}(),y=function(){var e=lr(function*(e){o(t=>t?vr(vr({},t),{},{chargeCurrentOptimization:e}):t),yield f(1,128,{14:e?8:0,15:8})});return function(t){return e.apply(this,arguments)}}(),b=function(){var e=lr(function*(e){o(t=>t?vr(vr({},t),{},{chargeVoltageLimit:e}):t),yield f(1,128,{14:e?32:0,15:32})});return function(t){return e.apply(this,arguments)}}(),x=function(){var e=lr(function*(e){o(t=>t?vr(vr({},t),{},{permanentBluetooth:e}):t),yield f(1,128,{16:e?1:0,17:1})});return function(t){return e.apply(this,arguments)}}();return Vr(()=>{const r=t().control;if(!r)return;const n=setInterval(u,e);r.addEventListener("characteristicvaluechanged",d),jr(()=>{clearInterval(n),r.removeEventListener("characteristicvaluechanged",d)})}),{status:n,setTargetTemp:g,setBoostTemp:h,setSuperBoostTemp:m,setAutoShutdownTimer:A,setHeaterMode:v,setIsCelsius:w,setChargeCurrentOptimization:y,setChargeVoltageLimit:b,setPermanentBluetooth:x,targetTemp:a,boostTemp:s,superBoostTemp:c,effectiveTemp:l}}const Zl=Yr(),Jl=e=>{const t=Gl(e.pollInterval);return dn(Zl.Provider,{value:t,get children(){return e.children}})},Xl=()=>{const e=Gr(Zl);if(!e)throw new Error("useDeviceStatusContext must be used within a DeviceStatusProvider");return e},Ql=ca("div")(Ye||(Ye=sr`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`)),ql=ca("div")(Ge||(Ge=sr`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.95rem;
  color: ${0};
  padding: 8px 16px;
  background: ${0};
  border-radius: 8px;
  border: 1px solid ${0};
  font-weight: ${0};
`),e=>e.highlight?"#f60":"#ccc",e=>e.highlight?"rgba(255, 102, 0, 0.1)":"#1a1a1a",e=>e.highlight?"#f60":"#444",e=>e.highlight?"600":"normal"),_l=ca("div")(Ze||(Ze=sr`
  margin-top: 5px;
`)),Kl=e=>{const t=ka();return dn(Ql,{get children(){return dn(ql,{highlight:!0,get children(){return[Fn(()=>t("effective")),":"," ",dn(_l,{get children(){return dn(xc,{get value(){return e.effectiveTemp},get unit(){return e.isCelsius?"C":"F"}})}})]}})}})};var eu=On("<span class=icon>🔥");const tu=ca("div")(Je||(Je=sr`
  background: var(--secondary-bg);
  border-radius: 16px;
  padding: 32px 24px;
  margin-bottom: 24px;
  border: 1px solid var(--border-color);
`)),ru=ca("div")(Xe||(Xe=sr`
  font-size: 72px;
  line-height: 1;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${0};
  margin-top: 20px;
  transition: all 0.3s ease;

  ${0}
`),e=>e.setpointReached?"var(--reached-color)":e.isHeating?"var(--heating-color)":"var(--text-color)",e=>e.setpointReached?"\n        text-shadow: \n          0 0 10px rgba(0, 255, 102, 0.8),\n          0 0 20px rgba(0, 255, 102, 0.6),\n          0 0 30px rgba(0, 255, 102, 0.4),\n          0 0 40px rgba(0, 255, 102, 0.2);\n        animation: reached-glow 2s ease-in-out infinite alternate;\n        \n        @keyframes reached-glow {\n          from {\n            text-shadow: \n              0 0 10px rgba(0, 255, 102, 0.8),\n              0 0 20px rgba(0, 255, 102, 0.6),\n              0 0 30px rgba(0, 255, 102, 0.4),\n              0 0 40px rgba(0, 255, 102, 0.2);\n          }\n          to {\n            text-shadow: \n              0 0 15px rgba(0, 255, 102, 1),\n              0 0 25px rgba(0, 255, 102, 0.8),\n              0 0 35px rgba(0, 255, 102, 0.6),\n              0 0 45px rgba(0, 255, 102, 0.4);\n          }\n        }\n      ":e.isHeating?"\n        text-shadow: \n          0 0 10px rgba(255, 102, 0, 0.8),\n          0 0 20px rgba(255, 102, 0, 0.6),\n          0 0 30px rgba(255, 102, 0, 0.4),\n          0 0 40px rgba(255, 102, 0, 0.2);\n        animation: heating-glow 2s ease-in-out infinite alternate;\n        \n        @keyframes heating-glow {\n          from {\n            text-shadow: \n              0 0 10px rgba(255, 102, 0, 0.8),\n              0 0 20px rgba(255, 102, 0, 0.6),\n              0 0 30px rgba(255, 102, 0, 0.4),\n              0 0 40px rgba(255, 102, 0, 0.2);\n          }\n          to {\n            text-shadow: \n              0 0 15px rgba(255, 102, 0, 1),\n              0 0 25px rgba(255, 102, 0, 0.8),\n              0 0 35px rgba(255, 102, 0, 0.6),\n              0 0 45px rgba(255, 102, 0, 0.4);\n          }\n        }\n      ":""),nu=ca("div")(Qe||(Qe=sr`
  text-align: center;
  margin-bottom: 32px;
`)),ou=ca("span")(qe||(qe=sr`
  display: block;
  font-size: 0.9rem;
  color: var(--secondary-text);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`)),iu=ca("div")(_e||(_e=sr`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;

  @media (max-width: 375px) {
    gap: 25px;
  }

  @media (max-width: 320px) {
    gap: 10px;
  }
`)),au=e=>{const t=ka();return dn(tu,{get children(){return[dn(nu,{get children(){return[dn(ou,{get children(){return t("targetTemperature")}}),dn(ru,{get isHeating(){return e.isHeating},get setpointReached(){return e.setpointReached},get children(){return dn(xc,{get value(){return e.targetTemp},get unit(){return e.isCelsius?"C":"F"}})}})]}}),dn(iu,{get children(){return[dn(As,{onClick:()=>e.onAdjustTemperature(-1),get children(){return dn(pc,{})}}),dn(xs,{get onClick(){return e.onToggleHeater},get isHeating(){return e.isHeating},get children(){return[eu(),Fn(()=>e.isHeating?"ON":"OFF")]}}),dn(As,{onClick:()=>e.onAdjustTemperature(1),get children(){return dn(gc,{})}})]}})]}})},su=ca("div")(Ke||(Ke=sr`
  background: ${0};
  border: 2px solid ${0};
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-color);
    background: rgba(255, 102, 0, 0.05);
  }
`),e=>e.active?"rgba(255, 102, 0, 0.1)":"var(--bg-color)",e=>e.active?"var(--accent-color)":"var(--border-color)"),cu=ca("h3")(et||(et=sr`
  margin: 0 0 12px 0;
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 600;
`)),lu=ca("div")(tt||(tt=sr`
  font-size: 2rem;
  color: var(--accent-color);
`)),uu=ca("div")(rt||(rt=sr`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`)),du=e=>dn(su,{get active(){return e.active},get onClick(){return e.onActivate},get children(){return[dn(cu,{get children(){return e.title}}),dn(lu,{get children(){return dn(xc,{get value(){return e.temp},get unit(){return e.isCelsius?"C":"F"},isOffset:!0})}}),dn(uu,{get children(){return[dn(bs,{onClick:t=>{t.stopPropagation(),e.onAdjustTemp(-1)},get children(){return dn(pc,{})}}),dn(bs,{onClick:t=>{t.stopPropagation(),e.onAdjustTemp(1)},get children(){return dn(gc,{})}})]}})]}});var fu=On("<h2>");const pu=ca("div")(nt||(nt=sr`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`)),gu=ca("div")(ot||(ot=sr`
  text-align: center;
  margin-bottom: 32px;

  h2 {
    margin: 0 0 16px 0;
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 700;
  }
`)),hu=ca("div")(it||(it=sr`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`)),mu=ca("div")(at||(at=sr`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.95rem;
  color: ${0};
  padding: 8px 16px;
  background: ${0};
  border-radius: 8px;
  border: 1px solid ${0};
  font-weight: ${0};
`),e=>e.highlight?"#f60":"#ccc",e=>e.highlight?"rgba(255, 102, 0, 0.1)":"#1a1a1a",e=>e.highlight?"#f60":"#444",e=>e.highlight?"600":"normal"),vu=()=>{const{status:e,setTargetTemp:t,setBoostTemp:r,setSuperBoostTemp:n,setHeaterMode:o,targetTemp:i,boostTemp:a,superBoostTemp:s,effectiveTemp:c}=Xl(),l=()=>{var t;const r=null===(t=e())||void 0===t?void 0:t.heaterMode;return 2===r?"boost":3===r?"superboost":"none"},u=function(){var r=lr(function*(r){var n,o;const i=null!==(n=null===(o=e())||void 0===o?void 0:o.targetTemp)&&void 0!==n?n:0,a=Math.max(40,Math.min(230,i+r));try{yield t(a)}catch(s){console.error("Failed to set temperature:",s)}});return function(e){return r.apply(this,arguments)}}(),d=ka(),f=function(){var t=lr(function*(t){var n;const o=null===(n=e())||void 0===n?void 0:n.boostTemp;if(null==o)return void console.warn("Cannot adjust boost temperature: no current value available");const i=o+t;try{yield r(i)}catch(a){console.error("Failed to adjust boost temperature:",a)}});return function(e){return t.apply(this,arguments)}}(),p=function(){var t=lr(function*(t){var r;const o=null===(r=e())||void 0===r?void 0:r.superBoostTemp;if(null==o)return void console.warn("Cannot adjust superboost temperature: no current value available");const i=o+t;try{yield n(i)}catch(a){console.error("Failed to adjust superboost temperature:",a)}});return function(e){return t.apply(this,arguments)}}(),g=function(){var t=lr(function*(){try{var t,r;const n=null!==(t=null===(r=e())||void 0===r?void 0:r.heaterMode)&&void 0!==t?t:0;yield o(n>0?0:1)}catch(n){console.error("Failed to toggle heater:",n)}});return function(){return t.apply(this,arguments)}}(),h=function(){var e=lr(function*(e){const t=l();try{if(t===e)yield o(1);else{const t="boost"===e?2:3;yield o(t)}}catch(r){console.error(`Failed to change heater mode for ${e}:`,r)}});return function(t){return e.apply(this,arguments)}}();return dn(pu,{get children(){return[dn(gu,{get children(){var e=fu();return Nn(e,()=>d("ventyVeazyTemperatureControl")),e}}),dn(Kl,{get effectiveTemp(){return c()},get isCelsius(){var t,r;return null===(t=null===(r=e())||void 0===r?void 0:r.isCelsius)||void 0===t||t}}),dn(au,{get targetTemp(){return i()},get isCelsius(){var t,r;return null===(t=null===(r=e())||void 0===r?void 0:r.isCelsius)||void 0===t||t},get isHeating(){var t,r;return null!==(t=null===(r=e())||void 0===r?void 0:r.isHeating)&&void 0!==t&&t},get setpointReached(){var t,r;return null!==(t=Fn(()=>{var t;return!(null===(t=e())||void 0===t||!t.isHeating)})()&&(null===(r=e())||void 0===r?void 0:r.setpointReached))&&void 0!==t&&t},onAdjustTemperature:u,onToggleHeater:g}),dn(hu,{get children(){return[dn(du,{title:"Boost Temperature",get temp(){return a()},get isCelsius(){var t,r;return null===(t=null===(r=e())||void 0===r?void 0:r.isCelsius)||void 0===t||t},get active(){return"boost"===l()},onActivate:()=>h("boost"),onAdjustTemp:f}),dn(du,{title:"Super Boost",get temp(){return s()},get isCelsius(){var t,r;return null===(t=null===(r=e())||void 0===r?void 0:r.isCelsius)||void 0===t||t},get active(){return"superboost"===l()},onActivate:()=>h("superboost"),onAdjustTemp:p})]}}),dn(An,{get when(){return"none"!==l()},get children(){return dn(mu,{highlight:!0,style:{"margin-top":"16px","text-align":"center"},get children(){return[Fn(()=>"boost"===l()?"Boost":"Super Boost")," Mode Active"]}})}})]}})};var wu=On("<span>: ");const Au=ca("div")(st||(st=sr`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: var(--secondary-bg);
  border-radius: 8px;
`)),yu=ca("h2")(ct||(ct=sr`
  color: var(--accent-color);
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
  font-family: CustomFont;
`)),bu=ca("div")(lt||(lt=sr`
  margin-bottom: 25px;
  padding: 15px;
  background: var(--bg-color);
  border-radius: 5px;
`)),xu=ca("label")(ut||(ut=sr`
  display: block;
  color: var(--text-color);
  font-size: 1rem;
  margin-bottom: 10px;
  font-family: CustomFont;
`)),Cu=ca("div")(dt||(dt=sr`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`)),ku=ca(ws)(ft||(ft=sr`
  background-color: #d32f2f;
  width: 200px;
  height: 50px;

  &:hover {
    background-color: #b71c1c;
  }

  &:active {
    background-color: #8b0000;
  }
`)),Tu=ca("div")(pt||(pt=sr`
  display: ${0};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`),e=>e.isOpen?"flex":"none"),Su=ca("div")(gt||(gt=sr`
  background-color: #2a2a2a;
  padding: 30px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
  border: 2px solid #f60;
`)),Fu=ca("h3")(ht||(ht=sr`
  color: var(--accent-color);
  margin-bottom: 15px;
  font-family: CustomFont;
`)),Uu=ca("p")(mt||(mt=sr`
  color: var(--secondary-text);
  margin-bottom: 25px;
  font-family: CustomFont;
`)),Ou=ca("div")(vt||(vt=sr`
  display: flex;
  justify-content: space-around;
  gap: 15px;
`)),Eu=ca(ws)(wt||(wt=sr`
  width: 120px;
  background-color: ${0};

  &:hover {
    background-color: ${0};
  }
`),e=>"danger"===e.variant?"#d32f2f":"#666",e=>"danger"===e.variant?"#b71c1c":"#555"),Iu=()=>{const{deviceInfo:e}=ai(),{status:t,setIsCelsius:r,setChargeCurrentOptimization:n,setChargeVoltageLimit:o,setPermanentBluetooth:i}=Xl(),{data:a,setBrightness:s,setVibration:c,setBoostTimeout:l}=function(e=6e4){const{getCharacteristics:t}=ai(),[r,n]=Nr(null),o=function(){var e=lr(function*(){const e=new ArrayBuffer(7);new DataView(e).setUint8(0,6);const r=t().control;r&&(yield ri.add(()=>r.writeValue(e)))});return function(){return e.apply(this,arguments)}}(),i=e=>{const t=e.target.value;if(t&&6===t.getUint8(0)){const e=(e=>({brightness:e.getUint8(2),vibration:e.getUint8(5),boostTimeout:e.getUint8(6)}))(t);console.log("🔔 Brightness/Vibration data received:",{brightness:e.brightness,vibration:e.vibration,boostTimeout:e.boostTimeout}),n(e)}},a=function(){var e=lr(function*(e){n(t=>t?vr(vr({},t),{},{brightness:e}):t);const r=new ArrayBuffer(7),o=new DataView(r);o.setUint8(0,6),o.setUint8(1,1),o.setUint8(2,e);const i=t().control;i&&(yield ri.add(()=>i.writeValue(r)))});return function(t){return e.apply(this,arguments)}}(),s=function(){var e=lr(function*(e){console.log("🔧 Setting vibration to:",e),n(t=>t?vr(vr({},t),{},{vibration:e}):t);const r=new ArrayBuffer(7),o=new DataView(r);o.setUint8(0,6),o.setUint8(1,8),o.setUint8(5,e),console.log("📤 Sending vibration buffer:",Array.from(new Uint8Array(r)));const i=t().control;i&&(yield ri.add(()=>i.writeValue(r)))});return function(t){return e.apply(this,arguments)}}(),c=function(){var e=lr(function*(e){n(t=>t?vr(vr({},t),{},{boostTimeout:e}):t);const r=new ArrayBuffer(7),o=new DataView(r);o.setUint8(0,6),o.setUint8(1,16),o.setUint8(6,e);const i=t().control;i&&(yield ri.add(()=>i.writeValue(r)))});return function(t){return e.apply(this,arguments)}}();return Vr(()=>{const r=t().control;if(!r)return;console.log("🔌 Requesting initial brightness/vibration data"),o();const n=setInterval(o,e);r.addEventListener("characteristicvaluechanged",i),jr(()=>{clearInterval(n),r.removeEventListener("characteristicvaluechanged",i)})}),{data:r,requestBrightnessVibration:o,setBrightness:a,setVibration:s,setBoostTimeout:c}}(),u=ka(),{factoryReset:d,setBoostVisualization:f}=function(){const{getCharacteristics:e,deviceInfo:t}=ai(),r=function(){var t=lr(function*(){const t=new ArrayBuffer(20),r=new DataView(t);r.setUint8(0,1),r.setUint8(1,128),r.setUint8(14,4),r.setUint8(15,4);const n=e().control;n&&(yield ri.add(()=>n.writeValue(t)))});return function(){return t.apply(this,arguments)}}(),n=function(){var r=lr(function*(r){const n=new ArrayBuffer(20),o=new DataView(n);o.setUint8(0,1),o.setUint8(1,128);const i="VEAZY"===t().type?!r:r;o.setUint8(14,i?64:0),o.setUint8(15,64);const a=e().control;a&&(yield ri.add(()=>a.writeValue(n)))});return function(e){return r.apply(this,arguments)}}();return{factoryReset:r,setBoostVisualization:n}}(),[p,g]=Nr(!1),[h,m]=Nr(5),v=e=>{m(e),s(e)},w=e=>{c(e?1:0)},A=e=>{l(e?1:0)},y=()=>{d(),g(!1)};return dn(Au,{get children(){return[dn(yu,{get children(){return u("settings")}}),dn(bu,{get children(){return[dn(xu,{get children(){return u("ledBrightness")}}),dn(rc,{get value(){var e,t;return null!==(e=null===(t=a())||void 0===t?void 0:t.brightness)&&void 0!==e?e:h()},onInput:v,min:1,max:9,step:1,get label(){return Nn(e=wu(),()=>u("brightness"),e.firstChild),Nn(e,()=>{var e,t;return null!==(e=null===(t=a())||void 0===t?void 0:t.brightness)&&void 0!==e?e:h()},null),e;var e}})]}}),dn(bu,{get children(){return[dn(xu,{get children(){return u("vibration")}}),dn($c,{get isOn(){var e;return 1===(null===(e=a())||void 0===e?void 0:e.vibration)},onToggle:w,get label(){return u("enableVibration")}})]}}),dn(An,{get when(){return"VEAZY"===e().type},get children(){return dn(bu,{get children(){return[dn(xu,{get children(){return u("permanentBluetooth")}}),dn($c,{get isOn(){var e,r;return null!==(e=null===(r=t())||void 0===r?void 0:r.permanentBluetooth)&&void 0!==e&&e},onToggle:e=>i(e),get label(){return u("keepBluetoothAlwaysOn")}})]}})}}),dn(bu,{get children(){return[dn(xu,{get children(){return u("chargeCurrentOptimization")}}),dn($c,{get isOn(){var e,r;return null!==(e=null===(r=t())||void 0===r?void 0:r.chargeCurrentOptimization)&&void 0!==e&&e},onToggle:e=>n(e),get label(){return u("optimizeChargingCurrent")}})]}}),dn(bu,{get children(){return[dn(xu,{get children(){return u("chargeVoltageLimit")}}),dn($c,{get isOn(){var e,r;return null!==(e=null===(r=t())||void 0===r?void 0:r.chargeVoltageLimit)&&void 0!==e&&e},onToggle:e=>o(e),get label(){return u("limitChargingVoltage")}})]}}),dn(bu,{get children(){return[dn(xu,{get children(){return u("boostSuperboostVisualization")}}),dn($c,{get isOn(){var e,r;return null!==(e=null===(r=t())||void 0===r?void 0:r.boostVisualization)&&void 0!==e&&e},onToggle:e=>f(e),get label(){return u("enableBoostLedVisualization")}})]}}),dn(bu,{get children(){return[dn(xu,{get children(){return u("permanentBoost")}}),dn($c,{get isOn(){var e;return 1===(null===(e=a())||void 0===e?void 0:e.boostTimeout)},onToggle:A,get label(){return u("deactivateBoostTimeout")}})]}}),dn(bu,{get children(){return[dn(xu,{get children(){return u("temperatureUnit")}}),dn($c,{get isOn(){var e,r;return null===(e=null===(r=t())||void 0===r?void 0:r.isCelsius)||void 0===e||e},onToggle:e=>r(e),get label(){return Fn(()=>{var e;return!(null===(e=t())||void 0===e||!e.isCelsius)})()?u("celsius"):u("fahrenheit")}})]}}),dn(bu,{get children(){return[dn(xu,{get children(){return u("darkMode")}}),dn(Zc,{})]}}),dn(bu,{get children(){return[dn(xu,{get children(){return u("factoryReset")}}),dn(Cu,{get children(){return dn(ku,{onClick:()=>g(!0),get children(){return u("reset")}})}})]}}),dn(Tu,{get isOpen(){return p()},get children(){return dn(Su,{get children(){return[dn(Fu,{get children(){return u("factoryReset")}}),dn(Uu,{get children(){return u("factoryResetConfirm")}}),dn(Ou,{get children(){return[dn(Eu,{variant:"cancel",onClick:()=>g(!1),get children(){return u("cancel")}}),dn(Eu,{variant:"danger",onClick:y,get children(){return u("reset")}})]}})]}})}})]}})};var Bu=On("<div><div style=margin-top:20px;margin-bottom:20px>");const Nu=ca("div")(At||(At=sr`
  margin: 20px auto;
  max-width: 300px;
  padding: 16px;
`)),Du=ca("div")(yt||(yt=sr`
  color: var(--text-color);
  font-size: 0.9rem;
  margin-bottom: 8px;
  text-align: center;
`)),Vu=ca("div")(bt||(bt=sr`
  width: 100%;
  height: 20px;
  background: var(--secondary-bg);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${0};
  box-shadow: ${0};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 102, 0, 0.3),
      transparent
    );
    animation: ${0};
  }

  @keyframes charging-wave {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`),e=>e.charging?"var(--accent-color)":"var(--border-color)",e=>e.charging?"0 0 8px rgba(255, 102, 0, 0.6)":"none",e=>e.charging?"charging-wave 2s ease-in-out infinite":"none"),zu=ca("div")(xt||(xt=sr`
  height: 100%;
  width: ${0}%;
  background: ${0};
  transition: width 0.3s ease;
  animation: ${0};

  @keyframes charging-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
`),e=>e.level,e=>e.charging?"var(--battery-charging)":e.level>50?"var(--battery-good)":e.level>20?"var(--battery-medium)":"var(--battery-low)",e=>e.charging?"charging-pulse 1.5s ease-in-out infinite":"none"),Lu=()=>{const e=Ui(),{connectionState:t}=ai(),{status:r}=Xl(),n=ka();return Vr(()=>{const r=t();r!==eo.NOT_CONNECTED&&r!==eo.CONNECTION_FAILED||e("/")}),Nn((o=Bu()).firstChild,dn(vu,{})),Nn(o,dn(Nu,{get children(){return[dn(Du,{get children(){return[Fn(()=>n("battery")),": ",Fn(()=>{var e,t;return null!==(e=null===(t=r())||void 0===t?void 0:t.batteryLevel)&&void 0!==e?e:0}),"%"," ",Fn(()=>Fn(()=>{var e;return!(null===(e=r())||void 0===e||!e.isCharging)})()?"⚡ "+n("charging"):"")]}}),dn(Vu,{get charging(){var e,t;return null!==(e=null===(t=r())||void 0===t?void 0:t.isCharging)&&void 0!==e&&e},get children(){return dn(zu,{get level(){var e,t;return null!==(e=null===(t=r())||void 0===t?void 0:t.batteryLevel)&&void 0!==e?e:0},get charging(){var e,t;return null!==(e=null===(t=r())||void 0===t?void 0:t.isCharging)&&void 0!==e&&e}})}})]}}),null),Nn(o,dn(Iu,{}),null),o;var o},Pu=()=>dn(Jl,{get children(){return dn(Lu,{})}}),Wu=()=>{const[e,t]=Nr(0),[r,n]=Nr(0),[o,i]=Nr(0),{getCraftyControlService:a,getCharacteristics:s,setCharacteristics:c}=ai(),{writeValueToCharacteristic:l}=Ha(),u=e=>{const r=Ba(e),n=Math.round(r/10);console.log("Crafty Temperature: Target temperature updated to",n),t(n)},d=e=>{const t=Ba(e),r=Math.round(t/10);console.log("Crafty Temperature: Current temperature updated to",r),n(r)},f=e=>{const t=Ba(e),r=Math.round(t/10);console.log("Crafty Temperature: Boost temperature updated to",r),i(r)},p=function(){var e=lr(function*(){const e=a();if(!e)return void console.log("Crafty Temperature: No Crafty control service available");console.log("Crafty Temperature: Setting up temperature characteristics");const t=yield Ma(e,Gn.writeTemp,u);if(!t)return console.error("Crafty Temperature: writeTempCharacteristic not found"),Promise.reject("writeTempCharacteristic not found");console.log("Crafty Temperature: Target temperature characteristic set up"),c(e=>vr(vr({},e),{},{writeTemp:t}));const r=yield ja(e,Gn.currTemperatureChanged,d);if(!r)return console.error("Crafty Temperature: currTemperatureChangedCharacteristic not found"),Promise.reject("currTemperatureChangedCharacteristic not found");console.log("Crafty Temperature: Current temperature characteristic set up"),c(e=>vr(vr({},e),{},{currTemperatureChanged:r}));const n=yield Ma(e,Gn.writeBoostTemp,f);if(!n)return console.error("Crafty Temperature: writeBoostTempCharacteristic not found"),Promise.reject("writeBoostTempCharacteristic not found");console.log("Crafty Temperature: Boost temperature characteristic set up"),c(e=>vr(vr({},e),{},{writeBoostTemp:n}))});return function(){return e.apply(this,arguments)}}(),g=function(){var e=lr(function*(e){const r=Math.max(40,Math.min(210,e));console.log("Crafty Temperature: Setting target temperature to",r),t(r);try{yield l("writeTemp",10*r,Da);const e=s().writeTemp;if(e){const r=yield ri.add(()=>e.readValue());if(r){const e=Math.round(Ba(r)/10);console.log("Crafty Temperature: Confirmed target temperature",e),t(e)}}}catch(n){console.error("Crafty Temperature: Failed to set temperature",n);const e=s().writeTemp;if(e)try{const r=yield ri.add(()=>e.readValue());r&&t(Math.round(Ba(r)/10))}catch(o){}}});return function(t){return e.apply(this,arguments)}}(),h=function(){var e=lr(function*(e){const t=Math.max(0,Math.min(30,e));console.log("Crafty Temperature: Setting boost temperature to",t),i(t);try{yield l("writeBoostTemp",10*t,Da);const e=s().writeBoostTemp;if(e){const t=yield ri.add(()=>e.readValue());if(t){const e=Math.round(Ba(t)/10);console.log("Crafty Temperature: Confirmed boost temperature",e),i(e)}}}catch(r){console.error("Crafty Temperature: Failed to set boost temperature",r)}});return function(t){return e.apply(this,arguments)}}();return Vr(()=>{p()}),jr(()=>{const{currTemperatureChanged:e}=s();e&&La(e,d)}),{getTargetTemperature:e,getCurrentTemperature:r,getBoostTemperature:o,setTemperature:g,setBoostTemp:h,handleCharacteristics:p}},ju=e=>{const[t,r]=Nr(0),[n,o]=Nr(0),[i,a]=Nr(!1),{getCraftyControlService:s,getCharacteristics:c,setCharacteristics:l}=ai(),{writeValueToCharacteristic:u}=Ha(),d=(null==e?void 0:e.isOldCrafty)||(()=>!1),f=e=>{const t=Ba(e);r(t),o(t),console.log("Crafty Power: Battery percentage updated to",t)},p=function(){var e=lr(function*(){const e=s();if(!e||i())return;console.log(`usePower: Starting initialization (isOldCrafty: ${d()})`);const t=yield ja(e,Gn.powerChanged,f);if(!t)return Promise.reject("powerChangedCharacteristic not found");if(l(e=>vr(vr({},e),{},{powerChanged:t})),!d())try{const t=yield e.getCharacteristic(Gn.heaterOn);t&&l(e=>vr(vr({},e),{},{heaterOn:t}));const r=yield e.getCharacteristic(Gn.heaterOff);r&&l(e=>vr(vr({},e),{},{heaterOff:r}))}catch(r){console.warn("Heater on/off controls not available (old Crafty)",r)}a(!0),console.log("usePower: Initialization complete")});return function(){return e.apply(this,arguments)}}(),g=function(){var e=lr(function*(){yield u("heaterOn",1,Na)});return function(){return e.apply(this,arguments)}}(),h=function(){var e=lr(function*(){yield u("heaterOff",1,Na)});return function(){return e.apply(this,arguments)}}();return Vr(()=>{const e=d();s()&&(console.log(`usePower: Initializing (isOldCrafty: ${e})`),p())}),jr(()=>{const{powerChanged:e}=c();e&&La(e,f)}),{getPowerChanged:t,getBatteryPercent:n,turnHeaterOn:g,turnHeaterOff:h,handleCharacteristics:p}},Mu=e=>{const[t,r]=Nr(0),[n,o]=Nr(0),[i,a]=Nr(0),[s,c]=Nr(!1),{getCraftyControlService:l,getCharacteristics:u,setCharacteristics:d}=ai(),{writeValueToCharacteristic:f}=Ha(),p=(null==e?void 0:e.isOldCrafty)||(()=>!1),g=e=>{const t=Ba(e);r(t)},h=e=>{const t=Ba(e);o(t)},m=e=>{const t=Ba(e);a(t)},v=function(){var e=lr(function*(){const e=l();if(!e||s())return;console.log(`useSettings: Starting initialization (isOldCrafty: ${p()})`);const t=yield Ma(e,Gn.ledBrightness,g);if(!t)return Promise.reject("ledBrightnessCharacteristic not found");if(d(e=>vr(vr({},e),{},{ledBrightness:t})),!p())try{const t=yield Ma(e,Gn.autoOffCountdown,h);t&&d(e=>vr(vr({},e),{},{autoOffCountdown:t}));const r=yield ja(e,Gn.autoOffCurrentValue,m);r&&d(e=>vr(vr({},e),{},{autoOffCurrentValue:r}))}catch(r){console.warn("Auto-off features not available (old Crafty)",r)}c(!0),console.log("useSettings: Initialization complete")});return function(){return e.apply(this,arguments)}}(),w=function(){var e=lr(function*(e){yield f("ledBrightness",e,Da)});return function(t){return e.apply(this,arguments)}}(),A=function(){var e=lr(function*(e){yield f("autoOffCountdown",e,Da)});return function(t){return e.apply(this,arguments)}}();return Vr(()=>{const e=p();l()&&(console.log(`useSettings: Initializing (isOldCrafty: ${e})`),v())}),jr(()=>{const{autoOffCurrentValue:e}=u();e&&La(e,m)}),{getLedBrightness:t,getAutoOffCountdown:n,getAutoOffCurrentValue:i,setLedBrightness:w,setAutoOffCountdown:A,handleCharacteristics:v}},Ru=e=>{const[t,r]=Nr(0),[n,o]=Nr(0),[i,a]=Nr(0),[s,c]=Nr(!1),{getCraftyStatusService:l,setCharacteristics:u}=ai(),{writeValueToCharacteristic:d}=Ha(),f=(null==e?void 0:e.isOldCrafty)||(()=>!1),p=e=>{const t=Ba(e);r(t)},g=e=>{const t=Ba(e);o(t)},h=e=>{const t=Ba(e);a(t)},m=function(){var e=lr(function*(){const e=l();if(e&&!s()){if(f())return console.log("System status features not available on old Crafty"),void c(!0);console.log(`useSystemStatus: Starting initialization (isOldCrafty: ${f()})`);try{const t=yield Ma(e,Gn.systemStatusCharacteristic,p);t&&u(e=>vr(vr({},e),{},{systemStatusCharacteristic:t}));const r=yield Ma(e,Gn.akkuStatusCharacteristic,g);r&&u(e=>vr(vr({},e),{},{akkuStatusCharacteristic:r}));const n=yield Ma(e,Gn.akkuStatusCharacteristic2,h);n&&u(e=>vr(vr({},e),{},{akkuStatusCharacteristic2:n}));const o=yield e.getCharacteristic(Gn.factoryResetCharacteristic);o&&u(e=>vr(vr({},e),{},{factoryResetCharacteristic:o}))}catch(t){console.warn("System status features not fully available",t)}c(!0),console.log("useSystemStatus: Initialization complete")}});return function(){return e.apply(this,arguments)}}(),v=function(){var e=lr(function*(){yield d("factoryResetCharacteristic",0,Na)});return function(){return e.apply(this,arguments)}}();return Vr(()=>{const e=f();l()&&(console.log(`useSystemStatus: Initializing (isOldCrafty: ${e})`),m())}),{getSystemStatus:t,getAkkuStatus:n,getAkkuStatus2:i,factoryReset:v,handleCharacteristics:m}},Hu=e=>{const t=(e=>{const t=e.match(/V?(\d+)\.(\d+)/);return t?{major:parseInt(t[1],10),minor:parseInt(t[2],10)}:null})(e);return!!t&&(t.major<2||2===t.major&&t.minor<51)},$u=()=>{const[e,t]=Nr(""),[r,n]=Nr(""),[o,i]=Nr(0),[a,s]=Nr(!1),{getCraftyDeviceInfoService:c,getCraftyStatusService:l,getCharacteristics:u,setCharacteristics:d}=ai(),f=e=>{const r=new TextDecoder("utf-8").decode(e);t(r);const n=Hu(r);s(n),n&&console.log(`Old Crafty detected (firmware: ${r}). Some features will be unavailable.`)},p=e=>{if(e.byteLength>=3){const t=e.getUint8(0),r=e.getUint8(1),o=e.getUint8(2);n(`V${t}.${r}.${o}`)}else{const t=Ba(e);n(t.toString())}},g=e=>{const t=Ba(e);i(t)},h=function(){var e=lr(function*(){const e=c(),t=l();if(!e||!t)return;const r=yield Ma(e,Gn.firmwareVersion,f);if(!r)return Promise.reject("firmwareVersionCharacteristic not found");if(d(e=>vr(vr({},e),{},{firmwareVersion:r})),!a())try{const t=yield Ma(e,Gn.firmwareBLEVersion,p);t&&d(e=>vr(vr({},e),{},{firmwareBLEVersion:t}))}catch(o){console.warn("Firmware BLE version not available (old Crafty)",o)}const n=yield ja(t,Gn.statusRegister2,g);if(!n)return Promise.reject("statusRegister2Characteristic not found");d(e=>vr(vr({},e),{},{statusRegister2:n}))});return function(){return e.apply(this,arguments)}}();return Vr(()=>{h()}),jr(()=>{const{statusRegister2:e}=u();e&&La(e,g)}),{getFirmwareVersion:e,getFirmwareBLEVersion:r,getStatusRegister2:o,isOldCrafty:a,handleCharacteristics:h}},Yu=e=>{const[t,r]=Nr(0),[n,o]=Nr(0),[i,a]=Nr(!1),{getCraftyStatusService:s,setCharacteristics:c}=ai(),l=(null==e?void 0:e.isOldCrafty)||(()=>!1),u=e=>{const t=Ba(e);r(t)},d=e=>{const t=Ba(e);o(t)},f=function(){var e=lr(function*(){const e=s();if(!e||i())return;console.log(`useUsageTime: Starting initialization (isOldCrafty: ${l()})`);const t=yield Ma(e,Gn.useHoursCharacteristic,u);if(!t)return Promise.reject("useHoursCharacteristic not found");if(c(e=>vr(vr({},e),{},{useHoursCharacteristic:t})),!l())try{const t=yield Ma(e,Gn.useMinutesCharacteristic,d);t&&c(e=>vr(vr({},e),{},{useMinutesCharacteristic:t}))}catch(r){console.warn("Usage minutes not available (old Crafty)",r)}a(!0),console.log("useUsageTime: Initialization complete")});return function(){return e.apply(this,arguments)}}();return Vr(()=>{const e=l();s()&&(console.log(`useUsageTime: Initializing (isOldCrafty: ${e})`),f())}),{getUseHours:t,getUseMinutes:n,handleCharacteristics:f}},Gu=e=>{const[t,r]=Nr(0),[n,o]=Nr(!1),{getCraftyStatusService:i,getCharacteristics:a,setCharacteristics:s}=ai(),{writeValueToCharacteristic:c}=Ha(),l=(null==e?void 0:e.isOldCrafty)||(()=>!1),u=e=>{const t=Ba(e);r(t)},d=function(){var e=lr(function*(){const e=i();if(e&&!n()){if(console.log(`useProjectRegister: Starting initialization (isOldCrafty: ${l()})`),l())try{const t=yield e.getCharacteristic(Gn.handleProjectRegister);if(t){const e=yield t.readValue();u(e),s(e=>vr(vr({},e),{},{projectRegister:t}))}}catch(t){return console.error("Failed to read project register",t),Promise.reject("handleProjectRegisterCharacteristic not found")}else{const r=yield ja(e,Gn.handleProjectRegister,u);if(!r)return Promise.reject("handleProjectRegisterCharacteristic not found");s(e=>vr(vr({},e),{},{projectRegister:r}));try{const t=yield e.getCharacteristic(Gn.sicherheitscode);t&&s(e=>vr(vr({},e),{},{sicherheitscode:t}))}catch(t){console.warn("Sicherheitscode characteristic not available",t)}}o(!0),console.log("useProjectRegister: Initialization complete")}});return function(){return e.apply(this,arguments)}}(),f=function(){var e=lr(function*(e){yield c("sicherheitscode",e,Da)});return function(t){return e.apply(this,arguments)}}();return Vr(()=>{const e=l();i()&&(console.log(`useProjectRegister: Initializing (isOldCrafty: ${e})`),d())}),jr(()=>{const{projectRegister:e}=a();e&&La(e,u)}),{getProjectRegister:t,setSicherheitscode:f,handleCharacteristics:d}},Zu=Yr(),Ju=e=>{console.log("Crafty Device Provider: Initializing Crafty device provider");const t=$u(),r=t.isOldCrafty,n=Wu(),o=ju({isOldCrafty:r}),i=Mu({isOldCrafty:r}),a=Ru({isOldCrafty:r}),s=Yu({isOldCrafty:r}),c=Gu({isOldCrafty:r});return dn(Zu.Provider,{value:{temperature:n,power:o,settings:i,systemStatus:a,firmware:t,usageTime:s,projectRegister:c},get children(){return e.children}})},Xu=()=>{const e=Gr(Zu);if(!e)throw new Error("useCraftyDeviceContext must be used within a CraftyDeviceProvider");return e},Qu=ca("div")(Ct||(Ct=sr`
  text-align: center;
  margin-bottom: 24px;
`)),qu=ca("span")(kt||(kt=sr`
  display: block;
  font-size: 0.9rem;
  color: var(--secondary-text);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`)),_u=ca("div")(Tt||(Tt=sr`
  margin-bottom: -10px;
  font-family: "CustomFont";
  font-size: 72px;
  line-height: 1;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${0};
  transition: all 0.3s ease;

  ${0}
`),e=>e.isTarget?"var(--text-color)":"#f60",e=>e.isTarget?"":"\n        text-shadow:\n          0 0 10px rgba(255, 102, 0, 0.8),\n          0 0 20px rgba(255, 102, 0, 0.6);\n      "),Ku=ca("div")(St||(St=sr`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
`)),ed=ca("div")(Ft||(Ft=sr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 300px;
  padding: 0 20px;

  @media (max-width: 375px) {
    max-width: 250px;
    padding: 0 15px;
  }

  @media (max-width: 320px) {
    max-width: 200px;
    padding: 0 10px;
  }
`)),td=()=>{const{temperature:e}=Xu(),{getTargetTemperature:t,getCurrentTemperature:r,setTemperature:n}=e,o=ka(),i=()=>{const e=t();e<210&&n(e+1)},a=()=>{const e=t();e>40&&n(e-1)};return dn(Ku,{get children(){return[dn(Qu,{get children(){return[dn(qu,{get children(){return o("currentTemperature")}}),dn(_u,{get children(){return dn(xc,{get value(){return r()},unit:"C"})}})]}}),dn(ed,{get children(){return[dn(As,{onClick:a,get disabled(){return t()<=40},get children(){return dn(pc,{size:"24px"})}}),dn(_u,{isTarget:!0,get children(){return dn(xc,{get value(){return t()},unit:"C"})}}),dn(As,{onClick:i,get disabled(){return t()>=210},get children(){return dn(gc,{size:"24px"})}})]}})]}})};var rd=On("<br>");const nd=ca("div")(Ut||(Ut=sr`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`)),od=ca("div")(Ot||(Ot=sr`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "CustomFont";
  font-size: 50px;
  color: var(--text-color);
  min-width: 160px;
  margin-bottom: -10px;
`)),id=ca("div")(Et||(Et=sr`
  color: var(--secondary-text);
  font-size: 0.9rem;
  text-align: center;
  max-width: 300px;
`)),ad=()=>{const{power:e,firmware:t}=Xu(),{getPowerChanged:r,turnHeaterOn:n,turnHeaterOff:o}=e,{isOldCrafty:i}=t,a=()=>{i()?console.warn("Heater controls not available on old Crafty"):r()>0?o():n()};return dn(nd,{get children(){return[dn(od,{children:"Crafty"}),dn(An,{get when(){return!i()},get fallback(){return dn(id,{get children(){return["⚠️ Heater controls not available on old Crafty (firmware <= 2.51).",rd(),"Battery status is shown below."]}})},get children(){return dn(ys,{get isActive(){return r()>0},onClick:a,get children(){return dn(Ec,{size:"30px"})}})}})]}})},sd=ca("div")(It||(It=sr`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: var(--secondary-bg);
  border-radius: 8px;
`)),cd=ca("h2")(Bt||(Bt=sr`
  color: var(--accent-color);
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
  font-family: CustomFont;
`)),ld=ca("div")(Nt||(Nt=sr`
  margin-bottom: 25px;
  padding: 15px;
  background: var(--bg-color);
  border-radius: 5px;
`)),ud=ca("label")(Dt||(Dt=sr`
  display: block;
  color: var(--text-color);
  font-size: 1rem;
  margin-bottom: 10px;
  font-family: CustomFont;
`)),dd=ca("div")(Vt||(Vt=sr`
  color: var(--text-color);
  font-size: 1.2rem;
  font-family: "CustomFont";
  text-align: center;
  padding: 10px;
  background: var(--secondary-bg);
  border-radius: 5px;
  margin-top: 5px;
`)),fd=ca("div")(zt||(zt=sr`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 10px;
`)),pd=ca("div")(Lt||(Lt=sr`
  text-align: center;
  padding: 10px;
  background: var(--secondary-bg);
  border-radius: 5px;
`)),gd=ca("div")(Pt||(Pt=sr`
  color: var(--secondary-text);
  font-size: 0.9rem;
  margin-bottom: 5px;
`)),hd=ca("div")(Wt||(Wt=sr`
  color: var(--text-color);
  font-size: 1.1rem;
  font-family: "CustomFont";
`)),md=ca("div")(jt||(jt=sr`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`)),vd=ca(ws)(Mt||(Mt=sr`
  background-color: #d32f2f;
  width: 200px;
  height: 50px;

  &:hover {
    background-color: #b71c1c;
  }

  &:active {
    background-color: #8b0000;
  }
`)),wd=ca("div")(Rt||(Rt=sr`
  display: ${0};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`),e=>e.isOpen?"flex":"none"),Ad=ca("div")(Ht||(Ht=sr`
  background-color: #2a2a2a;
  padding: 30px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
  border: 2px solid #f60;
`)),yd=ca("h3")($t||($t=sr`
  color: var(--accent-color);
  margin-bottom: 15px;
  font-family: CustomFont;
`)),bd=ca("p")(Yt||(Yt=sr`
  color: var(--secondary-text);
  margin-bottom: 25px;
  font-family: CustomFont;
`)),xd=ca("div")(Gt||(Gt=sr`
  display: flex;
  justify-content: space-around;
  gap: 15px;
`)),Cd=ca(ws)(Zt||(Zt=sr`
  width: 120px;
  background-color: ${0};

  &:hover {
    background-color: ${0};
  }
`),e=>"danger"===e.variant?"#d32f2f":"#666",e=>"danger"===e.variant?"#b71c1c":"#555"),kd=()=>{const{settings:e,temperature:t,firmware:r,systemStatus:n,usageTime:o,power:i}=Xu(),{getLedBrightness:a,getAutoOffCountdown:s,getAutoOffCurrentValue:c,setLedBrightness:l,setAutoOffCountdown:u}=e,{getBoostTemperature:d,setBoostTemp:f}=t,{getBatteryPercent:p}=i,{getFirmwareVersion:g,getFirmwareBLEVersion:h,getStatusRegister2:m,isOldCrafty:v}=r,{getSystemStatus:w,getAkkuStatus:A,getAkkuStatus2:y,factoryReset:b}=n,{getUseHours:x,getUseMinutes:C}=o,k=ka(),[T,S]=Nr(!1),F=()=>{b(),S(!1)};return[dn(sd,{get children(){return[dn(cd,{get children(){return k("settings")}}),dn(ld,{get children(){return[dn(ud,{children:"Boost Temperature"}),dn(rc,{min:0,max:30,step:1,get value(){return d()},get label(){return`Boost Temperature: ${d()}`},onInput:f})]}}),dn(ld,{get children(){return[dn(ud,{get children(){return k("deviceBrightness")}}),dn(rc,{min:0,max:100,step:10,get value(){return a()},get label(){return`${k("deviceBrightness")}: ${a()} %`},onInput:l})]}}),Fn(()=>Fn(()=>!v())()&&[dn(ld,{get children(){return[dn(ud,{get children(){return k("autoMaticShutdownTime")}}),dn(rc,{min:0,max:600,step:60,get value(){return s()},get label(){return`${k("autoMaticShutdownTime")}: ${Math.floor(s()/60)} min`},onInput:u})]}}),dn(ld,{get children(){return[dn(ud,{children:"Current Auto-Off Time"}),dn(dd,{get children(){return[Fn(()=>Math.floor(c()/60)),":",Fn(()=>(c()%60).toString().padStart(2,"0"))," min remaining"]}})]}})]),dn(ld,{get children(){return[dn(ud,{children:"Firmware Information"}),dn(fd,{get children(){return[dn(pd,{get children(){return[dn(gd,{children:"Firmware Version"}),dn(hd,{get children(){return g()}})]}}),Fn(()=>Fn(()=>!v())()&&dn(pd,{get children(){return[dn(gd,{children:"BLE Firmware Version"}),dn(hd,{get children(){return h()}})]}})),dn(pd,{get children(){return[dn(gd,{children:"Status Register 2"}),dn(hd,{get children(){return m()}})]}})]}}),Fn(()=>Fn(()=>!!v())()&&dn(dd,{style:"margin-top: 10px; font-size: 0.9rem; color: var(--secondary-text);",children:"⚠️ Old Crafty detected. Some features are not available."}))]}}),dn(ld,{get children(){return[dn(ud,{children:"Battery Status"}),dn(fd,{get children(){return dn(pd,{get children(){return[dn(gd,{children:"Battery Level"}),dn(hd,{get children(){return[Fn(()=>p())," %"]}})]}})}})]}}),Fn(()=>Fn(()=>!v())()&&dn(ld,{get children(){return[dn(ud,{children:"System Status (Crafty+ only)"}),dn(fd,{get children(){return[dn(pd,{get children(){return[dn(gd,{children:"System Status"}),dn(hd,{get children(){return w()}})]}}),dn(pd,{get children(){return[dn(gd,{children:"Akku Status 1"}),dn(hd,{get children(){return A()}})]}}),dn(pd,{get children(){return[dn(gd,{children:"Akku Status 2"}),dn(hd,{get children(){return y()}})]}})]}})]}})),dn(ld,{get children(){return[dn(ud,{children:"Usage Time"}),dn(dd,{get children(){return[Fn(()=>x())," hours ",Fn(()=>Fn(()=>!v())()&&`${C()} minutes`)]}})]}}),Fn(()=>Fn(()=>!v())()&&dn(ld,{get children(){return[dn(ud,{children:"Factory Reset"}),dn(md,{get children(){return dn(vd,{onClick:()=>S(!0),children:"Factory Reset"})}})]}})),dn(ld,{get children(){return dn(Zc,{})}})]}}),dn(wd,{get isOpen(){return T()},get children(){return dn(Ad,{get children(){return[dn(yd,{children:"Factory Reset"}),dn(bd,{children:"Are you sure you want to reset all settings to factory defaults? This action cannot be undone."}),dn(xd,{get children(){return[dn(Cd,{variant:"cancel",onClick:()=>S(!1),children:"Cancel"}),dn(Cd,{variant:"danger",onClick:F,children:"Reset"})]}})]}})}})]};var Td=On("<div style=margin-bottom:24px>");const Sd=ca("div")(Jt||(Jt=sr`
  background: var(--secondary-bg);
  border-radius: 16px;
  padding: 24px;
  margin: 20px auto;
  border: 1px solid var(--border-color);
  max-width: 600px;
`)),Fd=()=>{console.log("Crafty View: Rendering Crafty view");const e=Ui(),{connectionState:t}=ai();return Vr(()=>{const r=t();r!==eo.NOT_CONNECTED&&r!==eo.CONNECTION_FAILED||e(ba())}),[dn(Sd,{get children(){return[(e=Td(),Nn(e,dn(td,{})),e),dn(ad,{})];var e}}),dn(kd,{})]},Ud=()=>dn(Ju,{get children(){return dn(Fd,{})}}),Od=()=>{const{deviceInfo:e,connectionState:t}=ai(),r=zr(()=>{if(t()!==eo.CONNECTED)return ya();switch(e().type){case to.VOLCANO:return ha();case to.VENTY:case to.VEAZY:return wa();case to.CRAFTY:return Aa();case to.UNKNOWN:default:return ya()}});return dn(Gi,{get href(){return r()}})};function Ed(e){return Ji({a:{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-bluetooth-connected",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},c:'<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l10 8l-5 4l0 -16l5 4l-10 8"/><path d="M4 12l1 0"/><path d="M18 12l1 0"/>'},e)}function Id(e){return Ji({a:{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-bluetooth-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},c:'<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802"/><path d="M16 6l4 4"/><path d="M20 6l-4 4"/>'},e)}var Bd=On("<div style=display:flex;gap:12px>");const Nd=ca("div")(Xt||(Xt=sr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: ${0};
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  min-height: 50px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
`),e=>e.isDarkMode?"linear-gradient(135deg, var(--secondary-bg) 0%, var(--bg-color) 100%)":"linear-gradient(135deg, var(--bg-color) 0%, var(--secondary-bg) 100%)"),Dd=ca("div")(Qt||(Qt=sr`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
`)),Vd=ca("div")(qt||(qt=sr`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`)),zd=ca("div")(_t||(_t=sr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`)),Ld=ca("div")(Kt||(Kt=sr`
  font-size: 0.8rem;
  opacity: 0.7;
  color: var(--secondary-text);

  @media (max-width: 786px) {
    display: none;
  }
`)),Pd=ca("div")(er||(er=sr`
  font-size: 0.8rem;
  opacity: 0.7;
  color: var(--secondary-text);

  @media (max-width: 480px) {
    display: none;
  }
`)),Wd=ca("div")(tr||(tr=sr`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--secondary-text);
`)),jd=ca(function(e){return Ji({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z" clip-rule="evenodd"/>'},e)})(rr||(rr=sr`
  animation: spin 2s linear infinite;
  filter: drop-shadow(0 0 4px rgba(255, 102, 0, 0.3));

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`)),Md=ca("div")(nr||(nr=sr`
  font-weight: 600;
  font-size: 1rem;
  color: var(--accent-color);
  display: flex;
  align-items: center;
  gap: 6px;
`)),Rd=ca("span")(or||(or=sr`
  background: linear-gradient(135deg, var(--accent-color) 0%, #ff7f39 100%);
  color: var(--text-color);
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  box-shadow: 0 1px 3px rgba(255, 102, 0, 0.2);
`)),Hd=ca("div")(ir||(ir=sr`
  transition: all 0.2s ease;
  border-radius: 50%;
  padding: 6px;

  &:hover {
    background: rgba(255, 102, 0, 0.1);
    transform: scale(1.05);
  }

  &.clickable {
    cursor: pointer;
  }
`)),$d=()=>{const{disconnect:e,connectionState:t,deviceInfo:r}=ai(),{isDarkMode:n}=li(),o=ka(),{getSerialNumber:i}=qa(),a=()=>t()===eo.CONNECTED,s=()=>t()===eo.CONNECTING,c=()=>{const e=r();return e.type===to.VOLCANO?i():e.name&&e.name.split(" ")[1]||""},l=function(){var t=lr(function*(){yield e()});return function(){return t.apply(this,arguments)}}(),u=()=>a()?r():null;return dn(Nd,{get isDarkMode(){return n()},get children(){return[dn(An,{get when(){return Fn(()=>!a())()&&!s()},get children(){return dn(Dd,{get children(){return[dn(Hd,{get children(){return dn(Id,{size:22,color:"#ccc"})}}),dn(Vd,{get children(){return dn(Wd,{get children(){return o("deviceNotConnected")}})}})]}})}}),dn(An,{get when(){return s()},get children(){return dn(Dd,{get children(){return[dn(Hd,{get children(){return dn(jd,{size:22,color:"#f60"})}}),dn(Vd,{get children(){return dn(Wd,{get children(){return o("connectingToDevice")}})}})]}})}}),dn(An,{get when(){return Fn(()=>!!a())()&&u()},get children(){return dn(Dd,{get children(){return[dn(Hd,{class:"clickable",onClick:l,get children(){return dn(Ed,{size:22,color:"#f60",title:"Click to disconnect"})}}),dn(Vd,{get children(){return dn(zd,{get children(){return[dn(Md,{get children(){return[Fn(()=>{var e;return null===(e=u())||void 0===e?void 0:e.name}),Fn(()=>Fn(()=>{var e;return(null===(e=u())||void 0===e?void 0:e.type)===to.VEAZY})()&&dn(Rd,{children:"Veazy"})),Fn(()=>Fn(()=>{var e;return(null===(e=u())||void 0===e?void 0:e.type)===to.VENTY})()&&dn(Rd,{children:"Venty"})),Fn(()=>Fn(()=>{var e;return(null===(e=u())||void 0===e?void 0:e.type)===to.VOLCANO})()&&dn(Rd,{children:"Volcano"}))]}}),(e=Bd(),Nn(e,dn(An,{get when(){return Fn(()=>!!c())()&&c().length>0},get children(){return dn(Pd,{get children(){return[Fn(()=>o("serialNumber")),": ",Fn(()=>c())]}})}}),null),Nn(e,dn(An,{get when(){return Fn(()=>!1)()&&!1},get children(){return dn(Ld,{get children(){return[Fn(()=>o("bleFirmwareVersion")),": ",Fn(()=>"")]}})}}),null),e)];var e}})}})]}})}})]}})};var Yd=On("<div style=margin-left:20px;margin-right:20px>"),Gd=On("<div style=\"display:flex;flex-direction:column;background-image:url('/background.png');background-position:center;background-size:cover;background-repeat:no-repeat\">");const Zd=ca("div")(ar||(ar=sr`
  display: flex;
  flex-direction: column;
  margin: 25px;
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin: 0px;
    max-width: unset;
  }
`)),Jd=e=>{return Nn(t=Gd(),dn($d,{}),null),Nn(t,dn(Zd,{get children(){var t=Yd();return Nn(t,()=>e.children),t}}),null),t;var t},Xd=()=>dn(Yi,{base:void 0,get children(){return dn(Ri,{get path(){return fa},component:Jd,get children(){return[dn(Ri,{get path(){return fa},component:Od}),dn(Ri,{get path(){return pa},component:Ia}),dn(Ri,{get path(){return ga.BASE},get children(){return[dn(Ri,{get path(){return ga.VOLCANO.BASE},component:dc,get children(){return[dn(Ri,{get path(){return ga.VOLCANO.ROOT},component:Yl}),dn(Ri,{get path(){return ga.VOLCANO.WORKFLOW.BASE},get children(){return[dn(Ri,{get path(){return ga.VOLCANO.WORKFLOW.LIST},component:Zs}),dn(Ri,{get path(){return ga.VOLCANO.WORKFLOW.FORM},component:uc})]}})]}}),dn(Ri,{get path(){return ga.VENTY_VEAZY},component:Pu}),dn(Ri,{get path(){return ga.CRAFTY},component:Ud})]}})]}})}});!function(e,t,r,n={}){let o;Br(n=>{o=n,t===document?e():Nn(t,e(),t.firstChild?null:void 0,r)},n.owner)}(()=>dn(ci,{get children(){return dn(ii,{get children(){return dn(Xd,{})}})}}),document.getElementById("root"))}}})}();
