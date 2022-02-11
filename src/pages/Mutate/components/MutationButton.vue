<template>
  <button
    class="btn btn-primary btn-lg-8 mt-2"
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
