<template>
  <div class="form-input">
    <label :for="name">{{ label }}</label>
    <ValidationProvider :rules="computedValidation">
      <input 
        v-if="inputMask"
        :type="computedInputType" 
        :name="name" 
        :placeholder="computedPlaceholder"
        :value="value"
        :class="{ 'required': isRequired }"
        @input="updateValue" 
        @change="updateValue"
        @blur="$emit('blur')"
        v-model="fieldValue"
        v-validate="computedValidation"
        ref="input"
        v-mask="inputMask"
      />
      <input 
        v-else
        :type="computedInputType" 
        :name="name" 
        :placeholder="computedPlaceholder"
        :value="value"
        :class="{ 'required': isRequired }"
        @input="updateValue" 
        @change="updateValue"
        @blur="$emit('blur')"
        v-model="fieldValue"
        v-validate="computedValidation"
        ref="input"
      />
    </ValidationProvider>
    
    <div class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
import { mapFields, ValidationProvider } from 'vee-validate'

export default {
  name: 'form-input',
  props: {
    type: String,
    name: String,
    validation: String,
    placeholder: String,
    label: String,
    value: {
      type: null,
      default: null
    },
    error: {
      type: String,
      default: null
    },
    mask: [String, Array]
  },
  $_veeValidate: {
    value() {
      return this.$el.value;
    },
    name() {
      return this.name;
    }
  },
  components: {
    ValidationProvider
  },
  data() {
    return {
      fieldValue: null,
      inputTypes: {
        credit_card: {
          validation: 'required|credit_card',
          placeholder: '____.____.____.____',
          type: 'text'
        },
        cvv: {
          validation: 'required|numeric|digits:3',
          placeholder: '___',
          type: 'text'
        },
        validity: {
          validation: 'required|date_format:MM/yyyy',
          placeholder: '__/____',
          type: 'text'
        },
        name: {
          validation: 'required|alpha_spaces',
          type: 'text'
        }
      }
    }
  },
  computed: {
    ...mapFields([ name ]),
    typeData() {
      return this.inputTypes[this.type]
    },
    computedPlaceholder() {
      return this.typeData ? this.typeData.placeholder : this.placeholder
    },
    computedValidation() {
      return this.typeData ? this.typeData.validation : this.validation
    },
    computedInputType() {
      return this.typeData ? this.typeData.type : this.type
    },
    fildToValidate() {
      return this.fields[this.name]
    },
    isTouched() {
      return this.fildToValidate && this.fildToValidate.touched
    },
    isChanged() {
      return this.fildToValidate && this.fildToValidate.changed
    },
    isInvalid() {
      return this.fildToValidate && this.fildToValidate.invalid
    },
    isRequired() {
      return this.isTouched && this.fildToValidate.required && this.fildToValidate.invalid
    },
    errorMessage() {
      if (this.isRequired && !this.isChanged) {
        return 'Este campo é obrigatório'
      }

      if (this.isInvalid && this.isTouched) {
        return 'Valor inválido'
      }
    },
    inputMask() {
      return this.mask || ''
    }
  },
  mounted() {
    this.$refs.input.value = this.value
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
input 
  box-sizing border-box
  height 45px
  width 100%
  border-radius 3px
  background-color #FFF
  border 1px solid #E7E7E7
  box-shadow inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)
  padding 15px 13px 12px 13px
  outline none

  &:focus 
    border 1px solid #A43287

::placeholder 
  color: #E0E7EE;
  opacity: 1; 
  letter-spacing 1.37px
  font-size 16px
  
label 
  font-size 12px
  color #CCC
  line-height 14px
  font-weight bold
  
  + span input 
    margin-top 5px
  
  @media screen and (min-width 1080px)
    font-size 14px
    color #717171

    + span input 
      margin-top 10px
  
.invalid, .required
  border 1px solid red

.error-message 
  font-size 12px
  color #F30
  height 15px
  margin-top 2px
</style>
