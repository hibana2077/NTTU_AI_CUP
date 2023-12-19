<script>
    import "../app.pcss";
    import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Button } from 'flowbite-svelte';
    import { DarkMode } from 'flowbite-svelte';
    import { Section } from 'flowbite-svelte-blocks';
    import { Footer, FooterBrand, FooterLinkGroup, FooterLink, FooterCopyright, FooterIcon } from 'flowbite-svelte';
    
    let navClass = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
    let navDivClass = 'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
    let logo = "https://flowbite-svelte-blocks.vercel.app/images/logo.svg";
</script>

<Navbar rounded color="form" let:hidden let:toggle fluid={false} {navClass} {navDivClass}>
    <NavBrand href="/">
      <img src={logo} class="ml-3 me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">NTTU AI Judge</span>
    </NavBrand>
    <div class="flex items-center lg:order-2">
      <DarkMode class="ml-4" />
      <Button href="/" class="ml-2" color="red">Get started</Button>
        
      <NavHamburger on:click={toggle} btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" />
    </div>
    <NavUl>
      <NavLi href="/" active={true}>首頁</NavLi>
      <NavLi href="/about">賽事</NavLi>
      <NavLi href="/docs/components/navbar">資源中心</NavLi>
      <NavLi href="/pricing">社區互動</NavLi>
      <NavLi href="/contact">聯絡我們</NavLi>
    </NavUl>
</Navbar>

<slot></slot>

<footer class="mt-16 bg-white dark:bg-gray-800">
  <Footer footerType="socialmedia">
    <div class="mx-auto max-w-screen-xl text-center">
      <FooterBrand href="https://flowbite.com" src={logo} alt="Flowbite Logo" name="AI Judge" aClass="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white" />
      <p class="my-6 text-gray-500 dark:text-gray-400">Open-source library of over 400+ web components and interactive elements built for better web.</p>
      <FooterLinkGroup ulClass="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">About</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Premium</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Campaigns</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Blog</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Affiliate Program</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">FAQs</FooterLink>
        <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Contact</FooterLink>
      </FooterLinkGroup>
    </div>
  </Footer>
</footer>