<script setup lang="ts">
import { computed } from "vue";

const year = computed(() => new Date().getFullYear().toString());
</script>

<template>
  <div class="flex flex-col justify-center max-w-[430px] gap-8">
    <div class="space-y-4 uppercase">
      <p>
        Continuosly inspired by the pop culture he consumed growing up and the
        tradition of story telling that surrounded him in the North East of
        Ireland, Peter focuses on drawing character and narrative in his work.
      </p>
      <p>
        With all of Peter's imagery comes a personal connection that clearly
        communicates a conversation on sexuality and identity.
      </p>
      <p>
        Having begun his career as a full time assistant to one of the
        industry's most prominent photographers he is now a regular contributor
        within the pages of some of the world's leading fashion, art and culture
        magazines. Editorial clients include Arena Homme+ , Vogue, Re-Edition,
        Harper's Bazaar US, POP Magazine, Replica Magazine and i-D Magazine.
      </p>
      <p>Peter is now based in London.</p>
    </div>
    <div
      class="flex flex-col gap-4 items-center md:flex-row md:justify-between"
    >
      <div>
        <a href="https://www.instagram.com/peter_josephsmith"
          >@peter_josephsmith</a
        >
      </div>
      <div>
        <a href="mailto:studio@peterjosephsmith.co.uk"
          >studio@peterjosephsmith.co.uk</a
        >
      </div>
    </div>
    <div class="flex justify-center mt-10 md:mt-20 lowercase">
      <span>All images &copy; Peter Joseph Smith {{ year }}</span>
    </div>
  </div>
</template>
