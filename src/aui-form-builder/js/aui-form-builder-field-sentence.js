/**
 * The Form Builder Field Text Component
 *
 * @module aui-form-builder
 * @submodule aui-form-builder-field-sentence
 */

var CSS_FIELD_SENTENCE = A.getClassName('form', 'builder', 'field', 'sentence'),
    CSS_FIELD_SENTENCE_HELP = A.getClassName('form', 'builder', 'field', 'sentence', 'help'),
    CSS_FIELD_SENTENCE_TITLE = A.getClassName('form', 'builder', 'field', 'sentence', 'title'),

    TPL_FIELD_SENTENCE_CONTENT = '<div class="form-group">' +
        '<label class="' + CSS_FIELD_SENTENCE_TITLE + '"></label>' +
        '<div class="' + CSS_FIELD_SENTENCE_HELP + '"></div></div>';

/**
 * A base class for Form Builder Field Text.
 *
 * @class A.FormBuilderFieldSentence
 * @extends A.FormBuilderFieldBase
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 */
A.FormBuilderFieldSentence = A.Base.create('form-builder-field-sentece', A.FormBuilderFieldBase, [], {
    TPL_FIELD_CONTENT: '<div></div>',

    /**
     * Constructor for the `A.FormBuilderFieldSentence`. Lifecycle.
     *
     * @method initializer
     * @protected
     */
    initializer: function() {
        var content = this.get('content');

        content.addClass(CSS_FIELD_SENTENCE);
        content.one('.form-builder-field-content').setHTML(TPL_FIELD_SENTENCE_CONTENT);
        content.one('.form-builder-field-content').appendChild(this.TPL_FIELD_CONTENT);

        this._uiSetHelp(this.get('help'));
        this._uiSetTitle(this.get('title'));

        this.after({
            helpChange: this._afterHelpChange,
            titleChange: this._afterTitleChange
        });
    },

    /**
     * Fired after the `help` attribute is set.
     *
     * @method _afterHelpChange
     * @protected
     */
    _afterHelpChange: function() {
        this._uiSetHelp(this.get('help'));
    },

    /**
     * Fired after the `title` attribute is set.
     *
     * @method _afterTitleChange
     * @protected
     */
    _afterTitleChange: function() {
        this._uiSetTitle(this.get('title'));
    },

    /**
     * Fills the settings array with the information for this field.
     *
     * @method _fillSettings
     * @override
     * @protected
     */
    _fillSettings: function() {
        this._settings = [
            {
                attrName: 'title',
                editor: new A.TextDataEditor({
                    label: 'Type your question here'
                })
            },
            {
                attrName: 'help',
                editor: new A.TextDataEditor({
                    label: 'Help text...'
                })
            }
        ];
    },

    /**
     * Updates the ui according to the value of the `help` attribute.
     *
     * @method _uiSetHelp
     * @param {String} help
     * @protected
     */
    _uiSetHelp: function(help) {
        this.get('content').one('.' + CSS_FIELD_SENTENCE_HELP).set('text', help);
    },

    /**
     * Updates the ui according to the value of the `title` attribute.
     *
     * @method _uiSetTitle
     * @param {String} title
     * @protected
     */
    _uiSetTitle: function(title) {
        this.get('content').one('.' + CSS_FIELD_SENTENCE_TITLE).set('text', title);
    }
}, {
    /**
     * Static property used to define the default attribute configuration
     * for the `A.FormBuilderFieldSentence`.
     *
     * @property ATTRS
     * @type Object
     * @static
     */
    ATTRS: {
        /**
         * Help text.
         *
         * @attribute help
         * @default ''
         * @type {String}
         */
        help: {
            validator: A.Lang.isString,
            value: ''
        },

        /**
         * The title of this field.
         *
         * @attribute title
         * @default ''
         * @type {String}
         */
        title: {
            validator: A.Lang.isString,
            value: ''
        }
    }
});