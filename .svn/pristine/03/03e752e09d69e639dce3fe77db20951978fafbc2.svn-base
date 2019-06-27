exports.insert = (connection, query, data) => {
    return new Promise((resolve, reject) => {
        connection.query(query, data, function (error, results, fields) {
            if (error) reject();
            resolve(results);
        });
    })
}
exports.insertMultiple = (connection, query, data) => {
    return new Promise((resolve, reject) => {
        console.log(data)
        for(var i=0;i<data.length;i++)
        {
            connection.query(query, data[i], function (error, results, fields) {
                if (error) reject();
                resolve(results);
            });

        }
        
      
    })
}

exports.find = (connection, query, data) => {
    return new Promise((resolve, reject) => {
        connection.query(query, data, function (error, results, fields) {
            if (error) reject();
            resolve(results);
        });
    })

}

exports.update = (connection, query, data) => {
    return new Promise((resolve, reject) => {
        connection.query(query, data, function (error, results, fields) {
            if (error) reject();
            resolve(results);
        });
    })

}

exports.delete = (connection, query, data) => {
    return new Promise((resolve, reject) => {
        connection.query(query, data, function (error, results, fields) {
            if (error) reject();
            resolve(results);
        });
    })

}

exports.synchronize = (connection,query,data) => {
    return new Promise((resolve, reject)=>{
        connection.query(query,data ,function(err, result, fields){
            if (!err) resolve(result); // Hacky solution
            else reject(err);
        });
    });


}

