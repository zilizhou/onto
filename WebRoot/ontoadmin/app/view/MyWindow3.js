/*
 * File: app/view/MyWindow3.js
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

Ext.define('MyApp.view.MyWindow3', {
    extend: 'Ext.window.Window',

    height: 176,
    id: 'renameConTermWin',
    width: 270,
    layout: {
        type: 'absolute'
    },
    title: 'My Window',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    x: 10,
                    y: 10,
                    disabled: true,
                    id: 'updateConOldTerm',
                    fieldLabel: '旧名称'
                },
                {
                    xtype: 'textfield',
                    x: 10,
                    y: 50,
                    id: 'updateConTerm',
                    fieldLabel: '新名称'
                },
                {
                    xtype: 'button',
                    x: 100,
                    y: 100,
                    text: '确定修改',
                    listeners: {
                        click: {
                            fn: me.onButtonClick,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, eOpts) {
        var node=Ext.getCmp('ConTreeView').getSelectionModel().getSelection();
        var n=node[0];
        //n.appendChild({text:'请输入概念名',leaf:true});
        var oldterm=n.get('text');
        //Ext.getCmp('updateConTerm').setValue(oldterm);

        Ext.Ajax.request({
            url:    '/ontotest/updateterm',
            params: {

                updateConTerm:Ext.getCmp('updateConTerm').getValue(),
                updateConOldTerm:oldterm,
                updateConId:n.get('id')



            },
            method: 'POST',
            callback: function(options,success,response){

                // var obj=Ext.decode(response.responseText);

                this.close();

                //if(success){Ext.getCmp('ConTreeView').getStore().load();}
                //else {alert('no');}

            }
        }



        );
    }

});