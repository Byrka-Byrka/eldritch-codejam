(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var a=e.g.document;if(!r&&a&&(a.currentScript&&(r=a.currentScript.src),!r)){var c=a.getElementsByTagName("script");c.length&&(r=c[c.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})();const r={brown1:e.p+"ac85e7db9ab360fe235aa248837f0e5d.png",brown2:e.p+"c44579505d0d3ccfd7c8f069a841f3f9.png",brown3:e.p+"caababcab21e08510c276249ef8e8818.png",brown4:e.p+"e387b64a537a0fb25c84a81018033d19.png",brown5:e.p+"709f87f82c146ab3189a05a3fa458b53.png",brown6:e.p+"23453f970c4a388f8b68b06f400a4ccf.png",brown7:e.p+"7da5050420b14d67a481e453d13e70fc.png",brown8:e.p+"2126fcd965be3b428dcace58e62a70e1.png",brown9:e.p+"3d69a01cdd56175f304ecf5467e5dfc2.png",brown10:e.p+"703068f44f9153534f9c7448bc94def8.png",brown11:e.p+"157fd0a92444cc2a245f47e4739d7a56.png",brown12:e.p+"920b1409d3f7d006e7647271e3a3dacb.png",brown13:e.p+"a8d77ff5b5eaa534b968f98886d1e371.png",brown14:e.p+"f5d21e1965d8ec808bc2dc916f2578e0.png",brown15:e.p+"036f8f91eccd0e8f97080885372dcf2b.png",brown16:e.p+"1fd61bbd111986a0965ab7a3d9c38eb6.png",brown17:e.p+"6a53cc04a2d6cbb63677f2021ce0a51c.png",brown18:e.p+"c537bfb2cd284c9667ae6756b271b7ff.png",brown19:e.p+"199841521c55940d0d03fcada9ad5194.png",brown20:e.p+"1182a8f80bd2272b3d07c2b01857aa61.png",brown21:e.p+"3a8e72879e11c315c59d4cae69b4391b.png"},a={azathoth:e.p+"e76cc60e6f2b9bb167ce75f3457ed219.png",cthulhu:e.p+"e7bfd029744dc9f87c1ac5f42d90402a.png",iogSothoth:e.p+"c5b7717bff973cda27bed23257e72234.png",shubNiggurath:e.p+"68c4272e00c9596e65b1806b18598a43.png"},c=[{id:"azathoth",name:"azathoth",cardFace:a.azathoth,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:2,blueCards:0,brownCards:4}},{id:"cthulhu",name:"cthulhu",cardFace:a.cthulhu,firstStage:{greenCards:0,blueCards:2,brownCards:2},secondStage:{greenCards:1,blueCards:0,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"iogSothoth",name:"iogSothoth",cardFace:a.iogSothoth,firstStage:{greenCards:0,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"shubNiggurath",name:"shubNiggurath",cardFace:a.shubNiggurath,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:3,blueCards:1,brownCards:2},thirdStage:{greenCards:2,blueCards:0,brownCards:4}}],d=[{id:"brown1",cardFace:r.brown1,difficulty:"normal",color:"brown"},{id:"brown2",cardFace:r.brown2,difficulty:"normal",color:"brown"},{id:"brown3",cardFace:r.brown3,difficulty:"normal",color:"brown"},{id:"brown4",cardFace:r.brown4,difficulty:"normal",color:"brown"},{id:"brown5",cardFace:r.brown5,difficulty:"normal",color:"brown"},{id:"brown6",cardFace:r.brown6,difficulty:"hard",color:"brown"},{id:"brown7",cardFace:r.brown7,difficulty:"hard",color:"brown"},{id:"brown8",cardFace:r.brown8,difficulty:"hard",color:"brown"},{id:"brown9",cardFace:r.brown9,difficulty:"hard",color:"brown"},{id:"brown10",cardFace:r.brown10,difficulty:"hard",color:"brown"},{id:"brown11",cardFace:r.brown11,difficulty:"easy",color:"brown"},{id:"brown12",cardFace:r.brown12,difficulty:"easy",color:"brown"},{id:"brown13",cardFace:r.brown13,difficulty:"easy",color:"brown"},{id:"brown14",cardFace:r.brown14,difficulty:"easy",color:"brown"},{id:"brown15",cardFace:r.brown15,difficulty:"normal",color:"brown"},{id:"brown16",cardFace:r.brown16,difficulty:"normal",color:"brown"},{id:"brown17",cardFace:r.brown17,difficulty:"normal",color:"brown"},{id:"brown18",cardFace:r.brown18,difficulty:"normal",color:"brown"},{id:"brown19",cardFace:r.brown19,difficulty:"normal",color:"brown"},{id:"brown20",cardFace:r.brown20,difficulty:"normal",color:"brown"},{id:"brown21",cardFace:r.brown21,difficulty:"easy",color:"brown"}],n={blue1:e.p+"09c8e5eb50dc7666f1aa3d2f16506c33.png",blue2:e.p+"3cc352cdc8fade5dad4c31c78992b842.png",blue3:e.p+"fdd1d10ff513774eb8410be6598be83c.png",blue4:e.p+"f09f0f715e525a0b50ecb0789aa2e10f.png",blue5:e.p+"e3e8792622b0c75c78c1c0b757a041fa.png",blue6:e.p+"cf323c98a3f54632a66cdb1c95d1a557.png",blue7:e.p+"4cdb1bd641372e2d0f746bffeb81963c.png",blue8:e.p+"02a9eec68518951fc18e50edc571ad81.png",blue9:e.p+"d3371911f8f0d84b558547a100f97e56.png",blue10:e.p+"c61c9f73492d8cd7027cb13e83bbed77.png",blue11:e.p+"f7e6552a92e4b878107acb7a0e7a243f.png",blue12:e.p+"204f9160083e529ab7631a475c01ae66.png"},o=[{id:"blue1",cardFace:n.blue1,difficulty:"hard",color:"blue"},{id:"blue2",cardFace:n.blue2,difficulty:"hard",color:"blue"},{id:"blue3",cardFace:n.blue3,difficulty:"easy",color:"blue"},{id:"blue4",cardFace:n.blue4,difficulty:"easy",color:"blue"},{id:"blue5",cardFace:n.blue5,difficulty:"easy",color:"blue"},{id:"blue6",cardFace:n.blue6,difficulty:"hard",color:"blue"},{id:"blue7",cardFace:n.blue7,difficulty:"normal",color:"blue"},{id:"blue8",cardFace:n.blue8,difficulty:"hard",color:"blue"},{id:"blue9",cardFace:n.blue9,difficulty:"normal",color:"blue"},{id:"blue10",cardFace:n.blue10,difficulty:"easy",color:"blue"},{id:"blue11",cardFace:n.blue11,difficulty:"normal",color:"blue"},{id:"blue12",cardFace:n.blue12,difficulty:"normal",color:"blue"}],b={green1:e.p+"ee9218f13d2668469469fc55fde565b4.png",green2:e.p+"1a1b4da17274000ce3a891814560403e.png",green3:e.p+"24a6de1c53f0cc14bb955737f926a185.png",green4:e.p+"d9d9a3dc837a4101fc61207ad120c19f.png",green5:e.p+"0634bb414e136066d46f0d13709cee44.png",green6:e.p+"ca07046ad17914ec04d08e4aa01e3f9b.png",green7:e.p+"f9d8238c6770bdc97f73c478109a1289.png",green8:e.p+"bc5f83ed7ced1b832494a02ce67825b4.png",green9:e.p+"bc368631ac89e5bf08912a94d05ed628.png",green10:e.p+"766beb973fc76ac9564e581d35c004af.png",green11:e.p+"305fdb3b09ad909c598f23bc986a4f7f.png",green12:e.p+"b786b0a5e0aaf884c27b07894003defe.png",green13:e.p+"b3e3243ad3927ba66da7bbb74e03cfb4.png",green14:e.p+"20b6b1be80bef6932ab07650b1655f5d.png",green15:e.p+"63677766cd3a4cea8da0bdaa201ff418.png",green16:e.p+"608e0aecaccf5ff896fb97957d217aa3.png",green17:e.p+"0ebea1f5b536a0b85765af3f54112973.png",green18:e.p+"268edbdc27e016d06a522da5567719aa.png"},i=[{id:"green1",cardFace:b.green1,difficulty:"easy",color:"green"},{id:"green2",cardFace:b.green2,difficulty:"hard",color:"green"},{id:"green3",cardFace:b.green3,difficulty:"hard",color:"green"},{id:"green4",cardFace:b.green4,difficulty:"hard",color:"green"},{id:"green5",cardFace:b.green5,difficulty:"hard",color:"green"},{id:"green6",cardFace:b.green6,difficulty:"hard",color:"green"},{id:"green7",cardFace:b.green7,difficulty:"normal",color:"green"},{id:"green8",cardFace:b.green8,difficulty:"normal",color:"green"},{id:"green9",cardFace:b.green9,difficulty:"normal",color:"green"},{id:"green10",cardFace:b.green10,difficulty:"normal",color:"green"},{id:"green11",cardFace:b.green11,difficulty:"normal",color:"green"},{id:"green12",cardFace:b.green12,difficulty:"easy",color:"green"},{id:"green13",cardFace:b.green13,difficulty:"normal",color:"green"},{id:"green14",cardFace:b.green14,difficulty:"normal",color:"green"},{id:"green15",cardFace:b.green15,difficulty:"normal",color:"green"},{id:"green16",cardFace:b.green16,difficulty:"easy",color:"green"},{id:"green17",cardFace:b.green17,difficulty:"easy",color:"green"},{id:"green18",cardFace:b.green18,difficulty:"easy",color:"green"}];console.log(d,o,i),console.log(c);let l={};const f={greenCards:0,blueCards:0,brownCards:0};let t={},g=L(i),u=L(o),s=L(d),p=!1,w=!1;const y=document.createElement("div");y.classList.add("choseAncientWrapper"),document.body.append(y);const h=document.createElement("div");h.classList.add("difficultWrapper"),document.body.append(h);const F=document.createElement("div");F.classList.add("deckSectionWrapper"),document.body.append(F);const C=document.createElement("div");function m(e){console.log(e.target.parentNode);let r=e.target.parentNode.querySelector(".active");r&&r.classList.remove("active"),e.target.classList.add("active")}function S(e){g=g.filter((r=>r.difficulty!=e)),u=u.filter((r=>r.difficulty!=e)),s=s.filter((r=>r.difficulty!=e))}function v(e){return e.sort(((e,r)=>e.difficulty>r.difficulty?1:e.difficulty<r.difficulty?-1:0))}function L(e){return e.map((e=>[Math.random(),e])).sort().map((e=>e[1]))}c.forEach((e=>{const r=new Image;r.classList.add("choseImg"),r.onclick=e=>{h.innerHTML="",F.innerHTML="",m(e),l=c.find((r=>r.cardFace===e.target.src)),function(e){f.greenCards=e.firstStage.greenCards+e.secondStage.greenCards+e.thirdStage.greenCards,f.blueCards=e.firstStage.blueCards+e.secondStage.blueCards+e.thirdStage.blueCards,f.brownCards=e.firstStage.brownCards+e.secondStage.brownCards+e.thirdStage.brownCards}(l),console.log(f),["очень легко","легко","средне","тяжело","очень тяжело"].forEach((e=>{let r=document.createElement("div");r.classList.add("difficultSelector"),r.innerText=e,r.onclick=e=>{var r;F.innerHTML="",m(e),function(e){switch(g=L(i),u=L(o),s=L(d),e){case"очень легко":S("hard"),v(g),v(u),v(s);break;case"легко":S("hard");break;case"средне":break;case"тяжело":S("easy");break;case"очень тяжело":S("easy"),v(g),v(u),v(s)}console.log(g)}(e.target.innerText),w=!0,t=function(){let e=g.slice(0,f.greenCards),r=u.slice(0,f.blueCards),a=s.slice(0,f.brownCards);return console.log(f.greenCards),{greenDeck:e,blueDeck:r,brownDeck:a}}(),F.innerHTML="",r=F,C.classList.add("deckCreateButton"),C.innerText="ЗАМЕШАТЬ КОЛОДУ",r.append(C)},h.append(r)})),p=!0,w=!1},r.src=e.cardFace,y.append(r)}))})();