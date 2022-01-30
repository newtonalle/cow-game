<template>
  <button
    style="margin-left: 10px"
    :disabled="disabled"
    @click="mutateAllele()"
  >
    ?
  </button>
</template>
<script>
export default {
  props: { disabled: Boolean },
  methods: {
    mutateAllele() {
      this.$emit("mutateAllele");
    },
  },
};
</script>
