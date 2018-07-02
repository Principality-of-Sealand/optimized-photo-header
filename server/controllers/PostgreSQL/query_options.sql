select name, address, phone_number, restaurants.url, google_map, categories, photos.url from rest_photos inner join restaurants on rest_photos.rest_id = restaurants.id inner join photos on rest_photos.photo_id = photos.id where rest_id = $1
--> JOINT table query
select
  name
  address
  phone_number
  restaurants.url
  google_map
  categories
from
  rest_photos
inner join restaurants on rest_photos.rest_id = restaurants.id
inner join photos on rest_photos.photo_id = photos.id
where rest_id = $1

--> faster DOESN'T WORK --> MORE THAN ONE ROW SELECTED

SELECT
  json_build_object(
      'name',name,
      'address',address,
      'phone_number',phone_number,
      'restaurants.url',restaurants.url,
      'google_map',google_map,
      'categories',categories,
      'pictures',(
        SELECT url FROM rest_photos JOIN photos ON photo_id=photos.id
        WHERE rest_id=restaurants.id
      )
  )
FROM rest_photos
inner join restaurants on rest_id = restaurants.id
WHERE rest_id=$1;


--> JSON 
SELECT
  json_build_object(
      'name',name,
      'address',address,
      'phone_number',phone_number,
      'restaurants.url',restaurants.url,
      'google_map',google_map,
      'categories',categories,
      'pictures',(
          SELECT json_agg(json_build_object(
            'picture', photos.url
          ))
          FROM rest_photos JOIN photos ON rest_photos.photo_id=photos.id
          WHERE rest_id=restaurants.id
      )
  )
FROM rest_photos
inner join restaurants on rest_photos.rest_id = restaurants.id
WHERE rest_id=$1;

--> if you decide to go select url from table inner join,
--> then it will get pissed because select will return more
--> than one row

--> fastest 




SELECT ARRAY(
   SELECT url
   FROM rest_photos
   JOIN photos 
   ON photo_id = photos.id
   WHERE rest_id = restaurants.id
   )


--> JSON + ARRAY --> super slow
SELECT
  json_build_object(
      'name',name,
      'address',address,
      'phone_number',phone_number,
      'restaurants.url',restaurants.url,
      'google_map',google_map,
      'categories',categories,
      'pictures',(
        SELECT ARRAY(
          SELECT url
          FROM rest_photos
          JOIN photos 
          ON photo_id = photos.id
          WHERE rest_id = restaurants.id
          )
      )
  )
FROM rest_photos
inner join restaurants on rest_id = restaurants.id
WHERE rest_id=$1;