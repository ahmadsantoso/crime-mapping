

const report = [](
    {
        "type": "FeatureCollection",
        "crs": {
            "type": "name",
            "properties": {
                "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
            }
        },
        "features": [{
            "type": "Feature",
            "category": "violent-crime",
            "location_type": "Force",
            "location": {
                "latitude": "52.643950",
                "street": {
                    "id": 884227,
                    "name": "On or near Abbey Gate"
                },
                "longitude": "-1.143042"
            },
            "context": "",
            "outcome_status": {
                "category": "Unable to prosecute suspect",
                "date": "2017-02"
            },
            "persistent_id": "4d83433f3117b3a4d2c80510c69ea188a145bd7e94f3e98924109e70333ff735",
            "id": 54726925,
            "location_subtype": "",
            "month": "2017-02"
        }

        ]
    })

export default report