import { noteSets, pitch } from "./constants";
import { default_options, MOVEMENT } from "./sequencer";

const pitch_note_map = (noteSet) => {
  switch (noteSet) {
    case "P/S": return { up: (pitch) => (pitch + 7) % 12, down: (pitch) => pitch }
    case "M/S": return { up: (pitch) => (pitch + 6) % 12, down: (pitch) => pitch }
    case "Ś/S": return { up: (pitch) => pitch, down: (pitch) => pitch }
    case "P/N": return { up: (pitch) => (pitch + 7) % 12, down: (pitch) => (pitch + 11) % 12 }
  }
}

export const get_notes = (sequence: (MOVEMENT)[], play: boolean[], options = default_options) => {
  const base_pitch_idx = pitch.findIndex(el => el.id === options.pitch);
  const map_fn = pitch_note_map(options.noteSets)
  const pitch_map = {
    "down": pitch[map_fn.down(base_pitch_idx)].id,
    "up": pitch[map_fn.up(base_pitch_idx)].id
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
