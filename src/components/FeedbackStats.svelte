<script>
    import { feedbacks } from '../stores'

    $: count = $feedbacks.length
    $: average = calculateAverage($feedbacks)

    const calculateAverage = (list) => {
		if (list.length === 0) return 0

		return Math.floor(list.reduce((acc, { rating }) => acc + rating, 0) / list.length)
	}
</script>

<div class="stats">
    <h4>{count} Reviews</h4>
    <h4>Rating Average: {average}</h4>
</div>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        align-items: center; 
    }
</style>