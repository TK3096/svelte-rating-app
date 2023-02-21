<script>
    import { fade, scale } from 'svelte/transition'

    import FeedbackItem from './FeedbackItem.svelte'

    import { feedbacks } from '../stores'
</script>

<div>
    {#each $feedbacks as feedback (feedback.id)}
        <div in:scale out:fade="{{ duration: 500 }}">
            <FeedbackItem {feedback} />
        </div>
    {:else}
        <p class="empty">No Feedback</p>
    {/each}
</div>

<style>
    .empty {
        text-align: center;
        margin: 20px 0;
    }
</style>