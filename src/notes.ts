import { pitch } from "./constants";
import { default_options, MOVEMENT } from "./sequencer";

export const get_notes = (sequence: (MOVEMENT)[], play: boolean[], options = default_options) => {
  const base_pitch_idx = pitch.findIndex(el => el.id === options.pitch);
  const pitch_map = {
    "down": pitch[base_pitch_idx].id,
    "up": pitch[(base_pitch_idx + 7) % 12].id
  };

  return sequence.map((letter, index) => {
    if (play[index]) {
      switch (letter) {
        case MOVEMENT.UP: return `${pitch_map.up}4`;
        case MOVEMENT.DOWN: return `${pitch_map.down}3`;
      }
    } else {
      return "K";
    }
  });
};
