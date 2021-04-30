
--\l to list database--
--\d to list tables--

--\COPY comments (body, users_id, songs_id) FROM './comments.csv' DELIMITER ',' CSV HEADER;--

DROP DATABASE IF EXISTS qbgapp;
CREATE DATABASE qbgapp;

\c qbgapp;

CREATE TABLE months
(
 id SERIAL PRIMARY KEY,
 month_number INT NOT NULL,
 month_name VARCHAR(25) NOT NULL
);

CREATE TABLE locations
(
 id SERIAL PRIMARY KEY,
 map_number INT NOT NULL, 
 location_name TEXT,
 thumbnail_url TEXT,
 place_desc TEXT
);

CREATE TABLE locationsMedia
(
 id SERIAL PRIMARY KEY,
 location_id VARCHAR(50),
 media VARCHAR(50),
 media_url TEXT
);

CREATE TABLE birds
(
 id SERIAL PRIMARY KEY,
 bird_name VARCHAR(255) NOT NULL,
 bird_species_name VARCHAR(255) NOT NULL
);

CREATE TABLE plantsMonths
(
 id SERIAL PRIMARY KEY,
 month_number INT NOT NULL,
 common_name VARCHAR(255) NOT NULL
);


CREATE TABLE plantsLocations
(
 id SERIAL PRIMARY KEY,
 common_name VARCHAR NOT NULL,
 location VARCHAR(50)
);

CREATE TABLE plants
(
 plant_id SERIAL PRIMARY KEY,
 plant_species_name VARCHAR(255) NOT NULL,
 common_name VARCHAR(255) NOT NULL,
 plant_desc TEXT
);

CREATE TABLE plantsPhotos
(
id SERIAL PRIMARY KEY,
 plant_id INT,
 plant_species_name VARCHAR(255) NOT NULL,
 common_name VARCHAR(255) NOT NULL,
 photo_url TEXT
);


\COPY months (month_number, month_name) FROM 'months.csv' DELIMITER ',' CSV HEADER;--
\COPY locations (map_number, location_name, thumbnail_url, place_desc)  FROM 'locations.csv' DELIMITER ',' CSV HEADER;--
\COPY locationsMedia (location_id, media, media_url)  FROM 'locationsMedia.csv' DELIMITER ',' CSV HEADER;--
\COPY birds (bird_name, bird_species_name)  FROM 'birds.csv' DELIMITER ',' CSV HEADER;--
\COPY plants (plant_id, plant_species_name, common_name, plant_desc  )  FROM 'plants.csv' DELIMITER ',' CSV HEADER  encoding 'UTF8';-- 
\COPY plantsMonths (month_number, common_name)  FROM 'plantsByMonths.csv' DELIMITER ',' CSV HEADER;--
\COPY plantsLocations (common_name, location)  FROM 'plantsByLocations.csv' DELIMITER ',' CSV HEADER;--
\COPY plantsPhotos (plant_id, plant_species_name, common_name, photo_url)  FROM 'plantsPhotos.csv' DELIMITER ',' CSV HEADER;--

