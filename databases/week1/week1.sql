-- Find out contain of the task table.
SELECT * FROM task; 

-- Find out how many tasks are in the task table.
SELECT COUNT(task.id) FROM task; 

-- Find out how many tasks in the task table do not have a valid due date
SELECT due_date , title FROM task 
WHERE task.due_date IS NULL ;

-- Find all the tasks that are marked as done
SELECT title ,status_id FROM task WHERE status_id = 3;

--  Find all the tasks that are not marked as done
SELECT title ,status_id FROM task WHERE status_id != 3;

--  Get all the tasks, sorted with the most recently created first
SELECT title, created FROM task ORDER BY created DESC;

-- Get the single most recently created task
SELECT title, created FROM task ORDER BY created DESC LIMIT 0,1;

-- Get the title and due date of all tasks where the title or description contains database 
SELECT  title, due_date  FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

--  Get the title and status (as text) of all tasks
SELECT  title, status_id , status.name FROM task
INNER JOIN status ON task.status_id = status.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT name, COUNT(task.status_id) AS count  FROM status
INNER JOIN task ON  task.status_id=status.id 
GROUP BY task.status_id;

-- Get the names of all statuses, sorted by the status with most tasks first 
SELECT name, COUNT(task.status_id) AS count  FROM status
INNER JOIN task ON  task.status_id=status.id 
GROUP BY task.status_id
ORDER BY count DESC;