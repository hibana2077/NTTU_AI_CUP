<script>
    import { Section, News } from 'flowbite-svelte-blocks';
    import { Button } from 'flowbite-svelte';
    import { ArrowRightSolid, FileLinesSolid } from 'flowbite-svelte-icons';
    import { Card } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { Footer, FooterBrand, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
    import { Timeline, TimelineItem } from 'flowbite-svelte';
    import { A1Solid, A2Solid, A3Solid } from 'svelte-awesome-icons';

    let logo = "./logo.png"
    let compition_data = [
      {
        "name": "房價預測",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image": "https://media.discordapp.net/attachments/1096723815914029066/1187039709671723038/header.png?ex=65956fe0&is=6582fae0&hm=40daf605e66d7dbebb4748d45b9e4052ddbb9161faa6d4354b8639e091f9f771&=&format=webp&quality=lossless",
        "link": "/compition/1",
        "new": true
      },
      {
        "name": "手寫數字辨識",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image": "https://media.discordapp.net/attachments/1096723815914029066/1187039742013997156/header.png?ex=65956fe8&is=6582fae8&hm=48c28581f40478d804f16cdc08b8e95cb958caf3cb09b498ec0a4dc4b9dd0b13&=&format=webp&quality=lossless",
        "link": "/compition/2",
        "new": true
      },
      {
        "name": "蛋白質功能預測",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image": "https://media.discordapp.net/attachments/1096723815914029066/1187039819784785930/header.png?ex=65956ffb&is=6582fafb&hm=411970282893c4b2eac66f1a8a8e372172821966267729b93b703f900d486fa8&=&format=webp&quality=lossless",
        "link": "/compition/3",
        "new": true
      }
    ];
</script>
  
  <Section name="heroDefault">
    <News>
      <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
      <span class="text-sm font-medium">Flowbite is out! See what's new</span>
    </News>

    <h1 class="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">競賽</h1>

    <div class='grid gap-8 mb-2 lg:mb-16 md:grid-cols-3'>
      {#each compition_data as compition}
        <Card img={compition.image} href={compition.link} class="flex flex-col items-start justify-start p-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{compition.name}</h5>
            <p class="mb-4 font-normal text-gray-700 dark:text-gray-400 leading-tight">{compition.description}</p>
            <Button>
              Read more <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
            </Button>
        </Card>
      {/each}
    </div>
  
    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <a href="/">
        <Button size="lg" color="red">
          更多比賽 <ArrowRightSolid size="md" class="ml-2 -mr-1" />
        </Button>
      </a>
      <a href="/">
        <Button size="lg" color="light">
          <FileLinesSolid size="xs" class="mr-2 -ml-1" />
          說明文件
        </Button>
      </a>
    </div>

    <h1 class="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">如何參加比賽</h1>

    <div class='grid gap-8 mb-2 lg:mb-16 md:grid-cols-3'>
      <Card class="flex flex-col items-start justify-start p-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Step 1</h5>
          <p class="mb-4 font-normal text-gray-700 dark:text-gray-400 leading-tight">透過 Google / GitHub 註冊帳號</p>
          <Button>
            註冊帳號 <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
          </Button>
      </Card>
      <Card class="flex flex-col items-start justify-start p-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Step 2</h5>
          <p class="mb-4 font-normal text-gray-700 dark:text-gray-400 leading-tight">選擇有興趣的競賽，或是透過邀請碼加入競賽</p>
          <Button>
            選擇競賽 <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
          </Button>
      </Card>
      <Card class="flex flex-col items-start justify-start p-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Step 3</h5>
          <p class="mb-4 font-normal text-gray-700 dark:text-gray-400 leading-tight">透過模型來預測答案，並上傳預測結果</p>
          <Button>
            上傳解答 <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
          </Button>
      </Card>
    </div>

    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <a href="/">
        <Button size="lg" color="red">
          報名流程 <ArrowRightSolid size="md" class="ml-2 -mr-1" />
        </Button>
      </a>
      <a href="/">
        <Button size="lg" color="light">
          <FileLinesSolid size="xs" class="mr-2 -ml-1" />
          說明文件
        </Button>
      </a>
    </div>
  </Section>

  <footer class="mt-16 bg-white dark:bg-gray-800">
    <Footer footerType="socialmedia">
      <div class="mx-auto max-w-screen-xl text-center">
        <FooterBrand href="https://ai-judges.com" src={logo} alt="AI Judge Logo" name="AI Judge" aClass="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white" />
        <p class="my-6 text-gray-500 dark:text-gray-400">開源的AI競賽平台</p>
      </div>
    </Footer>
  </footer>