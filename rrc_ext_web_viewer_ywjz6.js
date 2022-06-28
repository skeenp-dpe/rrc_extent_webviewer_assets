//Set widget name
const map_id = "widget_map_large";
//Set datasource names
const ds_id = "ds_topo";
// Set layer names
const lyr_ids = {
  y15: "rrc_y15_ywjz6",
  y25: "rrc_y25_ywjz6",
  y30: "rrc_y30_ywjz6",
  y40: "rrc_y40_ywjz6"
};
// Set basemap names
const bm_ids = {
  topo: "base_osmnorivers",
  sat: ["base_worldimagery", "base_eventimagery"],
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
  attach_layer_events("widget_button_1", "y15");
  attach_layer_events("widget_button_2", "y25");
  attach_layer_events("widget_button_3", "y30");
  attach_layer_events("widget_button_4", "y40");
  // Attach basemap events
  attach_basemap_events("widget_button_sat", "sat");
  attach_basemap_events("widget_button_base", "topo");
}, 1000);

// Report load to console
debug_log("RRC Mod: Init custom button override");