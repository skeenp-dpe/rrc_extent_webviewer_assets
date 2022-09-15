// Set debug flag
const _debug = false;

// Get parent window
var w = top.window;
var d = w.document;

// Set debug function
function debug_log(msg) {
  if (_debug == true) {
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
  // Setup layer references
  let lyrs_hide = [];
  let lyrs_show = [];
  // Itterate all reference layers
  for (const [key, val] of Object.entries(lyrids)) {
    // Check layer is not none
    if (!val) { continue; }
    // Check passed lyr is an array
    let lyrdefn = val;
    if (!Array.isArray(lyrdefn)) {
      lyrdefn = [lyrdefn];
    }
    // Itterate layers
    for (const lyr of lyrdefn) {
      // Setup layer id
      let lyr_id = mapid + "-" + dsid + "-" + lyr;
      // Check layer exists and is the target
      if (vw.jimuLayerViews[lyr_id] && key == lyrkey) {
        lyrs_show.push(lyr_id)
      } else {
        lyrs_hide.push(lyr_id)
      }
    }
  }
  // Show/hide layer
  for (const lyr_id in lyrs_hide) {
    // Hide layer
    let lyrref = lyrs_hide[lyr_id]
    mvm.getJimuMapViewById(ds_id).jimuLayerViews[lyrref].view.visible = false;
    //debug_log("RRC Mod: " + lyrref + " hidden");
  }
  for (const lyr_id in lyrs_show) {
    // Show layer
    let lyrref = lyrs_show[lyr_id]
    mvm.getJimuMapViewById(ds_id).jimuLayerViews[lyrref].view.visible = true;
    //debug_log("RRC Mod: " + lyrref + " shown");
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
