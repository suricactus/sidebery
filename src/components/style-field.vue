<template lang="pug">
.StyleField(:data-active="!!value")
  .label
    .desc {{t(label)}}
    .var {{name}}
  .input-group
    text-input.text-input(
      :value="value"
      :line="true"
      :or="or"
      @input="onInput"
      @change="onChange")
    toggle-input.toggle(:value="!!value", @input="toggle")
</template>


<script>
import ToggleInput from './toggle-input'
import TextInput from './text-input'

export default {
  components: {
    ToggleInput,
    TextInput,
  },

  props: {
    value: String,
    or: String,
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

    onChange() {
      this.$emit('change', this.value)
    },

    toggle() {
      this.$emit('toggle')
    },
  },
}
</script>
