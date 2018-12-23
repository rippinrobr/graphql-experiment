# Baseball Databank API 

This API exposes four entities, Players, Managers, Seasons, and Franchises.  Each entity has the ability list records and find a single entity.  The purpose of this API is to provide data for GraphQL experiment that I will be conducting using data from the [Baseball Databank Data](https://github.com/chadwickbureau/baseballdatabank) that I've turned into a SQLite 
database using my [csv-to](https://github.com/rippinrobr/csv-to) utility.  Each of the API's resource will be treated as if they were their own micro-service, I'm doing this so I only have one REST service to start up.  The Client will use GraphQL calls to stitch the data together.

## The API

* `/franchises` - returns a paged list of team franchise information, page size is 35 for this POC
* `/franchises/:franchID` - returns information about a single record 
* `/managers` - returns a paged list of managers in each season, page size is 35 for this POC
* `/managers/:playerID` - returns information about a single person's managerial record  
* `/players` - returns a paged list of player demographics of all players who have played in the major leagues, page size is 35 for this POC
* `/players/:playerID` - returns a single player's demographics 
* `/seasons` - returns a paged list of a season stats for each team that played in the given season
* `/seasons/:yearID` - returns information about a single season
