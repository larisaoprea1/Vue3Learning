const app = Vue.createApp({
    data: function(){
        return{
            cart:0,
            product: 'Socks',
            selectedVariant: 0,
            url: 'https://www.nike.com/ro/w/mens-socks-7ny3qznik1',
            inventory: 0,
            onSale: false, 
            brand: 'Vue Mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:2234, color:'green',size: '22.35cm', image: './assets/images/socks_green.jpg',quantity: 50, isOnStock: true },
                {id:2235, color:'blue',size:'22.85cm', image: './assets/images/socks_blue.jpg', quantity: 0, isOnStock: false}
            ],
            
        }
    },
    methods:{
        addToCart(){
            this.cart +=1
        },
        updateVariant(index){
            this.selectedVariant = index
            console.log(index);
        },
        removeFromCart(){
            this.cart -=1
        }
    },
    computed:{
        title(){
            return this.brand +" "+ this.product;
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        stock(){
            if(this.variants[this.selectedVariant].isOnStock){
                return 'On Stock'
            }
            else return 'Out of Stock'
        },
        sale(){
            if(this.onSale){
                return this.title + ' ' + 'is on sale'
            }
            else return this.title
        }
    }
})
