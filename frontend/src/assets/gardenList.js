// SELECT MAP_NUMBER, LOCATION_NAME, place_Desc, THUMBNAIL_URL, ARRAY_AGG(DISTINCT plants.COMMON_NAME) as plantslist, ARRAY_AGG(DISTINCT plants.plant_id) as plant_id
// FROM LOCATIONS 
// LEFT JOIN PLANTSLOCATIONS ON location_name = location
// LEFT JOIN plants ON PLANTSLOCATIONS.common_name = plants.common_name
// GROUP BY MAP_NUMBER, LOCATION_NAME, place_Desc, THUMBNAIL_URL



