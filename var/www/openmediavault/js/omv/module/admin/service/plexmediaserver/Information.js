/**
 * Copyright (C) 2013-2017 OpenMediaVault Plugin Developers
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// require("js/omv/WorkspaceManager.js")
// require("js/omv/workspace/form/Panel.js")

/**
 * @class OMV.module.admin.service.vdr.Info
 * @derived OMV.workspace.form.Panel
 */
Ext.define("OMV.module.admin.service.plexmediaserver.Information", {
    extend : "OMV.workspace.form.Panel",

    autoLoadData    : false,
    hideOkButton    : true,
    hideResetButton : true,
    mode            : "local",

    getFormItems : function() {
        var me = this;

        return [{
            /* VDR info */
            xtype  : "fieldset",
            title  : _("Information"),
            layout : "fit",
            items  : [{
                border  : false,
                html    : '<h3 style="margin-top: 5px;">OMV Firewall</h3>' +
                        'If you are using OMVs firewall create rules to open the requisite ports on your LAN.' +
                        '<ul>' +
                        '<li>' +
                        '<b>UDP 1900</b> (discovery service for Plex DLNA Server) [required for PC, Android, standard DLNA clients]' +
                        '</li>' +
                        '<li>' +
                        '<b>UDP 5353</b> (discovery service Plex DLNA Server for Bonjour/Avahi) [required for Apple clients]' +
                        '</li>' +
                        '<li>' +
                        '<b>TCP 32400</b> (for access to Plex Media Server) [required]' +
                        '</li>' +
                        '<li>' +
                        '<b>UDP 32410</b>, <b>32412</b>, <b>32413</b>, <b>32414</b> (for current network discovery)' +
                        '</li>' +
                        '<li>' +
                        '<b>TCP 32443</b> (for SSL access to Plex Media Server) [optional]' +
                        '</li>' +
                        '<li>' +
                        '<b>TCP 32469</b> (for access to the Plex DLNA Server)' +
                        '</li>' +
                        '</ul>' +
                        '<h3>Router Settings</h3>' +
                        'Forward the following ports from your router to OMV.  These ports are used for remote access to your Plex Media Server.' +
                        '<ul>' +
                        '<li>' +
                        '<b>TCP 32400</b> (for access to Plex Media Server) [required]' +
                        '</li>' +
                        '<li>' +
                        '<b>TCP 32443</b> (for SSL access to Plex Media Server) [optional]' +
                        '</li>' +
                        '</ul>' +
                        '<h3>Plex Pass</h3>' +
                        'Plex Pass members should just be able to install the Plex Pass release for debian on to the normal release.'
            }]
        }];
    }
});

OMV.WorkspaceManager.registerPanel({
    id        : "information",
    path      : "/service/plexmediaserver",
    text      : _("Setup Info"),
    position  : 20,
    className : "OMV.module.admin.service.plexmediaserver.Information"
});
