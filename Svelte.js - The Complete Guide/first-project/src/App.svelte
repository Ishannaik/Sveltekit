<script>
  import Header from "./UI/Header.svelte";
  import Meetupitem from "./Meetups/Meetupitem.svelte";

  const meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code!",
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fbest-coding-bootcamps%2F&psig=AOvVaw",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "code@test.com",
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will swim some laps!",
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fbest-coding-bootcamps%2F&psig=AOvVaw",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "code2@test.com",
    },
  ];
</script>

<Header />
<section id="meetups">
  {#each meetups as meetup}
    <Meetupitem
      title={meetup.title}
      subtitle={meetup.subtitle}
      description={meetup.description}
      imageUrl={meetup.imageUrl}
      address={meetup.address}
      contactEmail={meetup.contactEmail}
    />
  {/each}
</section>

<style>
  #meetups {
    margin: 2rem;
  }
</style>
