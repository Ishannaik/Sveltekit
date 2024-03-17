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
        "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "code@test.com",
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will swim some laps!",
      imageUrl:
        "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/65ed3e0e175d4779a639f49621f65ae1/22f982bc56c541e8b487e9b6c230cab3",
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
