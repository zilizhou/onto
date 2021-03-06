/*
 * File: app/view/MyWindow11.js
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

Ext.define('MyApp.view.MyWindow11', {
    extend: 'Ext.window.Window',

    height: 648,
    width: 786,
    layout: {
        type: 'border'
    },
    title: '概念（实例）查询',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    region: 'north',
                    height: 65,
                    layout: {
                        type: 'absolute'
                    },
                    items: [
                        {
                            xtype: 'textareafield',
                            height: 29,
                            id: 'coninsSearch',
                            fieldLabel: '',
                            rows: 1
                        },
                        {
                            xtype: 'button',
                            x: 150,
                            y: 0,
                            text: '搜索',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            x: 0,
                            y: 40,
                            id: 'idscombox',
                            width: 190,
                            fieldLabel: '',
                            store: 'conSearchStore',
                            listeners: {
                                select: {
                                    fn: me.onIdscomboxSelect,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'textareafield',
                            x: 300,
                            y: 0,
                            id: 'glossShow',
                            width: 470,
                            fieldLabel: '简介'
                        }
                    ]
                },
                {
                    xtype: 'dataview',
                    region: 'center',
                    html: '<iframe scrolling=\'auto\' frameborder=\'0\' width=\'100%\' height=\'100%\' src=\'http://localhost:8080/ontotest/MyJsp.jsp\'> </iframe>',
                    id: 'ConsView',
                    itemSelector: 'div',
                    itemTpl: [
                        'Data View Item {string}'
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, eOpts) {
        var store=Ext.getCmp('idscombox').getStore();
        //store.getProxy().url='/ontotest/relbodydata';
        //alert(record.get('id'));

        //alert(record.get('id'));
        //alert(Ext.getCmp('coninsSearch').getValue());
        store.getProxy().setExtraParam('searchTerm',Ext.getCmp('coninsSearch').getValue());
        //store.getProxy().setExtraParam('searchTerm','测试');
        //store.setRootNode({node:{text:record.get('id')}});

        //alert(store.isLoading());

        //store.load({params:{ConIdForBody:'1000000000'},node:{text:'cid',id:'cid',expanded:false}});
        //alert(Ext.getCmp('ontoGraph'));

        store.load();
    },

    onIdscomboxSelect: function(combo, records, eOpts) {


        Ext.Ajax.request({
            url:    '/ontotest/arbor',
            params: {fatherId:records[0].get('id'),nodeExpand:false},
            method: 'POST',
            callback: function(options,success,response){

                var obj=Ext.decode(response.responseText);
                // alert(obj.glossText);
                Ext.getCmp('glossShow').setValue(obj.glossText);

                Ext.getCmp('ConsView').refresh();
                //if(success){Ext.getCmp('ConTreeView').getStore().load();}
                //else {alert('no');}

            }
        }



        );
    }

});