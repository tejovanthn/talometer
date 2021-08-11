import { pitch } from "./constants";
import { default_options, MOVEMENT } from "./sequencer";

export const get_notes = (sequence: (MOVEMENT | null)[], options = default_options) => {
  const base_pitch_idx = pitch.findIndex(el => el.id === options.pitch);
  const pitch_map = {
    "up": pitch[base_pitch_idx].id,
    "down": pitch[(base_pitch_idx + 7) % 12].id
  };

  return sequence.map(letter => {
    switch (letter) {
      case MOVEMENT.UP: return `${pitch_map.up}4`;
      case MOVEMENT.DOWN: return `${pitch_map.down}3`;
    }
  });
};
