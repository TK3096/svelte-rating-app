<script>
    import { v4 as uuid } from 'uuid'

    import Card from './Card.svelte'
    import Button from './Button.svelte'
    import Rating from './Rating.svelte'

    import { feedbacks } from '../stores'

    const MIN = 10

    let text = ''
    let disabled = true
    let message
    let rating = 10

    const handleInput = () => {
       if (text.trim().length >= MIN) {
            disabled = false
            message = null
       } else {
            disabled = true
            message = `Text must be at least ${MIN} characters`
       }
    }

    const handleRatingSelect = (e) => {
        rating = e.detail
    }

    const handleSubmit = () => {
        if (text.trim().length >= MIN) {
            const newFeedback = {
                id: uuid(),
                text,
                rating: +rating
            }

            feedbacks.update((current) => {
                return [newFeedback, ...current]
            })

            text = ''
            rating = 10
        }
    }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <Rating on:ratingSelecte={handleRatingSelect} selected={rating} />
        <div class="input-group">
            <input type='text' bind:value={text} on:input={handleInput} placeholder="Tell us something that keeps you coming back" />
            <Button {disabled} type='submit'>Send</Button>
        </div>
        {#if message}
            <p class="message">{message}</p>
        {/if}
    </form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }

    .input-group {
        display: flex;
        justify-content: space-between;

        border: 1px solid #ccc;
        padding: 8px 10px;

        border-radius: 8px;
        
        margin-top: 15px;
    }

    input {
        width: 70%;
        border: none;
        font-size: 16px;
    }

    input:focus {
        outline: none;
    }

    .message{
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>