<script>
    import { Section, Page404 } from 'flowbite-svelte-blocks';
    import { Button } from 'flowbite-svelte';
</script>
  
<Section name="page404" class="flex flex-col items-center justify-center py-12">
    <Page404>
      <svelte:fragment slot="h1">404</svelte:fragment>
      <svelte:fragment slot="paragraph">
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Emm... 看來有頁面掉到虛空了</p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">我們目前沒辦法到虛空去找回來，但你可以回到首頁看看有沒有你要的東西。</p>
        <Button href="/" size="lg" color="red">回到首頁</Button>
      </svelte:fragment>
    </Page404>
</Section>