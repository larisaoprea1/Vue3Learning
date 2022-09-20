app.component('product-display',{
    props:{
        premium:{
            type: Boolean, 
            required: true
        }
    },
    template:
    /*html*/ 
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
      <a :href="url">
        <img
         :src="image"
         :class="[inStock ? '': 'out-of-stock-img']">
      </a>  
      </div>
      <div class="product-info">

        <h1>{{ sale }}</h1>

        <!-- <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
        <p v-else>Out of Stock</p> -->
        <!-- <p v-if="onSale"> ON SALE!!</p> -->
        <p>{{stock}}</p>

        <product-details :details="details"></product-details>

        <div 
          v-for="(variant,index) in variants"
         :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{backgroundColor: variant.color}">
        </div>

        <div 
          v-for="variant in variants"
         :key="variant.id">
         {{variant.size }}
        </div>

        <p>Shipping: {{shipping}} </p>

        <button
          class="button"
          :disabled="!inStock && inventory == 0"
          :class="{disabledButton: !inStock && inventory == 0 }"
          @click="addToCart">Add to Cart</button>
        <button class="button" @click="removeFromCart">Remove item</button>
      </div>
    </div>
    <review-form @review-submitted="addReview"></review-form>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
  </div>`,
  data: function(){
    return{
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
        reviews:[]
        
    }
},
methods:{
    addToCart(){
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index){
        this.selectedVariant = index
        console.log(index);
    },
    removeFromCart(){
        this.$emit('remove-from-cart',this.variants[this.selectedVariant].id)
    },
    addReview(review){
        this.reviews.push(review)
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
    },
    shipping(){
        if(this.premium){
            return 'Free'
        }
        return '2.99$'
    }
}
})