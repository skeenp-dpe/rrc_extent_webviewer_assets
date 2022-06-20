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
const wid = 'widget_map_large';
//Set datasource names
const dids = ['ds_topo', 'ds_img'];
// Set layer names
const lyrids = ['rrc_h2y_m02_d25', 'rrc_h2y_m02_d30', 'rrc_h2y_m02_d40'];
// Set function to toggle all but selected
function select_lyr(c,h,d,e=dids){for(let a=0;a<e.length;a++){let i=c._mapViewManager.jimuMapViewGroups[wid].jimuMapViews,f=wid+"-"+e[a],j=i[f];for(let b=0;b<d.length;b++){let g=wid+"-"+e[a]+"-"+d[b];void 0!==j.jimuLayerViews[g]&&(d[b]==h?c._mapViewManager.getJimuMapViewById(f).jimuLayerViews[g].view.visible=!0:c._mapViewManager.getJimuMapViewById(f).jimuLayerViews[g].view.visible=!1)}};console.log('RRC Mod: Layer changed to ' + h);}
// Get parent window
var w = top.window;
var d = w.document;
// Attach events to event buttons
top.window[0].addEventListener("load", function(){
	d.querySelector("[data-widgetid=widget_button_d25]").querySelector('a').addEventListener("click", function() {
		select_lyr(w, 'rrc_h2y_m02_d25', lyrids);
	});
	d.querySelector("[data-widgetid=widget_button_d30]").querySelector('a').addEventListener("click", function() {
		select_lyr(w, 'rrc_h2y_m02_d30', lyrids);
	});
	d.querySelector("[data-widgetid=widget_button_d40]").querySelector('a').addEventListener("click", function() {
		select_lyr(w, 'rrc_h2y_m02_d40', lyrids);
	});
	// Debug info to console
	console.log('RRC Mod: Init custom button overide');
})