<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Sun, Moon, Computer } from "lucide-svelte";
    import { setMode, resetMode } from "mode-watcher";
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
        <Button builders={[builder]} variant="outline" size="icon">
            <Sun class="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon
                class="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end">
        <DropdownMenu.Item on:click={() => setMode("light")}>
            <Sun class="mr-2 size-4" />
            Light
        </DropdownMenu.Item>
        <DropdownMenu.Item on:click={() => setMode("dark")}>
            <Moon class="mr-2 size-4" />
            Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item on:click={() => resetMode()}>
            <Computer class="mr-2 size-4" />
            System
        </DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu.Root>
