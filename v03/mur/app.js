//Set widget name
const map_id = "widget_map_large";
//Set datasource names
const ds_id = "ds_topo";
// Set layer names
const lyr_ids = {
  y15: ["rrc_mur15", "rrc_mur15_mask"],
  y25: ["rrc_mur25", "rrc_mur25_mask"],
  y30: ["rrc_mur30", "rrc_mur30_mask"],
  y40: ["rrc_mur40", "rrc_mur40_mask"],
  hide: null
};
// Set basemap names
const bm_ids = {
  topo: "base_osmnorivers",
  sat: ["base_esriimagery", "base_reflayer"],
  event2021: ["base_eventimagery", "base_reflayer"]
};
//Attach events
setTimeout(function () {
  // Attach layer events
  attach_layer_events("widget_button_1", "y15");
  attach_layer_events("widget_button_2", "y25");
  attach_layer_events("widget_button_3", "y30");
  attach_layer_events("widget_button_4", "y40");
  attach_layer_events("widget_button_5", "hide");
  // Attach basemap events
  attach_basemap_events("widget_button_sat", "sat");
  attach_basemap_events("widget_button_base", "topo");
  attach_basemap_events("widget_button_event", "event2021");
}, 1000);
// Report load to console
debug_log("RRC Mod: Init custom button override");