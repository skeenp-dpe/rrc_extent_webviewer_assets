/*
When copying template, change the following:
 AGOL Assistant:
 - Webmap ids (ds_topo and ds_img)
 - Update layer ids for toggling

 Experience Builder: 
 - Change text in content to match reach
 - Add/remove buttons from viewer
 - Connect events to buttons with appropriate layer
 - Fix style elements
*/

//Set widget name
const ctl_id = 'widget_map_large';
//Set datasource names
const ds_ids = ['ds_topo', 'ds_img'];
// Set layer names
const lyr_ids = ['rrc_h2y_m02_d25', 'rrc_h2y_m02_d30', 'rrc_h2y_m02_d40'];
// Set debug flag
const debug = false;
// Set debug function
function debug_log(msg) {
	if (debug == true) {
		console.log(msg);
	}
}
// Set function to toggle all but selected
function select_lyr(win, lyr) {
	// Get map views
	let mvm = win._mapViewManager;
	let vws = mvm.jimuMapViewGroups[ctl_id].jimuMapViews;
	// Itterate datasources
	for (let ds_idx = 0; ds_idx < ds_ids.length; ds_idx++) {
		// Setup dataset id
		let ds_id = ctl_id + "-" + ds_ids[ds_idx];
		// Fetch requested map view
		let vw = vws[ds_id];
		// Itterate layers
		for (let lyr_idx = 0; lyr_idx < lyr_ids.length; lyr_idx++) {
			// Setup layer id
			let lyr_id = ctl_id + "-" + ds_ids[ds_idx] + "-" + lyr_ids[lyr_idx];
			// Setup visible flag
			let v = false;
			// Check layer exists and is the target
			if (vw.jimuLayerViews[lyr_id] && lyr_ids[lyr_idx] == lyr) {
				v = true;
			}
			debug_log('RRC Mod: ' + lyr_id + ' visible: ' + v);
			// Enable/disable layer
			mvm.getJimuMapViewById(ds_id).jimuLayerViews[lyr_id].view.visible = v;
		}
	}
	// Report change to console
	debug_log("RRC Mod: Layer changed to " + lyr);
}
// Get parent window
var w = top.window;
var d = w.document;
// Attach events to event buttons
function attach_events(widgetid, lyr){
	d.querySelector("[data-widgetid="+widgetid+"]").querySelector('a').addEventListener("click", function() {
		select_lyr(w, lyr);
	});	
}
// Attach events
attach_events('widget_button_d25','rrc_h2y_m02_d25')
attach_events('widget_button_d30','rrc_h2y_m02_d30')
attach_events('widget_button_d40','rrc_h2y_m02_d40')
// Report load to console
debug_log('RRC Mod: Init custom button overide');