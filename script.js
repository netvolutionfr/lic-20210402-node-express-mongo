fetch('http://localhost:8088/')
    .then( data => data.json())
    .then( res => {
        console.log(res);
        
    })
