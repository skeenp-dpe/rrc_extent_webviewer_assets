//Set widget name
const map_id = "widget_map_large";
//Set datasource names
const ds_id = "dataSource_2";
// Set layer names
const lyr_ids = {
  w22: "rrc_l22_wp15",
  w32: "rrc_l32_wp15",
  w36: "rrc_l36_wp15",
  w40: "rrc_l40_wp15"
};
// Set basemap names
const bm_ids = {
  topo: "base_osmnorivers",
  sat: "base_worldimagery",
  event2021: "base_eventimagery"
};

// Get parent window
var w = top.window;
var d = w.document;

// Setup layer event function
function attach_layer_events(widgetid, lyrkey) {
  d.querySelector("[data-widgetid=" + widgetid + "]")
    .querySelector("a")
    .addEventListener("click", function () {
      toggle_lyr(w, map_id, ds_id, lyr_ids, lyrkey);
    });
}

// Setup basemap event function
function attach_basemap_events(widgetid, lyrkey) {
  d.querySelector("[data-widgetid=" + widgetid + "]")
    .querySelector("a")
    .addEventListener("click", function () {
      toggle_lyr(w, map_id, ds_id, bm_ids, lyrkey);
    });
}

//Attach events
setTimeout(function () {
  // Attach layer events
  attach_layer_events("widget_button_1", "w22");
  attach_layer_events("widget_button_2", "w32");
  attach_layer_events("widget_button_3", "w36");
  attach_layer_events("widget_button_4", "w40");
  // Attach basemap events
  attach_basemap_events("widget_button_sat", "sat");
  attach_basemap_events("widget_button_base", "topo");
  attach_basemap_events("widget_30", "event2021");
}, 1000);

// Report load to console
debug_log("RRC Mod: Init custom button override");