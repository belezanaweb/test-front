function inputs(id, val, parent) {
    console.log('e', val.length)
    var res = true;
    console.log(val, 'val')
    if(val.length == 0){
      parent.classList.add('error')
      res = false
    }else{
      if(parent.classList.contains('error')){
        parent.classList.remove('error')
      }
    }
    
   
    
    if(id == 'nbCC'){
      val = val.split('-').join('').replace(/_/g, '');
      if(val.length < 16 || val.length > 16){
        parent.classList.add('error')
        res = false
      }else{
        if(parent.classList.contains('error')){
          parent.classList.remove('error')
        }
      }
    }
    else if(id == 'ccv'){
      val = val.split('-').join('').replace(/_/g, '');
      if(val.length < 3 || val.length > 3){
        parent.classList.add('error')
        res = false
      }else{
        if(parent.classList.contains('error')){
          parent.classList.remove('error')
        }
      }
    }
    else if(id == 'date'){
      if(val.length > 2){
        var day = val.split('/')[0]
        var year = val.split('/')[1]
        day = day.replace(/-/g, '')
        year = year.replace(/-/g, '')
   
        console.log('day', Number(day) > 31 )
        console.log('year', Number(year))

        if((Number(day) > 31 || Number(day) < 1) || (Number(year) > 2100 || Number(year < 2020))){
          parent.classList.add('error')
          res = false
        }else{
          if(parent.classList.contains('error')){
            parent.classList.remove('error')
          }
        }
      }
      else{
        parent.classList.remove('error')
      }
    }
    return  res 

}

export default {inputs}