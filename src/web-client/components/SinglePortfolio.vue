<template>
  <Portfolio
    v-for="config in configs"
    :key="config.title"
    :body="config.body"
    :imported-images="config.images"
    :title="config.title"
    :footer="config.footer"
    :video-link="config.videoLink"
  />
</template>

<script setup lang="ts">
import Portfolio from './ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';

type PortfolioConfig = {
  title: string;
  body: string[];
  images: GlobEagerImport;
  footer?: string[];
  videoLink?: string;
};

const configs: PortfolioConfig[] = [
  {
    title: 'Arena Homme+ 60',
    body: ['The Collections'],
    images: import.meta.glob('../../assets/images/portfolio/AH60_TheCollections/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
  {
    title: 'Arena Homme+ 60',
    body: ['An Cat Dubh', 'with Natasha Arnold'],
    images: import.meta.glob('../../assets/images/portfolio/AH60_AnCatDubh/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
  {
    title: "'W'Happen?",
    body: ['Cult of Mowalola'],
    videoLink: 'https://player.vimeo.com/video/914040307?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    images: import.meta.glob('../../assets/images/portfolio/Pop_Mowalola/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
  {
    title: 'Arena Homme+ 58',
    body: ['Wish We Could All Be (California Boys)'],
    images: import.meta.glob('../../assets/images/portfolio/AH58_CaliforniaBoys/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
  {
    title: 'Arena Homme+ 58',
    body: ['The Collections'],
    images: import.meta.glob('../../assets/images/portfolio/AH58_TheCollections/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
  {
    title: 'POP Magazine 48',
    body: ['Stella Rose Gahan'],
    images: import.meta.glob('../../assets/images/portfolio/Pop_StellaRose/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
  {
    title: 'i-D Magazine Spring 23',
    body: ['Three'],
    images: import.meta.glob('../../assets/images/portfolio/ID_Spring23/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
  {
    title: 'i-D Magazine Fall 22',
    body: ['Jockstrap'],
    videoLink: 'https://player.vimeo.com/video/913733822?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    images: import.meta.glob('../../assets/images/portfolio/ID_Fall22/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
  {
    title: 'Arena HOMME+ 57',
    body: [
      'LOEWE special with England and Man City Midfielder Kalvin Phillips. Photographed in his hometown of Cleckheaton.',
    ],
    footer: ['Words - James Brown', 'Styling - Charlotte Rubenstein', 'Grooming - James Duggan'],
    images: import.meta.glob('../../assets/images/portfolio/AH57_KalvinPhillips/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
  {
    title: 'Replica Magazine',
    body: ['Men’s fashion story for Replica’s tenth issue - Spring 22'],
    footer: [
      'Styling - Louis Prier Tisdall',
      'Featuring Matej, Donte, Brennan and Eliot',
      'c/o Anita Bitton - Establishment',
    ],
    images: import.meta.glob('../../assets/images/portfolio/Replica_Spring22/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
  {
    title: 'Little Hills',
    body: [
      'A portfolio of pictures made across the towns and villages of the North East of Ireland.',
      "Pictures of the landscapes, the events, and the people that influence today's youth.",
    ],
    footer: ['Edition of 200', 'Loose Leaf', '42 Pages'],
    images: import.meta.glob('../../assets/images/portfolio/littleHills/*.jpg', {
      eager: true,
    }) as GlobEagerImport,
  },
];
</script>
