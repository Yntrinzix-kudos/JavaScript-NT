export const mergeProducts = (data) => {
    
    if(!data) return [];

    return data.reduce((acc,products)=>{

        products.forEach( product => acc.push(product)); 
        return acc;

    },[])

}


export const addProductType = (arr,type) => {
    
    if(!arr) return [];

	return arr.map( res => {
		
		res.type = type || 'General Merchandize' 
		return res
		
    })


}


export const formatCurrencyPrice = (price,currency) => {
    
    const result = Number( (Number(price) * Number(currency)).toFixed(2) )

    return ( !isNaN(result) ? result : 'error value defined')

};


export const currencies = [
    {
        currency: 'NZD',
        value: 1
    },
    {
        currency: 'USD',
        value: .76
    },
    {
        currency: 'Euro',
        value: .67
    }
]


