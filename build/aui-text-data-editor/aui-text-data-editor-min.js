YUI.add("aui-text-data-editor",function(e,t){var n=e.getClassName("text","data","editor"),r=e.getClassName("text","data","editor","input");e.TextDataEditor=e.Base.create("text-data-editor",e.DataEditor,[],{TPL_EDITOR_CONTENT:'<div class="'+n+'">'+'<input type="text" class="'+r+' form-control"></input></div>',initializer:function(){var t=this.get("node");this.input_=t.one(".form-control"),this.input_.after("valuechange",e.bind(this._onValueChange,this)),this.after({editedValueChange:this._afterEditedValueChange,placeholderChange:this._afterPlaceholderChange}),this._uiSetEditedValue(this.get("editedValue")),this._uiSetPlaceholder(this.get("placeholder"))},isEmpty:function(){return!e.Lang.trim(this.get("editedValue"))},isValid:function(){return e.TextDataEditor.superclass.isValid.call(this)?e.Lang.isString(this.get("editedValue")):!1},_afterEditedValueChange:function(){this._uiSetEditedValue(this.get("editedValue"))},_afterPlaceholderChange:function(){this._uiSetPlaceholder(this.get("placeholder"))},_onValueChange:function(){this.set("editedValue",this.input_.get("value"))},_uiSetEditedValue:function(e){this.input_.set("value",e)},_uiSetPlaceholder:function(e){var t=this.get("node").one("."+r);t.setAttribute("placeholder",e)}},{ATTRS:{editedValue:{value:""},originalValue:{value:""},placeholder:{validator:e.Lang.isString,value:""}}})},"3.1.0-deprecated.60",{requires:["aui-data-editor","event-valuechange"],skinnable:!0});