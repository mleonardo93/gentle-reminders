# Gentle Reminders

## A React on Rails app built with Ruby and Rails, held together with Webpacker. A to-do list, but with motivation!  
Live at gentlereminders.herokuapp.com

### User stories  
* As a user, I want my tasks synced with a persistent backend  
I accomplished this by creating a backend in Rails to keep track of users and to-do items. Calls from React are made to the Rails API, which handles requests and updates the database.  

* As a user, I want to see my active tasks in a list as my default view 	
Signed-in users are presented with a list of their to-do items.  

* As a user, I want to be able to add a to-do item  
A form for creating new to-do items is part of the signed-in user's view. 

* As a user, I want to mark tasks as complete 	
A checkbox marks items as complete, upon which users will no longer be reminded about them.  

* As a user, I want to be able to delete a to-do item    
A handy "Delete" button is on every to-do item.  

* As a user, I want to be notified when a to-do is due  
Notifications with to-do info are built into each to-do item with encouragement to get the item done. They stop notifying when tasks are marked as complete. 
