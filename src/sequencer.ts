export const default_options = {
  tala: "I#-O-O",
  jati: 4,
  nadai: 1,
  pitch: "G#",
};

export enum MOVEMENT { UP = "up", DOWN = "down" };

export const get_sequence = (options = default_options) => {
  const laghu = (angas: number) => ([MOVEMENT.UP, ...Array(angas - 1).fill(MOVEMENT.DOWN)]);
  const dhrita = [MOVEMENT.UP, MOVEMENT.DOWN];
  const anudhrita = [MOVEMENT.UP];

  const sequence: MOVEMENT[] = options.tala.split('-').map(letter => {
    switch (letter) {
      case 'I1': return anudhrita;
      case 'I2': return dhrita;
      case 'I3': return laghu(3);
      case 'I4': return laghu(4);
      case 'I6': return laghu(6);
      case 'I#': return laghu(options.jati);
      case 'O': return dhrita;
      case 'U': return anudhrita;
    }
  }).flat();
  return sequence
};

