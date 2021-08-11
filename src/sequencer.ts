export const default_options = {
  tala: "IOO",
  jati: 4,
  pitch: "G#",
};

export enum MOVEMENT { UP = "up", DOWN = "down" };

export const get_sequence = (options = default_options) => {
  const laghu: MOVEMENT[] = [MOVEMENT.UP, ...Array(options.jati - 1).fill(MOVEMENT.DOWN)];;
  const dhrita = [MOVEMENT.UP, MOVEMENT.DOWN];
  const anudhrita = [MOVEMENT.UP];

  const sequence: MOVEMENT[] = options.tala.split('').map(letter => {
    switch (letter) {
      case 'I': return laghu;
      case 'O': return dhrita;
      case 'U': return anudhrita;
    }
  }).flat();
  return sequence
};

