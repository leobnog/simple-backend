# simple-backend
This is a simple nodejs stateful backend with a tasks CRUD, without any auxiliaries packages, built from zero. 

## What is expected this application to do?
- create task
- list tasks
- update task by id
- delete task by id
- mark a task as done
- import tasks from a csv file

## routes
- POST - /tasks
- GET - /tasks
- PUT - /tasks/:id
- DELETE - /tasks/:id
- PATCH - /tasks/:id/complete

## import csv - details
To import the csv we are going to use the stream concept from nodejs and work with partial reading/writing actions.
