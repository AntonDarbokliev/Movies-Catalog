const errorHandler = (err) => {
    if(err.name == 'ValidationError'){
        const errors = {}
        for(let currentError in err.errors){
            errors[currentError] = err.errors[currentError].message
          }
        return errors  
    }else {
        return {}
    }
  
}

module.exports = errorHandler