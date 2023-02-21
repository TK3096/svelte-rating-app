<script>
    import { feedbacks } from '../stores'

    import Card from './Card.svelte'

    export let feedback

    const handleDelete = (id) => {
        feedbacks.update((current) => {
            return current.filter((feedback) => feedback.id != id)
        })
	}
</script>

<Card>
    <div class="rating">{feedback.rating}</div>
    <button class="close" on:click={() => handleDelete(feedback.id)}>X</button>
    <p>{feedback.text}</p>
</Card>

<style>
    .rating {
        position: absolute;
        top: -10px;
        left: -10px;

        width: 50px;
        height: 50px;
        padding: 10px;

        text-align: center;
        font-size: 19px;

        border-radius: 50%;
        border: 1px solid #eee;

        background-color: #ff6a95;
        color: #fff;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 20px;

        cursor: pointer;

        background: none;

        border: none;
    }
</style>