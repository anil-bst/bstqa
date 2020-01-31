All Modules are defined here. 

A module is a self-contained unit of business logic, and can have the following items: 
 - Middlewares: An express middleware which can be executed before or after a route runs to do some specific task like logging. (https://docs.nestjs.com/middleware)
 - Services: A class which does tasks like getting data from an API (https://docs.nestjs.com/providers)
 - Controllers: Every route must have a controller (https://docs.nestjs.com/controllers)
 - Routes: An option routing config file, in case routes are supposed to be dynamic.