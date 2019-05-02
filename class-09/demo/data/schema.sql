DROP TABLE IF EXISTS weathers, yelps, movies, trails, locations;

CREATE TABLE IF NOT EXISTS locations ( 
    id SERIAL PRIMARY KEY, 
    search_query VARCHAR(255), 
    formatted_query VARCHAR(255), 
    latitude NUMERIC(10, 7), 
    longitude NUMERIC(10, 7)
  );

CREATE TABLE IF NOT EXISTS weathers ( 
    id SERIAL PRIMARY KEY, 
    forecast VARCHAR(255), 
    time VARCHAR(255),
    location_id INTEGER NOT NULL REFERENCES locations(id) 
  );

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY, 
  link VARCHAR(255), 
  name VARCHAR(255), 
  summary VARCHAR(1000),
  event_date CHAR(15), 
  location_id INTEGER NOT NULL REFERENCES locations(id) 
);
