"use strict";(self.webpackChunkspotistats=self.webpackChunkspotistats||[]).push([[592],{2120:(k,u,a)=>{a.d(u,{u:()=>l});var i=a(6895),t=a(4650);class c extends i.uU{transform(o,e){const g=new Date,m=new Date(o);let s,v=Math.floor((g.getTime()-m.getTime())/31536e6),S=Math.floor((g.getTime()-m.getTime())/2592e6),Y=Math.floor((g.getTime()-m.getTime())/6048e5),h=Math.floor((g.getTime()-m.getTime())/864e5),w=Math.floor((g.getTime()-m.getTime())/36e5),C=Math.floor((g.getTime()-m.getTime())/6e4);return s=v>0?v+"y":h>30?S+"mon":h>6?Y+"w":w>48?h+"d":C>59?w+"h":C+"min",s}}function f(n,o){if(1&n&&t._UZ(0,"img",11),2&n){const e=t.oxw(2).$implicit;t.s9C("src",e.track.album.images[0].url,t.LSH)}}function r(n,o){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.name,", ")}}function y(n,o){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.name," ")}}function M(n,o){if(1&n&&(t.ynx(0),t.YNc(1,r,2,1,"ng-container",14),t.YNc(2,y,1,1,"ng-template",null,10,t.W1O),t.BQk()),2&n){const e=o.index,p=t.MAs(3),_=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",e<_.track.artists.length-1)("ngIfElse",p)}}function O(n,o){if(1&n&&(t.TgZ(0,"p",12),t.YNc(1,M,4,2,"ng-container",13),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngForOf",e.track.artists)}}function P(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"No artists found."),t.qZA())}function T(n,o){if(1&n&&(t.ynx(0),t.YNc(1,f,1,1,"img",6),t.TgZ(2,"div",7)(3,"p",8),t._uU(4),t.qZA(),t.YNc(5,O,2,1,"p",9),t.YNc(6,P,2,0,"ng-template",null,10,t.W1O),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",e.track.album),t.xp6(3),t.Oqu(e.track.name),t.xp6(1),t.Q6J("ngIf",void 0!==e.track.artists)}}function I(n,o){if(1&n&&(t.TgZ(0,"div",4),t.YNc(1,T,8,3,"ng-container",3),t.TgZ(2,"p",5),t._uU(3),t.ALo(4,"customDate"),t._UZ(5,"br"),t._uU(6," ago"),t.qZA()()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",e.track),t.xp6(2),t.hij("",t.lcZ(4,2,e.played_at)," ")}}function b(n,o){1&n&&(t.ynx(0),t.TgZ(1,"h1",15),t._uU(2,"Sorry, we could not find any data."),t.qZA(),t.BQk())}function A(n,o){if(1&n&&(t.TgZ(0,"div",1),t.YNc(1,I,7,4,"div",2),t.YNc(2,b,3,0,"ng-container",3),t.qZA()),2&n){const e=t.oxw();t.Q6J("ngClass",e.columnView?"trackListColumns":"trackListPadding"),t.xp6(1),t.Q6J("ngForOf",e.history),t.xp6(1),t.Q6J("ngIf",e.history.length<=0)}}function H(n,o){1&n&&(t.TgZ(0,"div",4),t._UZ(1,"div",16),t.TgZ(2,"div",17),t._UZ(3,"p",18)(4,"p",19),t.qZA()())}c.\u0275fac=function(){let n;return function(e){return(n||(n=t.n5z(c)))(e||c)}}(),c.\u0275pipe=t.Yjl({name:"customDate",type:c,pure:!0,standalone:!0});const V=function(){return[]};function Z(n,o){if(1&n&&(t.TgZ(0,"div",1),t.YNc(1,H,5,0,"div",2),t.qZA()),2&n){const e=t.oxw();t.Q6J("ngClass",e.columnView?"trackListColumns":"trackListPadding"),t.xp6(1),t.Q6J("ngForOf",t.DdM(2,V).constructor(e.expectedItems))}}class d{constructor(){this.history=[],this.columnView=!1,this.loadingState="loading",this.expectedItems=50}}d.\u0275fac=function(o){return new(o||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-history-view"]],inputs:{history:"history",columnView:"columnView",loadingState:"loadingState",expectedItems:"expectedItems"},standalone:!0,features:[t.jDz],decls:2,vars:2,consts:[["class","trackList",3,"ngClass",4,"ngIf"],[1,"trackList",3,"ngClass"],["class","track",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"track"],[1,"timestamp"],["alt","Album cover","class","track-cover",3,"src",4,"ngIf"],[1,"trackInfoSection"],[1,"track-name"],["class","track-artist",4,"ngIf"],["elseBlock",""],["alt","Album cover",1,"track-cover",3,"src"],[1,"track-artist"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],[1,"error-message"],[1,"dummyImg","track-cover"],[1,"dummyInfoSection"],[1,"dummyTrackName","track-name"],[1,"dummyArtistName","track-artist"]],template:function(o,e){1&o&&(t.YNc(0,A,3,3,"div",0),t.YNc(1,Z,2,3,"div",0)),2&o&&(t.Q6J("ngIf","success"==e.loadingState),t.xp6(1),t.Q6J("ngIf","loading"==e.loadingState))},dependencies:[i.ez,i.mk,i.sg,i.O5,c],styles:['img[_ngcontent-%COMP%]{object-fit:cover;margin-bottom:auto}p[_ngcontent-%COMP%]{margin:auto 0}.trackList[_ngcontent-%COMP%]{display:grid;gap:.5rem;grid-template-columns:100%;grid-gap:.5rem}.track[_ngcontent-%COMP%]{width:100%;height:8vw;min-height:50px;max-height:75px;display:flex;border-radius:10px;background-color:var(--card-background)}.track-rank[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;color:var(--accent-color);background-color:var(--contrast-color);border-radius:10px 0 0 10px;height:100%;width:auto;aspect-ratio:1}.track-rank[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 6px;width:2rem;text-align:center;font-weight:700}.track-cover[_ngcontent-%COMP%]{height:100%;width:auto;aspect-ratio:1;box-sizing:border-box;border:4px solid var(--card-background);border-radius:10px}.trackInfoSection[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;white-space:nowrap;overflow:hidden;mask-image:linear-gradient(to right,rgb(0,0,0) 90%,rgba(0,0,0,0));-webkit-mask-image:linear-gradient(to right,rgb(0,0,0) 90%,rgba(0,0,0,0))}.trackInfoSection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 10px}.track-name[_ngcontent-%COMP%]{font-weight:500}.track-artist[_ngcontent-%COMP%]{font-weight:400;font-size:12px;color:var(--text-secondary)}.statsIcon[_ngcontent-%COMP%]{display:none;width:auto;height:40%;aspect-ratio:1;margin:auto 10px auto auto}.track[_ngcontent-%COMP%]:hover   .statsIcon[_ngcontent-%COMP%]{filter:brightness(0) saturate(100%) invert(78%) sepia(71%) saturate(481%) hue-rotate(31deg) brightness(108%) contrast(103%)}.rel-container[_ngcontent-%COMP%]{position:relative}.timestamp[_ngcontent-%COMP%]{width:90px}.dummyInfoSection[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:8px;width:45%}.dummyArtistName[_ngcontent-%COMP%]{height:12px;width:80%}.dummyTrackName[_ngcontent-%COMP%]{height:20px;width:100%}.dummyArtistName[_ngcontent-%COMP%], .dummyTrackName[_ngcontent-%COMP%]{margin:0}.dummyArtistName[_ngcontent-%COMP%], .dummyTrackName[_ngcontent-%COMP%], .dummyImg[_ngcontent-%COMP%]{background-color:gray;mask-image:none;-webkit-mask-image:none;overflow:hidden}.dummyArtistName[_ngcontent-%COMP%]:before, .dummyTrackName[_ngcontent-%COMP%]:before, .dummyImg[_ngcontent-%COMP%]:before{content:"";display:block;width:50%;height:100%;background:linear-gradient(to right,transparent,rgb(154,154,154));transform:translate(-100%);animation:loading 2s infinite ease-in-out}@media screen and (min-width: 768px){.trackListColumns[_ngcontent-%COMP%]{grid-auto-flow:column;grid-template-rows:repeat(5,auto);grid-template-columns:repeat(2,49%);justify-content:space-between;padding:0}.trackListPadding[_ngcontent-%COMP%]{padding:0 15%}}@media screen and (min-width: 1600px){.trackListColumns[_ngcontent-%COMP%]{grid-auto-flow:column;grid-template-rows:repeat(2,auto);grid-template-columns:repeat(5,19%);justify-content:space-between;padding:0}.trackListPadding[_ngcontent-%COMP%]{padding:0 25%}.track-name[_ngcontent-%COMP%]{font-size:18px}.track-artist[_ngcontent-%COMP%]{font-size:14px}h1[_ngcontent-%COMP%]{font-size:48px}.track-rank[_ngcontent-%COMP%]{font-size:20px}}@media screen and (min-width: 2560px){.trackListPadding[_ngcontent-%COMP%]{padding:0 30%}.track-name[_ngcontent-%COMP%]{font-size:20px}.track-artist[_ngcontent-%COMP%]{font-size:16px}h1[_ngcontent-%COMP%]{font-size:64px}.pageDescription[_ngcontent-%COMP%]{font-size:32px}}']});var N=a(9639),x=a(2408),D=a(2997);function L(n,o){if(1&n&&t._UZ(0,"app-history-view",2),2&n){const e=o.ngIf,p=t.oxw().ngIf,_=t.oxw();t.Q6J("history",e)("columnView",_.columnView)("loadingState",p)("expectedItems",_.amount)}}function Q(n,o){if(1&n&&(t.ynx(0),t.YNc(1,L,1,4,"app-history-view",1),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.history$))}}class l{constructor(o){this.store=o,this.amount=50,this.columnView=!1,this.history$=this.store.select((0,x.qe)(this.amount))}ngOnInit(){this.loadingState$=this.store.select((0,x.Lr)()),this.store.dispatch((0,N.td)({amount:this.amount}))}}l.\u0275fac=function(o){return new(o||l)(t.Y36(D.yh))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-history"]],inputs:{amount:"amount",columnView:"columnView"},standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"history","columnView","loadingState","expectedItems",4,"ngIf"],[3,"history","columnView","loadingState","expectedItems"]],template:function(o,e){1&o&&(t.YNc(0,Q,3,3,"ng-container",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,e.loadingState$))},dependencies:[i.ez,i.O5,i.Ov,d],styles:["app-history-view[_ngcontent-%COMP%]{display:block;width:100%}"]})},2408:(k,u,a)=>{a.d(u,{Lr:()=>f,qe:()=>c});var i=a(2997);const t=r=>r.history,c=r=>(0,i.P1)(t,y=>y.history.slice(0,r)),f=()=>(0,i.P1)(t,r=>r.status)}}]);