<script>
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackState from './components/FeedbackStats.svelte'
	import FeedbackForm from './components/FeedbackForm.svelte';
</script>

<main class="container">
	<FeedbackForm />
	<FeedbackState />
	<FeedbackList />
</main>