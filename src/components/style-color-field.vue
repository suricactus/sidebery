<template lang="pug">
.ColorField(:data-active="!!value")
  .label
    .desc {{t(label)}}
    .var {{name}}
  .input-group
    color-input.color-input(
      v-debounce:input.128="debouncedInput"
      :value="value"
      @input="onInput")
    toggle-input.toggle(:value="!!value", @input="toggle")
</template>


<script>
import ToggleInput from './toggle-input'
import ColorInput from './color-input'

export default {
  components: {
    ToggleInput,
    ColorInput,
  },

  props: {
    value: String,
    label: String,
    name: String,
    optFill: String,
    opts: Array,
  },

  data() {
    return {}
  },

  methods: {
    onInput(val) {
      this.$emit('input', val)
    },

    debouncedInput() {
      this.$emit('change', this.value)
    },

    toggle() {
      this.$emit('toggle')
    },
  },
}
</script>
