<script>
  import ContactCard from "./ContactCard.svelte";
  let name = "Ishan";
  let age = 20;

  $: uppercaseName = name.toUpperCase();

  $: console.log(name);

  $: if (name === "Ishan") {
    console.log("Name is Ishan");
  } else {
    console.log("Name is not Ishan");
  }

  function incrementAge() {
    age += 1;
  }

  function changeName() {
    name = "Ishan Naik";
  }

  function nameInput(event) {
    name = event.target.value;
  }
</script>

<h1>Hello {uppercaseName}!, My age is {age}</h1>
<button on:click={incrementAge}>Change Age</button>
<!-- <button on:click={changeName}>Change Name</button> -->
<!-- <input type="text" value={name} on:input={nameInput} /> -->
<input type="text" bind:value={name} />

<style>
  h1 {
    color: purple;
  }
</style>

<ContactCard />