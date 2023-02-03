import http from 'node:http';

// interface Task {
//     id: string;
//     title: string;
//     description: string;
//     completed_at: Date;
//     created_at: Date;
//     updated_at: Date;
// }

const tasks = [];

const server = http.createServer((req, res) => {
    
    const {method, url} = req;

    // - get - /tasks
    if (method === 'GET' && url === '/tasks') {
        return res
            .setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .end(JSON.stringify(tasks));
    }

    // - post - /tasks
    if (method === 'POST' && url === '/tasks') {
        tasks.push({
            id: 1,
            title: 'task 1',
            description: 'descrption task 1',
            completed_at: null,
            created_at: new Date(),
            updated_at: null
        });

        return res.writeHead(201).end();
    }

    return res.writeHead(404).end();

});

/*
features: 
- create task
- list tasks
- update task by id
- delete task by id
- mark task as done
- import tasks from csv file
*/

/* 
routes:
- post - /tasks
- get - /tasks
- put - /tasks/:id
- delete - /tasks/:id
- patch - /tasks/:id/complete
*/
server.listen(1234);