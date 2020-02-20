/**
 * This class is the minimizable window of cpsi mapview application.
 * All instances of this class contain the minimize button in the header
 * and already implement the minimization logic. If a
 * CpsiMapview.view.toolbar.MinimizedWindows toolbar is given, minimized
 * windows will be added to that toolbar and can be restored afterwards.
 *
 * @class CpsiMapview.view.window.MinimizableWindow
 */
Ext.define('CpsiMapview.view.window.MinimizableWindow', {
    extend: 'Ext.window.Window',
    xtype: 'cmv_minimizable_window',

    requires: [
        'CpsiMapview.controller.window.MinimizableWindow'
    ],

    controller: 'cmv_minimizable_window',

    minimizable: true,

    /**
     * Component to where the window should be added
     * when minimized. If null, it will be added to
     * the first MinimizedWindows toolbar found. If
     * no toolbar was found, it will minimize into nowhere.
     */
    minimizeTo: null,

    listeners: {
        minimize: 'onMinimize'
    }
});
