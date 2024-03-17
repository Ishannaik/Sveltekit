<script>
  import ContactCard from "./ContactCard.svelte";
  let name = "Ishan";
  let age = 20;
  let title = "Software Developer";
  let description = "";
  let image = "https://media.tenor.com/33GMAhIK_1gAAAAe/vagabond-musashi.png";
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
<input type="text" bind:value={title} />
<input type="text" bind:value={image} />
<textarea rows="3" bind:value={description} />
<ContactCard userName={name} jobTitle={title} {description} userImage={image} />

<style>
  h1 {
    color: purple;
  }
</style>
