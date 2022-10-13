//Set widget name
const map_id = "widget_map_large";
//Set datasource names
const ds_id = "dataSource_1";
// Set layer names
const lyr_ids = {
  d25: "rrc_h2y_m02_d25",
  d30: "rrc_h2y_m02_d30",
  d40: "rrc_h2y_m02_d40",
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
  attach_layer_events("widget_button_2", "d25");
  attach_layer_events("widget_button_3", "d30");
  attach_layer_events("widget_button_4", "d40");
  // Attach basemap events
  attach_basemap_events("widget_button_sat", "sat");
  attach_basemap_events("widget_button_base", "topo");
  attach_basemap_events("widget_30", "event2021");
}, 1000);

// Report load to console
debug_log("RRC Mod: Init custom button override");