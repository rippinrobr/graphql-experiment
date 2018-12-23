# Baseball Databank API 

This API exposes four entities, Players, Managers, Seasons, and Franchises.  Each entity has the ability
list records and find a single entity.  The purpose of this API is to provide data for GraphQL experiment 
that I will be conducting using data from the [Baseball Databank Data](https://github.com/chadwickbureau/baseballdatabank) that I've turned into a SQLite 
database using my [csv-to](https://github.com/rippinrobr/csv-to) utility.

## The API

* `/franchises` - returns a list paged list of team franchise information, page size is 35 for this POC
* `/franchises/:franchID` - returns information about a single record 
* `/managers` - returns a list paged list of managers information, page size is 35 for this POC
* `/franchises/:franchID` - returns information about a single record 
