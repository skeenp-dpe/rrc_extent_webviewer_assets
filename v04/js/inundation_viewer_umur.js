let app_data = {
    "webmap_itemid": "0092b414c25742d8beca296a4721566f",
    "gauges": [{
        "gauge": "MURRAY RIVER AT DOCTORS POINT",
        "flows": {
            "1": {
                "level": 3.74,
                "flow": 25000
            },
            "2": {
                "level": 4.11,
                "flow": 30000
            },
            "3": {
                "level": 4.46,
                "flow": 35000
            },
            "4": {
                "level": 4.81,
                "flow": 40000
            }
        },
        "link": null
    }, {
        "gauge": "MURRAY RIVER AT ALBURY",
        "flows": {
            "1": {
                "level": "na",
                "flow": 25000
            },
            "2": {
                "level": "na",
                "flow": 30000
            },
            "3": {
                "level": "na",
                "flow": 35000
            },
            "4": {
                "level": "na",
                "flow": 40000
            }
        },
        "link": "gauges/409001.html"
    }, {
        "gauge": "MURRAY RIVER AT COROWA",
        "flows": {
            "1": {
                "level": 4.25,
                "flow": 25000
            },
            "2": {
                "level": 4.68,
                "flow": 30000
            },
            "3": {
                "level": 5.06,
                "flow": 35000
            },
            "4": {
                "level": 5.42,
                "flow": 40000
            }
        },
        "link": "gauges/409002.html"
    }, {
        "gauge": "MURRAY RIVER AT HOWLONG",
        "flows": {
            "1": {
                "level": "na",
                "flow": 25000
            },
            "2": {
                "level": "na",
                "flow": 30000
            },
            "3": {
                "level": "na",
                "flow": 35000
            },
            "4": {
                "level": "na",
                "flow": 40000
            }
        },
        "link": null
    }],
    "flows_excluded": {},
    "flows": {
        "1": {
            "id": 25,
            "label": "25,000 ML/d",
            "lyrids": ["rrc_umur25", "rrc_umur25_mask"],
            "gauge_info": [],
            "include_typical": true,
            "base": true
        },
        "2": {
            "id": 30,
            "label": "30,000 ML/d",
            "lyrids": ["rrc_umur30", "rrc_umur30_mask"],
            "gauge_info": [],
            "include_typical": true,
            "base": false
        },
        "3": {
            "id": 35,
            "label": "35,000 ML/d",
            "lyrids": ["rrc_umur35", "rrc_umur35_mask"],
            "gauge_info": [],
            "include_typical": true,
            "base": false
        },
        "4": {
            "id": 40,
            "label": "40,000 ML/d",
            "lyrids": ["rrc_umur40", "rrc_umur40_mask"],
            "gauge_info": [],
            "include_typical": true,
            "base": false
        },
        "9999": {
            "id": 9999,
            "label": "Hide All",
            "lyrids": [],
            "gauge_info": [],
            "base": false
        }
    },
    "basemaps": {
        "1": {
            "label": "Satellite (ESRI)",
            "lyrids": ["base_esriimagery", "base_hybrid", "base_hybrid_labels", "base_hybrid_reference"],
            "legend_basemap": 'assets/nsw_basemap_legend.pdf',
            "legend_extra": null
        },
        "2": {
            "label": "Satellite (NSW SS)",
            "lyrids": ["base_nswss_imagery", "base_hybrid", "base_hybrid_labels", "base_hybrid_reference"],
            "legend_basemap": 'assets/nsw_basemap_legend.pdf',
            "legend_extra": null
        },
        "3": {
            "label": "Basemap (OSM)",
            "lyrids": ["base_osmnorivers"],
            "legend_basemap": null,
            "legend_extra": null
        },
        "4": {
            "label": "Basemap (NSW SS)",
            "lyrids": ["base_hybrid", "base_hybrid_labels", "base_hybrid_reference"],
            "legend_basemap": 'assets/nsw_basemap_legend.pdf',
            "legend_extra": null
        },
        "5": {
            "label": "Light Grey",
            "lyrids": ["base_grey", "base_grey_labels", "base_grey_reference"],
            "legend_basemap": 'assets/nsw_basemap_legend_grey.pdf',
            "legend_extra": null
        },
        "6": {
            "label": "2021 Aerial",
            "lyrids": ["base_eventimagery", "base_hybrid", "base_hybrid_labels", "base_hybrid_reference", "base_eventimagery_missing"],
            "legend_basemap": 'assets/nsw_basemap_legend.pdf',
            "legend_extra": "<div id='lgn_noimg' class=legend-item><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQAQMAAAA26i3WAAAABlBMVEX////tHCQujCkBAAAAK0lEQVQI12Nobm5mYGdnZ+Dj42OQkZFhsLCwYCgoKGB48OABw8GDBwnJAwDnwxHvlNWE5wAAAABJRU5ErkJggg==' style='width:26px;height:14px;background:#fff;'> No imagery available</div>"
        }
    }
}