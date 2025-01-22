<script lang="ts">
    import { getFirebaseContext } from "../stores/sdk.js";
    import { userStore } from "../stores/auth.js";
    import type { Auth } from 'firebase/auth';
    import {goto} from "$app/navigation";

    const auth = getFirebaseContext().auth!;
    const user = userStore(auth)

    const { url } = $props();

    user.subscribe((user) => {
      if (user) {
        console.log('User is signed in');
        goto(url);
      } else {
        console.log('User is signed out');
      }
    });

  </script>