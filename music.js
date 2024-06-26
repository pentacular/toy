import {
  DrumMachine,
  ElectricPiano,
  Mallet,
  Mellotron,
  Reverb,
  Sampler,
  Smolken,
  Soundfont,
  SplendidGrandPiano,
  Versilian,
  getDrumMachineNames,
  getSoundfontNames,
  getElectricPianoNames,
  getMalletNames,
  getMellotronNames,
  getSmolkenNames,
  getSoundfontKits,
  getVersilianInstruments
} from 'https://cdn.jsdelivr.net/npm/smplr@0.15.1/+esm'

const kDrumMachineNames = [
  'TR-808', 'Casio-RZ1', 'LM-2', 'MFB-512', 'Roland CR-8000'
];

const kMellotronNames = [
  '300 STRINGS CELLO',
  '300 STRINGS VIOLA',
  '8VOICE CHOIR',
  'BASSA+STRNGS',
  'BOYS CHOIR',
  'CHA CHA FLT',
  'CHM CLARINET',
  'CHMB 3 VLNS',
  'CHMB ALTOSAX',
  'CHMB FEMALE',
  'CHMB MALE VC',
  'CHMB TNR SAX',
  'CHMB TRMBONE',
  'CHMB TRUMPET',
  'CHMBLN CELLO',
  'CHMBLN FLUTE',
  'CHMBLN OBOE',
  'DIXIE+TRMBN',
  'FOXTROT+SAX',
  'HALFSP.BRASS',
  'MIXED STRGS',
  'MKII BRASS',
  'MKII GUITAR',
  'MKII ORGAN',
  'MKII SAX',
  'MKII VIBES',
  'MKII VIOLINS',
  'MOVE BS+STGS',
  'STRGS+BRASS',
  'TROMB+TRMPT',
  'TRON 16VLNS',
  'TRON CELLO',
  'TRON FLUTE',
  'TRON VIOLA'
];

const kSoundfontNames = [
  "accordion",
  "acoustic_bass",
  "acoustic_grand_piano",
  "acoustic_guitar_nylon",
  "acoustic_guitar_steel",
  "agogo",
  "alto_sax",
  "applause",
  "bagpipe",
  "banjo",
  "baritone_sax",
  "bassoon",
  "bird_tweet",
  "blown_bottle",
  "brass_section",
  "breath_noise",
  "bright_acoustic_piano",
  "celesta",
  "cello",
  "choir_aahs",
  "church_organ",
  "clarinet",
  "clavinet",
  "contrabass",
  "distortion_guitar",
  "drawbar_organ",
  "dulcimer",
  "electric_bass_finger",
  "electric_bass_pick",
  "electric_grand_piano",
  "electric_guitar_clean",
  "electric_guitar_jazz",
  "electric_guitar_muted",
  "electric_piano_1",
  "electric_piano_2",
  "english_horn",
  "fiddle",
  "flute",
  "french_horn",
  "fretless_bass",
  "fx_1_rain",
  "fx_2_soundtrack",
  "fx_3_crystal",
  "fx_4_atmosphere",
  "fx_5_brightness",
  "fx_6_goblins",
  "fx_7_echoes",
  "fx_8_scifi",
  "glockenspiel",
  "guitar_fret_noise",
  "guitar_harmonics",
  "gunshot",
  "harmonica",
  "harpsichord",
  "helicopter",
  "honkytonk_piano",
  "kalimba",
  "koto",
  "lead_1_square",
  "lead_2_sawtooth",
  "lead_3_calliope",
  "lead_4_chiff",
  "lead_5_charang",
  "lead_6_voice",
  "lead_7_fifths",
  "lead_8_bass__lead",
  "marimba",
  "melodic_tom",
  "music_box",
  "muted_trumpet",
  "oboe",
  "ocarina",
  "orchestra_hit",
  "orchestral_harp",
  "overdriven_guitar",
  "pad_1_new_age",
  "pad_2_warm",
  "pad_3_polysynth",
  "pad_4_choir",
  "pad_5_bowed",
  "pad_6_metallic",
  "pad_7_halo",
  "pad_8_sweep",
  "pan_flute",
  "percussive_organ",
  "piccolo",
  "pizzicato_strings",
  "recorder",
  "reed_organ",
  "reverse_cymbal",
  "rock_organ",
  "seashore",
  "shakuhachi",
  "shamisen",
  "shanai",
  "sitar",
  "slap_bass_1",
  "slap_bass_2",
  "soprano_sax",
  "steel_drums",
  "string_ensemble_1",
  "string_ensemble_2",
  "synth_bass_1",
  "synth_bass_2",
  "synth_brass_1",
  "synth_brass_2",
  "synth_choir",
  "synth_drum",
  "synth_strings_1",
  "synth_strings_2",
  "taiko_drum",
  "tango_accordion",
  "telephone_ring",
  "tenor_sax",
  "timpani",
  "tinkle_bell",
  "tremolo_strings",
  "trombone",
  "trumpet",
  "tuba",
  "tubular_bells",
  "vibraphone",
  "viola",
  "violin",
  "voice_oohs",
  "whistle",
  "woodblock",
  "xylophone"
];

const kElectricPianoNames = [
  "CP80",
  "PianetT",
  "WurlitzerEP200",
  "TX81Z"
];

const kMalletNames = [
  "Balafon - Hard Mallet",
  "Balafon - Keyswitch",
  "Balafon - Soft Mallet",
  "Balafon - Traditional Mallet",
  "Tubular Bells 1",
  "Tubular Bells 2",
  "Vibraphone - Bowed",
  "Vibraphone - Hard Mallets",
  "Vibraphone - Keyswitch",
  "Vibraphone - Soft Mallets",
  "Xylophone - Hard Mallets",
  "Xylophone - Keyswitch",
  "Xylophone - Medium Mallets",
  "Xylophone - Soft Mallets"
];

const kSmolkenNames = [
  "Pizzicato",
  "Arco",
  "Switched"
];

const kSoundfontKits = [
  "MusyngKite",
  "FluidR3_GM"
];

const kVersilianInstrumentsNames = [
  "Electrophones/TX81Z - Piano 1",
  "Electrophones/TX81Z - Clavisynth",
  "Electrophones/TX81Z - Keyswitch",
  "Electrophones/TX81Z - FM Piano",
  "Chordophones/Composite Chordophones/Folk Harp",
  "Chordophones/Composite Chordophones/Concert Harp",
  "Chordophones/Composite Chordophones/Strumstick",
  "Chordophones/Zithers/Grand Piano, Kawai - Legacy",
  "Chordophones/Zithers/Harpsichord, Italian",
  "Chordophones/Zithers/Grand Piano, Kawai",
  "Chordophones/Zithers/Dan Tranh - Vibrato",
  "Chordophones/Zithers/Upright Piano, Knight",
  "Chordophones/Zithers/Harpsichord, French",
  "Chordophones/Zithers/Harpsichord, Flemish - 4'",
  "Chordophones/Zithers/Harpsichord, English - Keyswitch",
  "Chordophones/Zithers/Harpsichord, Flemish - 8'",
  "Chordophones/Zithers/Dan Tranh - Normal",
  "Chordophones/Zithers/Harpsichord, Flemish - Full",
  "Chordophones/Zithers/Psaltery, Bowed and Plucked - Keyswitch",
  "Chordophones/Zithers/Psaltery, Bowed and Plucked - LongBow",
  "Chordophones/Zithers/Harpsichord, Unk",
  "Chordophones/Zithers/Dan Tranh - Gliss",
  "Chordophones/Zithers/Harpsichord, English - Lute",
  "Chordophones/Zithers/Harpsichord, Flemish - Keyswitch",
  "Chordophones/Zithers/Dan Tranh - Tremolo",
  "Chordophones/Zithers/Dan Tranh - Keyswitch",
  "Chordophones/Zithers/Grand Piano, Steinway B",
  "Chordophones/Zithers/Psaltery, Bowed and Plucked - Spiccato",
  "Chordophones/Zithers/Psaltery, Bowed and Plucked - Pluck",
  "Chordophones/Zithers/Dan Tranh - FX",
  "Chordophones/Zithers/Upright Piano, Yamaha",
  "Chordophones/Zithers/Harpsichord, English - Normal",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Special20-F - HandVib",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Special20-F - Vib",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Special20-F - Normal",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Special20-C - Soft",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Super64 - Normal",
  "Aerophones/Free Aerophones/Siren",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Special20-F - Keyswitch",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Special20-F - Stac",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Super64 - Accented",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Special20-F - Accented",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Super64 - Vib",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Super64 - Keyswitch",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Special20-C - Keyswitch",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Special20-C - Normal",
  "Aerophones/Free Aerophones/Harmonica-Hohner-Special20-C - Vib",
  "Aerophones/Reed Aerophones/Saxello - Non-Vibrato",
  "Aerophones/Reed Aerophones/Tenor Saxophone - Vibrato",
  "Aerophones/Reed Aerophones/Saxello - Vibrato",
  "Aerophones/Reed Aerophones/Tenor Saxophone - Non-Vibrato",
  "Aerophones/Reed Aerophones/Tenor Saxophone - Keyswitch",
  "Aerophones/Reed Aerophones/Tenor Saxophone - Staccato",
  "Aerophones/Reed Aerophones/Saxello - Staccato",
  "Aerophones/Reed Aerophones/Saxello - Keyswitch",
  "Aerophones/Lip Aerophones/Didgeridoo",
  "Aerophones/Edge-blown Aerophones/Renaissance Organ - 8'",
  "Aerophones/Edge-blown Aerophones/Renaissance Organ - Full",
  "Aerophones/Edge-blown Aerophones/Renaissance Organ - 4'",
  "Aerophones/Edge-blown Aerophones/Pipe Organ - Quiet Pedal",
  "Aerophones/Edge-blown Aerophones/Baroque Alto Recorder - Keyswitch",
  "Aerophones/Edge-blown Aerophones/Ocarina, Small - Keyswitch",
  "Aerophones/Edge-blown Aerophones/Ocarina, Small - Sustain",
  "Aerophones/Edge-blown Aerophones/Ball Whistle",
  "Aerophones/Edge-blown Aerophones/Ocarina, Typical - SusVib",
  "Aerophones/Edge-blown Aerophones/Baroque Alto Recorder - Staccato",
  "Aerophones/Edge-blown Aerophones/Baroque Alto Recorder - SusVib",
  "Aerophones/Edge-blown Aerophones/Pipe Organ - Loud",
  "Aerophones/Edge-blown Aerophones/Baroque Tenor Recorder - Keyswitch",
  "Aerophones/Edge-blown Aerophones/Pipe Organ - Quiet",
  "Aerophones/Edge-blown Aerophones/Train Whistle, Toy",
  "Aerophones/Edge-blown Aerophones/Baroque Tenor Recorder - Sustain",
  "Aerophones/Edge-blown Aerophones/Baroque Soprano Recorder - Keyswitch",
  "Aerophones/Edge-blown Aerophones/Baroque Bass Recorder - Keyswitch",
  "Aerophones/Edge-blown Aerophones/Ocarina, Typical - Sus",
  "Aerophones/Edge-blown Aerophones/Pipe Organ - Loud Pedal",
  "Aerophones/Edge-blown Aerophones/Baroque Bass Recorder - Sustain",
  "Aerophones/Edge-blown Aerophones/Ocarina, Small - Staccato",
  "Aerophones/Edge-blown Aerophones/Baroque Soprano Recorder - Sustain",
  "Aerophones/Edge-blown Aerophones/Ocarina, Typical - Keyswitch",
  "Aerophones/Edge-blown Aerophones/Pipe Organ - Keyswitch",
  "Aerophones/Edge-blown Aerophones/Renaissance Organ - 4'+8'",
  "Aerophones/Edge-blown Aerophones/Baroque Soprano Recorder - Staccato",
  "Aerophones/Edge-blown Aerophones/Baroque Tenor Recorder - Staccato",
  "Aerophones/Edge-blown Aerophones/Baroque Bass Recorder - SusVib",
  "Aerophones/Edge-blown Aerophones/Baroque Alto Recorder - Sustain",
  "Aerophones/Edge-blown Aerophones/Renaissance Organ - Keyswitch",
  "Aerophones/Edge-blown Aerophones/Baroque Bass Recorder - Staccato",
  "Aerophones/Edge-blown Aerophones/Baroque Tenor Recorder - SusVib",
  "Idiophones/Plucked Idiophones/Mbira Mavembe (Gandanga), Zimbabwe, Low G",
  "Idiophones/Plucked Idiophones/Kalimba, Kenya",
  "Idiophones/Plucked Idiophones/Mbira dzaVadzimu Nyamaropa, Zimbabwe, Low B",
  "Idiophones/Plucked Idiophones/Kalimba, Tanzania",
  "Idiophones/Plucked Idiophones/Nyunga Nyunga, Mozambique, Low F",
  "Idiophones/Struck Idiophones/Balafon - Traditional Mallet",
  "Idiophones/Struck Idiophones/Xylophone - Medium Mallets",
  "Idiophones/Struck Idiophones/Vibraphone - Hard Mallets",
  "Idiophones/Struck Idiophones/Balafon - Keyswitch",
  "Idiophones/Struck Idiophones/Gong 1",
  "Idiophones/Struck Idiophones/Anvil",
  "Idiophones/Struck Idiophones/Balafon - Hard Mallet",
  "Idiophones/Struck Idiophones/Gong 2",
  "Idiophones/Struck Idiophones/Triangles",
  "Idiophones/Struck Idiophones/Slit Drum",
  "Idiophones/Struck Idiophones/Bell Tree - Keyswitch",
  "Idiophones/Struck Idiophones/Tambourine 5 - Legacy",
  "Idiophones/Struck Idiophones/Guiro - Keyswitch",
  "Idiophones/Struck Idiophones/Hi-Hat Cymbal",
  "Idiophones/Struck Idiophones/Claps",
  "Idiophones/Struck Idiophones/Bell Tree - Legacy",
  "Idiophones/Struck Idiophones/Clash Cymbals 1",
  "Idiophones/Struck Idiophones/Tambourine 3 - Legacy",
  "Idiophones/Struck Idiophones/Tambourine 4 - Legacy",
  "Idiophones/Struck Idiophones/Glockenspiel",
  "Idiophones/Struck Idiophones/Ratchet",
  "Idiophones/Struck Idiophones/Guiro - Legacy",
  "Idiophones/Struck Idiophones/Xylophone - Soft Mallets",
  "Idiophones/Struck Idiophones/Shaker - Legacy",
  "Idiophones/Struck Idiophones/Clash Cymbals 2",
  "Idiophones/Struck Idiophones/Hand Bells, Nepalese",
  "Idiophones/Struck Idiophones/Shaker, Small",
  "Idiophones/Struck Idiophones/Suspended Cymbal 1",
  "Idiophones/Struck Idiophones/Vibraphone - Keyswitch",
  "Idiophones/Struck Idiophones/Vibraslap",
  "Idiophones/Struck Idiophones/Woodblock",
  "Idiophones/Struck Idiophones/Hand Chimes",
  "Idiophones/Struck Idiophones/Vibraphone - Soft Mallets",
  "Idiophones/Struck Idiophones/Suspended Cymbal 2",
  "Idiophones/Struck Idiophones/Cowbells",
  "Idiophones/Struck Idiophones/Sleigh Bells",
  "Idiophones/Struck Idiophones/Agogo Bells",
  "Idiophones/Struck Idiophones/Bell Tree - Stroke",
  "Idiophones/Struck Idiophones/Claves",
  "Idiophones/Struck Idiophones/Shaker, Large",
  "Idiophones/Struck Idiophones/Tambourine 1",
  "Idiophones/Struck Idiophones/Xylophone - Keyswitch",
  "Idiophones/Struck Idiophones/Finger Cymbals",
  "Idiophones/Struck Idiophones/Tubular Bells 1",
  "Idiophones/Struck Idiophones/Bell Tree - Individual",
  "Idiophones/Struck Idiophones/Tambourine 2",
  "Idiophones/Struck Idiophones/Guiro",
  "Idiophones/Struck Idiophones/Cajon",
  "Idiophones/Struck Idiophones/Tubular Glockenspiel",
  "Idiophones/Struck Idiophones/Tubular Bells 2",
  "Idiophones/Struck Idiophones/Balafon - Soft Mallet",
  "Idiophones/Struck Idiophones/Brake Drum",
  "Idiophones/Struck Idiophones/Tubular Bells 3 - Legacy",
  "Idiophones/Struck Idiophones/Marimba",
  "Idiophones/Struck Idiophones/Mark Trees",
  "Idiophones/Struck Idiophones/Flexatone",
  "Idiophones/Struck Idiophones/Slapstick",
  "Idiophones/Struck Idiophones/Cabasa",
  "Idiophones/Struck Idiophones/Vibraphone - Bowed",
  "Idiophones/Struck Idiophones/Xylophone - Hard Mallets",
  "Idiophones/Friction Idiophones/Wine Glasses - Slow",
  "Idiophones/Friction Idiophones/Wine Glasses - Keyswitch",
  "Idiophones/Friction Idiophones/Wine Glasses - Fast",
  "Membranophones/Other Membranophones/Ocean Drum",
  "Membranophones/Struck Membranophones/Tom 1",
  "Membranophones/Struck Membranophones/Tom 2",
  "Membranophones/Struck Membranophones/Frame Drum",
  "Membranophones/Struck Membranophones/Legacy Toms",
  "Membranophones/Struck Membranophones/Bass Drum 3 - Legacy",
  "Membranophones/Struck Membranophones/Darbuka",
  "Membranophones/Struck Membranophones/Bass Drum 1",
  "Membranophones/Struck Membranophones/Timpani 1 - Keyswitch",
  "Membranophones/Struck Membranophones/Bass Drum 2",
  "Membranophones/Struck Membranophones/Legacy Snares - drum3_marching",
  "Membranophones/Struck Membranophones/Snare Drum, Rope Tension",
  "Membranophones/Struck Membranophones/Timpani 1 - Hit",
  "Membranophones/Struck Membranophones/Legacy Snares - OldSnare",
  "Membranophones/Struck Membranophones/Conga",
  "Membranophones/Struck Membranophones/Timpani 2 - All Samples",
  "Membranophones/Struck Membranophones/Snare Drum, Modern 3",
  "Membranophones/Struck Membranophones/Timpani 1 - Roll",
  "Membranophones/Struck Membranophones/Snare Drum, Modern 2",
  "Membranophones/Struck Membranophones/Bongos",
  "Membranophones/Struck Membranophones/Timpani 2 - Keyswitch",
  "Membranophones/Struck Membranophones/Snare Drum, Modern 1",
  "Membranophones/Struck Membranophones/Legacy Snares - drum2",
  "Membranophones/Struck Membranophones/Timpani 2 - Scale",
  "Membranophones/Struck Membranophones/Legacy Snares - drum1",
  "Membranophones/Struck Membranophones/Legacy Snares - Keyswitch"
];

let ac = null;

const getAc = () => {
  if (ac === null) {
    ac = new AudioContext();
  }
  return ac;
}


class Instrument {
  constructor(name) {
    this.name = name;
    this.instrument = null;
  }

  async load() {
    if (this.instrument === null) {
      if (kSoundfontNames.includes(this.name)) {
        console.log(`Music: loading Soundfont instrument "${this.name}"`);
        this.instrument = await new Soundfont(getAc(), { instrument: this.name }).load;
      }
    }
    return this.instrument;
  }

  async play(duration, music) {
    const ac = getAc();
    const instrument = await this.load();
    const now = ac.currentTime;
    const notes = music.split(/\s/g);
    let time = now;
    for (const note of notes) {
      if (note !== '--') {
        instrument.start({ note, time, duration });
      }
      time += duration;
    }
  }
}

const instruments = {};

export const instrument = (name) => {
  if (!instruments[name]) {
    instruments[name] = new Instrument(name);
  }
  return instruments[name];
};

export const load = async () => {
  for (const [name, instrument] of Object.entries(instruments)) {
    await instrument.load();
  }
};
