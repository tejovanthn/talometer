<div class="panel">
  <div class="action">
    <slot name="action" />
  </div>
  <div class="controls">
    <slot name="controls" />
  </div>
  <div class="control-bar">
    <slot name="control-bar" />
  </div>
</div>

<style>
  .panel {
    display: grid;
    grid-template-areas:
      "action controls"
      "control-bar control-bar";
  }
  .panel > div {
    margin: 0.5rem;
  }
  .action {
    grid-area: action;
  }
  .controls {
    grid-area: controls;
  }
  .control-bar {
    grid-area: control-bar;
  }
</style>
