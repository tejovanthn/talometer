<script lang="ts">
  import Talometer from "./talometer";
  import Dropdown from "./components/Dropdown.svelte";
  const talometer = new Talometer();

  const tala = [
    { value: "Dhruva", id: "IOII" },
    { value: "Matya", id: "IOI" },
    { value: "Rupaka", id: "OI" },
    { value: "Jhampa", id: "IUO" },
    { value: "Triputa", id: "IOO" },
    { value: "Ata", id: "IIOO" },
    { value: "Eka", id: "I" },
  ];

  const jati = [
    { value: "Tisra", id: 4 },
    { value: "Chatusra", id: 3 },
    { value: "Khanda", id: 5 },
    { value: "Misra", id: 7 },
    { value: "Sankeerna", id: 9 },
  ];

  const handleClick = (e) => {
    switch (e.target.id) {
      case "pauseplay":
        talometer.toggle();
        break;
      default:
        break;
    }
  };
  talometer.play();
</script>

<main>
  <Dropdown options={tala} />
  <Dropdown options={jati} />
  <button id="pauseplay" on:click={handleClick}>Start</button>
</main>
