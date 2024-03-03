<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>{data.boatName}</h1>

<form method="POST">
  <input type="text" name="boatName" />
  <button type="submit">Submit</button>
</form>
