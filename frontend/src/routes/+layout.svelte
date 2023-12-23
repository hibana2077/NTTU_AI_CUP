<script>
    import "../app.pcss";
    import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Button } from 'flowbite-svelte';
    import { DarkMode } from 'flowbite-svelte';
    
    let school_name = "NTTU"
    let navClass = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
    let navDivClass = 'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
    let logo = "./logo.png"

</script>

<Navbar rounded color="form" let:hidden let:toggle fluid={false} {navClass} {navDivClass}>
    <NavBrand href="/">
      <img src={logo} class="ml-3 me-3 h-6 sm:h-9" alt="Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{school_name} AJ</span>
    </NavBrand>
    <div class="flex items-center lg:order-2">
      <DarkMode class="ml-4" />
      <Button href="/" class="ml-2" color="red">Get started</Button>
        
      <NavHamburger on:click={toggle} btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" />
    </div>
    <NavUl>
      <NavLi href="/" active={true}>首頁</NavLi>
      <NavLi href="/compition">競賽</NavLi>
      <NavLi href="/resource">資源中心</NavLi>
      <NavLi href="/community">社區互動</NavLi>
      <NavLi href="/contact">聯絡我們</NavLi>
    </NavUl>
</Navbar>

<slot></slot>