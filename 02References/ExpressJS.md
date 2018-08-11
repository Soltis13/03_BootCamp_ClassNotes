###Basic Routing   

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).  

Each route can have one or more handler functions, which are executed when the route is matched.  

Route definition takes the following structure:  

app.METHOD(PATH, HANDLER)  

Where:  

    app is an instance of express.  
    METHOD is an HTTP request method, in lowercase.  
    PATH is a path on the server.  
    HANDLER is the function executed when the route is matched.  


####Routing methods  

Express supports the following routing methods corresponding to the HTTP methods of the same names:  

    checkout
    copy
    delete
    get
    head
    lock
    merge
    mkactivity

	

    mkcol
    move
    m-search
    notify
    options
    patch
    post

	

    purge
    put
    report
    search
    subscribe
    trace
    unlock
    unsubscribe

