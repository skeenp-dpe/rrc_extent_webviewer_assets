//Set widget name
const map_id = "widget_map_large";
//Set datasource names
const ds_id = "dataSource_1";
// Set layer names
const lyr_ids = {
  d25: ["rrc_umur25", "rrc_umur25_mask"],
  d30: ["rrc_umur30", "rrc_umur30_mask"],
  d35: ["rrc_umur35", "rrc_umur35_mask"],
  d40: ["rrc_umur40", "rrc_umur40_mask"],
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
  attach_layer_events("widget_button_1", "d25");
  attach_layer_events("widget_button_2", "d30");
  //attach_layer_events("widget_35", "d35");
  attach_layer_events("widget_button_3", "d40");
  attach_layer_events("widget_button_5", "hide");
  // Attach basemap events
  attach_basemap_events("widget_button_sat", "sat");
  attach_basemap_events("widget_button_base", "topo");
  attach_basemap_events("widget_button_event", "event2021");
}, 1000);
// Report load to console
debug_log("RRC Mod: Init custom button override");



