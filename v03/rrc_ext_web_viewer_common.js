// Set debug flag
const debug = false;

// Get parent window
var w = top.window;
var d = w.document;

// Set debug function
function debug_log(msg) {
  if (debug == true) {
    console.log(msg);
  }
}
// Set function to toggle all but selected
function toggle_lyr(mapid, dsid, lyrids, lyrkey) {
  // Get map views
  let mvm = w._mapViewManager;
  let vws = mvm.jimuMapViewGroups[mapid].jimuMapViews;
  // Setup dataset id
  let ds_id = mapid + "-" + dsid;
  // Fetch requested map view
  let vw = vws[ds_id];
  // Itterate all reference layers
  for (const [key, val] of Object.entries(lyrids)) {
    // Check passed lyr is an array
    let lyrdefn = val;
    if (!Array.isArray(lyrdefn)) {
      lyrdefn = [lyrdefn];
    }
    // Itterate layers
    for (const lyr of lyrdefn) {
      // Setup layer id
      let lyr_id = mapid + "-" + dsid + "-" + lyr;
      // Setup visible flag
      let v = false;
      // Check layer exists and is the target
      if (vw.jimuLayerViews[lyr_id] && key == lyrkey) {
        v = true;
      }
      debug_log("RRC Mod: " + lyr_id + " visible: " + v);
      // Enable/disable layer
      mvm.getJimuMapViewById(ds_id).jimuLayerViews[lyr_id].view.visible = v;
    }
  }
  // Report change to console
  debug_log("RRC Mod: Layer config changed to " + lyrkey);
}

// Setup layer event function
function attach_layer_events(widgetid, lyrkey) {
  d.querySelector("[data-widgetid=" + widgetid + "]")
    .querySelector("a")
    .addEventListener("click", function () {
      toggle_lyr(map_id, ds_id, lyr_ids, lyrkey);
    });
}

// Setup basemap event function
function attach_basemap_events(widgetid, lyrkey) {
  d.querySelector("[data-widgetid=" + widgetid + "]")
    .querySelector("a")
    .addEventListener("click", function () {
      toggle_lyr(map_id, ds_id, bm_ids, lyrkey);
    });
}
