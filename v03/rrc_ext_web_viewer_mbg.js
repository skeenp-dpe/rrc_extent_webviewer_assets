//Set widget name
const map_id = "widget_map_large";
//Set datasource names
const ds_id = "ds_topo";
// Set layer names
const lyr_ids = {
  w22: ["rrc_mbg_w22","rrc_mbg_w22_mask"],
  w32: ["rrc_mbg_w32","rrc_mbg_w32_mask"],
  w36: ["rrc_mbg_w36","rrc_mbg_w36_mask"],
  w40: ["rrc_mbg_w40","rrc_mbg_w40_mask"],
  hide: ""
};
// Set basemap names
const bm_ids = {
  topo: "base_osmnorivers",
  sat: "base_worldimagery",
  event2021: "base_eventimagery"
};

//Attach events
setTimeout(function () {
  // Attach layer events
  attach_layer_events("widget_button_2", "w22");
  attach_layer_events("widget_button_3", "w32");
  attach_layer_events("widget_button_4", "w36");
  attach_layer_events("widget_button_5", "w40");
  attach_layer_events("widget_button_6", "hide");
  // Attach basemap events
  attach_basemap_events("widget_button_sat", "sat");
  attach_basemap_events("widget_button_base", "topo");
  attach_basemap_events("widget_30", "event2021");
}, 1000);

// Report load to console
debug_log("RRC Mod: Init custom button override");