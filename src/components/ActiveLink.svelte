<script lang="ts">
  import { Link } from "svelte-navigator";
  export let to: string;
  export let className: string = "";

  const getProps = ({ location, href, isPartiallyCurrent, isCurrent }) => {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: `active ${className}` };
    }
    return { class: className };
  };
</script>

<Link {to} {getProps}><slot /></Link>
