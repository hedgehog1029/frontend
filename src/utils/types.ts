export interface Show {
  id: number;
  name: string;
  category: {
    name: string;
  };
  brandColor: string;
  shortDescription: string;
  slug: string;
  emojiDescription: string;
}

export enum Tone {
  Dark = 'dark',
  Light = 'light',
}
