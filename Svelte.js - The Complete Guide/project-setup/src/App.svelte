<script>
  export let name;
  export let age;

  function incrementAge() {
    age += 1;
  }
</script>

<h1>Hello {name}!, My age is {age}</h1>
<button on:click={incrementAge}>Change Age</button>

<style>
  h1 {
    color: purple;
  }
</style>
