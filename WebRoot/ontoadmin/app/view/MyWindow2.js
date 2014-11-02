/*
 * File: app/view/MyWindow2.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyWindow2', {
    extend: 'Ext.window.Window',

    height: 250,
    width: 400,
    title: 'My Window',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id: 'submitform1',
                    width: 208,
                    layout: {
                        type: 'absolute'
                    },
                    bodyPadding: 10,
                    title: '添加关系性质',
                    items: [
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            x: 10,
                            y: 30,
                            id: 'relrel',
                            fieldLabel: '性质',
                            name: 'relation',
                            store: 'RelTermStore'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            x: 10,
                            y: 70,
                            id: 'relval',
                            fieldLabel: '性质值',
                            name: 'relationval',
                            store: 'RelTermStore'
                        },
                        {
                            xtype: 'button',
                            x: 30,
                            y: 130,
                            text: 'MyButton',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick8,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick8: function(button, e, eOpts) {
        var node=Ext.getCmp('RelTreeView').getSelectionModel().getSelection();
        var n=node[0];
        var cid=n.get('id');

        var fm=Ext.getCmp('submitform1').getForm();

        //var val=fm.getValues().toString();
        //alert(val);

        fm.submit({

            url:'/ontotest/addvalofrel',
            params:{ConIdForBody:cid},
            success: function(form,action){

                alert('ok');

            }



        });
    }

});