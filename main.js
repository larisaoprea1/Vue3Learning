const app = Vue.createApp({
    data: function(){
        return{
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.nike.com/ro/w/mens-socks-7ny3qznik1',
            inventory: 9,
            onSale: true, 
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:2234, color:'green',size: '22.35cm'},
                {id:2235, color:'blue',size:'22.85cm'}
            ],
            
        }
    }
})
