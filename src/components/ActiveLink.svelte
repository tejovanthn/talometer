<script lang="ts">
  import { Link } from "svelte-navigator";
  export let to: string;

  const getProps = ({ location, href, isPartiallyCurrent, isCurrent }) => {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: "active" };
    }
    return {};
  };
</script>

<Link {to} {getProps}><slot /></Link>
