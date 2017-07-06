YUI.add("aui-progressbar",function(e,t){var n=function(e){return parseFloat(e)||0},r=e.getClassName("progress","bar"),i=e.getClassName("horizontal"),s=e.getClassName("vertical"),o="<p></p>",u=e.Component.create({NAME:"progress",ATTRS:{height:{valueFn:function(){return this.get("boundingBox").get("offsetHeight")||25}},label:{},max:{validator:e.Lang.isNumber,value:100},min:{validator:e.Lang.isNumber,value:0},orientation:{value:"horizontal",validator:function(t){return e.Lang.isString(t)&&(t==="horizontal"||t==="vertical")}},ratio:{getter:"_getRatio",readOnly:!0},step:{getter:"_getStep",readOnly:!0},tabIndex:{value:1},textNode:{valueFn:function(){return e.Node.create(o)}},useARIA:{value:!0},value:{setter:n,validator:function(t){return e.Lang.isNumber(n(t))&&t>=this.get("min")&&t<=this.get("max")},value:0}},HTML_PARSER:{label:function(e){var t=e.one("p");if(t)return t.html()},textNode:"p"},UI_ATTRS:["label","orientation","value"],prototype:{renderUI:function(){this.get("contentBox").addClass(r),this._renderTextNodeIfLabelSet()},syncUI:function(){this.get("useARIA")&&this.plug(e.Plugin.Aria,{attributes:{value:"valuenow",max:"valuemax",min:"valuemin",orientation:"orientation"},roleName:"progressbar"})},_getBoundingBoxSize:function(){return n(this.get("boundingBox").getStyle(this.get("orientation")==="horizontal"?"width":"height"))},_getRatio:function(){var e=this.get("min"),t=(this.get("value")-e)/(this.get("max")-e);return Math.max(t,0)},_getStep:function(){return this.get("ratio")*100},_renderTextNodeIfLabelSet:function(){e.Lang.isUndefined(this.get("label"))||this.get("contentBox").append(this.get("textNode"))},_uiSetLabel:function(e){var t=this.get("textNode");t.inDoc()||this._renderTextNodeIfLabelSet(),t.html(e)},_uiSetOrientation:function(e){var t=this.get("boundingBox"),n=e==="horizontal";t.toggleClass(i,n),t.toggleClass(s,!n),this._uiSetValue(this.get("value")),this._uiSizeTextNode()},_uiSetValue:function(){var e=this._getStep(),t;this.get("orientation")==="horizontal"?t={height:"100%",width:e+"%"}:t={height:e+"%",width:"100%"},this.get("step")>=100&&this.fire("complete"),this.get("contentBox").setStyles(t)},_uiSizeTextNode:function(){this.get("textNode").setStyle("lineHeight",this.get("boundingBox").getStyle("height"))}}});e.ProgressBar=u},"3.0.3-deprecated.54",{requires:["aui-node","aui-component","aui-aria"],skinnable:!0});