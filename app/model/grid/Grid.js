/**
 * This class is the model for the cpsi mapview WFS
 * generic grid class
 *
 */
Ext.define('CpsiMapview.model.grid.Grid', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.cmv_grid',

    requires: [
        'BasiGX.util.Map'
    ],

    /**
    * The following should all be overridden in child classes
    */
    data: {
        vectorLayerKey: null,
        wmsLayerKey: null,
        gridStoreType: null
    },

    formulas: {
        map: function () {
            return BasiGX.util.Map.getMapComponent().map;
        }
    }
});
