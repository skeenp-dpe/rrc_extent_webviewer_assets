let webmap = null
let option_selected = 1;
let basemap_selected = 1;

function toggle_lyr(lyrdefns, lyrKey) {
    const layerVisibility = {};
    // Load all layer IDs and set default visibility to false
    for (const [, lyrdefn] of Object.entries(lyrdefns)) {
        for (const lyrid of lyrdefn.lyrids) {
            layerVisibility[lyrid] = false;
        }
    }
    // Update visibility for selected item IDs
    const selected = lyrdefns[lyrKey]
    for (const lyrid of selected.lyrids) {
        layerVisibility[lyrid] = true;
    }
    // Set visibility based on layerVisibility dictionary
    for (const lyrid in layerVisibility) {
        const layer = webmap.findLayerById(lyrid);
        if (layer) {
            layer.visible = layerVisibility[lyrid];
        }
    }
    $('#lgn_extra').html(selected.legend_extra)
    $('#lgn_base_link').attr('href',selected.legend_basemap)
    if (selected.legend_basemap){
        $('#lgn_base').show()
    }else{
        $('#lgn_base').hide()
    }
}

function toggle_btn(lyrdefns, lyrkey, idpfix) {
    for (const [key, lyrdefn] of Object.entries(lyrdefns)) {
        const selected_key = key === lyrkey.toString();
        const btnid = '#' + idpfix + key;
        if (selected_key) {
            $(btnid).addClass('btnselected');
        } else {
            $(btnid).removeClass('btnselected');
        }
    }
}

function select_base(selected) {
    toggle_lyr(app_data['basemaps'], selected);
    toggle_btn(app_data['basemaps'], selected, 'base_');
}

function select_flow(selected) {
    toggle_lyr(app_data['flows'], selected);
    toggle_btn(app_data['flows'], selected, 'fopt_');
    update_flow_table(selected);
    update_flow(selected);
}

function update_flow_table(selected) {
    var table = document.createElement("table");
    var headers = ["Gauge", "Level (m)", "Flow (ML/d)", "Gauge Info"];
    var headerRow = document.createElement("tr");
    for (var i = 0; i < headers.length; i++) {
        var headerCell = document.createElement("th");
        headerCell.textContent = headers[i];
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
    var rowsAdded = false;
    for (var i = 0; i < app_data['gauges'].length; i++) {
        var item = app_data['gauges'][i];
        if (item.flows.hasOwnProperty(selected)) {
            var flowItem = item.flows[selected];
            var row = document.createElement("tr");
            var gaugeCell = document.createElement("td");
            gaugeCell.textContent = item.gauge;
            row.appendChild(gaugeCell);
            var levelCell = document.createElement("td");
            levelCell.textContent = (typeof flowItem.level === 'string' ? flowItem.level : Number(flowItem.level).toFixed(2))
            row.appendChild(levelCell);
            var flowCell = document.createElement("td");
            flowCell.textContent = flowItem.flow;
            row.appendChild(flowCell);
            var gaugeInfoCell = document.createElement("td");
            if (item.link) {
                var link = document.createElement("a");
                link.href = item.link;
                link.target = "_blank";
                link.textContent = "Gauge Info";
                gaugeInfoCell.appendChild(link);
            } else {
                gaugeInfoCell.textContent = "NA";
            }
            row.appendChild(gaugeInfoCell);
            table.appendChild(row);
            rowsAdded = true;
        }
    }
    if (!rowsAdded) {
        var tbdRow = document.createElement("tr");
        var tbdCell = document.createElement("td");
        tbdCell.setAttribute("colspan", headers.length);
        tbdCell.setAttribute("style", "text-align: center;");
        tbdCell.textContent = "TBD";
        tbdRow.appendChild(tbdCell);
        table.appendChild(tbdRow);
    }
    $("[data-placeholder='flow_table']").html(table);
}

function update_flow(val) {
    const defn = app_data['flows'][val];
    $("[data-placeholder='selected_flow']").html(defn['label']);
    if (val == 9999) {
        $("#scn_heading").hide();
        $("#scn_heading_noselection").show();
        $('#scn_details').hide();
        $('#scn_details_noselection').show();
        $('#lgn_upper').hide();
        $('#lgn_typical').hide();
        $('#lgn_refgauges_sup').hide();
        $('lgn_refgauges_desc_sup').hide();
        $('#lgn_upper_desc').hide();
        $('#lgn_typical_desc').hide();
        $('#lgn_typical_dp').hide();
        $('#scn_info').hide()
    } else {
        $("#scn_heading").show();
        $("#scn_heading_noselection").hide();
        $('#scn_details').show();
        $('#scn_details_noselection').hide();
        $('#lgn_upper').show();
        $('#lgn_refgauges_sup').show();
        if (defn['include_typical']) {
            $('#lgn_typical').show();
            $('#lgn_refgauges_sup').html(3);
            $('#lgn_refgauges_desc_sup').html(3);
            $('#lgn_typical_desc').show();
            $('#lgn_typical_dp').show();
        } else {
            $('#lgn_typical').hide();
            $('#lgn_refgauges_sup').html(2);
            $('#lgn_refgauges_desc_sup').html(2);
            $('#lgn_typical_desc').hide();
            $('#lgn_typical_dp').hide();
        }
        if (defn['base']) {
            $('#scn_info').hide()
            $('#basecase_note').show()
            $('#basecase_header_note').show()
            $('#basecase_extents_investigated').hide()
        } else {
            $('#scn_info').show()
            $('#basecase_note').hide()
            $('#basecase_header_note').hide()
            $('#basecase_extents_investigated').show()
        }
    }
}

function load_map() {
    require(["esri/config", "esri/WebMap", "esri/views/MapView", "esri/widgets/ScaleBar", "esri/widgets/Legend", "esri/widgets/Search"], function(esriConfig, WebMap, MapView, ScaleBar, Legend, Search) {
        esriConfig.apiKey = "AAPKcd84418a39604ee083fff1c8bdb48c26fWQ144h0tdWfeX0qIQW4oeNm-1KlR4QreBQrTkJDF_sMAn3RjMirmPCs_XOwur00";
        webmap = new WebMap({
            portalItem: {
                id: app_data['webmap_itemid']
            }
        });
        const view = new MapView({
            container: "viewDiv",
            map: webmap
        });
        const scalebar = new ScaleBar({
            view: view
        });
        scalebar.unit = "metric";
        view.ui.add(scalebar, "bottom-left");
        const searchWidget = new Search({
            view: view
        });
        view.ui.add(searchWidget, {
            position: "top-right",
            index: 2
        });
        webmap.load();
    });
}

function load_gauge(gauge) {
    $("[data-placeholder='gauge_title']").html(gauge_data[gauge]['title']);
    $('#gauge_tbl').html(gauge_data[gauge]['html']);
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-hidden');
    const left_button = document.getElementById('sidebar-toggle-btn-left');
    const down_button = document.getElementById('sidebar-toggle-btn-down');
    if (sidebar.classList.contains('sidebar-hidden')) {
        left_button.innerHTML = '&#x2BC8;';
        down_button.innerHTML = '&#x2BC5;';
    } else {
        left_button.innerHTML = '&#x2BC7;';
        down_button.innerHTML = '&#x2BC6;';
    }
}
$(document).ready(function() {
    update_flow_table(option_selected);
    update_flow(option_selected);
    let options_html = "<div class='w3-row'>";
    for (let idx in app_data['flows']) {
        let option_defn = app_data['flows'][idx];
        let selected_cls = (idx == option_selected) ? 'btnselected' : '';
        options_html += "<button id='fopt_" + idx + "' class='flowbtn " + selected_cls + "' onClick='select_flow(" + idx + ")' title='Show " + option_defn['label'] + " option'>" + option_defn['label'] + "</button>";
    }
    options_html += "</div>";
    $("#flow_controls").html(options_html);
    let basemap_html = "<div class='w3-row'>";
    for (let idx in app_data['basemaps']) {
        let basemap_defn = app_data['basemaps'][idx];
        let selected_cls = (idx == basemap_selected) ? 'btnselected' : '';
        basemap_html += "<button id='base_" + idx + "' class='basemapbtn " + selected_cls + "' onClick='select_base(" + idx + ")' title='Show " + basemap_defn['label'] + "'>" + basemap_defn['label'] + "</button>";
    }
    basemap_html += "</div>";
    $("#basemap_controls").html(basemap_html);
    load_map();
});