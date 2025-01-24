<script lang="ts">
    import { getFirebaseContext } from "../stores/sdk.js";
    import { userStore } from "../stores/auth.js";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    const auth = getFirebaseContext().auth!;
    const user = userStore(auth)

    const { url } = $props();

    onMount(() => {
      const unsubscribe = user.subscribe((user) => {
        if (user) goto(url);
      });
      return () => unsubscribe();
    });

  </script>