DROP TABLE IF EXISTS location, weather;

CREATE TABLE location (
  id SERIAL PRIMARY KEY,
  latitude DECIMAL,
  longitude DECIMAL,
  formatted_query VARCHAR(255),
  search_query VARCHAR(255)
);

CREATE TABLE weather (
  forecast VARCHAR(255),
  time CHAR(15),
  created_at BIGINT,
  location_id INTEGER REFERENCES location(id)
);
