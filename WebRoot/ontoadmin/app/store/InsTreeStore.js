/*
 * File: app/store/InsTreeStore.js
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

Ext.define('MyApp.store.InsTreeStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'MyApp.model.treemodel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.treemodel',
            storeId: 'InsTreeStore',
            root: {
                text: 'instants',
                id: '011'
            },
            proxy: {
                type: 'ajax',
                url: '/ontotest/instree',
                reader: {
                    type: 'json',
                    root: 'menus'
                }
            },
            listeners: {
                beforeload: {
                    fn: me.onTreeStoreBeforeLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onTreeStoreBeforeLoad: function(store, operation, eOpts) {
        //alert('hhhh');
        var n=Ext.getCmp('InsTree').getRootNode();
        //alert(n[0].get('id'));
        //alert(n.get('id'));
        store.getProxy().setExtraParam('id',n.get('id'));
    }

});