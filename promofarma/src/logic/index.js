const logic = {

    toogleItems(item,list,listPrice){

        if(!(item instanceof Object)) throw Error (item + ' is not a Object')

        if(!(list instanceof Array)) throw Error (list + ' is not an Array')

        if(!(listPrice instanceof Array)) throw TypeError(listPrice + ' is not an Array') 

        const index = list.findIndex(searchItem => searchItem === item)

        if(index < 0 ){
            list.push(item)
            listPrice.push(item.price)
             
        } 
        else{
            list.splice(index,1)
            listPrice.splice(index,1)
            

        } 
        return list , listPrice
    }
}

export default logic