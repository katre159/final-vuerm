<script>
import { findForm } from '../utils/form';

export default {
  name: 'Field',
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    name: {
      type: String,
      required: true
    },
    subscriptions: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      unregisterField: null,
      fieldState: null,
    };
  },
  created() {
    this.unregisterField = findForm(this).registerField(
      this.name,
      fieldState => {
        this.fieldState = fieldState;
        this.$emit('update', fieldState);
      },
      this.subscriptions,
      this.config
    );
  },
  destroyed() {
    this.unregisterField();
  },
  methods: {
    getAttrs() {
      const attrs = {
        name: this.name,
        type: this.type
      };

      if (this.type === 'checkbox') {
        attrs.checked = this.fieldState.value;
      } else if (this.type === 'radio') {
        attrs.checked = this.fieldState.value === this.value;
        attrs.value = this.value;
      } else {
        attrs.value = this.fieldState.value;
      }

      return attrs;
    },
    handleInput(event) {
      if (this.type === 'checkbox') {
        this.fieldState.change(event.target.checked);
      } else {
        this.fieldState.change(event.target.value || '');
      }
    }
  },
  render(createElement) {
    return createElement(
      'input',
      {
        attrs: this.getAttrs(),
        on: {
          blur: this.fieldState.blur,
          focus: this.fieldState.focus,
          input: this.handleInput
        }
      }
    );
  }
}
</script>