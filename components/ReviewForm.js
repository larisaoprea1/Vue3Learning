app.component('review-form',{
    props:{

    },
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label for="question">Would you recommend this product?</label>
    <select id="question" v-model="question">
      <option>Yes, I recommend this product!</option>
      <option>No, I don't recommend this product!</option>
    </select>

    <input class="button" type="submit" value="Submit">
  </form>`,
  data(){
    return {
        name:'',
        review:'',
        rating: null,
        question: null
    }
  },
  methods: {
    onSubmit(){
        if (this.name === '' || this.review === '' || this.rating === null || this.question === null) {
            alert('Review is incomplete. Please fill out every field.')
        return
        }
        let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            question: this.question
        }
        this.$emit('review-submitted', productReview)

        this.name = ''
        this.review = ''
        this.rating = null
        this.question = null
    }
  }
})