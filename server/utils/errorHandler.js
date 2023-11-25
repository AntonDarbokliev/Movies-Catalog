const errorHandler = (err) => {
    if(err.name == 'ValidationError'){
        const errors = {}
        for(let currentError in err.errors){
            errors[currentError] = err.errors[currentError].message
          }
        return errors  
    }else if(err.name == 'Error'){
        const error = {message : err.message}
        
        return error 
    }else {
        return {}
    }
  
}

module.exports = errorHandler