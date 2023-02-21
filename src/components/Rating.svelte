<script>
    import { createEventDispatcher } from "svelte";

    const RATES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    const dispatch = createEventDispatcher()

    export let selected = 10

    const handleChange = (event) => {
      selected = event.target.value

      dispatch('ratingSelecte', selected)
    }
</script>

<ul class="rating">
    {#each RATES as rate (rate)}
        <li>
            <input type='radio' id={`rate-${rate}`} name='rating' value={rate} checked={selected === rate} on:change={handleChange} />
            <label for={`rate-${rate}`}>{rate}</label>
        </li>
    {/each}
</ul>

<style>
    .rating {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 30px 0;
    }

    .rating li {
      position: relative;
      background: #f4f4f4;
      width: 50px;
      height: 50px;
      padding: 10px;
      text-align: center;
      border-radius: 50%;
      font-size: 19px;
      border: 1px #eee solid;
      transition: 0.3s;
    }

    @media screen and (max-width: 720px) {
        .rating li {
            width: 40px;
            height: 40px;
        }

        .rating li label {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 30px;
            height: 30px;
            padding: 10px;
            border-radius: 30%;
            transform: translate(-30%, -30%);
            cursor: pointer;
        }
    }

    .rating li label {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50px;
      height: 50px;
      padding: 10px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }

    .rating li:hover {
      background: #ff6a95;
      color: #fff;
    }

    /* Make actual radio select invisible */
    [type='radio'] {
      opacity: 0;
    }
    
    /* Use the sibling select */
    [type='radio']:checked ~ label {
      background: #ff6a95;
      color: #fff;
    }
  </style>